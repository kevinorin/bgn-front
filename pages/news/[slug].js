import * as React from 'react';
import Head from 'next/head';
import { getNewsData } from "../../src/utils/api"
import NewsMainPage from '../../src/containers/NewsMainPage';
import { useRouter } from "next/router"
import CommonCover from '../../src/components/CommonCover';
import Seo from '../../src/components/Seo';


export default function Index({ ostPrograms, newsSection }) {
  const router = useRouter()
  const { metadata, contentSections, created_at, structured_data } = ostPrograms[0];
  return (
    <>
    <Head>
    {structured_data && <script type="application/ld+json" key="product-jsonld">{JSON.stringify(structured_data)}</script>}
    </Head>
      <Seo metadata={metadata} />
      <CommonCover title={contentSections[0].title} createdAt={created_at} article />
      <NewsMainPage contentSections={contentSections} createdAt={created_at} newsSection={newsSection} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context

  // Fetch pages. Include drafts if preview mode is on
  const ostPrograms = await getNewsData(`/news?slug=/${params.slug}`)
  const newsData = await getNewsData('/news?_sort=created_at:desc')

  if (ostPrograms == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  return {
    props: {
      ostPrograms: ostPrograms,
      newsSection: newsData
    }
  }
}

export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

