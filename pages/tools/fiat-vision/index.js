import * as React from 'react';

import Seo from '../../../src/components/Seo';
import { getGlobalData } from '../../../src/utils/api';


export default function Index() {
  const metadata = {
    metaTitle: 'Fiat Vision',
    metaDescription: 'Subscribe, support, and have a heard voice in the development of the games you play.'
  }
  return (
    <>
      <Seo metadata={metadata} />
    </>
  );
}
  
  export async function getStaticProps(context) {
    const { params, locale, locales, defaultLocale, preview = null } = context
  
    const globalLocale = await getGlobalData(locale)
  
    // Fetch pages. Include drafts if preview mode is on
  
    if (globalLocale == null) {
      // Giving the page no props will trigger a 404 page
      return { props: {} }
    }
  
    return {
      props: {
        preview,
        global: globalLocale,
      },
    }
}