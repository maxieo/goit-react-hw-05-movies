"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[279],{279:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,o,a,i,s,c,u=t(885),d=t(791),p=t(689),l=t(256),h=t(766),f=t(168),g=t(444),x=g.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  margin: 0 auto;\n"]))),w=g.ZP.div(o||(o=(0,f.Z)(["\n  margin-right: 70px;\n"]))),v=g.ZP.img(a||(a=(0,f.Z)(["\n  width: 500px;\n  height: 700px;\n"]))),A=g.ZP.div(i||(i=(0,f.Z)(["\n  font-style: inherit;\n  font-size: 20px;\n"]))),j=t(184),B=function(n){var e=n.poster_path,t=n.original_title,r=n.release_date,o=n.genres,a=n.overview,i=n.vote_average,s="https://image.tmdb.org/t/p/w500/".concat(e);return(0,j.jsxs)(x,{children:[(0,j.jsx)(w,{children:(0,j.jsx)(v,{src:e?s:h,alt:t})}),(0,j.jsxs)(A,{children:[(0,j.jsxs)("h2",{children:[t," (",r.slice(.4),")"]}),(0,j.jsxs)("p",{children:["User Rating: ",10*i.toFixed(1),"%"]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:a})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:o.map((function(n){return n.name+" "}))})]})]})]})},R=t(731),k=g.ZP.div(s||(s=(0,f.Z)(["\n  margin: 20px 20px 20px 0;\n"]))),U=(0,g.ZP)(R.OL)(c||(c=(0,f.Z)(["\n  width: 150px;\n  margin-right: 10px;\n  font-size: 15px;\n  padding: 10px 20px;\n  text-align: center;\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  &:hover,\n  &:focus {\n    background-color: indigo;\n    color: white;\n  }\n"]))),m=t(457),b=function(){var n,e,t,r,o,a,i,s,c,h,f=(0,d.useState)({}),g=(0,u.Z)(f,2),x=g[0],w=g[1],v=(0,p.UO)().movieId,A=(0,p.TH)();return(0,d.useEffect)((function(){v&&(0,l.hG)(v).then((function(n){var e=n.id,t=n.poster_path,r=n.original_title,o=n.release_date,a=n.genres,i=n.overview,s=n.vote_average;w({id:e,poster_path:t,original_title:r,release_date:o,genres:a,overview:i,vote_average:s})}))}),[v]),(0,j.jsxs)(m.$0,{children:[(0,j.jsx)(k,{children:(0,j.jsx)(U,{to:null!==(n=null===(e=A.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go Back"})}),x.id&&(0,j.jsx)(B,{poster_path:x.poster_path,original_title:null!==(t=x.original_title)&&void 0!==t?t:"none",release_date:x.release_date,genres:null!==(r=x.genres)&&void 0!==r?r:[{id:1,name:"none"}],overview:null!==(o=x.overview)&&void 0!==o?o:"none",vote_average:null!==(a=x.vote_average)&&void 0!==a?a:0}),(0,j.jsxs)(k,{children:[(0,j.jsx)(U,{to:"cast",state:{from:null!==(i=null===(s=A.state)||void 0===s?void 0:s.from)&&void 0!==i?i:"/"},children:"Cast"}),(0,j.jsx)(U,{to:"reviews",state:{from:null!==(c=null===(h=A.state)||void 0===h?void 0:h.from)&&void 0!==c?c:"/"},children:"Reviews"})]}),(0,j.jsx)(p.j3,{})]})}},457:function(n,e,t){t.d(e,{$0:function(){return d},Fy:function(){return l},QZ:function(){return h},aV:function(){return f},l0:function(){return p}});var r,o,a,i,s,c=t(168),u=t(444),d=u.ZP.section(r||(r=(0,c.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 30px;\n"]))),p=u.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),l=u.ZP.input(a||(a=(0,c.Z)(["\n  width: 400px;\n  border: 1px solid black;\n  padding: 15px;\n"]))),h=u.ZP.button(i||(i=(0,c.Z)(["\n  width: 49px;\n  height: 48px;\n  cursor: pointer;\n  outline: none;\n"]))),f=u.ZP.li(s||(s=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 30px;\n  margin: 0 auto;\n"])))},256:function(n,e,t){t.d(e,{Cm:function(){return x},IO:function(){return c},TW:function(){return f},hG:function(){return l},z1:function(){return d}});var r=t(861),o=t(757),a=t.n(o),i=t(44),s="8b24d8a82e8cb21a2008ced4781976cc";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){var e,t,r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(s),n.next=3,i.ZP.get(e);case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.next=9,r.results;case 9:return o=n.sent,n.abrupt("return",o);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(e){var t,r,o,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n.next=3,i.ZP.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return o=n.sent,n.next=9,o.results;case 9:return c=n.sent,n.abrupt("return",{filmList:c,data:o});case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t,r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),n.next=3,i.ZP.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return o=n.sent,n.abrupt("return",o);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){var t,r,o,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.next=3,i.ZP.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return o=n.sent,n.next=9,o.cast;case 9:return c=n.sent,n.abrupt("return",c);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(e){var t,r,o,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),n.next=3,i.ZP.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return o=n.sent,n.next=9,o.results;case 9:return c=n.sent,n.abrupt("return",c);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},766:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=279.3eaf4301.chunk.js.map