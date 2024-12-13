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
      <div className="text-slate-600 flex text-center py-16 ">
        <div className="max-w-7xl px-6 mx-auto">
          <h1 className="text-sm font-bold uppercase">TempoThreads</h1>
          <h2 className="text-3xl font-bold mb-3">Empowering Artists OnChain</h2>
          <p className="text-xl max-w-3xl">Serving uplifting music and empowering artists with the support they need to treble.</p>
        </div>
      </div>

      <MusicCards />
      {/* <News newsSection={newsSection} tempoThread /> */}
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


