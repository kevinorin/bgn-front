import * as React from 'react';
import TempoThreads from '../../src/containers/TempoThreads';
import CommonCover from '../../src/components/CommonCover';
import Seo from '../../src/components/Seo';
import News from '../../src/containers/News';
import { getNewsData } from '../../src/utils/api';
import MusicCards from '../../src/components/MusicCards';


export default function TempoThread({ newsSection }) {
  const metadata = {
    metaTitle: 'TempoThreads: Empowering Artists in Blockchain Entertainment',
    metaDescription: 'Streaming you uplifting music and empowering artists across genres with the support they need to shine.'
  }
  return (
    <>
      <Seo metadata={metadata} />
      <CommonCover title="TempoThreads: Empowering Artists in Blockchain Entertainment" subtitle="Streaming you uplifting music and empowering artists across genres with the support they need to shine." />
      <MusicCards />
      <News newsSection={newsSection} tempoThread />
      <TempoThreads />
    </>
  );
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context

  // Fetch pages. Include drafts if preview mode is on
  const newsData = await getNewsData( '/news?_sort=created_at:desc', locale, preview)

  if (newsData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }
  return {
    props: {
      preview,
      newsSection: newsData,
    },
  }
}


