if(!self.define){let e,i={};const r=(r,t)=>(r=new URL(r+".js",t).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(t,u)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let n={};const s=e=>r(e,l),d={module:{uri:l},exports:n,require:s};i[l]=Promise.all(t.map((e=>d[e]||s(e)))).then((e=>(u(...e),n)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-weather-widget"}),self.skipWaiting(),e.precacheAndRoute([{url:"/vue-weather-widget/css/app.bc67959d.css",revision:null},{url:"/vue-weather-widget/img/ash.27c26ef2.jpg",revision:null},{url:"/vue-weather-widget/img/clouds.3407899a.jpg",revision:null},{url:"/vue-weather-widget/img/drizzle.a7c4dc19.jpg",revision:null},{url:"/vue-weather-widget/img/dust.8a4d6123.jpg",revision:null},{url:"/vue-weather-widget/img/fog.83e56d98.jpg",revision:null},{url:"/vue-weather-widget/img/mist.d36026c2.jpg",revision:null},{url:"/vue-weather-widget/img/rain.a0a7b1ae.jpg",revision:null},{url:"/vue-weather-widget/img/sand.1ea0f5f4.jpg",revision:null},{url:"/vue-weather-widget/img/smoke.b7797318.jpg",revision:null},{url:"/vue-weather-widget/img/snow.d3d0f404.jpg",revision:null},{url:"/vue-weather-widget/img/squall.6e78864b.jpg",revision:null},{url:"/vue-weather-widget/img/thunderstorm.62dfe65b.jpg",revision:null},{url:"/vue-weather-widget/img/tornado.f824fe05.jpg",revision:null},{url:"/vue-weather-widget/index.html",revision:"39e1db090f0676f5f917322845b3bcbf"},{url:"/vue-weather-widget/js/app.40e9d186.js",revision:null},{url:"/vue-weather-widget/js/chunk-vendors.638d650b.js",revision:null},{url:"/vue-weather-widget/manifest.json",revision:"ef46ef447f93b8a1884a2ba80dd6a58e"},{url:"/vue-weather-widget/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
