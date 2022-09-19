import * as React from 'react';
import { getNewsData, getGlobalData } from "../../src/utils/api"
import Menu  from '../../src/components/Menu';
import News from '../../src/containers/News';
import Footer from '../../src/containers/Footer';
import { useRouter } from "next/router"
import CommonCover from '../../src/components/CommonCover';
import Seo from '../../src/components/Seo';


export default function Index({ global, newsSection }) {
  const router = useRouter()
  const navBar = global?.navbar;
  const metadata = {
    metaTitle: 'Latest News Coverage | BGN',
    metaDescription: 'Like and subscribe for the latest from BGN'
  }
  return (
    <>
      <Seo metadata={metadata} />
      {/* <Menu navBar={navBar} /> */}
      <CommonCover title='COVERAGE' subtitle='Like and subscribe for the latest from BGN' newPage />
      <News newsSection={newsSection} newsPage />
      {/* <Footer /> */}
    </>
  );
}
  
  export async function getStaticProps(context) {
    const { params, locale, locales, defaultLocale, preview = null } = context
  
    const globalLocale = await getGlobalData(locale)
  
    // Fetch pages. Include drafts if preview mode is on
    const newsData = await getNewsData( '/news?_sort=created_at:desc', locale, preview)
  
    if (newsData == null) {
      // Giving the page no props will trigger a 404 page
      return { props: {} }
    }
  
    // We have the required page data, pass it to the page component
    const { metadata, localizations } = newsData
    return {
      props: {
        preview,
        newsSection: newsData,
        // metadata,
        global: globalLocale,
        // pageContext: {
        //   slug: newsData.slug,
        //   locale: newsData.locale,
        //   locales,
        //   defaultLocale,
        //   localizations,
        // },
      },
    }
}