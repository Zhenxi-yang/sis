(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"Home":"Home","School":"School","Schedule":"Schedule","Classes":"Classes","Library":"Library","Media":"Media","Images":"Images","Videos":"Videos","Audio":"Audio","Activities":"Activities","Virtual Reality":"Virtual Reality","Hypnosis":"Hypnosis","Third party":"Third party","Minimize":"Minimize"}}'),delete t.options._Ctor}},190:function(t,e,n){"use strict";var r=n(145),o=n.n(r);e.default=o.a},194:function(t,e,n){"use strict";var r=n(0),o=n(286),c=n.n(o);n(431);r.default.use(c.a,{colors:{primary:"#5b3cc4",success:"rgb(23, 201, 100)",danger:"rgb(242, 19, 93)",warning:"rgb(255, 130, 0)",dark:"rgb(36, 33, 69)"}})},195:function(t,e,n){"use strict";var r=n(0),o=n(91);n(438);r.default.use(o.a);e.a=new o.a({icons:{iconfont:"fa"},customProperties:!0,variations:!0,theme:{themes:{dark:{primary:"#030f40",black:"#171717",info:"#2196f3",warning:"#ffbc00",error:"#ff5252",anchor:"#2196f3"},light:{primary:"#030f40",black:"#171717",info:"#2196f3",warning:"#ffbc00",error:"#ff5252",anchor:"#2443cd"}}},breakpoint:{thresholds:{xs:600,sm:950,md:1264,lg:1904}}})},196:function(t,e,n){"use strict";var r=n(5),o=(n(47),n(7),n(26),n(49),n(28),n(90)),c=n.n(o);function l(){}function f(){}e.a=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var o,v,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,t.next=3,c.a.get("https://raw.githubusercontent.com/pradt2/always-online-stun/master/valid_hosts.txt");case 3:o=t.sent,v=[],o.data.split("\n").forEach((function(t){v.push({urls:"stun:".concat(t)})})),m={servers:v.slice(0,2),pc:null,dc:null,connect:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.pc=new RTCPeerConnection({iceServers:t.servers}),t.dc=t.pc.createDataChannel("community"),t.dc.onopen=l,t.dc.onclose=l,t.dc.ondatachannel=f;case 5:case"end":return e.stop()}}),e)})))()}},n("community",m);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},197:function(t,e,n){"use strict";e.a=function(t){var e=t.app,n=t.store;e.router.beforeEach((function(t,e,r){n.restored.then((function(){r()}))}))}},248:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("9c956814",content,!0,{sourceMap:!1})},260:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("17e6175d",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";n.r(e);n(21),n(61);var r={data:function(){return{profileAvatarUrl:!1,profileName:"",miniVariant:!0,items:[{title:"School",to:"school",icon:"fas fa-university"},{title:"Progress tree",to:"tree",icon:"fab fa-pagelines"},{title:"Library",to:"library",icon:"fas fa-book"},{title:"Schedule",to:"schedule",icon:"fas fa-calendar"},{title:"Inventory",to:"inventory",icon:"fas fa-toolbox"},{title:"Activities",icon:"fas fa-dice-d20",sub:[{title:"Videos",icon:"fas fa-film",to:"videos"},{title:"Images",icon:"fas fa-images",to:"images"},{title:"Erotica",icon:"fas fa-book-open",to:"erotica"},{title:"Games",icon:"fas fa-chess-queen",to:"games"},{title:"Hypnosis",icon:"fas fa-hospital-symbol",to:"hypnosis"},{title:"Roulette",icon:"fas fa-circle-notch",to:"roulette"},{title:"Dildo hero",icon:"fas fa-pen",to:"dildo-hero"}]},{title:"Information",to:"information",icon:"fas fa-exclamation-circle"}]}},mounted:function(){var t=this;this.$auth.loggedIn&&(this.profileAvatarUrl=this.$auth.user.avatar,this.profileName=this.$auth.user.name),setInterval((function(){t.$auth.loggedIn?(t.profileAvatarUrl=t.$auth.user.avatar,t.profileName=t.$auth.user.name):(t.profileAvatarUrl="",t.profileName="")}),1e3)},methods:{logout:function(){this.$auth.logout()}}},o=n(66),c=n(190),l=n(76),f=n.n(l),v=n(183),m=n(280),d=n(184),h=n(185),_=n(116),y=n(187),k=n(63),w=n(99),x=n(463),V=n(464),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{permanent:"",app:"","mini-variant":t.miniVariant},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-list",{attrs:{nav:"",dense:""}},[t.$auth.loggedIn?[n("v-list-item",{attrs:{color:"primary"},on:{click:t.logout}},[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",o,!1),r),[n("v-icon",[t._v("fas fa-sign-out-alt")])],1)]}}],null,!1,604991487)},[t._v(" "),n("span",[t._v(t._s(t.$t("Log out")))])]):n("v-list-item-icon",[n("v-icon",[t._v("fas fa-sign-out-alt")])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t("Log out")))])],1)]:t._e(),t._v(" "),n("v-list-item",{attrs:{color:"primary"},on:{click:function(e){t.miniVariant=!t.miniVariant}}},[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",o,!1),r),[n("v-icon",[t._v(t._s(t.miniVariant?"fas fa-chevron-right":"fas fa-chevron-left")+"\n              ")])],1)]}}],null,!1,2923185275)},[t._v(" "),n("span",[t._v(t._s(t.$t("Minimize")))])]):n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.miniVariant?"fas fa-chevron-right":"fas fa-chevron-left")+"\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t("Minimize")))])],1)],2)]},proxy:!0}])},[n("v-list",{attrs:{nav:"",dense:t.miniVariant}},[n("v-list-item",{attrs:{link:"",to:t.localePath("profile"),"two-line":!t.miniVariant,color:"primary"}},[t.miniVariant?n("v-list-item-icon",[n("v-img",{attrs:{src:t.profileAvatarUrl}})],1):n("v-list-item-avatar",{staticStyle:{"margin-right":"0 !important"}},[n("v-img",{attrs:{src:t.profileAvatarUrl}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h5 text-center"},[t._v(t._s(t.profileName))]),t._v(" "),n("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Student")])],1)],1)],1),t._v(" "),n("v-list",{staticStyle:{"padding-top":"0 !important"},attrs:{nav:"",dense:""}},[t._l(t.items,(function(e){return[e.sub?n("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon,color:"primary",value:e.sub.some((function(e){return t.$route.path.includes(t.localePath(e.to))}))},scopedSlots:t._u([{key:"prependIcon",fn:function(){return[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("v-icon",t._g(t._b({},"v-icon",c,!1),o),[t._v(t._s(e.icon))])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t(e.title)))])]):t._e()]},proxy:!0},{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),t._l(e.sub,(function(i,e){return n("v-list-item",{key:i.to+e,attrs:{link:"",to:t.localePath(i.to)}},[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",o,!1),r),[n("v-icon",[t._v(t._s(i.icon))])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t(i.title)))])]):n("v-list-item-icon",[n("v-icon",[t._v(t._s(i.icon))])],1),t._v(" "),t.miniVariant?n("v-list-item-title",{domProps:{textContent:t._s(i.title.substr(0,2).toUpperCase())}}):n("v-list-item-title",{domProps:{textContent:t._s(i.title)}})],1)}))],2):n("v-list-item",{key:e.to,attrs:{color:"primary",link:"",to:t.localePath(e.to)}},[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",c,!1),o),[n("v-icon",[t._v(t._s(e.icon))])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t(e.title)))])]):n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t(e.title)))])],1)]}))],2)],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports;f()(component,{VIcon:v.a,VImg:m.a,VList:d.a,VListGroup:h.a,VListItem:_.a,VListItemAvatar:y.a,VListItemContent:k.a,VListItemIcon:w.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VNavigationDrawer:x.a,VTooltip:V.a})},287:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return k}));n(82);var r=n(5),o=n(24),c=n(35),l=n(43),f=n(36),v=n(25),m=(n(12),n(47),n(0)),d=n(288),h=n.n(d),_=n(100);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}m.default.use(h.a,{apiKey:t.env.GCP_API_KEY,clientId:t.env.GCP_CLIENT_ID,discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],scope:"https://www.googleapis.com/auth/drive.appdata"});var k=function(t){Object(l.a)(d,t);var e,n,f,v=y(d);function d(){return Object(o.a)(this,d),v.apply(this,arguments)}return Object(c.a)(d,[{key:"login",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.default.prototype.$gapi.login();case 2:return t.next=4,this.$auth.fetchUser();case 4:this.$auth.$storage.setState("loggedIn",!0);case 5:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"logout",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.default.prototype.$gapi.logout();case 2:this.$auth.reset();case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"check",value:function(){return!0}},{key:"fetchUser",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.default.prototype.$gapi.getCurrentUser();case 2:return n=t.sent,r=n.getBasicProfile(),o={name:r.getName(),avatar:r.getImageUrl()},this.$auth.setUser(o),this.$auth.$storage.setState("loggedIn",!0),t.abrupt("return",Promise.resolve());case 8:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),d}(_.c)}).call(this,n(139))},290:function(t,e,n){"use strict";var r={mounted:function(){}},o=(n(353),n(66)),c=n(76),l=n.n(c),f=n(465),v=n(466),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"vuesax-compat",nativeOn:{contextmenu:function(t){t.preventDefault()}}},[t.$auth.loggedIn?n("Menubar"):t._e(),t._v(" "),n("v-main",{staticClass:"wp-main-background"},[n("Nuxt")],1)],1)}),[],!1,null,"5c615398",null);e.a=component.exports;l()(component,{Menubar:n(279).default}),l()(component,{VApp:f.a,VMain:v.a})},291:function(t,e,n){"use strict";var r={mounted:function(){}},o=(n(397),n(66)),c=n(76),l=n.n(c),f=n(465),v=n(466),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"vuesax-compat",nativeOn:{contextmenu:function(t){t.preventDefault()}}},[t.$auth.loggedIn?n("Menubar"):t._e(),t._v(" "),n("v-main",{staticClass:"wp-start-background"},[n("Nuxt")],1)],1)}),[],!1,null,"1d701f5a",null);e.a=component.exports;l()(component,{Menubar:n(279).default}),l()(component,{VApp:f.a,VMain:v.a})},315:function(t,e,n){n(316),t.exports=n(317)},341:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b2f3e6fc",content,!0,{sourceMap:!1})},342:function(t,e,n){var r=n(19)(!1);r.push([t.i,"html{overflow-y:auto!important}",""]),t.exports=r},345:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bd6da550",content,!0,{sourceMap:!1})},346:function(t,e,n){var r=n(19)(!1);r.push([t.i,".vs-navbar__group__items .nav-title{font-size:.4cm}.fill-width{width:100%!important}",""]),t.exports=r},347:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4c2bc7c8",content,!0,{sourceMap:!1})},348:function(t,e,n){var r=n(19),o=n(140),c=n(349),l=n(350),f=r(!1),v=o(c),m=o(l);f.push([t.i,'@font-face{font-family:"Shadows Into Light Two";font-style:normal;font-weight:400;src:local(""),url('+v+') format("woff2"),url('+m+') format("woff")}body,html{font-size:20px!important}',""]),t.exports=f},349:function(t,e,n){t.exports=n.p+"fonts/shadows-into-light-two-v8-latin-regular.9987965.woff2"},350:function(t,e,n){t.exports=n.p+"fonts/shadows-into-light-two-v8-latin-regular.6cdb3b7.woff"},353:function(t,e,n){"use strict";n(248)},354:function(t,e,n){var r=n(19)(!1);r.push([t.i,".wp-main-background[data-v-5c615398]{background-size:cover;background-position:50%}",""]),t.exports=r},397:function(t,e,n){"use strict";n(260)},398:function(t,e,n){var r=n(19),o=n(140),c=n(399),l=r(!1),f=o(c);l.push([t.i,".wp-start-background[data-v-1d701f5a]{background-image:url("+f+");background-size:cover;background-position:50%}",""]),t.exports=l},399:function(t,e,n){t.exports=n.p+"img/background.b29947d.webp"},400:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"state",(function(){return m})),n.d(e,"getters",(function(){return d})),n.d(e,"mutations",(function(){return h})),n.d(e,"actions",(function(){return _})),n.d(e,"plugins",(function(){return w}));var r=n(24),o=n(35),c=n(5),l=(n(12),n(47),n(283)),f=n(84),v=n(0),m=function(){return{stateLoaded:!1}},d={stateLoaded:function(t){return t.stateLoaded}},h={stateLoaded:function(t,e){t.stateLoaded=e}},_={stateLoaded:function(t,e){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.commit("stateLoaded",!0);case 2:case"end":return e.stop()}}),e)})))()}},y=function(){function t(){Object(r.a)(this,t)}var e,n,l,m,d,h;return Object(o.a)(t,[{key:"getItem",value:(h=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getItem(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return h.apply(this,arguments)})},{key:"setItem",value:(d=Object(c.a)(regeneratorRuntime.mark((function t(e,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return new Promise((function(t,e){v.default.prototype.$gapi.clientProvider.client.gapi.client.drive.files.create({resource:{name:"state.json",parents:["appDataFolder"]},media:{mimeType:"application/json",body:JSON.stringify(data)},fields:"id"}).then((function(e){v.default.prototype.$gapi.clientProvider.client.gapi.client.drive.files.list({spaces:"appDataFolder",fields:"nextPageToken, files(id, name)",pageSize:100}).then((function(e){t()}))}))})),t.next=3,f.setItem(e,data);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return d.apply(this,arguments)})},{key:"removeItem",value:(m=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.removeItem(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return m.apply(this,arguments)})},{key:"clear",value:(l=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.clear();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)})},{key:"length",value:(n=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.length();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"key",value:(e=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.key(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"_config",get:function(){return f.config()}}]),t}(),k=t.env.version?t.env.version:"0",w=[new l.a({storage:new y,supportCircular:!0,asyncStorage:!0,key:"state-"+k,modules:["general"]}).plugin]}.call(this,n(139))},402:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c}));var r=function(){return{theme:{dark:!0}}},o={themeDark:function(t){return t.theme.dark}},c={setThemeDark:function(t,e){t.theme.dark=e}}}},[[315,37,6,38]]]);