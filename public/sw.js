if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JIv7y6Di2BTX6VJBgs5cl/_buildManifest.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/JIv7y6Di2BTX6VJBgs5cl/_ssgManifest.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/111-a02d5f10c78ec5f10939.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/166-322947f82b7b1e502cd0.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/210-b1d6ade091c91aa4d362.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/227-bfa537dfdd4b1f58867f.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/748-a7e71b7ae47f68108876.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/75fc9c18-ba4bdb366cbba6dfcf56.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/framework-2f612445bd50b211f15a.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/main-f7d64a3584eff6093119.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/_app-c5e3be588c36895c0f4f.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/_error-70375524866f704e88d0.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/index-47db7f26a295a61a04b6.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/join-bgn-791dfe96b27da0022fb7.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/login-7ed6084f9f6f71fd31be.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/news-a9d7e588cb0e19792bc5.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/news/%5Bslug%5D-a539f89987c0c310a02d.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/sitemap.xml-bcdb2a0a709c340210ca.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/pages/trailers-a135373fb2b030d0daee.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/polyfills-e7a279300235e161e32a.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/chunks/webpack-c7daf61c6f22b6f3bc19.js",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/images/Mage-Character-Color-afc12cc6ab763165f1dfa5fe604613f7.png",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/images/login-bcc726aae5bb32a69d968ea5369c7c66.jpg",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/images/mqdefault-f30b184f92f8e92a0612bb9f809d3c5f.png",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/_next/static/images/patreon-bed7772b1843a80b8b96fccdcfc43649.png",revision:"JIv7y6Di2BTX6VJBgs5cl"},{url:"/logo/favicon.ico",revision:"a8153c5c71491ac20c28812f821dec18"},{url:"/logo/favicon.ico.png",revision:"2f32accbb92d063e52f3de2d58172baf"},{url:"/logo/icon-128.png",revision:"b9d25219fc764a8557cd0c6073970557"},{url:"/logo/icon-144.png",revision:"fee9cab118b810f855cb8f8daebd55ed"},{url:"/logo/icon-152.png",revision:"cacd1a77e13292645534226db07f3cbb"},{url:"/logo/icon-192.png",revision:"ff7a73ec1f3da88b67a0e2800b1d2c0b"},{url:"/logo/icon-384.png",revision:"d518837ae9fb3a5433a97b145e875431"},{url:"/logo/icon-512.png",revision:"7a6a0ee7da6520366315e871f570cb14"},{url:"/logo/icon-72.png",revision:"834aff1f95f52a84cc4c86c982d1f1c8"},{url:"/logo/icon-96.png",revision:"b69876c66fb3d15beac331b9e65b9d49"},{url:"/logo/logo.png",revision:"d61950957f494246ccec834155acf356"},{url:"/logo/main-logo.png",revision:"b64b40252b5aa157452cecf651a4c57a"},{url:"/manifest.json",revision:"6cf48e66273d58d4c753abc01664d702"},{url:"/old.xml",revision:"abba45288a0b59503a857b062e559e86"},{url:"/style/main.css",revision:"2d6b333af169f8cc89b7c92cac2e1960"},{url:"/style/modal.css",revision:"b4a1b8e7b55ee7b3038747af4eb52625"},{url:"/style/nprogress.css",revision:"35d0546c6b9faee48f504a79ebc82ad4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
