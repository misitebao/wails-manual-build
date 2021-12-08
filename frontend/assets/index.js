import{c as y,r as w,w as H,a as g,o as d,b as p,d as l,e as m,f as _,F as b,g as L,t as c,h,n as C,i as W,j as O,k as V,l as M}from"./vendor.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};A();const E={home:"\u4E3B\u9875",about:"\u5173\u4E8E"},P={en:"English","zh-Hans":"\u7B80\u4F53\u4E2D\u6587",fr:"Fran\xE7ais"},S={minimise:"\u6700\u5C0F\u5316",quit:"\u9000\u51FA"},j={welcome:"\u6B22\u8FCE\u4F7F\u7528\u57FA\u4E8EVue\u5F00\u53D1\u7684Wails\u7A0B\u5E8F","getting-started":"\u65B0\u624B\u5165\u95E8","star-me":"\u7ED9\u6211\u70B9\u661F"},q={title:"Wails Template Vue","project-repository":"\u9879\u76EE\u4ED3\u5E93",author:"\u4F5C\u8005",misitebao:"\u7C73\u53F8\u7279\u5305","wails-repository":"Wails \u4ED3\u5E93",thanks:"\u611F\u8C22\u5404\u4F4D\u5927\u4F6C\u7684\u652F\u6301\u{1F64F}\uFF01"},z={"not-supported":"\u7531\u4E8E\u662F\u6D4B\u8BD5\u7248\uFF0C\u6240\u4EE5\u6682\u65F6\u505A\u4E0D\u4E86\uFF0C\u540E\u7EED\u4F1A\u5B8C\u6210\u5B83\u3002","click-link":"\u5F53\u524D\u70B9\u51FB\u7684\u94FE\u63A5\u662F: "};var Q={nav:E,languages:P,topbar:S,homepage:j,aboutpage:q,global:z};const R={home:"Home",about:"About"},T={en:"English","zh-Hans":"\u7B80\u4F53\u4E2D\u6587",fr:"Fran\xE7ais"},B={minimise:"Minimise",quit:"Quit"},F={welcome:"Welcome to use Wails program developed based on Vue","getting-started":"Getting Started","star-me":"Star Me"},N={title:"Wails Template Vue","project-repository":"Project Repository",author:"Author",misitebao:"Misitebao","wails-repository":"Wails Repository",thanks:"Thank you all for your support\u{1F64F}!"},x={"not-supported":"Because it is a beta version, it can't be done for the time being, it will be completed later.","click-link":"The currently clicked link is: "};var I={nav:R,languages:T,topbar:B,homepage:F,aboutpage:N,global:x};const D={home:"Page d'accueil",about:"\xC0 propos"},G={en:"English","zh-Hans":"\u7B80\u4F53\u4E2D\u6587",fr:"Fran\xE7ais"},K={minimise:"Minimiser",quit:"Quitter"},U={welcome:"Bienvenue \xE0 utiliser le programme Wails d\xE9velopp\xE9 sur la base de Vue","getting-started":"Commencer","star-me":"\xC9toile moi"},J={title:"Wails Template Vue","project-repository":"R\xE9f\xE9rentiel de projets",author:"Auteur",misitebao:"Misitebao","wails-repository":"Wails D\xE9p\xF4t",thanks:"Merci \xE0 tous pour votre soutien\u{1F64F}!"},X={"not-supported":"Parce qu'il s'agit d'une version b\xEAta, cela ne peut pas \xEAtre fait pour le moment, il sera compl\xE9t\xE9 plus tard.","click-link":"Le lien actuellement cliqu\xE9 est: "};var Y={nav:D,languages:G,topbar:K,homepage:U,aboutpage:J,global:X};const f=y({locale:"en",fallbackLocale:"en",messages:{"zh-Hans":Q,en:I,fr:Y}});var v=(n,t)=>{for(const[r,e]of t)n[r]=e;return n};const Z={setup(){const n=f.global.availableLocales,t=w("zh-Hans");t.value=f.global.locale;const r=s=>{s!==t.value&&(t.value=s)};return H(t,(s,a)=>{f.global.locale=s}),{languages:n,locale:t,onclickLanguageHandle:r,onclickMinimise:()=>{window.runtime.WindowMinimise()},onclickQuit:()=>{window.runtime.Quit()}}}},ee={class:"header","data-wails-drag":""},te={class:"nav","data-wails-no-drag":""},oe={class:"menu","data-wails-no-drag":""},ne={class:"language"},se=["onClick"],ae={class:"bar"},re={class:"view"};function ie(n,t,r,e,o,s){const a=g("router-link"),u=g("router-view");return d(),p(b,null,[l("div",ee,[l("div",te,[m(a,{to:"/"},{default:_(()=>[h(c(n.$t("nav.home")),1)]),_:1}),m(a,{to:"/about"},{default:_(()=>[h(c(n.$t("nav.about")),1)]),_:1})]),l("div",oe,[l("div",ne,[(d(!0),p(b,null,L(e.languages,i=>(d(),p("div",{key:i,class:C([{active:i===e.locale},"lang-item"]),onClick:Oe=>e.onclickLanguageHandle(i)},c(n.$t("languages."+i)),11,se))),128))]),l("div",ae,[l("div",{class:"bar-btn",onClick:t[0]||(t[0]=(...i)=>e.onclickMinimise&&e.onclickMinimise(...i))},c(n.$t("topbar.minimise")),1),l("div",{class:"bar-btn",onClick:t[1]||(t[1]=(...i)=>e.onclickQuit&&e.onclickQuit(...i))},c(n.$t("topbar.quit")),1)])])]),l("div",re,[m(u)])],64)}var le=v(Z,[["render",ie]]);const ce="modulepreload",k={},ue="/",de=function(t,r){return!r||r.length===0?t():Promise.all(r.map(e=>{if(e=`${ue}${e}`,e in k)return;k[e]=!0;const o=e.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":ce,o||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),o)return new Promise((u,i)=>{a.addEventListener("load",u),a.addEventListener("error",i)})})).then(()=>t())};const pe={name:"HelloWorld",props:{msg:String}},me=["textContent"];function ge(n,t,r,e,o,s){return d(),p("div",{class:"hello-world",textContent:c(r.msg)},null,8,me)}var _e=v(pe,[["render",ge],["__scopeId","data-v-295d467f"]]),he="/assets/logo.png";const fe={name:"Home",components:{HelloWorld:_e},setup(){return{}}},ve={class:"home"},be=l("img",{class:"logo",alt:"Vue logo",src:he},null,-1),ke={class:"link"};function $e(n,t,r,e,o,s){const a=g("HelloWorld"),u=g("OpenLink");return d(),p("div",ve,[be,m(a,{msg:n.$t("homepage.welcome")},null,8,["msg"]),l("div",ke,[m(u,{href:"https://wails.io/docs/gettingstarted/installation",class:"btn start"},{default:_(()=>[h(c(n.$t("homepage.getting-started")),1)]),_:1}),m(u,{href:"https://github.com/misitebao/wails-template-vue",class:"btn star"},{default:_(()=>[h(c(n.$t("homepage.star-me")),1)]),_:1})])])}var ye=v(fe,[["render",$e]]);const we=[{path:"/",name:"Home",component:ye},{path:"/about",name:"About",component:function(){return de(()=>import("./About.js"),["assets/About.js","assets/About.css","assets/vendor.js"])}}],He=W({history:O(),routes:we});const Le={name:"OpenLink",props:{href:String},setup(n){return{onClickhandle:()=>{window.runtime.BrowserOpenURL(n.href)}}}};function Ce(n,t,r,e,o,s){return d(),p("span",{class:"openlink",onClick:t[0]||(t[0]=(...a)=>e.onClickhandle&&e.onClickhandle(...a))},[V(n.$slots,"default")])}var $=v(Le,[["render",Ce]]),We={install(n){n.component($.name,$)}};M(le).use(He).use(f).use(We).mount("#app");export{v as _};