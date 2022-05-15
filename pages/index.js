import * as React from 'react';
import { getPageData, getNewsData, getGlobalData } from "../src/utils/api"
import Header from '../src/containers/Header';
import Menu  from '../src/components/Menu';
import Tournaments from '../src/containers/Tournaments';
import News from '../src/containers/News';
import Video from '../src/containers/Video';
import Support from '../src/containers/Support';
import Footer from '../src/containers/Footer';
import Patreon from '../src/containers/Patreon';
import { useRouter } from "next/router"
import Seo from '../src/components/Seo';


export default function Index({ sections, metadata, preview, global, newsSection, tournamentsData, videoData, logos }) {
  const router = useRouter()
  const cover  = sections && sections[0];
  const navBar = global?.navbar;
  return (
    <>
      <Seo metadata={metadata} />
      {/* <Menu navBar={navBar} /> */}
      <Header navBar={navBar} cover={cover} logos={logos} />
      <Tournaments tournamentsData={tournamentsData} />
      <News newsSection={newsSection} />
      <Video videoData={videoData} />
      {/* <Patreon /> */}
      {/* <Support /> */}
      {/* <Footer /> */}
    </>
  );
}
  
  export async function getStaticProps(context) {
    const { params, locale, locales, defaultLocale, preview = null } = context
  
    const globalLocale = await getGlobalData(locale)
  
    // Fetch pages. Include drafts if preview mode is on
    const newsData = await getNewsData( '/news?_sort=created_at:desc', locale, preview)

    // Fetch pages. Include drafts if preview mode is on
    const pageData = await getPageData( '/', locale, preview)

    // Fetch pages. Include drafts if preview mode is on
    const tournamentsData = await getNewsData( '/tournaments', locale, preview)

    // Fetch pages. Include drafts if preview mode is on
    const videoData = await getNewsData( '/video', locale, preview)
    
    const logos = await getNewsData( '/logos', locale, preview)
  
  

    if (pageData == null) {
      // Giving the page no props will trigger a 404 page
      return { props: {} }
    }
  
    // We have the required page data, pass it to the page component
    const { contentSections, metadata, localizations } = pageData
    // const { contentSections, metadata, localizations } = newsData
    return {
      props: {
        preview,
        sections: contentSections,
        newsSection: newsData,
        tournamentsData: tournamentsData,
        videoData: videoData,
        metadata,
        global: globalLocale,
        logos: logos,
      },
    }
}