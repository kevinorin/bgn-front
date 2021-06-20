import ErrorPage from "next/error"
import { getPageData, fetchAPI, getGlobalData } from "../../src/utils/api";
// import Sections from "@/components/sections"
// import Seo from "@/components/elements/seo"
import { useRouter } from "next/router"
// import Layout from "@/components/layout"

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ sections, metadata, preview, global, pageContext }) => {
  const router = useRouter()

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return <ErrorPage statusCode={404} />
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>
  }

  return (
      <Seo metadata={metadata} />
  )
}

export async function getStaticPaths(context) {
  // Get all pages from Strapi
  const allPages = context.locales.map(async (locale) => {
    const localePages = await fetchAPI(`/pages?_locale=${locale}`)
    return localePages
  })

  const pages = await (await Promise.all(allPages)).flat()

  const paths = pages.map((page) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !page.slug ? false : page.slug.split("/")

    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale: page.locale,
    }
  })

  return { paths, fallback: true }
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context

  const globalLocale = await getGlobalData(locale)
  const newSlug = { slug: !params.slug ? [""] : params.slug };
  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData(`news/${newSlug.slug[0]}`, locale, preview)

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  // We have the required page data, pass it to the page component
  const { contentSections, metadata, localizations } = pageData

  return {
    props: {
      preview,
      sections: contentSections,
      metadata,
      global: globalLocale,
      pageContext: {
        slug: pageData.slug,
        locale: pageData.locale,
        locales,
        defaultLocale,
        localizations,
      },
    },
  }
}

export default DynamicPage
