if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/118.1ba09254ddcff940.js",revision:"1ba09254ddcff940"},{url:"/_next/static/chunks/153-97441f6c84ee3558.js",revision:"97441f6c84ee3558"},{url:"/_next/static/chunks/36d2f571-0e9821c248a205dc.js",revision:"0e9821c248a205dc"},{url:"/_next/static/chunks/3a17f596-c865ee9d94762ca1.js",revision:"c865ee9d94762ca1"},{url:"/_next/static/chunks/408-0a6d6acc6ec0c6d8.js",revision:"0a6d6acc6ec0c6d8"},{url:"/_next/static/chunks/430-87793b49afbba982.js",revision:"87793b49afbba982"},{url:"/_next/static/chunks/503.a73a0b7c3451556a.js",revision:"a73a0b7c3451556a"},{url:"/_next/static/chunks/570.e9cc51491173e8dc.js",revision:"e9cc51491173e8dc"},{url:"/_next/static/chunks/57c9cdab-6aa3765293a5e039.js",revision:"6aa3765293a5e039"},{url:"/_next/static/chunks/69480c19-f97cc1ae0735bb8c.js",revision:"f97cc1ae0735bb8c"},{url:"/_next/static/chunks/94726e6d-c4cbb5dcf369a3dc.js",revision:"c4cbb5dcf369a3dc"},{url:"/_next/static/chunks/990-02363cf4e812dc68.js",revision:"02363cf4e812dc68"},{url:"/_next/static/chunks/cb355538-480b7393740c9c7c.js",revision:"480b7393740c9c7c"},{url:"/_next/static/chunks/dadd2f00.95b420f0c8e2a481.js",revision:"95b420f0c8e2a481"},{url:"/_next/static/chunks/e02aaf40.276bf2f5028cefa0.js",revision:"276bf2f5028cefa0"},{url:"/_next/static/chunks/e21e5bbe-f6d91dbbd766e3fa.js",revision:"f6d91dbbd766e3fa"},{url:"/_next/static/chunks/fb7d5399-5a532a818777a216.js",revision:"5a532a818777a216"},{url:"/_next/static/chunks/framework-68af0e14243e86ef.js",revision:"68af0e14243e86ef"},{url:"/_next/static/chunks/main-968f69737da49eb6.js",revision:"968f69737da49eb6"},{url:"/_next/static/chunks/pages/404-737eb9e2ef71ab6b.js",revision:"737eb9e2ef71ab6b"},{url:"/_next/static/chunks/pages/_app-88373bf6343a240f.js",revision:"88373bf6343a240f"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/contact-c168ab145f4eea2e.js",revision:"c168ab145f4eea2e"},{url:"/_next/static/chunks/pages/index-9da399ddae419112.js",revision:"9da399ddae419112"},{url:"/_next/static/chunks/pages/services-1dafe5c2b1eb0b99.js",revision:"1dafe5c2b1eb0b99"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8addbeaa4ef323bb.js",revision:"8addbeaa4ef323bb"},{url:"/_next/static/css/a1498fe64ef75ead.css",revision:"a1498fe64ef75ead"},{url:"/_next/static/hwA1AmZcXMwO2COPGzDo1/_buildManifest.js",revision:"180675ca3e365cda1a7a0b7d560692f9"},{url:"/_next/static/hwA1AmZcXMwO2COPGzDo1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/34dd45dcdd6d47ee-s.woff2",revision:"4061e1fa6aa9a45d49aa1737d2826560"},{url:"/_next/static/media/86fdec36ddd9097e-s.p.woff2",revision:"1a5f20725a57243f64429b25b5f24075"},{url:"/_next/static/media/9e58c89b9633dcad-s.woff2",revision:"566f7796dca987bfa0ca16389bbcfb4d"},{url:"/_next/static/media/a1ab2e69d2f53384-s.woff2",revision:"c73422f422632560946874b11671ded7"},{url:"/_next/static/media/c4a41ea065a0023c-s.woff2",revision:"06e8ee29490189c118050515c65e7d20"},{url:"/_next/static/media/de2ba2ebf355004e-s.woff2",revision:"207eff257cb1b3c0007a30cda723a750"},{url:"/android-chrome-192x192.png",revision:"6f4c7c2601b822917afb3d6374f7111c"},{url:"/android-chrome-512x512.png",revision:"a4901eced4ca29b1cb9176596fa40aa2"},{url:"/apple-touch-icon.png",revision:"1d242246782e06ddfe1a009474413b1f"},{url:"/assets/tsrun.svg",revision:"7760a82fd35c879c1f0cda63baf647f1"},{url:"/browserconfig.xml",revision:"91489e9cf4a8c2844bc3dd24cb20e66a"},{url:"/favicon-16x16.png",revision:"501c7c5f480aac4735541d284af6d64c"},{url:"/favicon-32x32.png",revision:"0e58f93e0e7c29bfcb0f2876bb122825"},{url:"/favicon.ico",revision:"d7397ec05f7536d1b107efa0de110fb9"},{url:"/files/tarun_resume_dev.pdf",revision:"b79fba97011d5731ad0d46ba384b28e1"},{url:"/manifest.json",revision:"0b148e0274cbc271a609cb931a9d3daf"},{url:"/mstile-150x150.png",revision:"97016ef00d239644960239c20be7535c"},{url:"/safari-pinned-tab.svg",revision:"37dbbb405992e071e8d5695ef125b801"},{url:"/screenshot-desktop.png",revision:"69e53c91d06b5515c86f7a3db21967c5"},{url:"/screenshot-mobile.png",revision:"02250d0f5693bf14c91fec72e3bda7b4"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
