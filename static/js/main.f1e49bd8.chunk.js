(this["webpackJsonptest-project"]=this["webpackJsonptest-project"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},45:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(17),i=n.n(r),o=(n(33),n(8)),s=n(9),l=n(11),u=n(10),d=(n(34),n(35),n(12)),h=n(1),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={catsPage:!0},t.opacityHandler=function(e){"cats"===e?t.setState({catsPage:!0}):t.setState({catsPage:!1})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(d.b,{to:"/",onClick:function(){return t.opacityHandler("cats")},className:this.state.catsPage?"header__link":"header__link header__opacity",children:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"}),Object(h.jsx)(d.b,{to:"/favorites",onClick:function(){return t.opacityHandler("favorite cats")},className:this.state.catsPage?"header__link header__opacity":"header__link",children:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})]})}}]),n}(c.a.Component),f=n(23),v=n.n(f),p=n(16),b=n(26),O=(n(45),n(18)),C={favoriteCats:[]};var m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD CAT IN FAVORITES":return{favoriteCats:[].concat(Object(p.a)(t.favoriteCats),[e.payload.cat])};case"DELETE CAT":var n=t.favoriteCats.filter((function(t){return t.id!==e.payload.cat.id}));return{favoriteCats:n};default:return t}},x=Object(O.b)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),w=n(14),g=(n(48),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("img",{src:this.props.url,className:"img",alt:"Cat"})})}}]),n}(c.a.Component)),y=0,_="api_key=23e83fc7-a78b-4306-b286-3496593e575d",E=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={cats:[]},t.infiniteScroll=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&t.loadMoreCatsHandler()},t.getCatsFunction=function(){try{(function(){var e=Object(b.a)(v.a.mark((function e(){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/images/search?limit=15&page=".concat(y,"&order=Desc&").concat(_));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.setState({cats:[].concat(Object(p.a)(t.state.cats),Object(p.a)(a))});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){console.log(e)}},t.isFavorite=function(e){void 0===t.props.favoriteCats.find((function(t){return t.id===e.id}))?x.dispatch({type:"ADD CAT IN FAVORITES",payload:{cat:e}}):x.dispatch({type:"DELETE CAT",payload:{cat:e}})},t.checkFavoriteHandler=function(e){return void 0!==t.props.favoriteCats.find((function(t){return t.id===e.id}))},t.loadMoreCatsHandler=function(){y++,t.getCatsFunction()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){y=0,window.addEventListener("scroll",this.infiniteScroll),this.getCatsFunction()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.infiniteScroll)}},{key:"render",value:function(){var t=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"cats",children:this.state.cats.map((function(e){return Object(h.jsxs)("div",{className:"cat-block",children:[Object(h.jsx)(g,{url:e.url}),t.checkFavoriteHandler(e)&&Object(h.jsx)("div",{className:"cats__favorite",children:Object(h.jsx)("svg",{width:"40",height:"37",viewBox:"0 0 40 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z",fill:"#F24E1E"})})}),Object(h.jsx)("div",{className:"cats__heart",onClick:function(){return t.isFavorite(e)},children:t.checkFavoriteHandler(e)?Object(h.jsx)("svg",{width:"40",height:"37",viewBox:"0 0 40 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z",fill:"#F24E1E"})}):Object(h.jsx)("svg",{width:"40",height:"37",viewBox:"0 0 40 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z",fill:"#F24E1E"})})})]})}))}),Object(h.jsx)("div",{className:"cats__load-more-cats-link",children:Object(h.jsx)("p",{onClick:function(){return t.loadMoreCatsHandler()},children:"... \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0435\u0449\u0435 \u043a\u043e\u0442\u0438\u043a\u043e\u0432 ..."})})]})}}]),n}(c.a.Component),k=Object(w.b)((function(t){return{favoriteCats:t.favoriteCats}}))(E),N=n(3),L=(n(49),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).removeHandler=function(t){x.dispatch({type:"DELETE CAT",payload:{cat:t}})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"cats favorites",children:this.props.favoriteCats.map((function(e){return Object(h.jsxs)("div",{className:"cat-block favorite-cat-block",children:[Object(h.jsx)(g,{url:e.url}),Object(h.jsx)("div",{className:"cats__heart",onClick:function(){return t.removeHandler(e)},children:Object(h.jsx)("svg",{width:"40",height:"37",viewBox:"0 0 40 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z",fill:"#F24E1E"})})})]})}))})}}]),n}(c.a.Component)),F=Object(w.b)((function(t){return{favoriteCats:t.favoriteCats}}))(L),T=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return console.log(window.location.pathname),Object(h.jsx)(d.a,{basename:"/frontend-challenge",children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{}),Object(h.jsxs)(N.c,{children:[Object(h.jsx)(N.a,{path:"/favorites",component:F}),Object(h.jsx)(N.a,{path:"/",component:k})]})]})})}}]),n}(c.a.Component);i.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(w.a,{store:x,children:Object(h.jsx)(T,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f1e49bd8.chunk.js.map