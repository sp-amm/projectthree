(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{215:function(t,e,n){},216:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),i=n(22),s=n.n(i),o=(n(90),n(7)),l=n(219),j=n(35),d=n(31),u=n.n(d),b=(n(64),n(40)),h=n(218),O=n(9),x=function(t){var e=Object(O.b)(),n=e.user,r=e.isAuthenticated,i={user:n}.user.name;console.log(i);var s=Object(a.useState)(0),l=Object(j.a)(s,2),d=l[0],x=l[1],m=Object(o.f)(),f=function(t){if(t.preventDefault(),!r)return alert("You need to login.");u.a.post("api/user/",{email:i,count:d,date:Date.now()}).then((function(t){console.log(t)})).then(void m.push("/profile")).catch((function(t){return console.log(t)}))},g=Object(a.useRef)();return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"counttime",children:Object(c.jsx)(b.a,{date:t.date,renderer:function(t){var e=t.minutes,n=t.seconds;return t.completed?Object(c.jsx)(h.a,{className:"submitbtnstyle",type:"submit",onClick:f,children:"Click to submit your count."}):Object(c.jsxs)("span",{children:[Object(b.b)(e,2),":",Object(b.b)(n,2)]})},autoStart:!1,ref:g})}),Object(c.jsx)("div",{children:Object(c.jsx)(h.a,{id:"counterbtn",className:"countbtn",disablebtn:function(t){var e=t.completed;return document.getElementById("counterbtn").disabled=!!e},onClick:function(){return x(d+1)}})}),Object(c.jsx)("div",{children:Object(c.jsxs)("span",{children:["Baby's moved ",d," times."]})}),Object(c.jsx)(h.a,{onClick:function(t){var e;null===(e=g.current)||void 0===e||e.start()},children:"Start"}),Object(c.jsx)(h.a,{onClick:function(t){var e;null===(e=g.current)||void 0===e||e.pause()},children:"Pause"}),Object(c.jsx)(h.a,{onClick:function(t){window.location.reload()},children:"Restart"})]})},m=n.p+"static/media/loading.330b7d99.svg",f=function(){return Object(c.jsx)("div",{className:"spinner",children:Object(c.jsx)("img",{src:m,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})})},g=n(17),p=n(221),v=n(222),C=function(){var t=Object(O.b)().logout;return Object(c.jsx)(h.a,{onClick:function(){return t()},id:"qsLogoutBtn",variant:"danger",className:"btn-margin",children:"Log Out"})},k=function(){var t=Object(O.b)().loginWithRedirect;return Object(c.jsx)(h.a,{onClick:function(){return t()},id:"qsLoginBtn",variant:"primary",className:"btn-margin",children:"Log In"})},y=function(){var t=Object(O.b)(),e=t.user,n=t.isAuthenticated;return Object(c.jsx)(p.a,{bg:"light",expand:"md",children:Object(c.jsxs)(l.a,{children:[Object(c.jsxs)(v.a,{className:"mr-auto",children:[Object(c.jsx)(v.a.Link,{as:g.b,to:"/",exact:!0,activeClassName:"router-link-exact-active",children:"Home"}),Object(c.jsx)(v.a.Link,{as:g.b,to:"/count",exact:!0,activeClassName:"router-link-exact-active",children:"Kick Counter"}),Object(c.jsx)(v.a.Link,{as:g.b,to:"/profile",exact:!0,activeClassName:"router-link-exact-active",children:"Stats"})]}),Object(c.jsxs)(v.a,{className:"justify-content-end",children:[n?Object(c.jsx)("a",{href:"/count",children:e.name}):null,n?Object(c.jsx)(C,{}):Object(c.jsx)(k,{})]})]})})},N=function(t){t.children;return Object(c.jsx)("div",{style:{height:280,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:Object(c.jsx)("h1",{children:"Kick Counter App"})})},L=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Data Table"})})},w=n(33),S=n(34),D=n(39),A=n(36),I=n(84),B=function(t){Object(D.a)(n,t);var e=Object(A.a)(n);function n(t){var c;return Object(w.a)(this,n),(c=e.call(this,t)).setGradientColor=function(t,e){var n=t.getContext("2d").createLinearGradient(0,0,600,550);return n.addColorStop(0,e),n.addColorStop(.95,"rgba(133, 122, 144, 0.5)"),n},c.getChartData=function(t){var e=c.props.data.data;if(console.log("From Datagraph:"+JSON.stringify(e)),console.log(c.props),e.datasets){var n=["rgba(255, 0, 255, 0.75)","rgba(255, 0, 255, 0.75)"];e.datasets.forEach((function(e,a){e.backgroundColor=c.setGradientColor(t,n[a]),e.borderColor="white",e.borderWidth=1}))}return e},console.log(c.props),c}return Object(S.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:{postion:"relative",width:600,height:550},children:[Object(c.jsx)("h3",{children:"Daily Movement Count"}),this.props.data?Object(c.jsx)(I.Line,{options:{responsive:!0},data:this.getChartData}):Object(c.jsx)(c.Fragment,{})]})}}]),n}(r.a.Component),E=function(){var t=Object(a.useState)(null),e=Object(j.a)(t,2),n=e[0],r=e[1],i=Object(O.b)(),s=i.user,o=(i.isAuthenticated,{user:s}.user.name);console.log(o);var l=[],d=[],b={};return Object(a.useEffect)((function(){u.a.get("/api/user/"+o).then((function(t){var e=t.data.map((function(t){return t.count}));d=[{label:"Movements",data:e}],l=t.data.map((function(t){return t.date})).map((function(t){return t.toLocaleString()})),b={data:{labels:l,datasets:d}},console.log(b),r(b)})).catch((function(t){console.log(t)})),console.log("useEffect log"+JSON.stringify(n))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{}),n?Object(c.jsx)(B,{data:n}):Object(c.jsx)(c.Fragment,{children:" "})]})},R=function(){var t=Object(O.b)().loginWithRedirect;return Object(c.jsx)("div",{children:Object(c.jsx)(h.a,{onClick:function(){return t()},id:"qsLoginBtn",variant:"primary",className:"btn-margin biglogin",children:"Log In or Register"})})},q=function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(R,{})]})},F=n(220),G=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(l.a,{className:"mb-5",children:Object(c.jsx)(F.a,{className:"align-items-center profile-header mb-5 text-center text-md-left",children:Object(c.jsx)(E,{})})})})},J=function(t){Object(D.a)(n,t);var e=Object(A.a)(n);function n(t){var c;return Object(w.a)(this,n),(c=e.call(this,t)).state={date:Date.now()+5e3},c}return Object(S.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(x,{date:this.state.date})})}}]),n}(r.a.Component),W=(n(215),function(){return Object(O.b)().isLoading?Object(c.jsx)(f,{}):Object(c.jsxs)("div",{className:"App d-flex flex-column h-100",children:[Object(c.jsx)(y,{}),Object(c.jsx)(l.a,{className:"flex-grow-1 mt-5",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:q}),Object(c.jsx)(o.a,{exact:!0,path:"/profile",component:G}),Object(c.jsx)(o.a,{exact:!0,path:"/count",component:J})]})})]})});s.a.render(Object(c.jsx)(g.a,{children:Object(c.jsx)(O.a,{domain:"dev-yyxgirqx.au.auth0.com",clientId:"tIG5eAs0YU1Ld4WdhpydVIsS7NvNx5mL",redirectUri:window.location.origin,children:Object(c.jsx)(W,{})})}),document.getElementById("root"))},64:function(t,e,n){},90:function(t,e,n){}},[[216,1,2]]]);
//# sourceMappingURL=main.d7657860.chunk.js.map