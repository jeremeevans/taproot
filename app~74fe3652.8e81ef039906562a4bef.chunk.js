(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"services/service":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Overview",(function(){return l}));var r=n("aurelia-framework"),i=n("services/service-index"),o=n("CnLv"),c=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(t,n,r,i){return new(r||(r=e))((function(e,o){function c(e){try{a(i.next(e))}catch(e){o(e)}}function s(e){try{a(i.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,s)}a((i=i.apply(t,n||[])).next())}))},u=function(e,t){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){c.label=o[1];break}if(6===o[0]&&c.label<i[1]){c.label=i[1],i=o;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(o);break}i[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},l=function(){function e(e,t){this.serviceIndex=e,this.serviceApi=t}return e.prototype.activate=function(e,t,n){return a(this,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return[4,this.serviceApi.get({serviceKey:this.serviceIndex.serviceKey})];case 1:return e=t.sent(),n.config.title=e.Name,[2]}}))}))},e=c([Object(r.g)(),s("design:paramtypes",[i.Service,o.g])],e)}()}.call(this,n("B/eG").default)},"services/service-index":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Service",(function(){return f}));var r=n("aurelia-framework"),i=n("4ysu"),o=n("app"),c=n("CnLv"),s=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(t,n,r,i){return new(r||(r=e))((function(e,o){function c(e){try{a(i.next(e))}catch(e){o(e)}}function s(e){try{a(i.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,s)}a((i=i.apply(t,n||[])).next())}))},l=function(e,t){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){c.label=o[1];break}if(6===o[0]&&c.label<i[1]){c.label=i[1],i=o;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(o);break}i[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},f=function(){function e(e,t){this.app=e,this.servicesApi=t}return e.prototype.canActivate=function(e){return u(this,void 0,void 0,(function(){var t,n;return l(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=this,[4,this.servicesApi.get({serviceKey:e.key})];case 1:return t.service=r.sent(),[3,3];case 2:return r.sent(),this.service=void 0,this.app.childRouter=void 0,n={replace:!0,trigger:!0},[2,new i.b(this.app.router.generate("NotFound"),n)];case 3:return this.serviceKey=this.service.Key,[2,!0]}}))}))},e.prototype.activate=function(){this.service&&(this.app.childRouter=this.router)},e.prototype.deactivate=function(){this.app.childRouter=void 0},e.prototype.configureRouter=function(e,t){var n=this,r=[];r.push({route:"",name:"ServiceOverview",moduleId:"./service",title:"Service"}),r.push({route:"users",name:"ServiceUsers",moduleId:"./users/users",nav:!0,title:"Users",icon:"icon-users",settings:{newText:"New User",newAction:function(){n.router.navigateToRoute("NewUser")},entityName:"user"}}),r.push({route:"users/new",name:"NewUser",moduleId:"./users/new-user",title:"New User"}),r.push({route:"plans",name:"ServicePlans",moduleId:"./plans/plans",nav:!0,title:"Plans",icon:"icon-papers",settings:{newText:"New Plan",newAction:function(){n.router.navigateToRoute("NewPlan")},entityName:"plan"}}),r.push({route:"plans/new",name:"NewPlan",moduleId:"./plans/new-plan",title:"New Plan"}),r.push({route:"roles",name:"ServiceRoles",moduleId:"./roles/roles",nav:!0,title:"Roles",icon:"icon-shield-check",settings:{newText:"New Role",newAction:function(){n.router.navigateToRoute("NewRole")},entityName:"role"}}),r.push({route:"roles/new",name:"NewRole",moduleId:"./roles/new-role",title:"New Role"}),r.push({route:"rights",name:"ServiceRights",moduleId:"./rights/rights",nav:!0,title:"Rights",icon:"icon-traffic-lights",settings:{newText:"New Right",newAction:function(){n.router.navigateToRoute("NewRight")},entityName:"right"}}),r.push({route:"rights/new",name:"NewRight",moduleId:"./rights/new-right",title:"New Right"}),e.map(r),this.router=t},e=s([Object(r.g)(),a("design:paramtypes",[o.App,c.g])],e)}()}.call(this,n("B/eG").default)},"services/service-index.html":function(e,t){e.exports="<template>\n  <router-view></router-view>\n</template>\n"},"services/service.html":function(e,t){e.exports="<template>\n  <h1>This is a fancy service, I guess...</h1>\n</template>\n"},"services/services":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Services",(function(){return l}));var r=n("aurelia-framework"),i=n("CnLv"),o=n("4ysu"),c=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(t,n,r,i){return new(r||(r=e))((function(e,o){function c(e){try{a(i.next(e))}catch(e){o(e)}}function s(e){try{a(i.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,s)}a((i=i.apply(t,n||[])).next())}))},u=function(e,t){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){c.label=o[1];break}if(6===o[0]&&c.label<i[1]){c.label=i[1],i=o;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(o);break}i[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},l=function(){function e(e,t){this.servicesAPI=e,this.router=t}return e.prototype.activate=function(){return a(this,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return e=this,[4,this.servicesAPI.filter({Page:1,PageSize:10})];case 1:return e.services=t.sent().Results,[2]}}))}))},e.prototype.goToService=function(e){this.router.navigateToRoute("Service",{key:e})},e=c([Object(r.g)(),s("design:paramtypes",[i.g,o.d])],e)}()}.call(this,n("B/eG").default)},"services/services.html":function(e,t){e.exports='<template>\n  <div repeat.for="service of services">\n    <div class="service-card">\n      <button click.delegate="goToService(service.Key)">\n        <span>${service.Name}</span>\n      </button>\n\n      <footer>\n        <span>Key: </span>\n        <strong>${service.Key}</strong>\n        <button class="primary">\n          <span>Get Secrect</span>\n        </button>\n      </footer>\n    </div>\n  </div>\n</template>\n'},"services/users/new-user":function(e,t,n){"use strict";n.r(t),n.d(t,"NewUser",(function(){return r}));var r=function(){}},"services/users/new-user.html":function(e,t){e.exports="<template>\n  <h2>Implement create new user...</h2>\n</template>\n"},"services/users/users":function(e,t,n){"use strict";n.r(t),n.d(t,"Users",(function(){return u}));var r=n("espalier-js"),i=n("services/service-index"),o=n("aurelia-framework"),c=n("BEPO"),s=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e,t){this.dsFactory=t,this.serviceIndex=e}return e.prototype.attached=function(){this.usersGrid.settings={columns:[{propertyName:"Name"},{propertyName:"EmailAddress"}],dataSource:this.dsFactory.HttpSource(c.b+"/Users?ServiceKey="+this.serviceIndex.serviceKey)}},e=s([Object(o.g)(),a("design:paramtypes",[i.Service,r.DataSourceFactory])],e)}()},"services/users/users.html":function(e,t){e.exports='<template>\n  <esp-grid view-model.ref="usersGrid"></esp-grid>\n</template>\n'},"settings/index":function(e,t,n){"use strict";n.r(t),n.d(t,"Settings",(function(){return r}));var r=function(){}},"settings/index.html":function(e,t){e.exports='<template>\n  <header class="page-head">\n    <h1>Settings</h1>\n  </header>\n</template>\n'}},[[0,6,24,27,25,26,28,29,21,32,33,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,30,31,34,35,36,37,38,5,1,2,4,3]]]);
//# sourceMappingURL=app~74fe3652.8e81ef039906562a4bef.bundle.map