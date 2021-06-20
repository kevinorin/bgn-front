import ErrorPage from "next/error"
import { fetchAPI, getPageData, getNewsData, getGlobalData } from "../../src/utils/api"
// import Sections from "@/components/sections"
import Seo from "../../src/components/Seo";
import { useRouter } from "next/router";
import Loader from '../../src/components/Loader';

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
    return <Loader />
  }

  return (
      <>
        <h1>Arun Jha</h1>
        <Seo metadata={metadata} />
      </>
  )
}

export async function getStaticPaths(context) {
  // Get all pages from Strapi
  console.log('Arun Jha context.locales', context.locales);
  const allPages = context.locales.map(async (locale) => {
    const localePages = await fetchAPI(`/news?_locale=${locale}`)
    return localePages
  })

  console.log('Arun Jha allPages', allPages);

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

// export async function getStaticProps(context) {
//   const { params, locale, locales, defaultLocale, preview = null } = context

//   const globalLocale = await getGlobalData(locale)
  
//   // Fetch pages. Include drafts if preview mode is on
//   const newsData = await getNewsData( '/news/', locale, preview)

//   // // Fetch pages. Include drafts if preview mode is on
//   // const pageData = await getPageData(
//   //   { slug: !params.slug ? [""] : params.slug },
//   //   locale,
//   //   preview
//   // )

//   if (newsData == null) {
//     // Giving the page no props will trigger a 404 page
//     return { props: {} }
//   }

//   // We have the required page data, pass it to the page component
//   const { contentSections, metadata, localizations } = newsData

//   return {
//     props: {
//       preview,
//       sections: contentSections,
//       metadata,
//       global: globalLocale,
//       pageContext: {
//         slug: newsData.slug,
//         locale: pageData.locale,
//         locales,
//         defaultLocale,
//         localizations,
//       },
//     },
//   }
// }

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context

  const globalLocale = await getGlobalData(locale)

  const newSlug = { slug: !params.slug ? [""] : params.slug };
  console.log('Arun Jha params', newSlug.slug[0]);

  // Fetch pages. Include drafts if preview mode is on
  const newsData = await getNewsData( `/news/${newSlug.slug[0]}`, locale, preview)

  if (newsData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  // We have the required page data, pass it to the page component
  const { contentSections, metadata, localizations } = newsData
  // const { contentSections, metadata, localizations } = newsData
  return {
    props: {
      preview,
      sections: contentSections,
      metadata,
      global: globalLocale,
      pageContext: {
        slug: newsData.slug,
        locale: newsData.locale,
        locales,
        defaultLocale,
        localizations,
      },
    },
  }
}
export default DynamicPage
