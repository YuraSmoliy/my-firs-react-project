(this["webpackJsonpmy-firs-react-project"]=this["webpackJsonpmy-firs-react-project"]||[]).push([[0],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(33),f=n(3),a="SEND-MESSAGE",c={dialogs:[{id:1,name:"Yurii"},{id:2,name:"Olga"},{id:3,name:"Andrii"},{id:4,name:"Petro"},{id:5,name:"Roman"},{id:6,name:"Oleg"}],massages:[{id:1,massage:"HI"},{id:2,massage:"How is your learning?"},{id:3,massage:"Good, and you?"},{id:4,massage:"Fine!"},{id:5,massage:"Great!"},{id:6,massage:"Bye!"}]},s=function(e){return{type:a,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.newMessageBody;return Object(f.a)(Object(f.a)({},e),{},{massages:[].concat(Object(r.a)(e.massages),[{id:"next",massage:n}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(130),f=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c0324078-1dd3-4614-bbef-e41473ebabe2"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return f.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return f.post("follow/".concat(e))},unfollow:function(e){return f.delete("follow/".concat(e))},getProfile:function(e){return c.getProfile(e)}},c={getProfile:function(e){return f.get("profile/"+e)},getStatus:function(e){return f.get("profile/status/"+e)},updateStatus:function(e){return f.put("profile/status/",{status:e})}},s={me:function(){return{data:{id:20268,login:"Yura_S_M",email:"fox257@ukr.net"},messages:[],fieldsErrors:[],resultCode:0}},login:function(e,t){return{data:{userId:20268},messages:[],fieldsErrors:[],resultCode:0}},logout:function(e,t){return f.delete("auth/login")}}},135:function(e,t,n){e.exports={usersPhoto:"users_usersPhoto__7q-Jw",selectedPage:"users_selectedPage__21cue"}},162:function(e,t,n){},21:function(e,t,n){e.exports={nav:"Navbar_nav__2I9gT",item:"Navbar_item__1O9w8",active:"Navbar_active__6AV9R"}},246:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);n(162);var r=n(8),f=n(96),a=n(105),c={},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"value":default:return e}},o=n(9),i=n.n(o),u=n(18),x=n(33),j=n(3),H=n(13),P=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},l="FOLLOW",g="UNFOLLOW",d="SET_USERS",v="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",h="TOGGLE_IS_FETCHING",p="TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:30,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},C=function(e){return{type:l,userId:e}},E=function(e){return{type:g,userId:e}},w=function(e){return{type:d,users:e}},m=function(e){return{type:v,currentPage:e}},y=function(e){return{type:h,isFetching:e}},Q=function(e,t){return{type:p,isFetching:e,userId:t}},A=function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,f){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(f(n)),t(Q(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,f){return e.apply(this,arguments)}}(),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(j.a)(Object(j.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!0})});case g:return Object(j.a)(Object(j.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!1})});case d:return Object(j.a)(Object(j.a)({},e),{},{users:Object(x.a)(t.users)});case v:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case b:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case h:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case p:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},B=n(34),D="SET_USERS_DATA",L={userId:null,email:null,login:null,isAuth:!1},q=function(e,t,n,r){return{type:D,payload:{userId:e,email:t,login:n,isAuth:r}}},X=function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,f,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,f=r.id,a=r.login,c=r.email,t(q(f,c,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},V=n(131),F=n(129),U="INITIALIZED_SUCCESS",N={initialized:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},G=Object(r.c)({dialogsPage:a.b,profilePage:f.b,sidebar:s,usersPage:I,auth:T,form:F.a,app:z}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,S=Object(r.e)(G,M(Object(r.a)(V.a)));window.store=S;var Y=S,J=n(0),R=n.n(J),K=n(65),W=n.n(K),k=n(36),Z=n(37),_=n(39),$=n(38),ee=(n(246),n(90)),te=n.n(ee),ne=n(17),re=n(1),fe=function(e){return Object(re.jsxs)("header",{className:te.a.header,children:[Object(re.jsx)("img",{src:"data:image/png;base64,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"}),Object(re.jsx)("div",{className:te.a.loginBlock,children:e.isAuth?Object(re.jsxs)("div",{children:[e.login," - ",Object(re.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(re.jsx)(ne.b,{to:"/login",children:"Login"})})]})},ae=n(12),ce=function(e){Object(_.a)(n,e);var t=Object($.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){return Object(re.jsx)(fe,Object(j.a)({},this.props))}}]),n}(R.a.Component),se=Object(ae.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.logout();case 2:0===e.sent.data.resultCode&&t(q(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ce),oe=n(21),ie=n.n(oe),ue=function(){return Object(re.jsxs)("nav",{className:ie.a.nav,children:[Object(re.jsx)("div",{className:"".concat(ie.a.item," ").concat(ie.a.active),children:Object(re.jsx)(ne.b,{to:"/profile",activeClassName:ie.a.active,children:"Profile"})}),Object(re.jsx)("div",{className:"".concat(ie.a.item," ").concat(ie.a.active),children:Object(re.jsx)(ne.b,{to:"/dialogs",activeClassName:ie.a.active,children:"Messages"})}),Object(re.jsx)("div",{className:"".concat(ie.a.item," ").concat(ie.a.active),children:Object(re.jsx)(ne.b,{to:"/users",activeClassName:ie.a.active,children:"Users"})})]})},xe=n(52),je=n(69),He=n(128),Pe=n(93),le=n.n(Pe),ge=n(134),de=n.n(ge),ve=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,f=e.onPageChanged,a=e.portionSize,c=void 0===a?30:a,s=Math.ceil(t/n),o=[],i=1;i<=s;i++)o.push(i);var u=Math.ceil(s/c),x=Object(J.useState)(1),j=Object(He.a)(x,2),H=j[0],P=j[1],l=(H-1)*c+1,g=H*c;return Object(re.jsxs)("div",{children:[H>1&&Object(re.jsx)("button",{onClick:function(){P(H-1)},children:"PREV"}),o.filter((function(e){return e>=l&&e<=g})).map((function(e){return Object(re.jsx)("span",{className:de()(Object(je.a)({},le.a.selectedPage,r===e),le.a.pageNumber),onClick:function(t){f(e)},children:e},e)})),u>H&&Object(re.jsx)("button",{onClick:function(){P(H+1)},children:"NEXT"})]})},be=n(135),he=n.n(be),pe=n.p+"static/media/images.f0de87f4.png",Oe=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,f=e.follow;return Object(re.jsxs)("div",{children:[Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:Object(re.jsx)(ne.b,{to:"/profile/"+t.id,children:Object(re.jsx)("img",{src:null!=t.photos.small?t.photos.small:pe,className:he.a.usersPhoto})})}),Object(re.jsx)("div",{children:t.followed?Object(re.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(re.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){f(t.id)},children:"Follow"})})]}),Object(re.jsxs)("span",{children:[Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:t.name}),Object(re.jsx)("div",{children:t.status})]}),Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:"u.location.country"}),Object(re.jsx)("div",{children:"u.location.city"})]})]})]})},Ce=["currentPage","pageSize","onPageChanged","totalUsersCount","users"],Ee=function(e){var t=e.currentPage,n=e.pageSize,r=e.onPageChanged,f=e.totalUsersCount,a=e.users,c=Object(xe.a)(e,Ce);return Object(re.jsxs)("div",{children:[Object(re.jsx)(ve,{currentPage:t,pageSize:n,onPageChanged:r,totalItemsCount:f}),a.map((function(e){return Object(re.jsx)(Oe,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow},e.id)}))]})},we=n(67),me=n(136),ye=Object(me.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Qe=function(e){return e.usersPage.pageSize},Ae=function(e){return e.usersPage.totalUsersCount},Ie=function(e){return e.usersPage.currentPage},Be=function(e){return e.usersPage.isFetching},De=function(e){return e.usersPage.followingInProgress},Le=function(e){Object(_.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(k.a)(this,n);for(var r=arguments.length,f=new Array(r),a=0;a<r;a++)f[a]=arguments[a];return(e=t.call.apply(t,[this].concat(f))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(re.jsxs)(re.Fragment,{children:[this.props.isFetching?Object(re.jsx)(we.a,{}):null,Object(re.jsx)(Ee,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleIsFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(R.a.Component),qe=Object(r.d)(Object(ae.b)((function(e){return{users:ye(e),pageSize:Qe(e),totalUsersCount:Ae(e),currentPage:Ie(e),isFetching:Be(e),followingInProgress:De(e)}}),{follow:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,H.c.follow.bind(H.c),C);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,H.c.unfollow.bind(H.c),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:w,setCurrentPage:m,toggleIsFollowingProgress:Q,getUsers:function(e,t){return function(){var n=Object(u.a)(i.a.mark((function n(r){var f;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(y(!0)),r(m(e)),n.next=4,H.c.getUsers(e,t);case 4:f=n.sent,r(y(!1)),r(w(f.items)),r((a=f.totalCount,{type:b,count:a}));case 8:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Le),Xe=n(10),Te=n(127),Ve=n(32),Fe=n(86),Ue=n(53),Ne=n.n(Ue),ze=Object(Te.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(re.jsxs)("form",{onSubmit:t,children:[Object(Ve.c)("Email","email",[Fe.b],Ve.a),Object(Ve.c)("Password","password",[Fe.b],Ve.a,{type:"password"}),Object(Ve.c)(null,"rememberMe",[],Ve.a,{type:"checkbox"},"rememberMe"),n&&Object(re.jsx)("div",{className:Ne.a.formSummaryError,children:n}),Object(re.jsx)("div",{children:Object(re.jsx)("button",{children:"Login"})})]})})),Ge=Object(ae.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(u.a)(i.a.mark((function r(f){var a,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H.a.login(e,t,n);case 2:0===(a=r.sent).data.resultCode?f(X()):(c=a.data.messages.length>0?a.data.messages[0]:"Some Error",f(Object(B.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(re.jsx)(Xe.a,{to:"/profile"}):Object(re.jsxs)("div",{children:[Object(re.jsx)("h1",{children:"LOGIN"}),Object(re.jsx)(ze,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Me=function(e){return function(t){return Object(re.jsx)(J.Suspense,{fallback:Object(re.jsx)("div",{children:"Loading.."}),children:Object(re.jsx)(e,Object(j.a)({},t))})}},Se=R.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Ye=R.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),Je=function(e){Object(_.a)(n,e);var t=Object($.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(re.jsxs)("div",{className:"app-wrapper",children:[Object(re.jsx)(se,{}),Object(re.jsx)(ue,{}),Object(re.jsxs)("div",{className:"app-wrapper-content",children:[Object(re.jsx)(Xe.b,{path:"/profile/:userId?",render:Me(Ye)}),Object(re.jsx)(Xe.b,{path:"/dialogs",render:Me(Se)}),Object(re.jsx)(Xe.b,{path:"/users",render:function(){return Object(re.jsx)(qe,{})}}),Object(re.jsx)(Xe.b,{path:"/login",render:function(){return Object(re.jsx)(Ge,{})}})]})]}):Object(re.jsx)(we.a,{})}}]),n}(J.Component),Re=Object(r.d)(Xe.f,Object(ae.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(X());Promise.all([t]).then((function(){e({type:U})}))}}}))(Je),Ke=function(e){return Object(re.jsx)(ne.a,{basename:"/my-firs-react-project",children:Object(re.jsx)(ae.a,{store:Y,children:Object(re.jsx)(Re,{})})})};W.a.render(Object(re.jsx)(Ke,{}),document.getElementById("root"))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return H})),n.d(t,"c",(function(){return P}));var r=n(3),f=n(52),a=(n(0),n(53)),c=n.n(a),s=n(89),o=n(1),i=["input","meta","child"],u=["input","meta","child"],x=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,f=e.children,a=n&&r;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(a?c.a.error:""),children:[Object(o.jsx)("div",{children:f}),a&&Object(o.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(f.a)(e,i));return Object(o.jsx)(x,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},H=function(e){var t=e.input,n=(e.meta,e.child,Object(f.a)(e,u));return Object(o.jsx)(x,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},P=function(e,t,n,f){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,Object(r.a)({placeholder:e,name:t,component:f,validate:n},a))," ",c]})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2pqZg",error:"FormsControls_error__y3MqP",formSummaryError:"FormsControls_formSummaryError__1tzy3"}},67:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.2aa5d275.svg",f=n(1);t.a=function(e){return Object(f.jsx)("img",{src:r})}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return f}));var r=function(e){if(!e)return"Field is required"},f=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},90:function(e,t,n){e.exports={header:"Header_header__iCnit",loginBlock:"Header_loginBlock__119Xt"}},93:function(e,t,n){e.exports={paginator:"Paginator_paginator__71Uj2",pageNumber:"Paginator_pageNumber__3gnk6",selectedPage:"Paginator_selectedPage__9Bazp"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return v}));var r=n(9),f=n.n(r),a=n(18),c=n(33),s=n(3),o=n(13),i="ADD-POST",u="DELETE_POST",x="SET_USER_PROFILE",j="SET_STATUS",H={posts:[{id:1,massage:"HI",likes_count:0},{id:2,massage:"How are you?",likes_count:1},{id:3,massage:"Good, and you?",likes_count:1},{id:4,massage:"Fine!",likes_count:7},{id:5,massage:"Great!",likes_count:6},{id:6,massage:"Bye!",likes_count:5}],newPostText:"",profile:null,status:""},P=function(e){return{type:i,newPostText:e}},l=function(e){return{type:j,status:e}},g=function(e){return function(){var t=Object(a.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((f=r.data,{type:x,profile:f}));case 4:case"end":return t.stop()}var f}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(a.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(l(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:t.sent.data.resultCode||n(l(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:5,massage:t.newPostText,likes_count:"6"}])});case x:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case j:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case u:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.832aeef9.chunk.js.map