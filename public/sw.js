if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise((async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},a=(a,n)=>{Promise.all(a.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(a)};self.define=(a,s,c)=>{n[a]||(n[a]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+a.slice(1)};return Promise.all(s.map((a=>{switch(a){case"exports":return n;case"module":return t;default:return e(a)}}))).then((e=>{const a=c(...e);return n.default||(n.default=a),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_XpOSLNR-NjnuDEtahdcw/_buildManifest.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/_XpOSLNR-NjnuDEtahdcw/_ssgManifest.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/53a805019b08508e0051953ee5606b7280b8a31d.f448cc7e7ae4e9eaf75d.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/76135da0539ed497114ab760fa8f0c57bb8e48d8.ee2056d27d48d3d79b21.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/92e7a9109f4c6c9d7f29b756bea1f1f8c92e1c36.3524fe7aeb2dca99400a.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/9d14c50640e3a7c20736da6a373f377bea0c51a5.c84fc4a0cfdf19a685f2.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/9f74c9d2631082a0ec56bd3b8650ff330e651322.b6feb4af1e217acdfb16.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/be17ebdb5c099e888a49675bf9e8977a54078e7a.608a38e6ab75d349c575.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/c004165df8e4cb19f0fd990c5f11af1312b98c05.54dddd3d3b3c89f534a5.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/e340570b7a3669a48a2c9904e9a1c8cb89b27729.065b751d32bf8bb830b6.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/framework.f8bd46fc02868c500bda.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/main-4298b4e1be95f1435870.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/pages/_app-3611783130997949e3f1.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/pages/_error-9e255467ccda9f1ec1eb.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/pages/index-d9f3e459b20c42952cd6.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/pages/login-a9bf37abdb071afce3f0.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/pages/news-4903a0d71a42589128d6.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/pages/news/%5B...slug%5D-d3bda79527bc1805ff8a.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/pages/register-7ebbec4284b72b3908ac.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/pages/trailers-ffdb4f791b1a7d9e6bf4.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/polyfills-5ba9c403cc30e4733b64.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/chunks/webpack-147ea3ada7109f6dc0bb.js",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/images/4648-screenshot-2897-2e70bea78c5a0eacad7bb98b5c0ae54e.png",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/images/Mage-Character-Color-afc12cc6ab763165f1dfa5fe604613f7.png",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/images/cover-27b1558050321a23bf46198d3d44510e.png",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/images/gala-games-town-star-6-e923d11f16058036d708c8332c6ec40a.png",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/images/login-bcc726aae5bb32a69d968ea5369c7c66.jpg",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/images/mqdefault-f30b184f92f8e92a0612bb9f809d3c5f.png",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/images/news-cover-09d8ae35c9b1c803983ae55473a1d2bc.jpg",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/_next/static/images/patreon-bed7772b1843a80b8b96fccdcfc43649.png",revision:"_XpOSLNR-NjnuDEtahdcw"},{url:"/logo/icon-128.png",revision:"b9d25219fc764a8557cd0c6073970557"},{url:"/logo/icon-144.png",revision:"fee9cab118b810f855cb8f8daebd55ed"},{url:"/logo/icon-152.png",revision:"cacd1a77e13292645534226db07f3cbb"},{url:"/logo/icon-192.png",revision:"ff7a73ec1f3da88b67a0e2800b1d2c0b"},{url:"/logo/icon-384.png",revision:"d518837ae9fb3a5433a97b145e875431"},{url:"/logo/icon-512.png",revision:"7a6a0ee7da6520366315e871f570cb14"},{url:"/logo/icon-72.png",revision:"834aff1f95f52a84cc4c86c982d1f1c8"},{url:"/logo/icon-96.png",revision:"b69876c66fb3d15beac331b9e65b9d49"},{url:"/logo/logo.png",revision:"d61950957f494246ccec834155acf356"},{url:"/logo/main-logo.png",revision:"b64b40252b5aa157452cecf651a4c57a"},{url:"/manifest.json",revision:"6cf48e66273d58d4c753abc01664d702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
