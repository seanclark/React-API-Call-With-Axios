(this["webpackJsonpapi-call-app"]=this["webpackJsonpapi-call-app"]||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(7),i=n.n(s),o=n(34),r=n(36),j=n.n(r),l=n(121),u=n(113),d=n(118),b=n(120),h=n(10),O=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(1),i=Object(o.a)(s,2),r=i[0],O=i[1],p=Object(c.useState)(1),x=Object(o.a)(p,2),f=x[0],m=x[1];Object(c.useEffect)((function(){j.a.defaults.baseURL="https://jsonplaceholder.typicode.com",j.a.get("/posts/".concat(f)).then((function(e){console.log(e),a(e.data)})).catch((function(e){console.log(e)}))}),[f]);var g=function(){m(r)};return Object(h.jsxs)("div",{children:[Object(h.jsx)(u.a,{container:!0,spacing:2,children:Object(h.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(d.a,{autoComplete:"off",name:"enter",variant:"outlined",required:!0,fullWidth:!0,id:"enter",label:"Enter 1-100",autoFocus:!0,type:"text",value:r,onChange:function(e){O(e.target.value)},onKeyPress:function(e){13===e.keycode&&g()}})})}),Object(h.jsx)(b.a,{m:1,p:2,children:Object(h.jsx)(l.a,{className:"buttonstyle",type:"submit",onClick:g,variant:"contained",color:"primary",children:"Find Post"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Title"}),n.title,Object(h.jsx)("h2",{children:"Post"}),n.body]})]})},p=n(116),x=n(117);var f=function(){return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)(p.a,{}),Object(h.jsxs)(x.a,{maxWidth:"sm",children:[Object(h.jsx)("h1",{children:"POST SEARCH"}),Object(h.jsx)(O,{})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),m()}},[[81,1,2]]]);
//# sourceMappingURL=main.c5252530.chunk.js.map