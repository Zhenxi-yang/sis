(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"Home":"Home","School":"School","Schedule":"Schedule","Classes":"Classes","Library":"Library","Media":"Media","Images":"Images","Videos":"Videos","Audio":"Audio","Activities":"Activities","Virtual Reality":"Virtual Reality","Hypnosis":"Hypnosis","Third party":"Third party","Minimize":"Minimize"}}'),delete t.options._Ctor}},186:function(t,e,n){"use strict";var r=n(140),o=n.n(r);e.default=o.a},190:function(t,e,n){"use strict";var r=n(0),o=n(276),c=n.n(o);n(420);r.default.use(c.a,{colors:{primary:"#5b3cc4",success:"rgb(23, 201, 100)",danger:"rgb(242, 19, 93)",warning:"rgb(255, 130, 0)",dark:"rgb(36, 33, 69)"}})},191:function(t,e,n){"use strict";var r=n(0),o=n(90);n(427);r.default.use(o.a);e.a=new o.a({icons:{iconfont:"fa"},customProperties:!0,variations:!0,theme:{themes:{dark:{primary:"#030f40",black:"#171717",info:"#2196f3",warning:"#ffbc00",error:"#ff5252",anchor:"#2196f3"},light:{primary:"#030f40",black:"#171717",info:"#2196f3",warning:"#ffbc00",error:"#ff5252",anchor:"#2443cd"}}},breakpoint:{thresholds:{xs:600,sm:950,md:1264,lg:1904}}})},192:function(t,e,n){"use strict";var r=n(5),o=(n(45),n(7),n(25),n(48),n(28),n(89)),c=n.n(o);function l(){}function f(){}e.a=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var o,v,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,t.next=3,c.a.get("https://raw.githubusercontent.com/pradt2/always-online-stun/master/valid_hosts.txt");case 3:o=t.sent,v=[],o.data.split("\n").forEach((function(t){v.push({urls:"stun:".concat(t)})})),d={servers:v.slice(0,2),pc:null,dc:null,connect:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.pc=new RTCPeerConnection({iceServers:t.servers}),t.dc=t.pc.createDataChannel("community"),t.dc.onopen=l,t.dc.onclose=l,t.dc.ondatachannel=f;case 5:case"end":return e.stop()}}),e)})))()}},n("community",d);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},241:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("9c956814",content,!0,{sourceMap:!1})},250:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("8e1fa246",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n.r(e);n(21),n(61);var r={data:function(){return{profileAvatarUrl:!1,profileName:"",miniVariant:!0,items:[{title:"Schedule",to:"schedule",icon:"fas fa-calendar"},{title:"Progress tree",to:"tree",icon:"fab fa-pagelines"},{title:"Classes",to:"classes",icon:"fas fa-leaf"},{title:"Library",to:"library",icon:"fas fa-book"},{title:"Detention",to:"detention",icon:"fas fa-sad-cry"},{title:"Activities",icon:"fas fa-dice-d20",sub:[{title:"Videos",icon:"fas fa-gamepad",to:"videos"},{title:"Images",icon:"fas fa-gamepad",to:"images"},{title:"Erotica",icon:"fas fa-gamepad",to:"erotica"},{title:"Games",icon:"fas fa-gamepad",to:"games"},{title:"Hypnosis",icon:"fas fa-gamepad",to:"hypnosis"},{title:"Roulette",icon:"fas fa-gamepad",to:"roulette"},{title:"Dildo hero",icon:"fas fa-gamepad",to:"dildo-hero"}]},{title:"Toolbox",to:"toolbox",icon:"fas fa-toolbox"}]}},mounted:function(){var t=this;this.$auth.loggedIn&&(this.profileAvatarUrl=this.$auth.user.avatar,this.profileName=this.$auth.user.name),setInterval((function(){t.$auth.loggedIn?(t.profileAvatarUrl=t.$auth.user.avatar,t.profileName=t.$auth.user.name):(t.profileAvatarUrl="",t.profileName="")}),1e3)},methods:{logout:function(){this.$auth.logout()}}},o=n(66),c=n(186),l=n(76),f=n.n(l),v=n(179),d=n(270),m=n(180),h=n(181),_=n(114),y=n(183),k=n(63),w=n(98),x=n(455),V=n(454),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{permanent:"",app:"","mini-variant":t.miniVariant},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-list",{attrs:{nav:"",dense:""}},[t.$auth.loggedIn?[n("v-list-item",{attrs:{color:"pink darken-1"},on:{click:t.logout}},[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",o,!1),r),[n("v-icon",[t._v("fas fa-sign-out-alt")])],1)]}}],null,!1,604991487)},[t._v(" "),n("span",[t._v(t._s(t.$t("Log out")))])]):n("v-list-item-icon",[n("v-icon",[t._v("fas fa-sign-out-alt")])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t("Log out")))])],1)]:t._e(),t._v(" "),n("v-list-item",{attrs:{color:"pink darken-1"},on:{click:function(e){t.miniVariant=!t.miniVariant}}},[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",o,!1),r),[n("v-icon",[t._v(t._s(t.miniVariant?"fas fa-chevron-right":"fas fa-chevron-left")+"\n              ")])],1)]}}],null,!1,2923185275)},[t._v(" "),n("span",[t._v(t._s(t.$t("Minimize")))])]):n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.miniVariant?"fas fa-chevron-right":"fas fa-chevron-left")+"\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t("Minimize")))])],1)],2)]},proxy:!0}])},[n("v-list",{attrs:{nav:"",dense:t.miniVariant}},[n("v-list-item",{attrs:{link:"",to:t.localePath("profile"),"two-line":!t.miniVariant,color:"pink darken-1"}},[t.miniVariant?n("v-list-item-icon",[n("v-img",{attrs:{src:t.profileAvatarUrl}})],1):n("v-list-item-avatar",{staticStyle:{"margin-right":"0 !important"}},[n("v-img",{attrs:{src:t.profileAvatarUrl}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h5 text-center"},[t._v(t._s(t.profileName))]),t._v(" "),n("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Hypnoslave")])],1)],1)],1),t._v(" "),n("v-list",{staticStyle:{"padding-top":"0 !important"},attrs:{nav:"",dense:""}},[t._l(t.items,(function(e){return[e.sub?n("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon,color:"pink darken-1",value:e.sub.some((function(e){return t.$route.path.includes(t.localePath(e.to))}))},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.sub,(function(i,e){return n("v-list-item",{key:i.to+e,attrs:{link:"",to:t.localePath(i.to)}},[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",o,!1),r),[n("v-icon",[t._v(t._s(i.icon))])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t(i.title)))])]):n("v-list-item-icon",[n("v-icon",[t._v(t._s(i.icon))])],1),t._v(" "),t.miniVariant?n("v-list-item-title",{domProps:{textContent:t._s(i.title.substr(0,2).toUpperCase())}}):n("v-list-item-title",{domProps:{textContent:t._s(i.title)}})],1)}))],2):n("v-list-item",{key:e.to,attrs:{color:"pink darken-1",link:"",to:t.localePath(e.to)}},[t.miniVariant?n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("v-list-item-icon",t._g(t._b({},"v-list-item-icon",c,!1),o),[n("v-icon",[t._v(t._s(e.icon))])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t(e.title)))])]):n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t(e.title)))])],1)]}))],2)],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports;f()(component,{VIcon:v.a,VImg:d.a,VList:m.a,VListGroup:h.a,VListItem:_.a,VListItemAvatar:y.a,VListItemContent:k.a,VListItemIcon:w.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VNavigationDrawer:x.a,VTooltip:V.a})},277:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));n(82);var r=n(5),o=n(27),c=n(42),l=n(43),f=n(35),v=n(24),d=(n(14),n(45),n(0)),m=n(278),h=n.n(m),_=n(99);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}d.default.use(h.a,{apiKey:"AIzaSyBomLRdD6gwfnfOTc-XrXg3z1lNdz10TAs",clientId:"177245628514-lu7v4lfvkp01hmtnr12h2g4j4o56im8v.apps.googleusercontent.com",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],scope:"https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata"});var k=function(t){Object(l.a)(m,t);var e,n,f,v=y(m);function m(){return Object(o.a)(this,m),v.apply(this,arguments)}return Object(c.a)(m,[{key:"login",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.default.prototype.$gapi.login();case 2:return t.next=4,this.$auth.fetchUser();case 4:this.$auth.$storage.setState("loggedIn",!0);case 5:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"logout",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.default.prototype.$gapi.logout();case 2:this.$auth.reset();case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"check",value:function(){return!0}},{key:"fetchUser",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.default.prototype.$gapi.getCurrentUser();case 2:return n=t.sent,r=n.getBasicProfile(),o={name:r.getName(),avatar:r.getImageUrl()},this.$auth.setUser(o),this.$auth.$storage.setState("loggedIn",!0),t.abrupt("return",Promise.resolve());case 8:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),m}(_.c)},280:function(t,e,n){"use strict";var r={mounted:function(){}},o=(n(342),n(66)),c=n(76),l=n.n(c),f=n(452),v=n(453),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"vuesax-compat",nativeOn:{contextmenu:function(t){t.preventDefault()}}},[t.$auth.loggedIn?n("Menubar"):t._e(),t._v(" "),n("v-main",{staticClass:"wp-main-background"},[n("Nuxt")],1)],1)}),[],!1,null,"5c615398",null);e.a=component.exports;l()(component,{Menubar:n(269).default}),l()(component,{VApp:f.a,VMain:v.a})},281:function(t,e,n){"use strict";var r={mounted:function(){}},o=(n(387),n(66)),c=n(76),l=n.n(c),f=n(452),v=n(453),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"vuesax-compat",nativeOn:{contextmenu:function(t){t.preventDefault()}}},[t.$auth.loggedIn?n("Menubar"):t._e(),t._v(" "),n("v-main",{staticClass:"wp-start-background"},[n("Nuxt")],1)],1)}),[],!1,null,"40fe53a5",null);e.a=component.exports;l()(component,{Menubar:n(269).default}),l()(component,{VApp:f.a,VMain:v.a})},303:function(t,e,n){n(304),t.exports=n(305)},330:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b2f3e6fc",content,!0,{sourceMap:!1})},331:function(t,e,n){var r=n(19)(!1);r.push([t.i,"html{overflow-y:auto!important}",""]),t.exports=r},334:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bd6da550",content,!0,{sourceMap:!1})},335:function(t,e,n){var r=n(19)(!1);r.push([t.i,".vs-navbar__group__items .nav-title{font-size:.4cm}.fill-width{width:100%!important}",""]),t.exports=r},336:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4c2bc7c8",content,!0,{sourceMap:!1})},337:function(t,e,n){var r=n(19),o=n(176),c=n(338),l=n(339),f=r(!1),v=o(c),d=o(l);f.push([t.i,'@font-face{font-family:"Shadows Into Light Two";font-style:normal;font-weight:400;src:local(""),url('+v+') format("woff2"),url('+d+') format("woff")}body,html{font-size:20px!important}',""]),t.exports=f},338:function(t,e,n){t.exports=n.p+"fonts/shadows-into-light-two-v8-latin-regular.9987965.woff2"},339:function(t,e,n){t.exports=n.p+"fonts/shadows-into-light-two-v8-latin-regular.6cdb3b7.woff"},342:function(t,e,n){"use strict";n(241)},343:function(t,e,n){var r=n(19)(!1);r.push([t.i,".wp-main-background[data-v-5c615398]{background-size:cover;background-position:50%}",""]),t.exports=r},387:function(t,e,n){"use strict";n(250)},388:function(t,e,n){var r=n(19)(!1);r.push([t.i,".wp-start-background[data-v-40fe53a5]{background-image:url(https://cdn.wallpapersafari.com/1/22/8kIjEY.gif);background-size:cover;background-position:50%}",""]),t.exports=r},389:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"state",(function(){return l})),n.d(e,"getters",(function(){return f})),n.d(e,"mutations",(function(){return v})),n.d(e,"actions",(function(){return d})),n.d(e,"plugins",(function(){return h}));var r=n(5),o=(n(45),n(273)),c=n(272),l=function(){return{stateLoaded:!1}},f={stateLoaded:function(t){return t.stateLoaded}},v={stateLoaded:function(t,e){t.stateLoaded=e}},d={stateLoaded:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.commit("stateLoaded",!0);case 2:case"end":return e.stop()}}),e)})))()}},m=t.env.version?t.env.version:"0",h=[new o.a({storage:c,asyncStorage:!0,key:"state-"+m,modules:["general"]}).plugin]}.call(this,n(174))},391:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c}));var r=function(){return{theme:{dark:!0}}},o={themeDark:function(t){return t.theme.dark}},c={setThemeDark:function(t,e){t.theme.dark=e}}}},[[303,30,5,31]]]);