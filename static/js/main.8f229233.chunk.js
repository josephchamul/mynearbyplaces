(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{14:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(22),r=a.n(i),l=(a(29),a(12)),o=a(3),j=a(2),b=a(15),h=a(7),u=a(8),d=a(10),m=a(9),p=[{type:"restaurants",places:[{name:"McDonald's",rate:3,location:"Tucson, AZ",description:"Burger Fast Food Restaurant",review:["they give you your food very fast"]},{name:"Taco Bell",rate:3,location:"Tucson, AZ",description:"Taco Fast Food Restaurant",review:["the best food for college students on a budge"]}]},{type:"shops",places:[{name:"Tucson Mall",rate:3.5,location:"Tucson, AZ",description:"The best place to shop",review:["they have a lot of cool store to shop at"]},{name:"Tucson Park Place Mall",rate:3,location:"Tucson, AZ",description:"The best place to shop",review:["they have all the shops you will ever need"]}]},{type:"mechanic",places:[{name:"Sooter",rate:4,location:"Tucson, AZ",description:"Locally owned Vehicle Repair Shop",review:["the best service you will ever get at a repair shop"]},{name:"Jiffy Lube",rate:3,location:"Tucson, AZ",description:"Quick Car Maintence Shop",review:["the are the fastest at changing my oil"]}]},{type:"gym",places:[{name:"Campus Recreation",rate:4,location:"Tucson, AZ",description:"University of Arizona Gym",review:["this gym has the best equipment"]},{name:"Planet Fitness",rate:2.5,location:"Tucson, AZ",description:"The Best Priced Gym Membership",review:["this best gym if its your first time working out"]}]}],O={fetchEntries:function(){return p}},v=(a(14),a.p+"static/media/title_pic.99946167.jpg"),x=a.p+"static/media/rest.aa8363cd.jpg",g=a.p+"static/media/shop.4722e04e.jpg",y=a.p+"static/media/mech.6bd87d32.png",f=a.p+"static/media/gym.f9ebb17d.png",N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).onSubmit=function(e){c.state.place.trim().length>0&&c.state.location.trim().length>0&&c.setState({submit:!0}),e.preventDefault()},c.onChange=function(e){var t=e.target.value,a=e.target.name;c.setState(Object(b.a)({},a,t))},c.search=function(){var e={pathname:"/search",state:{place:c.state.place,location:c.state.location}};return c.state.submit?Object(s.jsx)(j.a,{to:e}):Object(s.jsx)("div",{className:"search",children:Object(s.jsxs)("form",{onSubmit:c.onSubmit,children:[Object(s.jsx)("input",{type:"text",name:"place",placeholder:"Restaurants",value:c.state.place,onChange:c.onChange,list:"places"}),Object(s.jsxs)("datalist",{id:"places",children:[Object(s.jsx)("option",{value:"restaurants"}),Object(s.jsx)("option",{value:"shops"}),Object(s.jsx)("option",{value:"mechanic"}),Object(s.jsx)("option",{value:"gym"})]}),Object(s.jsx)("input",{type:"text",name:"location",placeholder:"Tucson, AZ",value:c.state.location,onChange:c.onChange}),Object(s.jsx)("button",{type:"submit",children:"Find"})]})})},c.places=function(){var e={pathname:"/search",state:{place:"restaurants",location:c.state.location}},t={pathname:"/search",state:{place:"shops",location:c.state.location}},a={pathname:"/search",state:{place:"mechanic",location:c.state.location}},n={pathname:"/search",state:{place:"gym",location:c.state.location}};return Object(s.jsxs)("div",{className:"places",children:[Object(s.jsxs)(o.b,{to:e,className:"button-places",children:[Object(s.jsx)("img",{src:x,alt:"rest"}),Object(s.jsx)("div",{className:"places-text",children:"Find The Best Restaurants in your Area"})]}),Object(s.jsxs)(o.b,{to:t,className:"button-places",children:[Object(s.jsx)("img",{src:g,alt:"rest"}),Object(s.jsx)("div",{className:"places-text",children:"Find Amazing Places to Shop"})]}),Object(s.jsxs)(o.b,{to:a,className:"button-places",children:[Object(s.jsx)("img",{src:y,alt:"rest"}),Object(s.jsx)("div",{className:"places-text",children:"Find Trust Worthy Mechanic Around You"})]}),Object(s.jsxs)(o.b,{to:n,className:"button-places",children:[Object(s.jsx)("img",{src:f,alt:"rest"}),Object(s.jsx)("div",{className:"places-text",children:"Find The Most State of The Art Gym"})]})]})},c.state={username:"",entries:[],submit:!1,place:"",location:""},c}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=O.fetchEntries()[0];this.setState({entries:e})}},{key:"render",value:function(){var e="",t=this.props.location;return t&&t.state&&t.state.user&&(e=t.state.user),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("div",{className:"headers",children:Object(s.jsx)("img",{src:v,alt:"header_img"})}),Object(s.jsx)("div",{className:"loginButton",children:e.length>0?e:Object(s.jsx)(o.b,{to:"/login",className:"button",children:"Login"})}),Object(s.jsx)("div",{className:"reviewButton",children:Object(s.jsx)(o.b,{to:"/review",className:"button",children:"Write Review"})}),Object(s.jsx)("div",{className:"title",children:" ReViewer"}),this.search(),Object(s.jsx)("div",{className:"body",children:Object(s.jsxs)("div",{className:"subtitle",children:["Find The Popular Places in Tucson ",this.places()]})})]})}}]),a}(n.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).onSubmit=function(e){s.state.username.trim().length>0&&s.setState({authenticated:!0}),e.preventDefault()},s.onChange=function(e){var t=e.target.value,a=e.target.name;s.setState(Object(b.a)({},a,t))},s.state={username:"",authenticated:!1},s}return Object(u.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?Object(s.jsx)(j.a,{to:e}):Object(s.jsxs)("div",{className:"log-content",children:[Object(s.jsx)("div",{className:"login_title",children:Object(s.jsx)(o.b,{to:"/",className:"title-link",children:"ReViewer"})}),Object(s.jsx)("img",{src:v,alt:"header_img"}),Object(s.jsx)("div",{className:"signin",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("h3",{children:"Log in to ReViewer "}),Object(s.jsx)("label",{children:"Username"}),Object(s.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.onChange}),Object(s.jsx)("button",{type:"submit",children:"Login"})]})}),Object(s.jsx)("div",{className:"log-qoute",children:" ReView Your Favorite Places Around You"})]})}}]),a}(n.a.Component),z=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={username:"",authenticated:!1},s}return Object(u.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?Object(s.jsx)(j.a,{to:e}):Object(s.jsxs)("div",{className:"log-content",children:[Object(s.jsx)("div",{className:"login_title",children:Object(s.jsx)(o.b,{to:"/",className:"title-link",children:"ReViewer"})}),Object(s.jsx)("img",{src:v,alt:"header_img"}),Object(s.jsx)("div",{className:"review-input",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("h3",{children:"Write a ReView "}),Object(s.jsx)("label",{children:"Business Type"}),Object(s.jsx)("input",{type:"text",name:"username"}),Object(s.jsx)("label",{children:"Business Name"}),Object(s.jsx)("input",{type:"text",name:"username"}),Object(s.jsx)("label",{children:"Rating"}),Object(s.jsx)("input",{type:"text",name:"username"}),Object(s.jsx)("label",{children:"Location"}),Object(s.jsx)("input",{type:"text",name:"username"}),Object(s.jsx)("label",{children:"Description"}),Object(s.jsx)("input",{type:"text",name:"username"}),Object(s.jsx)("label",{children:"Comment"}),Object(s.jsx)("input",{type:"text",name:"username"}),Object(s.jsx)("button",{type:"submit",children:"Post"})]})}),Object(s.jsx)("div",{className:"log-qoute",children:" ReView Your Favorite Places Around You"})]})}}]),a}(n.a.Component),T=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).delEntry=function(){alert("hello")},s.state={username:"",entries:[],cursor:0,score:0,count:1},s}return Object(u.a)(a,[{key:"render",value:function(){for(var e=[],t=this.props,a=t.entry,c=t.business,n=0;n<a.length;n++)if(a[n].type==c)for(var i=0;i<a[n].places.length;i++)e.push(Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:{pathname:"/biz",state:{name_biz:a[n].places[i].name,rate_biz:a[n].places[i].rate,location_biz:a[n].places[i].location,desc_biz:a[n].places[i].description,rev_biz:a[n].places[i].review}},children:Object(s.jsxs)("div",{className:"place-div",children:[Object(s.jsx)("div",{className:"review-title",children:a[n].places[i].name}),Object(s.jsx)("div",{className:"review-des",children:a[n].places[i].description}),Object(s.jsx)("div",{className:"review-loc",children:a[n].places[i].location}),Object(s.jsxs)("div",{className:"review-rate",children:["Star Rating: ",a[n].places[i].rate]}),Object(s.jsxs)("div",{className:"review-comment",children:['"',a[n].places[i].review[0],'"']})]})}),Object(s.jsx)("button",{onClick:this.delEntry,children:"Delete"})]}));return Object(s.jsx)("div",{children:e})}}]),a}(n.a.Component),_=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).body=function(e,t){var a=c.state.entries;return Object(s.jsx)("div",{className:"content",children:a.length>0?Object(s.jsx)(T,{entry:a,business:e,location:t,name:""}):""})},c.state={entries:[]},c}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=O.fetchEntries();this.setState({entries:e})}},{key:"render",value:function(){var e="",t="",a=this.props.location;return a&&a.state&&(a.state.place&&(e=a.state.place),a.state.location&&(t=a.state.location)),Object(s.jsxs)("div",{className:"search-content",children:[Object(s.jsx)("div",{className:"search_title",children:Object(s.jsx)(o.b,{to:"/",className:"title-link",children:"ReViewer"})}),Object(s.jsx)("div",{className:"reviewButton",children:Object(s.jsx)(o.b,{to:"/review",className:"button",children:"Write Review"})}),Object(s.jsx)("div",{className:"search-body",children:this.body(e,t)})]})}}]),a}(n.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).body=function(e,t){var a=c.state.entries;return Object(s.jsx)("div",{className:"content",children:a.length>0?Object(s.jsx)(T,{entry:a,business:e,location:t}):""})},c.delEntry=function(){alert("hello")},c.state={entries:[]},c}return Object(u.a)(a,[{key:"render",value:function(){var e="",t="",a="",c="",n="",i=this.props.location;return i&&i.state&&(i.state.name_biz&&(e=i.state.name_biz),i.state.location_biz&&(t=i.state.location_biz),i.state.rate_biz&&(a=i.state.rate_biz),i.state.desc_biz&&(c=i.state.desc_biz),i.state.rev_biz&&(n=i.state.rev_biz)),Object(s.jsxs)("div",{className:"search-content",children:[Object(s.jsx)("div",{className:"search_title",children:Object(s.jsx)(o.b,{to:"/",className:"title-link",children:"ReViewer"})}),Object(s.jsx)("div",{className:"reviewButton",children:Object(s.jsx)(o.b,{to:"/review",className:"button",children:"Write Review"})}),Object(s.jsxs)("div",{className:"biz-body",children:[Object(s.jsx)("div",{className:"title-biz",children:e}),Object(s.jsx)("div",{className:"desc-biz",children:c}),Object(s.jsx)("div",{className:"locat-biz",children:t}),Object(s.jsxs)("div",{className:"rate-biz",children:["Rating: ",a," out of 5"]}),Object(s.jsxs)("div",{className:"rev-biz",children:['"',n,'"']}),Object(s.jsx)("button",{onClick:this.delEntry,children:"Delete"})]})]})}}]),a}(n.a.Component);a(35);var S=function(){return Object(s.jsx)(o.a,{basename:"/mynearbyplaces",children:Object(s.jsxs)(j.d,{children:[Object(s.jsx)(j.b,{exact:!0,path:"/",render:function(e){return Object(s.jsx)(N,Object(l.a)(Object(l.a)({},e),{},{isAuthed:!0}))}}),Object(s.jsx)(j.b,{path:"/login",children:Object(s.jsx)(w,{})}),Object(s.jsx)(j.b,{path:"/review",children:Object(s.jsx)(z,{})}),Object(s.jsx)(j.b,{path:"/search",render:function(e){return Object(s.jsx)(_,Object(l.a)(Object(l.a)({},e),{},{isAuthed:!0}))}}),Object(s.jsx)(j.b,{path:"/entry",render:function(e){return Object(s.jsx)(T,Object(l.a)(Object(l.a)({},e),{},{isAuthed:!0}))}}),Object(s.jsx)(j.b,{path:"/biz",render:function(e){return Object(s.jsx)(C,Object(l.a)(Object(l.a)({},e),{},{isAuthed:!0}))}})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),R()}},[[36,1,2]]]);
//# sourceMappingURL=main.8f229233.chunk.js.map