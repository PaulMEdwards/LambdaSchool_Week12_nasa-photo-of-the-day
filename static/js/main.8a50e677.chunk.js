(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),c=a(17),l=a.n(c),r=(a(58),a(35)),i=a.n(r),s=a(48),d=a(37),u=a(49),m=a.n(u),g=a(52),h=a.n(g),p=function(e){var t=e.data;return console.log("props: ",e),console.log("data: ",t),console.log("data.media_type: ",t.media_type),"image"===t.media_type&&(document.body.style.background="url('".concat(t.hdurl,"') no-repeat center center fixed"),document.body.style.backgroundColor="black",document.body.style.backgroundSize="cover",document.body.style.transition="all .5s cubic-bezier(0.6, -0.28, 0.735, 0.045)",document.body.style.height="100vh",document.body.style.overflow="hidden"),o.a.createElement(o.a.Fragment,null,"video"===t.media_type?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"backgroundMedia"},o.a.createElement("iframe",{title:"background",frameBorder:"0",height:"100%",width:"100%",src:t.url+"&autoplay=1&controls=0&showinfo=0&autohide=1&wmode=transparent&hd=1"})),o.a.createElement("div",null)):o.a.createElement("div",null))},y=(a(123),a(124),"https://api.nasa.gov/planetary/apod?api_key="),w="atTa4ZcvFAWk5OejsYxGG7fnPhdzwOIBEfxe7qhj";var f=function(){var e=Object(n.useState)(new Date),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),r=Object(d.a)(l,2),u=r[0],g=r[1];return Object(n.useEffect)(function(){function e(){return(e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(y).concat(w,"&date=").concat(b(t))).then(function(e){console.log("d.data: ",e.data),g(e.data)}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(a)},[a]),o.a.createElement("div",{className:"App centerWidth"},o.a.createElement("div",{className:"hideButton glowText",onClick:function(){return function(){for(var e=document.getElementsByClassName("toggle"),t=e.length,a=0;a<t;a++)e[a].classList.toggle("hide");var n=document.getElementsByClassName("hideButton")[0],o=n.getAttribute("title"),c=n.textContent;e[0].classList.contains("hide")?(o="Show text",c="+"):(o="Hide text",c="x"),n.setAttribute("title",o),n.textContent=c}()},title:"Hide text",accessKey:"h"},"x"),o.a.createElement("div",null,o.a.createElement("h1",{className:"title glowText toggle"},"NASA Astronomy Picture of the Day"),o.a.createElement("button",{className:"dateArrow glowText toggle",onClick:function(){return c(new Date(a.setDate(a.getDate()-1)))}},"<"),o.a.createElement(m.a,{className:"datePicker glowText toggle",selected:a,onChange:function(e){return c(e)},todayButton:"Today",maxDate:new Date,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",dateFormat:"yyyy/MM/dd"}),o.a.createElement("button",{className:"dateArrow glowText toggle",onClick:function(){return c(new Date(a.setDate(a.getDate()+1)))}},">"),o.a.createElement("br",null),o.a.createElement(p,{data:u}),o.a.createElement("div",{className:"footer centerWidth toggle"},o.a.createElement("h2",{className:"glowText"},u.title),o.a.createElement("h4",{className:"glowText"},u.explanation),u.copyright&&o.a.createElement("h5",{className:"glowText"},"\xa9 ",u.copyright))))};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",a=new Date(e),n=""+(a.getMonth()+1),o=""+a.getDate(),c=a.getFullYear();return n.length<2&&(n="0"+n),o.length<2&&(o="0"+o),[c,n,o].join(t)}l.a.render(o.a.createElement(f,null),document.getElementById("root"))},53:function(e,t,a){e.exports=a(128)},58:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.8a50e677.chunk.js.map