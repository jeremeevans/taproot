(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3ljv":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h}));var r=n("1aCK"),o=n("aurelia-framework"),a=n("espalier-js"),i=n("BEPO"),u=n("aurelia-event-aggregator"),c=n("CnLv"),s=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},f=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(e,n,r,o){return new(r||(r=t))((function(t,a){function i(t){try{c(o.next(t))}catch(t){a(t)}}function u(t){try{c(o.throw(t))}catch(t){a(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(i,u)}c((o=o.apply(e,n||[])).next())}))},p=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};var h=function(){function e(t,e,n,r,o){this.http=t,this.auth=e,this.api=n,this.espConfig=r,this.eventAggregator=o,this.outstandingRequestCount=0,this.globalErrors=[],this.configured=!1,e.setServiceKey(i.c)}return e.prototype.doConfig=function(){if(!this.configured){this.api.basePath=i.b;var e=this,n={request:function(t){return e.globalErrors.splice(0),t.url.startsWith(i.b)&&!t.headers.get("SERVICE-KEY")&&t.headers.add("SERVICE-KEY",i.c),t.url.startsWith(i.b)&&e.auth.getTaprootToken()&&!t.headers.get("TAPROOT-TOKEN")&&t.headers.add("TAPROOT-TOKEN",e.auth.getTaprootToken()),e.outstandingRequestCount+=1,t},response:function(t){return e.outstandingRequestCount-=1,t},requestError:function(t){throw e.outstandingRequestCount-=1,t},responseError:function(n){return l(this,void 0,void 0,(function(){var r,o,a,i;return p(this,(function(u){if(e.outstandingRequestCount-=1,c=n.content,(s=c).Messages&&s.Messages.length>0)for(r=0,o=n.content.Messages;r<o.length;r++)a=o[r],i=a.split("::"),401==n.statusCode?e.eventAggregator.publish("sign-out"):2==i.length?e.eventAggregator.publish("error:espalier:"+i[0],i[1]):e.globalErrors.push(a);var c,s;return[2,t.reject(n)]}))}))}};this.http.configure((function(t){t.withInterceptor(n)})),this.configured=!0}},s([Object(o.m)(),f("design:type",Array)],e.prototype,"globalErrors",void 0),e=s([Object(o.g)(),f("design:paramtypes",[r.a,c.b,c.a,a.EspalierConfig,u.a])],e)}()}).call(this,n("B/eG").default)},CnLv:function(t,e,n){"use strict";var r=n("ZxGs");n.d(e,"a",(function(){return r.a}));var o=n("KA4A");n.d(e,"b",(function(){return o.a}));var a=n("40LT");n.d(e,"c",(function(){return a.a}));var i=n("Lo+S");n.d(e,"d",(function(){return i.a}));var u=n("EQqp");n.d(e,"e",(function(){return u.a}));var c=n("5YAU");n.d(e,"f",(function(){return c.a}));var s=n("XUBG");n.d(e,"g",(function(){return s.a}));var f=n("DtoF");n.d(e,"h",(function(){return f.a}));n("xx5e")},DtoF:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h}));var r,o=n("aurelia-framework"),a=n("1aCK"),i=n("ZxGs"),u=n("KA4A"),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},f=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(e,n,r,o){return new(r||(r=t))((function(t,a){function i(t){try{c(o.next(t))}catch(t){a(t)}}function u(t){try{c(o.throw(t))}catch(t){a(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(i,u)}c((o=o.apply(e,n||[])).next())}))},p=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},h=function(t){function e(e,n){return t.call(this,e,n)||this}return c(e,t),e.prototype.signIn=function(t){return l(this,void 0,void 0,(function(){var e,n;return p(this,(function(r){switch(r.label){case 0:return e=this.basePath+"/Tokens",[4,this.httpClient.createRequest(e).asPost().withHeader("content-type","application/json").withContent(JSON.stringify(t.model||{})).send()];case 1:if((n=r.sent()).statusCode<200||n.statusCode>=300)throw new Error(n.content);return[2,n.content]}}))}))},e=s([Object(o.g)(),f("design:paramtypes",[a.a,u.a])],e)}(i.a)}).call(this,n("B/eG").default)},XUBG:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h}));var r,o=n("aurelia-framework"),a=n("1aCK"),i=n("ZxGs"),u=n("KA4A"),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},f=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(e,n,r,o){return new(r||(r=t))((function(t,a){function i(t){try{c(o.next(t))}catch(t){a(t)}}function u(t){try{c(o.throw(t))}catch(t){a(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(i,u)}c((o=o.apply(e,n||[])).next())}))},p=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},h=function(t){function e(e,n){return t.call(this,e,n)||this}return c(e,t),e.prototype.create=function(t){return l(this,void 0,void 0,(function(){var e,n;return p(this,(function(r){switch(r.label){case 0:return e=this.basePath+"/Services",[4,this.httpClient.createRequest(e).asPost().withHeader("content-type","application/json").withContent(JSON.stringify(t.model||{})).send()];case 1:if((n=r.sent()).statusCode<200||n.statusCode>=300)throw new Error(n.content);return[2,n.content]}}))}))},e.prototype.filter=function(t){return l(this,void 0,void 0,(function(){var e,n;return p(this,(function(r){switch(r.label){case 0:return e=this.basePath+"/Services",[4,this.httpClient.createRequest(e).asGet().withParams({Page:t.Page,PageSize:t.PageSize,ReturnAll:t.ReturnAll,SortOn:t.SortOn,SortOrder:t.SortOrder}).send()];case 1:if((n=r.sent()).statusCode<200||n.statusCode>=300)throw new Error(n.content);return[2,n.content]}}))}))},e.prototype.get=function(t){return l(this,void 0,void 0,(function(){var e,n;return p(this,(function(r){switch(r.label){case 0:return this.ensureParamIsSet("get",t,"serviceKey"),e=(this.basePath+"/Services/{serviceKey}").replace("{serviceKey}",encodeURIComponent(""+t.serviceKey)),[4,this.httpClient.createRequest(e).asGet().send()];case 1:if((n=r.sent()).statusCode<200||n.statusCode>=300)throw new Error(n.content);return[2,n.content]}}))}))},e=s([Object(o.g)(),f("design:paramtypes",[a.a,u.a])],e)}(i.a)}).call(this,n("B/eG").default)},main:function(t,e,n){"use strict";n.d(e,"configure",(function(){return o}));var r=n("BEPO");n("70NS");function o(t){return t.use.standardConfiguration().feature("resources/index").plugin("espalier-js").plugin("aurelia-validation"),t.use.developmentLogging(r.a?"debug":"warn"),r.d&&t.use.plugin("aurelia-testing"),t.start().then((function(){return t.setRoot("not-authenticated/not-authenticated")}))}},xx5e:function(t,e,n){"use strict";(function(t){var e,r=n("aurelia-framework"),o=n("1aCK"),a=n("ZxGs"),i=n("KA4A"),u=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,n)},function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),c=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(e,n,r,o){return new(r||(r=t))((function(t,a){function i(t){try{c(o.next(t))}catch(t){a(t)}}function u(t){try{c(o.throw(t))}catch(t){a(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(i,u)}c((o=o.apply(e,n||[])).next())}))},l=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};!function(t){function e(e,n){return t.call(this,e,n)||this}u(e,t),e.prototype.create=function(t){return f(this,void 0,void 0,(function(){var e,n;return l(this,(function(r){switch(r.label){case 0:return e=this.basePath+"/Users",[4,this.httpClient.createRequest(e).asPost().withHeader("content-type","application/json").withContent(JSON.stringify(t.userToSave||{})).send()];case 1:if((n=r.sent()).statusCode<200||n.statusCode>=300)throw new Error(n.content);return[2,n.content]}}))}))},e.prototype.filter=function(t){return f(this,void 0,void 0,(function(){var e,n;return l(this,(function(r){switch(r.label){case 0:return e=this.basePath+"/Users",[4,this.httpClient.createRequest(e).asGet().withParams({Roles:t.Roles,NameOrEmail:t.NameOrEmail,ServiceKey:t.ServiceKey,Page:t.Page,PageSize:t.PageSize,ReturnAll:t.ReturnAll,SortOn:t.SortOn,SortOrder:t.SortOrder}).send()];case 1:if((n=r.sent()).statusCode<200||n.statusCode>=300)throw new Error(n.content);return[2,n.content]}}))}))},e.prototype.get=function(t){return f(this,void 0,void 0,(function(){var e,n;return l(this,(function(r){switch(r.label){case 0:return this.ensureParamIsSet("get",t,"userId"),e=(this.basePath+"/Users/{userId}").replace("{userId}",encodeURIComponent(""+t.userId)),[4,this.httpClient.createRequest(e).asGet().send()];case 1:if((n=r.sent()).statusCode<200||n.statusCode>=300)throw new Error(n.content);return[2,n.content]}}))}))},e=c([Object(r.g)(),s("design:paramtypes",[o.a,i.a])],e)}(a.a)}).call(this,n("B/eG").default)}}]);
//# sourceMappingURL=app~b07b7304.01664c101505538148ca.bundle.map