(this.webpackJsonpprojectmanager=this.webpackJsonpprojectmanager||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/play_icon.2f37b260.png"},14:function(e,t){e.exports={apiKey:"AIzaSyCegqZE7F0G1mKaPgisow98hEWpX_1c-74"}},16:function(e,t,a){e.exports=a(35)},21:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(11),r=a.n(l),i=a(1),o=(a(21),a(12)),s=a.n(o),m=a(7),u=a.n(m),d=a(13),g=function(e){var t=e.detail;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),c.a.createElement("div",null,c.a.createElement("div",{className:"signleVideoTitle"},c.a.createElement("h3",null,t.title)),c.a.createElement("div",{className:"signleVideoTitle"},t.description))):c.a.createElement("div",{className:"no_vid"},"No Videos Found For Your Search"))},v=a(8),E=function(e){var t=e.videoList,a=e.changeSelection,n=e.selectedVideoId;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,t.length>0&&t.map((function(e){var t;if(e.id!==n)return c.a.createElement("div",(t={className:"list-group-item",onClick:function(){return function(e){a(e)}(e)}},Object(v.a)(t,"className","videoList"),Object(v.a)(t,"key",e.id),t),c.a.createElement("div",null,c.a.createElement("img",{src:e.thumbnails.medium.url,height:"80px",alt:"video suggestion"})),c.a.createElement("div",{style:{paddingLeft:"10px"}},c.a.createElement("div",{className:"sugg-title"},c.a.createElement("h5",null,e.title)),c.a.createElement("div",{className:"sugg-channel"},e.channel.title)))}))))},h=a(15),p=a.n(h),f=a(14),b=a.n(f),w=new p.a(b.a.apiKey),y=function(e){var t=e.searchString,a=Object(n.useState)([]),l=Object(i.a)(a,2),r=l[0],o=l[1],s=Object(n.useState)({}),m=Object(i.a)(s,2),v=m[0],h=m[1];Object(n.useEffect)((function(){p()}),[t]);var p=function(){var e=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.searchVideos(t,10);case 2:a=e.sent,h(a[0]),o(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-8"},c.a.createElement(g,{detail:v})),c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4",style:{height:"80vh"}},r.length>0?c.a.createElement("h5",null,"Video suggestions"):c.a.createElement("h5",null," "),c.a.createElement("div",{style:{overflow:"auto",height:"40vh"}},c.a.createElement(E,{videoList:r,changeSelection:function(e){h(e)},selectedVideoId:v.id}))))},N=function(){return c.a.createElement("div",{className:"footer"},"Designed by ",c.a.createElement("span",{className:"smart_pages"},"Smart Pages"))};var S=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),m=o[0],u=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{className:"logo_img",src:s.a,alt:"Smart Play Logo"})," ",c.a.createElement("div",{className:"smart_tube"}," Smart Tube")),c.a.createElement("div",{className:"row"},c.a.createElement("input",{className:"col-sm-10 col-xs-10 col-lg-10 form-control",type:"text",placeholder:"Search videos here...",onChange:function(e){return l(e.target.value)}}),c.a.createElement("button",{className:"col-sm-2 col-xs-2 col-lg-2 btn btn-primary",variant:"primary",size:"lg",onClick:function(){return u(a)}},"Search")),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement(y,{searchString:m}))),c.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d710f85d.chunk.js.map