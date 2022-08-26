import * as React from 'react';
import { getNewsData, getGlobalData } from "../src/utils/api"
import { useRouter } from "next/router"
import { Hero } from '../src/components/Hero';
import { Richtext } from '../src/components/Richtext';
import Seo from '../src/components/Seo';


export default function Index({ ostPrograms }) {
  const router = useRouter()
  if (!ostPrograms) {
    // router.push('/404')
    return <h1 style={{ textAlign: 'center', marginTop: '8rem', height: '50vh' }}>Page Not Found!</h1>;
  }
  const { metadata, contentSections } = ostPrograms[0];
  return (
    <>
      <Seo metadata={metadata} />
      {
        contentSections && contentSections.map(function (item){
          if (item.__component === 'sections.hero') return <Hero title={item.title} subtitle={item.smallTextWithLink} />
          else if (item.__component === 'sections.rich-text') return <Richtext content={item.content} />
        })
      }
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context

  // Fetch pages. Include drafts if preview mode is on
  const ostPrograms = await getNewsData(`/pages?slug=${params.slug}`)

  if (ostPrograms == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  return {
    props: {
      ostPrograms: ostPrograms
    }
  }
}

export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

