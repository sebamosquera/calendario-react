(this["webpackJsonpcalendario-react"]=this["webpackJsonpcalendario-react"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(4),r=n.n(i),l=(n(10),n(11),n(2)),d=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],o=["DOMINGO","LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"],j=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],u=Object(a.createContext)({}),h=function(e){var t=e.children,n=new Date,s=(n.getDay(),n.getDate()),i=n.getMonth(),r=n.getFullYear(),h=new Date(r,i,1),O=new Date(r,i+1,0).getDate(),b=h.toLocaleDateString("es-ar",{weekday:"long",day:"numeric",month:"numeric",year:"numeric"}),m=o.indexOf(b.split(", ")[0].toUpperCase()),x=Object(a.useState)(j[i]),v=Object(l.a)(x,2),y=v[0],f=v[1],p=Object(a.useState)(s),N=Object(l.a)(p,2),D=N[0],E=N[1],M=Object(a.useState)("mes"),g=Object(l.a)(M,2),S=g[0],C=g[1];return Object(c.jsx)(u.Provider,{value:{dayNumbers:d,dayNames:o,meses:j,selectedMonth:y,setSelectedMonth:f,setSelectedDay:E,selectedDay:D,changeMonth:function(e){var t=j.indexOf(y);switch(t){case 0:f(1===e?j[1]:j[11]);break;case 11:f(1===e?j[0]:j[10]);break;default:f(j[t+e])}},display:S,setDisplay:C,paddingDays:m,daysInMonth:O,currentDay:s},children:t})},O=function(e){var t=Object(a.useContext)(u),n=(t.selectedDay,t.dayNames),s=new Date;return Object(c.jsx)("div",{className:"day-div",children:!0===e.miniatura?Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:e.value}),Object(c.jsx)("div",{children:"TAREAS"})]}):Object(c.jsxs)("div",{children:["FECHA: ",n[s.getDay()]+" "+s.getDate()]})})},b=(n(12),function(){var e=Object(a.useContext)(u),t=e.setSelectedDay,n=e.setDisplay,s=e.dayNumbers,i=e.dayNames,r=(e.meses,e.selectedMonth),l=(e.setSelectedMonth,e.changeMonth),d=e.paddingDays,o=(e.daysInMonth,e.currentDay),j=i.map((function(e,t){return Object(c.jsx)("li",{className:"month-li",value:e,children:e},t)})),h=s.map((function(e,a){var s=(a+=1)-d;return a>d?Object(c.jsx)("div",{className:"month-day",id:s===o?"currentDay":null,value:s,onClick:function(){t(s),n("dia")},children:Object(c.jsx)(O,{value:s,miniatura:!0})},a):Object(c.jsx)("div",{className:"month-day padding",value:s,onClick:function(){t(s),n("dia")},children:Object(c.jsx)(O,{value:s,miniatura:!0})},a)}));return console.log(h),Object(c.jsxs)("div",{className:"month-container",children:[Object(c.jsxs)("nav",{className:"month-nav",children:[Object(c.jsx)("h1",{children:"HOME"}),Object(c.jsx)("button",{onClick:function(){return l(-1)},children:"<"}),Object(c.jsx)("h1",{children:r}),Object(c.jsx)("button",{onClick:function(){return l(1)},children:">"})]}),Object(c.jsxs)("main",{className:"month-main",children:[Object(c.jsx)("ul",{className:"month-ul",children:j}),Object(c.jsx)("div",{className:"month-days-container",children:h})]})]})}),m=function(){return Object(c.jsx)("div",{children:"Hello from Year component"})},x=function(){var e=Object(a.useContext)(u),t=e.display,n=e.meses;e.selectedMonth,e.setSelectedMonth,n.map((function(e,t){return Object(c.jsx)("div",{className:"month",children:e},t)}));return Object(c.jsx)("main",{className:"app-main",children:"mes"===t?Object(c.jsx)(b,{}):"dia"===t?Object(c.jsx)(O,{}):Object(c.jsx)(m,{})})},v=(n(13),function(){var e=Object(a.useContext)(u),t=e.setDisplay,n=e.meses,s=e.setSelectedMonth,i=n.map((function(e,n){return Object(c.jsx)("li",{className:"nav-li",onClick:function(){s(e),t("mes")},value:e,children:e},n)}));return Object(c.jsx)("nav",{className:"app-nav",children:Object(c.jsx)("ul",{className:"nav-ul",children:i})})});n(14);var y=function(){return Object(c.jsx)("div",{className:"app-container",children:Object(c.jsxs)(h,{children:[Object(c.jsx)(v,{}),Object(c.jsx)("header",{className:"app-header",children:"2020"}),Object(c.jsx)(x,{})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),f()}],[[15,1,2]]]);
//# sourceMappingURL=main.08b2b7d2.chunk.js.map