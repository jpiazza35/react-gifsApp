(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),u=(a(4),a(1)),l=a(10),o=a(8),s=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}))};s.protoTypes={setCategories:a.n(o).a.func.isRequired};var m=function(e){var t=e.id,a=e.title,n=e.url;return console.log(t,a,n),r.a.createElement("div",{className:"card animate__rubberBand"},r.a.createElement("img",{src:n,alt:a}),r.a.createElement("p",null,a))},p=a(5),f=a.n(p),d=a(9),g=function(){var e=Object(d.a)(f.a.mark((function e(t){var a,n,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=0OxrAzAEAQMaV4CdYBMBzN64MMPK6O64"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){g(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),100)}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__rubberBand"},t),i&&r.a.createElement("p",{className:"animate__rubberBand"},"Loading..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},b=function(){var e=Object(n.useState)(["dragon Ball"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h2",{className:"animate__heartBeat"},"GifExpertApp"),r.a.createElement(s,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(E,{key:e,category:e})}))))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.70b5b6fd.chunk.js.map