webpackJsonp([1],Array(18).concat([function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n(12),s=n.n(a),i=n(13),r=n.n(i),c=n(113),o=n.n(c),u=n(115),d=n.n(u),l=function(){function t(e){s()(this,t),this.hash=d()(e)}return r()(t,[{key:"generate",value:function(){return"data:image/svg+xml;base64,"+new o.a(this.hash,{margin:.2,size:64,format:"svg"}).toString()}}]),t}()},,,function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(12),s=n.n(a),i=n(13),r=n.n(i),c=n(31),o=n(47),u=function(){function t(){s()(this,t)}return r()(t,null,[{key:"push",value:function(t){c.a.dispatch({type:o.a.PUSH,route:t})}},{key:"route",value:function(){return c.a.getState().router}}]),t}()},,,,,,,,,function(t,e,n){"use strict";var a=n(31),s=n(21);e.a={name:"App",data:function(){return{drawer:!1,logout:!1,path:"/",appItems:[{icon:"star",label:"Ranking",to:"/ranking"},{icon:"forum",label:"Messenger",to:"/messenger"},{icon:"people",label:"Staff",to:"/staff"}],settingsItems:[{icon:"settings",label:"Paramètres",to:"/settings"},{icon:"code",label:"A propos",to:"/about"}],bottomItems:[{icon:"home",label:"Home",to:"/"},{icon:"star",label:"Succès",to:"/achievements"},{icon:"camera",label:"Caméra",to:"/camera"}]}},beforeMount:function(){var t=this;this.path=s.a.route().path,this.unsubscribe=a.a.subscribe(function(){t.path=s.a.route().path})},beforeDestroy:function(){this.unsubscribe()},methods:{toggle:function(){this.drawer=!this.drawer},go:function(t){s.a.push({path:t})}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n(78),s=n(37),i=n(172),r=Object(a.b)(Object(a.a)({router:Object(i.a)(s.a)}))},,,,,,function(t,e,n){"use strict";var a=n(29),s=n(94),i=n(97),r=n(100),c=n(103),o=n(106),u=n(119),d=n(122),l=n(125),m=n(128);e.a=new a.a({routes:[{path:"/",component:r.a},{path:"/about",component:s.a},{path:"/camera",component:i.a},{path:"/settings",component:c.a},{path:"/achievements",component:o.a},{path:"/achievements/:id",component:u.a,props:!0},{path:"/messenger",component:d.a},{path:"/ranking",component:m.a},{path:"/staff",component:l.a}]})},function(t,e,n){"use strict";e.a={name:"SwAbout"}},function(t,e,n){"use strict";e.a={name:"SwCamera",data:function(){return{allowed:!0,snackbar:!1}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$refs,n=e.scanner,a=e.container,s=a.clientWidth,i=a.clientHeight;n.setAttribute("active","true"),n.setAttribute("continuous","true"),n.setAttribute("width",s),n.setAttribute("height",i),n.addEventListener("qrcode-decoded",function(t){console.log(t.detail)})})}}},function(t,e,n){"use strict";e.a={name:"SwHome",data:function(){return{size:360,signin:!1,icon:"account_box",label:"Bonjour !",description:"Connexion via le qrcode de votre badge du startup week-end"}}}},function(t,e,n){"use strict";e.a={name:"SwSettings",data:function(){return{local_data:!1}},methods:{removeData:function(){this.local_data=!0}}}},function(t,e,n){"use strict";var a=n(18),s=n(45),i=n(21);e.a={name:"SwAchievements",data:function(){return{error:!1,achievements:[]}},beforeMount:function(){var t=this;s.a.find().then(function(e){t.achievements=e}).catch(function(e){t.error=!0,console.error(e)})},methods:{go:function(t){i.a.push({path:t})}},filters:{avatar:function(t){return new a.a(t).generate()}}}},,,function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n(12),s=n.n(a),i=n(13),r=n.n(i),c=n(46),o=function(){function t(){s()(this,t)}return r()(t,null,[{key:"find",value:function(){return fetch(c.a+"/achievements/").then(function(t){return t.json()})}},{key:"get",value:function(t){return fetch(c.a+"/achievements/"+t).then(function(t){return t.json()})}}]),t}()},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a="http://192.168.0.13:9300/api/v0"},function(t,e,n){"use strict";e.a={PUSH:"@@router/push"}},function(t,e,n){"use strict";var a=n(18),s=n(45);e.a={name:"SwAchievement",props:["id"],data:function(){return{achievement:{}}},beforeMount:function(){var t=this;s.a.get(this.id).then(function(e){t.achievement=e}).catch(console.error)},filters:{avatar:function(t){return new a.a(t||"").generate()}}}},function(t,e,n){"use strict";e.a={name:"SwMessenger",data:function(){return{size:360,message:"",options:[],messages:[]}}}},function(t,e,n){"use strict";e.a={name:"SwStaff"}},function(t,e,n){"use strict";var a=n(18),s=n(130);e.a={name:"SwRanking",data:function(){return{error:!0,ranks:[]}},beforeMount:function(){var t=this;s.a.get().then(function(e){t.error=!1,t.ranks=e}).catch(function(){t.error=!0})},mounted:function(){var t=this;this.interval=setInterval(function(){s.a.get().then(function(e){t.error=!1,t.ranks=e}).catch(function(){t.error=!0})},5e3)},beforeDestroy:function(){clearInterval(this.interval)},filters:{avatar:function(t){return new a.a(t||"").generate()}}}},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(69),s=(n.n(a),n(71)),i=(n.n(s),n(28)),r=n(75),c=n.n(r),o=n(29),u=n(76),d=n(37),l=n(21);i.default.use(o.a),i.default.use(c.a),i.default.config.productionTip=!1;var m=new i.default({router:d.a,render:function(t){return t(u.a)}}),v=location,f=v.hash;f&&f.startsWith("#")&&(f=f.substr(1)),l.a.push({path:f||"/"}),m.$mount("#app")},function(t,e){},,function(t,e){},,,,,function(t,e,n){"use strict";function a(t){n(77)}var s=n(30),i=n(173),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-7fec7c98",null);e.a=o.exports},function(t,e){},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){n(95)}var s=n(38),i=n(96),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-1cc9de9e",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-container"},[n("h2",{staticClass:"md-title"},[t._v("Source")]),t._v(" "),n("p",{staticClass:"md-body-2"},[t._v("Code with love hosted by "),n("a",{attrs:{href:"https://github.com/FlorentinDUBOIS/achievements"}},[t._v("GitHub")]),t._v(".")]),t._v(" "),n("h2",{staticClass:"md-title"},[t._v("License")]),t._v(" "),n("p",{staticClass:"md-body-2"},[t._v("MIT License")]),t._v(" "),n("p",{staticClass:"md-body-2"},[t._v("Copyright (c) 2018 Florentin DUBOIS")]),t._v(" "),n("p",{staticClass:"md-body-2"},[t._v('\n    Permission is hereby granted, free of charge, to any person obtaining a copy\n    of this software and associated documentation files (the "Software"), to deal\n    in the Software without restriction, including without limitation the rights\n    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n    copies of the Software, and to permit persons to whom the Software is\n    furnished to do so, subject to the following conditions:\n  ')]),t._v(" "),n("p",{staticClass:"md-body-2"},[t._v("\n    The above copyright notice and this permission notice shall be included in all\n    copies or substantial portions of the Software.\n  ")]),t._v(" "),n("p",{staticClass:"md-body-2"},[t._v('\n    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n    SOFTWARE.\n  ')])])}],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){n(98)}var s=n(39),i=n(99),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-557167bf",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"camera-container"},[t.allowed?t._e():n("div",{staticClass:"state"},[n("md-empty-state",{staticClass:"md-accent",attrs:{"md-rounded":"","md-icon":"error_outline","md-label":"Caméra inaccessible","md-size":360,"md-description":"Veuillez activer la caméra afin de scanner les qrcodes"}})],1),t._v(" "),t.allowed?n("div",[n("granite-qrcode-scanner",{ref:"scanner"})],1):t._e(),t._v(" "),n("md-snackbar",{attrs:{"md-position":"center","md-duration":5e3,"md-active":t.snackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.snackbar=e}}},[n("span",[t._v("La caméra est requise pour lire les qrcodes")]),t._v(" "),n("md-button",{staticClass:"md-accent"},[t._v("Réessayer")])],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){n(101)}var s=n(40),i=n(102),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-f4c3c150",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("md-empty-state",{attrs:{"md-rounded":"","md-size":t.size,"md-icon":t.icon,"md-label":t.label,"md-description":t.description}},[t.signin?t._e():n("md-button",{staticClass:"md-dense md-primary md-raised"},[t._v("\n        Se connecter\n      ")])],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){n(104)}var s=n(41),i=n(105),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-c752383a",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-container"},[n("md-list",[n("md-subheader",[t._v("Données")]),t._v(" "),n("md-list-item",{on:{click:function(e){t.removeData()}}},[n("md-icon",[t._v("data_usage")]),t._v(" "),n("span",{staticClass:"md-list-item-text"},[t._v("Supprimer les données locales")])],1)],1),t._v(" "),n("md-snackbar",{attrs:{"md-position":"center","md-duration.number":"5000","md-active":t.local_data,"md-persistent":""},on:{"update:mdActive":function(e){t.local_data=e}}},[n("span",[t._v("Les données locales ont été supprimées")]),t._v(" "),n("md-button",{staticClass:"md-accent",on:{click:function(e){t.local_data=!1}}},[t._v("Fermer")])],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){n(107)}var s=n(42),i=n(118),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-6b24b043",null);e.a=o.exports},function(t,e){},,,,,,,,,,,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"achievements-container"},[t.error?n("div",{staticClass:"state"},[n("md-empty-state",{staticClass:"md-accent",attrs:{"md-rounded":"","md-icon":"error_outline","md-label":"Succès indisponibles","md-size":360,"md-description":"Veuillez vérifier votre connexion à Internet"}})],1):t._e(),t._v(" "),t.error?t._e():n("md-list",{},[n("md-subheader",[t._v("Succès")]),t._v(" "),t._l(t.achievements,function(e){return n("md-list-item",{key:e.id,on:{click:function(n){t.go("/achievements/"+e.id)}}},[n("md-avatar",[n("img",{attrs:{src:t._f("avatar")(e.id),alt:"avatar"}})]),t._v(" "),n("div",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.description))])])],1)})],2)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){n(120)}var s=n(48),i=n(121),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-fd9669ba",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"achievement-container"},[n("md-card",{staticClass:"mt"},[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v(t._s(t.achievement.name))]),t._v(" "),n("div",{staticClass:"md-subtitle"},[t._v(t._s(t.achievement.description))])]),t._v(" "),n("md-card-media",{attrs:{"md-medium":""}},[n("img",{attrs:{src:t._f("avatar")(t.id),alt:"People"}})])],1)],1),t._v(" "),n("md-card",[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("QrCode du Succès")])])],1),t._v(" "),n("md-card-media",{attrs:{"md-medium":"",id:"qrcode"}},[n("granite-qrcode-generator",{attrs:{data:t.id,mode:"alphanumeric",modulesize:"10",auto:""}})],1)],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){n(123)}var s=n(49),i=n(124),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-ec3a4e82",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"messenger-container"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"state"},[n("md-empty-state",{attrs:{"md-icon":"chat_bubble_outline","md-label":"Aucun message"}})],1)]),t._v(" "),n("md-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"0"}},[n("div",{staticClass:"md-toolbar-row"},[n("md-autocomplete",{attrs:{"md-options":t.options,"md-layout":"box"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[n("label",[t._v("Message")])])],1)])],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){n(126)}var s=n(50),i=n(127),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-30a3ea10",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"staff-container"})},s=[],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){n(129)}var s=n(51),i=n(171),r=n(2),c=a,o=r(s.a,i.a,!1,c,"data-v-5d05b35c",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return f});var a=n(131),s=n.n(a),i=n(134),r=n.n(i),c=n(143),o=n.n(c),u=n(12),d=n.n(u),l=n(13),m=n.n(l),v=n(46),f=function(){function t(){d()(this,t)}return m()(t,null,[{key:"get",value:function(){function t(){return e.apply(this,arguments)}var e=o()(s.a.mark(function t(){var e,n,a,i,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(v.a+"/ranking/");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,t.t0=s.a.keys(n);case 7:if((t.t1=t.t0()).done){t.next=18;break}return a=t.t1.value,t.next=11,fetch(v.a+"/users/"+n[a].user_id);case 11:return i=t.sent,t.next=14,i.json();case 14:c=t.sent,n[a]=r()({user:c},n[a]),t.next=7;break;case 18:return t.abrupt("return",n.sort(function(t,e){return t.count>e.count?1:t.count<e.count?-1:0}));case 19:case"end":return t.stop()}},t,this)}));return t}()}]),t}()},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ranking-container"},[t.error?n("div",{staticClass:"state"},[n("md-empty-state",{staticClass:"md-accent",attrs:{"md-rounded":"","md-icon":"error_outline","md-label":"Succès indisponibles","md-size":360,"md-description":"Veuillez vérifier votre connexion à Internet"}})],1):t._e(),t._v(" "),t.error?t._e():n("md-list",{},[n("md-subheader",[t._v("Rang")]),t._v(" "),t._l(t.ranks,function(e){return n("md-list-item",{key:e.user_id},[n("md-avatar",[n("img",{attrs:{src:t._f("avatar")(e.user_id),alt:"avatar"}})]),t._v(" "),n("div",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(e.user_id))]),t._v(" "),n("span",[t._v("Nombre: "+t._s(e.count))])])],1)})],2)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},function(t,e,n){"use strict";function a(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];switch(n.type){case r.a.PUSH:return t.push(n.route),i()({},e,n.route);default:return e}}}e.a=a;var s=n(52),i=n.n(s),r=n(47)},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("md-app",{attrs:{"md-mode":"reveal"}},[n("md-app-toolbar",{staticClass:"md-primary"},[n("div",{staticClass:"md-toolbar-row"},[n("div",{staticClass:"md-toolbar-section-start"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.toggle()}}},[n("md-icon",[t._v("menu")])],1),t._v(" "),n("span",{staticClass:"md-title"},[t._v("SW Succès")])],1),t._v(" "),t.logout?n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("power_settings_new")])],1)],1):t._e()])]),t._v(" "),n("md-app-drawer",{attrs:{"md-active":t.drawer},on:{"update:mdActive":function(e){t.drawer=e}}},[n("md-list",[n("md-subheader",[t._v("Application")]),t._v(" "),t._l(t.appItems,function(e){return n("md-list-item",{key:e.icon,attrs:{to:e.to}},[n("md-icon",[t._v(t._s(e.icon))]),t._v(" "),n("span",{staticClass:"md-list-item-text"},[t._v(t._s(e.label))])],1)}),t._v(" "),n("md-divider"),t._v(" "),n("md-subheader",[t._v("Paramètres")]),t._v(" "),t._l(t.settingsItems,function(e){return n("md-list-item",{key:e.icon,attrs:{to:e.to}},[n("md-icon",[t._v(t._s(e.icon))]),t._v(" "),n("span",{staticClass:"md-list-item-text"},[t._v(t._s(e.label))])],1)})],2)],1),t._v(" "),n("md-app-content",[n("div",{staticClass:"content"},[n("router-view")],1),t._v(" "),n("md-bottom-bar",{staticClass:"md-accent",attrs:{"md-sync-route":"","md-active-item":t.path}},t._l(t.bottomItems,function(e){return n("md-bottom-bar-item",{key:e.icon,attrs:{id:e.to,"md-label":e.label,"md-icon":e.icon},on:{click:function(n){t.go(e.to)}}})}))],1)],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i}]),[68]);
//# sourceMappingURL=app.799b74bde0865cda3ebc.js.map