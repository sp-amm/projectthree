(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{215:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(22),o=n.n(i),s=(n(90),n(7)),l=n(219),d=n(35),j=n(31),u=n.n(j),b=(n(64),n(40)),h=n(218),O=n(9),x=function(e){var t=Object(a.useState)(0),n=Object(d.a)(t,2),r=n[0],i=n[1],o=Object(O.b)(),l=o.user,j=o.isAuthenticated;!1===j&&(window.location.href="/",alert("You need to login to access this page."));var x={user:l}.user.name;void 0===x&&console.log(x);var m=Object(s.f)(),f=function(e){if(e.preventDefault(),!j)return alert("You need to login.");u.a.post("api/user/",{email:x,count:r,date:Date.now()}).then((function(e){console.log(e)})).then(void m.push("/profile")).catch((function(e){return console.log(e)}))},g=Object(a.useRef)();return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"counttime",children:Object(c.jsx)(b.a,{date:e.date,renderer:function(e){var t=e.minutes,n=e.seconds;return e.completed?Object(c.jsx)(h.a,{className:"submitbtnstyle",type:"submit",onClick:f,children:"Click to submit your count."}):Object(c.jsxs)("span",{children:[Object(b.b)(t,2),":",Object(b.b)(n,2)]})},autoStart:!1,ref:g})}),Object(c.jsx)("div",{children:Object(c.jsx)(h.a,{id:"counterbtn",className:"countbtn",disablebtn:function(e){var t=e.completed;return document.getElementById("counterbtn").disabled=!!t},onClick:function(){return i(r+1)}})}),Object(c.jsx)("div",{children:Object(c.jsxs)("span",{children:["Baby's moved ",r," times."]})}),Object(c.jsx)(h.a,{onClick:function(e){var t;null===(t=g.current)||void 0===t||t.start()},children:"Start"}),Object(c.jsx)(h.a,{onClick:function(e){var t;null===(t=g.current)||void 0===t||t.pause()},children:"Pause"}),Object(c.jsx)(h.a,{onClick:function(e){window.location.reload()},children:"Restart"})]})},m=n.p+"static/media/loading.330b7d99.svg",f=function(){return Object(c.jsx)("div",{className:"spinner",children:Object(c.jsx)("img",{src:m,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})})},g=n(17),p=n(221),v=n(222),C=function(){var e=Object(O.b)().logout;return Object(c.jsx)(h.a,{onClick:function(){return e()},id:"qsLogoutBtn",variant:"danger",className:"btn-margin",children:"Log Out"})},k=function(){var e=Object(O.b)().loginWithRedirect;return Object(c.jsx)(h.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"primary",className:"btn-margin",children:"Log In"})},y=function(){var e=Object(O.b)(),t=e.user,n=e.isAuthenticated;return Object(c.jsx)(p.a,{bg:"light",expand:"md",children:Object(c.jsxs)(l.a,{children:[Object(c.jsxs)(v.a,{className:"mr-auto",children:[Object(c.jsx)(v.a.Link,{as:g.b,to:"/",exact:!0,activeClassName:"router-link-exact-active",children:"Home"}),Object(c.jsx)(v.a.Link,{as:g.b,to:"/count",exact:!0,activeClassName:"router-link-exact-active",children:"Kick Counter"}),Object(c.jsx)(v.a.Link,{as:g.b,to:"/profile",exact:!0,activeClassName:"router-link-exact-active",children:"Stats"})]}),Object(c.jsxs)(v.a,{className:"justify-content-end",children:[n?Object(c.jsx)("a",{href:"/count",children:t.name}):null,n?Object(c.jsx)(C,{}):Object(c.jsx)(k,{})]})]})})},N=function(e){e.children;return Object(c.jsx)("div",{style:{height:280,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:Object(c.jsx)("h1",{children:"Kick Counter App"})})},w=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Data Table"})})},L=n(33),S=n(34),D=n(39),A=n(36),I=n(84),B=function(e){Object(D.a)(n,e);var t=Object(A.a)(n);function n(e){var c;return Object(L.a)(this,n),(c=t.call(this,e)).setGradientColor=function(e,t){var n=e.getContext("2d").createLinearGradient(0,0,600,550);return n.addColorStop(0,t),n.addColorStop(.95,"rgba(133, 122, 144, 0.5)"),n},c.getChartData=function(e){var t=c.props.data.data;if(console.log("From Datagraph:"+JSON.stringify(t)),console.log(c.props),t.datasets){var n=["rgba(255, 0, 255, 0.75)","rgba(255, 0, 255, 0.75)"];t.datasets.forEach((function(t,a){t.backgroundColor=c.setGradientColor(e,n[a]),t.borderColor="white",t.borderWidth=1}))}return t},console.log(c.props),c}return Object(S.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:{postion:"relative",width:600,height:550},children:[Object(c.jsx)("h3",{children:"Daily Movement Count"}),this.props.data?Object(c.jsx)(I.Line,{options:{responsive:!0},data:this.getChartData}):Object(c.jsx)(c.Fragment,{})]})}}]),n}(r.a.Component),E=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(O.b)(),o=i.user;!1===i.isAuthenticated&&(window.location.href="/",alert("You need to login to access this page."));var s={user:o}.user.name;console.log(s);var l=[],j=[],b={};return Object(a.useEffect)((function(){u.a.get("/api/user/"+s).then((function(e){var t=e.data.map((function(e){return e.count}));j=[{label:"Movements",data:t}],l=e.data.map((function(e){return e.date})).map((function(e){return e.toLocaleString()})),b={data:{labels:l,datasets:j}},console.log(b),r(b)})).catch((function(e){console.log(e)})),console.log("useEffect log"+JSON.stringify(n))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(w,{}),n?Object(c.jsx)(B,{data:n}):Object(c.jsx)(c.Fragment,{children:" "})]})},R=function(){var e=Object(O.b)().loginWithRedirect;return Object(c.jsx)("div",{children:Object(c.jsx)(h.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"primary",className:"btn-margin biglogin",children:"Log In or Register"})})},q=function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(R,{})]})},F=n(220),G=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(l.a,{className:"mb-5",children:Object(c.jsx)(F.a,{className:"align-items-center profile-header mb-5 text-center text-md-left",children:Object(c.jsx)(E,{})})})})},J=function(e){Object(D.a)(n,e);var t=Object(A.a)(n);function n(e){var c;return Object(L.a)(this,n),(c=t.call(this,e)).state={date:Date.now()+9e5},c}return Object(S.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(x,{date:this.state.date})})}}]),n}(r.a.Component),W=(n(215),function(){return Object(O.b)().isLoading?Object(c.jsx)(f,{}):Object(c.jsxs)("div",{className:"App d-flex flex-column h-100",children:[Object(c.jsx)(y,{}),Object(c.jsx)(l.a,{className:"flex-grow-1 mt-5",children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:q}),Object(c.jsx)(s.a,{exact:!0,path:"/profile",component:G}),Object(c.jsx)(s.a,{exact:!0,path:"/count",component:J})]})})]})});o.a.render(Object(c.jsx)(g.a,{children:Object(c.jsx)(O.a,{domain:"dev-yyxgirqx.au.auth0.com",clientId:"tIG5eAs0YU1Ld4WdhpydVIsS7NvNx5mL",redirectUri:window.location.origin,children:Object(c.jsx)(W,{})})}),document.getElementById("root"))},64:function(e,t,n){},90:function(e,t,n){}},[[216,1,2]]]);
//# sourceMappingURL=main.d0323be3.chunk.js.map