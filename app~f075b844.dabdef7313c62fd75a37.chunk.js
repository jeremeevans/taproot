(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(e,t,n){n("GAND"),n("GmYv"),e.exports=n("b9nV")},BEPO:function(e){e.exports=JSON.parse('{"a":false,"d":false,"b":"https://api.taproot.io","c":"6IGKgk/aFHFJCpCGGVFoezr1YUVl1x455m9JJo6G2ySBSOmZ8g78B0/zSNQSV6d2TuSp2U83WdXx6myXC4P8Xg=="}')},app:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"App",(function(){return f}));n("dasq"),n("9d8Q"),n("Ut/D");var i=n("aurelia-framework"),o=n("4ysu"),r=n("Qy2J"),a=n("CnLv"),s=n("aurelia-event-aggregator"),d=n("3ljv"),l=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(t,n,i,o){return new(i||(i=e))((function(e,r){function a(e){try{d(o.next(e))}catch(e){r(e)}}function s(e){try{d(o.throw(e))}catch(e){r(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,s)}d((o=o.apply(t,n||[])).next())}))},b=function(e,t){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},f=function(){function e(e,t,n,i,o,r){this.auth=e,this.httpConfig=t,this.meAPI=n,this.aurelia=i,this.eventAggregator=o,this.queue=r,this.outstandingRequestsCount=0,t.doConfig(),this.httpConfig=t}return e.prototype.configureRouter=function(e,t){return u(this,void 0,void 0,(function(){var n,i,o=this;return b(this,(function(r){switch(r.label){case 0:return this.router=t,e.title="Taproot",n=this,[4,this.meAPI.get()];case 1:return n.user=r.sent(),(i=[]).push({route:[""],name:"Home",moduleId:"./services/services",title:"Services",settings:{newText:"New Service",newAction:function(){o.router.navigateToRoute("NewService")},entityName:"service"}}),i.push({route:"notfound",name:"NotFound",moduleId:"./not-found",title:"Not Found"}),i.push({route:["services/new"],name:"NewService",moduleId:"./services/new-service",title:"New Service"}),i.push({route:["services/:key"],name:"Service",moduleId:"./services/service-index",nav:!1,title:"Service"}),i.push({route:["settings"],name:"Settings",moduleId:"./settings/index",nav:!1,title:"Settings"}),e.map(i),e.fallbackRoute(""),[2]}}))}))},e.prototype.attached=function(){var e=this;this.signOutSubscription=this.eventAggregator.subscribe("sign-out",(function(){return e.signOut()})),this.navigationSubscription=this.eventAggregator.subscribe("router:navigation:success",this.navigationSuccess.bind(this)),Object(r.a)(document.querySelectorAll("#home-nav > a"),{placement:"right"}),Object(r.a)(document.querySelectorAll("#signed-in-user-nav > a"),{placement:"bottom"})},e.prototype.detached=function(){this.navigationSubscription.dispose(),this.signOutSubscription.dispose()},e.prototype.signOut=function(){this.user=void 0,this.childRouter=void 0,this.auth.removeTaprootToken(),this.router.navigate("#/",{replace:!0,trigger:!1}),this.router.reset(),this.aurelia.setRoot("not-authenticated/not-authenticated")},e.prototype.childRouterChanged=function(){this.childRouter&&this.queue.queueMicroTask((function(){Object(r.a)(document.querySelectorAll("#side-menu nav > a"),{placement:"right"})}))},e.prototype.navigationSuccess=function(e){var t=e.instruction.getAllInstructions();this.currentConfig=t[t.length-1].config},l([Object(i.m)(),c("design:type",o.d)],e.prototype,"childRouter",void 0),e=l([Object(i.g)(),c("design:paramtypes",[a.b,d.a,a.c,i.Aurelia,s.a,i.c])],e)}()}.call(this,n("B/eG").default)},"app.html":function(e,t,n){e.exports='<template>\n  <require from="./app.scss"></require>\n\n  <div class="signed-in">\n    <nav id="home-nav">\n      <a href="#/" title="Home" data-tippy-content="Home" class="home-link">\n        <i class="icon-taproot-logo taproot-gold"></i>\n      </a>\n    </nav>\n\n    <nav id="signed-in-user-nav">\n      <a id="view-settings" title="Settings" data-tippy-content="Settings" href.one-time="router.generate(\'Settings\')">\n        <i class="icon-cog2"></i>\n      </a>\n\n      <a id="sign-out" href="javascript: void(0)" title="Sign out" data-tippy-content="Sign out" click.delegate="signOut()">\n        <i class="icon-exit"></i>\n      </a>\n    </nav>\n\n    <section id="side-menu">\n      <nav if.bind="childRouter">\n        <a repeat.for="route of childRouter.navigation" title.bind="route.title" data-tippy-content.bind="route.title"\n          href.bind="route.href">\n          <i class.one-time="route.config.icon"></i>\n          <span>${route.title}</span>\n        </a>\n      </nav>\n    </section>\n\n    <section class="content">\n      <header class="page-head">\n        <h1 innerhtml.bind="currentConfig.title"></h1>\n        <button if.bind="currentConfig.settings.newAction" id.one-time="\'btn-new-\' + currentConfig.settings.entityName"\n          class="btn-pos" click.delegate="currentConfig.settings.newAction()">\n          <span>${currentConfig.settings.newText}</span>\n        </button>\n      </header>\n\n      <section if.bind="httpConfig.globalErrors.length > 0" id="global-errors">\n        <span if.bind="httpConfig.globalErrors.length == 1">${httpConfig.globalErrors[0]}</span>\n        <ul if.bind="httpConfig.globalErrors.length > 1">\n          <li repeat.for="error of httpConfig.globalErrors">${error}</li>\n        </ul>\n      </section>\n\n      <router-view></router-view>\n    </section>\n  </div>\n</template>\n'},"app.scss":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"div.espalier-table{font-size:.6em;border-radius:.2em;border:1px solid #066}@media (min-width:43.75em){div.espalier-table{font-size:.8em}}@media (min-width:56.25em){div.espalier-table{font-size:1em}}table{width:100%;border-collapse:collapse}table th{background:#036;text-align:left}table th>div{padding:.5rem 1rem .5rem .5rem;color:#faebd7}table th.sortable>div>span:after{width:1rem!important;height:1rem!important;top:.5rem!important}table th.sortable.sort-asc,table th.sortable.sort-desc{background:#001a33}table th:first-child{border-top-left-radius:.15em}table th:last-child{border-top-right-radius:.15em}table td{padding:.5em;background:#fff}table tr:nth-child(odd) td{background-color:#efffff}table tr:last-child td:first-child{border-bottom-left-radius:.15em}table tr:last-child td:last-child{border-bottom-right-radius:.15em}table tr:hover td{background-color:#ffffe0}form{width:100%}form h3{margin:.5em 0}form .espalier-control{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-bottom:.5rem}form .espalier-control label{font-weight:700}form .espalier-control input{outline:none;box-sizing:border-box;padding:1em;width:100%;border:solid #066;border-width:2px 2px 0;border-top-left-radius:3px;border-top-right-radius:3px}form .espalier-control input:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-bottom-width:2px}form .espalier-control input:focus{border-color:#0078ef;box-shadow:0 0 4px #036}form .espalier-control input:focus+span.error{box-shadow:0 0 4px #036}form .espalier-control input+span.error{border-top:1px dashed #7a0013}form .espalier-control span.error{box-sizing:border-box;font-size:.75em;padding:.5em 1em;display:block;width:100%;color:#3f000a;background:#ffc8d1;border-left:2px solid #7a0013;border-right:2px solid #7a0013}form .espalier-control span.error:last-child{border-bottom-left-radius:.15em;border-bottom-right-radius:.15em;border-bottom:2px solid #7a0013}form footer.buttons{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}button,form footer.buttons{display:-webkit-box;display:flex}button{padding:0;font-size:.8rem;border-radius:3px;background:#fff;border:none}button>span{border-radius:3px;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:1;flex:auto;padding:.75rem;opacity:.8;-webkit-transition:opacity .5s cubic-bezier(.175,.885,.32,1.275);transition:opacity .5s cubic-bezier(.175,.885,.32,1.275)}button.primary>span{border:2px solid #001a33;background:#036;color:#eff7ff}button.btn-pos>span{border:2px solid #001802;background:#00660a;color:#dcffdf}button::-moz-focus-inner{border:0}button:focus,button:hover{outline:none;cursor:pointer}button:focus>span,button:hover>span{opacity:1}button:focus>span{border-color:#0078ef;box-shadow:0 0 4px #036}@media (min-width:43.75em){button{font-size:1.1em}}@media (min-width:56.25em){button{font-size:1.25em}}body{font-size:100%}body,caption,fieldset,h1,h2,h3,h4,h5,h6,input,legend,option,select,td,textarea,th{font-family:Poppins,sans-serif}button>span{font-family:IBM Plex Sans Condensed,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Bitter,serif;color:#0059b3}#page{font-size:1em;line-height:1.25}@media (min-width:43.75em){#page{font-size:1em;line-height:1.375}}h1{font-size:2em;line-height:1.25}@media (min-width:43.75em){h1{font-size:2.5em;line-height:1.125}}@media (min-width:56.25em){h1{font-size:3em;line-height:1.05}}h2{font-size:1.625em;line-height:1.15384615}@media (min-width:43.75em){h2{font-size:2em;line-height:1.25}}@media (min-width:56.25em){h2{font-size:2.25em;line-height:1.25}}h3{font-size:1.375em;line-height:1.13636364}@media (min-width:43.75em){h3{font-size:1.5em;line-height:1.25}}@media (min-width:56.25em){h3{font-size:1.75em;line-height:1.25}}h4{font-size:1.125em;line-height:1.11111111}@media (min-width:43.75em){h4{line-height:1.22222222}}blockquote{font-size:1.25em;line-height:1.25}@media (min-width:43.75em){blockquote{font-size:1.5em;line-height:1.45833333}}nav#home-nav>a,nav#signed-in-user-nav>a,section#side-menu>nav>a{color:#eff7ff;-webkit-transition:background-color .3s cubic-bezier(.175,.885,.32,1.275);transition:background-color .3s cubic-bezier(.175,.885,.32,1.275);height:1em;text-decoration:none}nav#home-nav>a:hover,nav#signed-in-user-nav>a:hover,section#side-menu>nav>a:hover{background-color:#004d99}nav#home-nav,nav#signed-in-user-nav{display:-webkit-box;display:flex;position:fixed;top:0;z-index:200}nav#home-nav{font-size:2.25em;left:0}nav#home-nav>a{background-color:#001a33;padding:.71rem .87rem}nav#home-nav>a:hover{background-color:#00274d}nav#signed-in-user-nav{background:url(/scales.png) #036;border-bottom-left-radius:.25em;font-size:1.75em;right:0}nav#signed-in-user-nav>a{padding:.95rem}nav#signed-in-user-nav>a:first-child{border-bottom-left-radius:.25em}section#side-menu{min-width:4em;padding-top:3.5em;flex-direction:column}section#side-menu,section#side-menu>nav{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal}section#side-menu>nav{font-size:2rem;flex-direction:column;-webkit-box-flex:1;flex:1;background:url(/scales.png) #036}section#side-menu>nav>a{padding:.5rem 1rem}section#side-menu>nav>a>span{font-size:1.5rem;display:none}body,html{height:100%;overflow:visible}body{color:#001a33;background:url(/diamonds.png) #eff7ff}a{color:#a75300;-webkit-transition:color .3s cubic-bezier(.175,.885,.32,1.275);transition:color .3s cubic-bezier(.175,.885,.32,1.275)}a:hover{color:#f47a00;text-decoration:none}.taproot-gold{color:#ffdf33}.all-centered{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}div.signed-in{display:-webkit-box;display:flex;min-height:100%}div.signed-in section.content{-webkit-box-flex:1;flex:1;padding:.4em 1rem 1rem}div.signed-in section.content header.page-head{border-bottom:2px dotted rgba(204,85,0,.5);margin-bottom:.75em;display:-webkit-box;display:flex;padding-right:7em}div.signed-in section.content header.page-head h1{margin:0 0 .2em;-webkit-box-flex:1;flex:1}div.signed-in section.content header.page-head button{margin-bottom:.5em}div.signed-in section#global-errors{padding:1em;margin-bottom:.75em;color:#3f000a;background:#ffc8d1;border:2px solid #7a0013;border-radius:.15em}",""])}}]);
//# sourceMappingURL=app~f075b844.dabdef7313c62fd75a37.bundle.map