const EXTERNAL_DATA_URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/news`;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://bgn.games/</loc>
       <priority>1.00</priority>
     </url>
     <url>
     <loc>https://bgn.games/news</loc>
     <priority>0.80</priority>
     </url>
     <url>
     <loc>https://bgn.games/trailers</loc>
     <priority>0.80</priority>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`https://bgn.games/news${slug}`}</loc>
           <priority>0.80</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;