import * as React from 'react';
import { getNewsData, getGlobalData } from "../../src/utils/api"
import Menu  from '../../src/components/Menu';
import News from '../../src/containers/News';
import Footer from '../../src/containers/Footer';
import { useRouter } from "next/router"
import Video from '../../src/containers/Video';
import CommonCover from '../../src/components/CommonCover';

import Seo from '../../src/components/Seo';


export default function Index({ global, videoData }) {
  const router = useRouter()
  const navBar = global?.navbar;
  const metadata = {
    metaTitle: 'News Section',
    metaDescription: 'Subscribe, support, and have a heard voice in the development of the games you play.'
  }
  return (
    <>
      <Seo metadata={metadata} />
      {/* <Menu navBar={navBar} /> */}
      <CommonCover title='COVERAGE' subtitle='Like and subscribe for the latest from BGN' newPage />
      <Video videoData={videoData} />
      {/* <Footer /> */}
    </>
  );
}
  
  export async function getStaticProps(context) {
    const { params, locale, locales, defaultLocale, preview = null } = context
  
    const globalLocale = await getGlobalData(locale)
  
    // Fetch pages. Include drafts if preview mode is on
    const videoData = await getNewsData( '/video', locale, preview)
  
    if (videoData == null) {
      // Giving the page no props will trigger a 404 page
      return { props: {} }
    }
  
    // We have the required page data, pass it to the page component
    // const { metadata, localizations } = videoData
    return {
      props: {
        preview,
        videoData: videoData,
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