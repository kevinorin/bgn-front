export default function BlogStructure(metadata, ostPrograms) {
  console.log('Arun Jha metadata', metadata, ostPrograms)
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": ${metadata.metaTitle},
      "image": [
        ${metadata.shareImage.url}
       ],
      "datePublished": "2015-02-05T08:00:00+08:00",
      "dateModified": "2015-02-05T09:20:00+08:00",
      "author": [{
          "@type": "Person",
          "name": "Jane Doe",
          "url": "http://example.com/profile/janedoe123"
        },{
          "@type": "Person",
          "name": "John Doe",
          "url": "http://example.com/profile/johndoe123"
      }]
    }
  `,
  }
}