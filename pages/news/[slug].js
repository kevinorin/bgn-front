// import { otherPageData } from "../../utils/api"
// import Article from '../../src/containers/Article';
// import Seo from '../../src/components/Seo'

import { getNewsData, getGlobalData } from "../../src/utils/api"

const NewsEventsPage = ({ pageData }) => {
  return (
    <div>
      {/* <Seo metadata={pageData && pageData[0]?.meta} /> */}
      <h1>Arun Jha</h1>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const pageData = await otherPageData('/news-items');
  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }
  return { props: { pageData } };
}

export async function getStaticPaths() {
  const pageDatas = await otherPageData('/news-items');
  return {
    paths: pageDatas.map((_data) => {
      return {
        params: { slug: _data.slug },
      };
    }),
    fallback: true,
  };
}


export default NewsEventsPage;