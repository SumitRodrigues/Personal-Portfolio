/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/_next/precache.MFX5D5BBzyY_Z9jYt6fH7.f1743ccd71d6070061c65d5adda8ad4c.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/All-Texts/Icons.txt",
    "revision": "5f41abfd3a04b7fb3c80376acd490e08"
  },
  {
    "url": "/All-Texts/pages.txt",
    "revision": "6081fa5432507a93328a89c64c86c6ae"
  },
  {
    "url": "/All-Texts/prompts.txt",
    "revision": "80f11fa752b785c42323ec8ed2b28b32"
  },
  {
    "url": "/All-Texts/styles.txt",
    "revision": "388ac210fe776c4eda040f618446021e"
  },
  {
    "url": "/dummy.pdf",
    "revision": "2942bfabb3d05332b66eb128e0842cff"
  },
  {
    "url": "/favicon.ico",
    "revision": "c30c7d42707a47a3f4591831641e50dc"
  },
  {
    "url": "/icon512_maskable.png",
    "revision": "34e4ab4658e4106efdc450f821ae0f41"
  },
  {
    "url": "/icon512_rounded.png",
    "revision": "e9aacfb52cb0c588007d253ddedf6b70"
  },
  {
    "url": "/images/articles/create loading screen in react js.jpg",
    "revision": "a698de11194bb7f5d48811af9b18880d"
  },
  {
    "url": "/images/articles/create modal component in react using react portals.png",
    "revision": "cb7838eee0b5c460977ba85a1f6be99a"
  },
  {
    "url": "/images/articles/form validation in reactjs using custom react hook.png",
    "revision": "d891109107dda42286b3dba2fd04d83d"
  },
  {
    "url": "/images/articles/pagination component in reactjs.jpg",
    "revision": "b91ad4ca3b497647ed5362c56cfcbf37"
  },
  {
    "url": "/images/articles/smooth scrolling in reactjs.png",
    "revision": "6e78200ec0ccc15caafe4565cae851a9"
  },
  {
    "url": "/images/articles/todo list app built using react redux and framer motion.png",
    "revision": "1b5cc1d0be682c1606743013014aeb8c"
  },
  {
    "url": "/images/articles/What is higher order component in React.jpg",
    "revision": "aedd6bdbd3b7bfa44432491c7638b78d"
  },
  {
    "url": "/images/articles/What is Redux with easy explanation.png",
    "revision": "f5075133ae44e3e0e3027127165f0e6f"
  },
  {
    "url": "/images/circular_text.png",
    "revision": "c88fee52b17370c4902a2581cd431576"
  },
  {
    "url": "/images/circular-text.png",
    "revision": "2dd75d125938460fee571cb7477bd2e8"
  },
  {
    "url": "/images/profile/developer-pic-1.png",
    "revision": "10d5ef459373c748f2f40cb47e0c0248"
  },
  {
    "url": "/images/profile/developer-pic-2.jpg",
    "revision": "c7e00b313d96b87a230737036b4727a8"
  },
  {
    "url": "/images/profile/developer-pic-3.jpg",
    "revision": "797517fbaaea6e3fbe3298e194462b8d"
  },
  {
    "url": "/images/profile/developer-pic-4.jpg",
    "revision": "f20df1dcc6f6dc18da2eb42b7608ef9b"
  },
  {
    "url": "/images/profile/developer-pic-5.png",
    "revision": "e04b16e0d700c69848025fe8e1e27441"
  },
  {
    "url": "/images/projects/agency-website-cover-image.jpg",
    "revision": "44453c5815c186add6334e3a8dc015eb"
  },
  {
    "url": "/images/projects/ai-summarizer.jpg",
    "revision": "98e5daf5b718a6f0a189eb29a4174e61"
  },
  {
    "url": "/images/projects/Algorithm.jpg",
    "revision": "6f5dcd02aa08e9962def62c865163f63"
  },
  {
    "url": "/images/projects/ArticleBuzz-Project.jpg",
    "revision": "72243e9a89d5d4f8a64cbaba2c48d090"
  },
  {
    "url": "/images/projects/crypto-screener-cover-image.jpg",
    "revision": "1424eff95f4830c16f1aec32f544426c"
  },
  {
    "url": "/images/projects/devdreaming.jpg",
    "revision": "ff3f724a47814b97e7a919292f3ebe97"
  },
  {
    "url": "/images/projects/Evergreen.png",
    "revision": "cc1a1690fd29d59ae1dd97904512dd60"
  },
  {
    "url": "/images/projects/fashion-studio-website.jpg",
    "revision": "c7497db2a00f93bc3cd87fa422cfec4f"
  },
  {
    "url": "/images/projects/Navigation.jpg",
    "revision": "4abee46f680c724fe2b1d1fbb515b8a7"
  },
  {
    "url": "/images/projects/nft-collection-website-cover-image.jpg",
    "revision": "482301a9016a0270e19173af60248b9b"
  },
  {
    "url": "/images/projects/portfolio-cover-image.jpg",
    "revision": "34b05487a8f82e5cf36542a887e82b76"
  },
  {
    "url": "/images/projects/Restaurant.JPG",
    "revision": "baa74bc55a77bb1be5b1520def55fffc"
  },
  {
    "url": "/images/projects/SEO.jpg",
    "revision": "54258acce1ccbb7169f900b317244bb1"
  },
  {
    "url": "/images/projects/Spotify.jpg",
    "revision": "10b2b02f7e3adf0ea72bcaf88e52a626"
  },
  {
    "url": "/images/projects/TourismZilla.jpg",
    "revision": "4943a601911d097dbfba86f58374cd8a"
  },
  {
    "url": "/images/svgs/circular_text.svg",
    "revision": "84f1e24d3f5b96872a4c52b077af5d4e"
  },
  {
    "url": "/images/svgs/CircularText.svg",
    "revision": "9ddc6ef7b8e101534af7eaa7267ceec9"
  },
  {
    "url": "/images/svgs/dribbble-icon.svg",
    "revision": "7f7d9981ea6aee3abee44ca2cdbac91c"
  },
  {
    "url": "/images/svgs/external-link.svg",
    "revision": "f7f13bcfe76247bd8e1cc8b48f96c4af"
  },
  {
    "url": "/images/svgs/leetcode.svg",
    "revision": "fc6ce7c9a2830c4b0836f20e4f1d814c"
  },
  {
    "url": "/images/svgs/linkedin.svg",
    "revision": "2bed3a91c77bbf32fcf9f42562811d21"
  },
  {
    "url": "/images/svgs/logo-github.svg",
    "revision": "3e505ff8004ef104eca825d0cc263a89"
  },
  {
    "url": "/images/svgs/miscellaneous_icons_1.svg",
    "revision": "17995392a9c9d282ed070effb46a15ba"
  },
  {
    "url": "/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg",
    "revision": "ebbe8dc0fcadd6886f58e615c6c1d7ea"
  },
  {
    "url": "/images/svgs/pinterest.svg",
    "revision": "31510c66bf3dbe35db9a2c6246dfffa7"
  },
  {
    "url": "/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg",
    "revision": "7c4d78befaaabc5176171e49167508ee"
  },
  {
    "url": "/images/svgs/twitter.svg",
    "revision": "40994f38eddf3440a55364c3e5303412"
  },
  {
    "url": "/manifest.json",
    "revision": "366640681c5bc8d8174057c5c1fcd902"
  },
  {
    "url": "/next.svg",
    "revision": "8e061864f388b47f33a1c3780831193e"
  },
  {
    "url": "/service-worker.js",
    "revision": "14225636700121ac2e3c5b1e165fdafe"
  },
  {
    "url": "/Sumit_Rodrigues-Resume.pdf",
    "revision": "4d4bea0a24ef96da84006afc29c43270"
  },
  {
    "url": "/thirteen.svg",
    "revision": "53f96b8290673ef9d2895908e69b2f92"
  },
  {
    "url": "/vercel.svg",
    "revision": "61c6b19abff40ea7acd577be818f3976"
  },
  {
    "url": "/workbox-07a7b4f2.js",
    "revision": "e8c19d781258c04d0d77c22cfa6569b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts", plugins: [new workbox.expiration.Plugin({ maxEntries: 4, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i, new workbox.strategies.CacheFirst({ "cacheName":"font-awesome", plugins: [new workbox.expiration.Plugin({ maxEntries: 1, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-font-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-image-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:js)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-js-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:css|less)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-style-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/.*/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"others", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
