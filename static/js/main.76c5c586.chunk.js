(this["webpackJsonpkaiju-call-quiz"]=this["webpackJsonpkaiju-call-quiz"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={mainContainer:"app_mainContainer__Az00k",fadein:"app_fadein__3ivk6",bgContainer:"app_bgContainer__1kmWu",mainImage:"app_mainImage__16isZ",titleAnim:"app_titleAnim__1Zutf",slidein:"app_slidein__11ijU"}},,,function(e,t,n){e.exports={mainContainer:"question_mainContainer__2zWHL",slideIn:"question_slideIn__30422",slidein:"question_slidein__2Koh-",slideOut:"question_slideOut__1CHov",slideout:"question_slideout__2-Fpw"}},function(e,t,n){e.exports={mainContainer:"results_mainContainer__2MEn_",answerContainer:"results_answerContainer__1yE1a",correctMark:"results_correctMark__1_tos",incorrectMark:"results_incorrectMark__2zT02"}},,function(e,t,n){e.exports={mainContainer:"answerFeedback_mainContainer__1Mmo3",correct:"answerFeedback_correct___Vf61",incorrect:"answerFeedback_incorrect__20G6-"}},function(e,t,n){e.exports={mainContainer:"audioVisualizer_mainContainer__l5FUn",canvasContainer:"audioVisualizer_canvasContainer__lKg70"}},function(e,t,n){e.exports={mainContainer:"answerPicker_mainContainer__3w0EM",buttonsContainer:"answerPicker_buttonsContainer__3aKIK"}},,,function(e,t,n){e.exports={mainContainer:"image_mainContainer__2i2vm"}},function(e,t,n){e.exports={mainContainer:"curtain_mainContainer__1-l1n",fadein:"curtain_fadein__3V58j"}},function(e,t,n){e.exports={dotSpin:"loading_dotSpin__2A0i2"}},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(15),c=n(3),r=n(4),o=n(7),s=n(2),u=n(5),m=n.n(u),d=n.p+"static/media/angurius.179e951e.mp3",l=n.p+"static/media/gigan-roar.4db57048.mp3",j=n.p+"static/media/247819-eed21ff3-3a39-4790-82fd-870f825ece29.d81b40ec.mp3",b=n.p+"static/media/hedorah-roar.bef0ad62.mp3",p=n.p+"static/media/jetJaguar-roar.1b3c3954.mp3",O=n.p+"static/media/kingCaesar-roar.02d705a8.mp3",f=n.p+"static/media/kong-roar.72911b09.mp3",h=n.p+"static/media/mechagodzilla-roar.2693cb15.mp3",_=n.p+"static/media/minila-roar.2926b2a5.mp3",g=n.p+"static/media/mothra-roar.bae9da7f.mp3",x=n.p+"static/media/muto-roar.a96a67ad.mp3",v=n.p+"static/media/rodan.c8151e66.mp3",C=n.p+"static/media/skullCrawler-roar.1da9749c.mp3",w=[{name:"ANGUIRUS",image:n.p+"static/media/anguirusImage.5c0cd218.png",roar:d},{name:"GIGAN",image:n.p+"static/media/GiganImage.19071d01.webp",roar:l},{name:"GODZILLA",image:n.p+"static/media/godzillaImage.52472000.png",roar:j},{name:"HEDORAH",image:n.p+"static/media/hedorahImage.be184f06.png",roar:b},{name:"JET JAGUAR",image:n.p+"static/media/jetJaguar_image.c97d536d.png",roar:p},{name:"KING CAESAR",image:n.p+"static/media/KingCaesar_image.90b84feb.webp",roar:O},{name:"KONG",image:n.p+"static/media/kong_image.bd76c258.webp",roar:f},{name:"MECHAGODZILLA",image:n.p+"static/media/Mechagodzilla_image.4f440e3a.webp",roar:h},{name:"MINILLA",image:n.p+"static/media/minilla_image.087b27b5.png",roar:_},{name:"MOTHRA",image:n.p+"static/media/mothra_image.805f104f.webp",roar:g},{name:"MUTO",image:n.p+"static/media/muto_image.25c8daba.png",roar:x},{name:"RODAN",image:n.p+"static/media/rodanImage.761ed49c.png",roar:v},{name:"SKULL CRAWLER",image:n.p+"static/media/skullcrawler_image.b4c37ede.png",roar:C}],k=n(8),A=n.n(k),I=n(12),N=n.n(I),S=n(0);function E(e){var t=Object(a.useRef)(new Audio),n=Object(a.useRef)(null),i=Object(a.useRef)(null),c=Object(a.useState)(null),r=Object(s.a)(c,2),o=r[0],u=r[1];return Object(a.useEffect)((function(){o?t.current.play():o||(t.current.pause(),t.current.currentTime=0)}),[o]),Object(a.useEffect)((function(){t.current.src=e.audio,t.current.crossOrigin="anonymous",t.current.onended=function(){u(!1)},u(!1)}),[e]),Object(a.useEffect)((function(){var e=new(window.AudioContext||window.webkitAudioContext),a=e.createMediaElementSource(t.current),c=e.createAnalyser();a.connect(c),c.connect(e.destination),c.fftSize=Math.pow(2,8);var r=c.frequencyBinCount,o=new Uint8Array(r),s=n.current,u=s.getContext("2d"),m=i.current;return function e(){u.clearRect(0,0,s.width,s.height),c.getByteTimeDomainData(o),u.lineWidth=3,u.strokeStyle="red",u.beginPath();for(var t=s.width/r,n=0,a=0;a<r;a++){var i=o[a]/128*s.height/2;0===a?u.moveTo(n,i):u.lineTo(n,i),n+=t}u.stroke(),m=requestAnimationFrame(e)}(),function(){cancelAnimationFrame(m)}}),[]),Object(S.jsxs)("div",{className:N.a.mainContainer,children:[Object(S.jsx)("canvas",{ref:n,className:N.a.canvasContainer}),Object(S.jsx)("button",{onClick:function(){u(!o)},children:o?"STOP":"LISTEN"})]})}function R(e){var t=A.a.slideIn,n=Object(a.useState)(1),i=Object(s.a)(n,2),o=i[0],u=i[1];function m(){return(m=Object(r.a)(Object(c.a)().mark((function t(){var n;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Promise((function(e,t){setTimeout((function(){return e("done!")}),500)})),t.next=3,n;case 3:u(e.questionId);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){m.apply(this,arguments)}()})),"slideIn"===e.animate?t=A.a.slideIn:"slideOut"===e.animate&&(t=A.a.slideOut),Object(S.jsxs)("div",{className:A.a.mainContainer,children:[Object(S.jsx)("div",{className:t,children:Object(S.jsxs)("h2",{children:["ROAR ",o]})}),Object(S.jsx)(E,{audio:e.roar})]})}var y=n(16),T=n.n(y);function M(e){return Object(S.jsx)("div",{className:T.a.mainContainer,children:Object(S.jsx)("img",{src:e.src,alt:e.alt,loading:"lazy"})})}var z=n(13),L=n.n(z);function G(e){var t=Object(o.a)(w),n=Object(a.useState)(0),i=Object(s.a)(n,2),c=i[0],r=i[1];return Object(S.jsxs)("div",{className:L.a.mainContainer,children:[Object(S.jsx)("h2",{children:t[c].name}),Object(S.jsx)(M,{src:t[c].image,alt:t[c].name}),Object(S.jsxs)("div",{className:L.a.buttonsContainer,children:[Object(S.jsx)("div",{children:Object(S.jsx)("button",{onClick:function(){r(0===c?t.length-1:c-1)},children:"<"})}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{onClick:function(){e.handleSelect(c)},children:"SELECT"})}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{onClick:function(){r((c+1)%t.length)},children:">"})})]})]})}var F=n(17),U=n.n(F),H=n(18),q=n.n(H);function K(){return Object(S.jsx)("div",{className:q.a.dotSpin})}function P(e){var t=Object(a.useState)(e.down),n=Object(s.a)(t,2),i=n[0],o=n[1];function u(){return(u=Object(r.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e,t){setTimeout((function(){return e("done!")}),2e3)})),e.next=3,t;case 3:e.sent,o(!i);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),Object(S.jsx)(S.Fragment,{children:i&&Object(S.jsx)("div",{className:U.a.mainContainer,children:Object(S.jsx)(K,{})})})}var J=n(9),D=n.n(J);function W(e){for(var t,n=Object(S.jsx)("div",{className:D.a.correctMark}),a=Object(S.jsx)("div",{className:D.a.incorrectMark}),i=e.score.map((function(e,t){return Object(S.jsxs)("div",{className:D.a.answerContainer,children:[Object(S.jsxs)("h2",{children:["ROAR ",t+1,":"]}),Object(S.jsx)("h2",{children:e.name}),e.correct?n:a]},t)})),c=0,r=0;r<e.score.length;r++)e.score[r].correct&&(c+=1);var o=c/e.score.length;return o<=.5?t="Yikes! Have you watched a Godzilla movie before?":o>.5&&o<.75?t="You can do better than that!":o>.9&&o<1?t="Heh! Not bad.":1===o&&(t="Wow! You killed it!"),Object(S.jsxs)("div",{className:D.a.mainContainer,children:[Object(S.jsxs)("h2",{children:["SCORE: ",c]}),Object(S.jsx)("p",{children:t}),i]})}var Z=n.p+"static/media/monsterIsland.202eb30f.jpg",B=n.p+"static/media/Shimizu_BDPGodzilla_Lg.86c1a8b6.jpg",V=n(11),Y=n.n(V);function Q(e){var t;return"correct"===e.feedback?t=Y.a.correct:"incorrect"===e.feedback&&(t=Y.a.incorrect),Object(S.jsx)("div",{className:Y.a.mainContainer,children:Object(S.jsx)("h1",{className:t,children:e.feedback})})}function X(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],i=t[1],u=Object(a.useState)(w.map((function(e,t){return t}))),d=Object(s.a)(u,2),l=d[0],j=d[1],b=Object(a.useState)(),p=Object(s.a)(b,2),O=p[0],f=p[1],h=Object(a.useState)([]),_=Object(s.a)(h,2),g=_[0],x=_[1],v=Object(a.useState)(!1),C=Object(s.a)(v,2),k=C[0],A=C[1],I=Object(a.useState)(),N=Object(s.a)(I,2),E=N[0],y=N[1],T=Object(a.useCallback)((function(){w.length-l.length!==0&&function(){H.apply(this,arguments)}();var e=Math.floor(Math.random()*(null===l||void 0===l?void 0:l.length)),t=l[e];i(w[t]),j((function(t){return t.filter((function(t,n){return n!==e}))})),f(null)}),[l]);Object(a.useEffect)((function(){var e;n&&null!==O&&((null===(e=w[O])||void 0===e?void 0:e.name)===n.name?(y("correct"),x([].concat(Object(o.a)(g),[{name:n.name,correct:!0}]))):(y("incorrect"),x([].concat(Object(o.a)(g),[{name:n.name,correct:!1}]))),T())}),[O,T,n,g]);var M=Object(a.useState)(m.a.slideIn),z=Object(s.a)(M,2),L=z[0],F=z[1];function U(){return(U=Object(r.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F("slideOut"),t=new Promise((function(e,t){setTimeout((function(){return e("done!")}),1e3)})),e.next=4,t;case 4:F("slideIn");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(r.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),t=new Promise((function(e,t){setTimeout((function(){return e("done!")}),1e3)})),e.next=4,t;case 4:A(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:m.a.mainContainer,children:[Object(S.jsx)("div",{className:m.a.bgContainer,children:Object(S.jsx)("img",{src:Z,alt:"monster island"})}),!n&&l.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(P,{down:!0}),Object(S.jsx)("h1",{className:m.a.titleAnim,children:"KAIJU CALL QUIZ"}),Object(S.jsx)("div",{className:m.a.mainImage,children:Object(S.jsx)("img",{src:B,alt:"Godzilla"})}),Object(S.jsx)("p",{children:"MATCH THE KAIJU WITH THEIR UNIQUE ROAR"}),Object(S.jsx)("button",{type:"button",onClick:T,children:"START"})]}),n||k?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(P,{down:!0}),Object(S.jsx)(R,{text:null===n||void 0===n?void 0:n.name,questionId:w.length-l.length,roar:null===n||void 0===n?void 0:n.roar,animate:L}),Object(S.jsx)(G,{handleSelect:function(e){f(e),function(){U.apply(this,arguments)}()}})]}):Object(S.jsx)(S.Fragment,{}),k&&Object(S.jsx)(Q,{feedback:E}),!n&&0===l.length&&!k&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(P,{down:!0}),Object(S.jsx)(W,{score:g}),Object(S.jsx)("button",{type:"button",onClick:function(){j(w.map((function(e,t){return t}))),x([])},children:"PLAY AGAIN"})]})]})})}var $=document.getElementById("root");Object(i.createRoot)($).render(Object(S.jsx)(X,{}))}],[[28,1,2]]]);
//# sourceMappingURL=main.76c5c586.chunk.js.map