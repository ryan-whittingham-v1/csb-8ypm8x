(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(4),c=n(2),i=(n(13),[{id:"godzilla",name:"GODZILLA",thumb:"/images/godzilla-1954-png-Transparent-Images.png",roar:"/sounds/godzilla_roar.mp3"},{id:"anguirus",name:"ANGUIRUS",thumb:"/images/16-162890_free-render-for-use-anguirus-1972-toy-hd.png",roar:"/sounds/anguirus_roar.mp3"},{id:"rodan",name:"RODAN",thumb:"/images/rodan_1964_transparent_ver_2_by_jacksondeans_dd3cicy-fullview.png",roar:"/sounds/rodan_1993_roar.mp3"}]),o=n(0);function s(e){return Object(o.jsxs)("div",{children:["Question:",Object(o.jsx)("br",{}),e.text]})}function u(e){return Object(o.jsxs)("div",{children:["Answer",Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:e.imageUrl,alt:e.imageAlt}),Object(o.jsx)("button",{onClick:e.handleForwardClick,children:"Next"})]})}function d(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=t[0],a=t[1],d=Object(r.useState)(0),l=Object(c.a)(d,2),j=l[0],b=l[1],m=Object(r.useState)(i.map((function(e,t){return t}))),g=Object(c.a)(m,2),O=g[0],h=g[1];return Object(o.jsxs)("div",{className:"App",children:[n&&Object(o.jsx)(s,{text:null===n||void 0===n?void 0:n.name}),n&&Object(o.jsx)(u,{imageUrl:i[j].thumb,imageAlt:i[0].name,handleForwardClick:function(){b((j+1)%i.length)}}),Object(o.jsx)("button",{type:"button",onClick:function(){var e=Math.floor(Math.random()*(null===O||void 0===O?void 0:O.length)),t=O[e];a(i[t]),h((function(t){return t.filter((function(t,n){return n!==e}))}))},children:"Start"})]})}var l=document.getElementById("root");Object(a.createRoot)(l).render(Object(o.jsx)(r.StrictMode,{children:Object(o.jsx)(d,{})}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1c88bc08.chunk.js.map