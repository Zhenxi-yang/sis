(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{593:function(t,e,n){"use strict";n.r(e);n(11),n(6),n(13),n(17),n(7),n(18);var r=n(55),o=n(2);n(283);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={auth:!1,layout:"start",data:function(){return{step:1,step1:{above18:!1,createdAccount:!1},step2:{understand:!1,granted:!1}}},head:function(){var t=this.$nuxtI18nHead({addSeoAttributes:!0});return{htmlAttrs:l({},t.htmlAttrs),meta:Object(r.a)(t.meta),link:Object(r.a)(t.link)}},methods:{grantPermissions:function(){this.$gapi.login(),this.step2.granted=!0},finalize:function(){var t=this;this.$auth.loginWith("google").then((function(){t.$router.push("schedule")}))}}},d=n(66),h=n(76),k=n.n(h),_=n(469),f=n(458),m=n(457),y=n(576),w=n(574),O=n(610),x=n(575),$=n(577),j=n(578),P=n(579),C=n(580),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("v-stepper",{attrs:{vertical:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-stepper-step",{attrs:{complete:t.step>1,step:"1",color:"pink darken-1"}},[t._v("\n          "+t._s(t.$t("Prerequisites"))+"\n          "),n("small",[t._v(t._s(t.$t("Preparations and requirements")))])]),t._v(" "),n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{"min-height":"200px"}},[n("v-card-text",[n("p",[t._v("\n                In order to use the Sissy App you are going to need to do a\n                couple of things first.\n              ")]),t._v(" "),n("v-checkbox",{attrs:{color:"pink darken-1",label:"Are you above the age of 18?",hint:"This app really, really isn't suitable for users below the age of 18.","persistent-hint":""},model:{value:t.step1.above18,callback:function(e){t.$set(t.step1,"above18",e)},expression:"step1.above18"}}),t._v(" "),n("v-checkbox",{attrs:{color:"pink darken-1",label:"Create Google account",hint:"If you already have one you can certainly use it, but be aware of the potential security risks and unwanted attention that may be attracted to the account you decide to use.","persistent-hint":""},model:{value:t.step1.createdAccount,callback:function(e){t.$set(t.step1,"createdAccount",e)},expression:"step1.createdAccount"}})],1)],1),t._v(" "),n("v-btn",{attrs:{disabled:!t.step1.above18||!t.step1.createdAccount,color:"pink darken-1"},on:{click:function(e){t.step=2}}},[t._v("\n            Continue\n          ")]),t._v(" "),n("v-btn",{attrs:{text:"",to:t.localePath("index"),color:"pink darken-1"}},[t._v("\n            "+t._s(t.$t("Cancel"))+"\n          ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.step>2,step:"2",color:"pink darken-1"}},[t._v("\n          "+t._s(t.$t("Grant permissions"))+"\n          "),n("small",[t._v(t._s(t.$t("You gotta invite us in, we're like vampires!")))])]),t._v(" "),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12"},[n("v-card-text",[n("p",[t._v("\n                Press the button below to log into your Google account and\n                grant us the proper permissions.\n              ")]),t._v(" "),n("p",[t._v("\n                If we already have the proper permissions you'll just see a\n                window pop up and disappear.\n              ")]),t._v(" "),n("v-checkbox",{attrs:{color:"pink darken-1",label:"I understand what it means to grant these permissions"},model:{value:t.step2.understand,callback:function(e){t.$set(t.step2,"understand",e)},expression:"step2.understand"}}),t._v(" "),n("v-btn",{attrs:{disabled:!t.step2.understand,block:"","x-large":"",color:"pink darken-1"},on:{click:t.grantPermissions}},[t._v(t._s(t.$t("Grant permissions")))])],1)],1),t._v(" "),n("v-btn",{attrs:{disabled:!t.step2.understand||!t.step2.granted,color:"pink darken-1"},on:{click:function(e){t.step=3}}},[t._v("\n            Continue\n          ")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"pink darken-1"},on:{click:function(e){t.step=1}}},[t._v("\n            "+t._s(t.$t("Previous"))+"\n          ")])],1),t._v(" "),n("v-stepper-step",{attrs:{step:"3",color:"pink darken-1"}},[t._v("\n          "+t._s(t.$t("Finalize"))+"\n          "),n("small",[t._v(t._s(t.$t("Summary of your settings")))])]),t._v(" "),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12"},[n("v-card-text",[n("p",[t._v("Thank you for joining!")]),t._v(" "),n("p",[t._v("\n                Here's a summary of the settings your account is being set up\n                with. (WIP)\n              ")]),t._v(" "),t._e()],1)],1),t._v(" "),n("v-btn",{attrs:{color:"pink darken-1"},on:{click:t.finalize}},[t._v(" Log in ")]),t._v(" "),n("v-btn",{attrs:{color:"pink darken-1",text:""},on:{click:function(e){t.step=2}}},[t._v("\n            "+t._s(t.$t("Previous"))+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:_.a,VCard:f.a,VCardText:m.a,VCheckbox:y.a,VCol:w.a,VContainer:O.a,VRow:x.a,VSimpleTable:$.a,VStepper:j.a,VStepperContent:P.a,VStepperStep:C.a})}}]);