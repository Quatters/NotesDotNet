(function(e){function t(t){for(var n,c,s=t[0],u=t[1],i=t[2],d=0,h=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"04ab":function(e,t,r){e.exports=r.p+"img/Plus.c1fc91b6.svg"},"12f3":function(e,t,r){},1856:function(e,t,r){},"1ef9":function(e,t,r){"use strict";r("6de2")},"378d":function(e,t,r){"use strict";r("ad85")},"3f73":function(e,t,r){"use strict";r("f4ae")},"43c4":function(e,t,r){"use strict";r("8681")},"4b90":function(e,t,r){"use strict";r("82b0")},"4be1":function(e,t,r){e.exports=r.p+"img/Refresh.de1eba58.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=Object(n["f"])("We're sorry but server isn't available now. Please, come back later! ");function a(e,t,r,a,c,s){var u=Object(n["m"])("app-header"),i=Object(n["m"])("loading-spinner"),l=Object(n["m"])("error-msg"),d=Object(n["m"])("note-list"),h=Object(n["m"])("app-footer");return Object(n["h"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(u,{onFetchBySearchQuery:s.fetchBySearchQuery,notesCanFetch:c.notesCanFetch,onFetchNotes:s.fetchNotes},null,8,["onFetchBySearchQuery","notesCanFetch","onFetchNotes"]),c.isDataLoaded?c.networkErrorOccured?(Object(n["h"])(),Object(n["d"])(l,{key:1},{default:Object(n["q"])((function(){return[o]})),_:1})):(Object(n["h"])(),Object(n["d"])(d,{key:2,onFetchNotes:s.fetchNotes,notes:c.notes},null,8,["onFetchNotes","notes"])):(Object(n["h"])(),Object(n["d"])(i,{key:0})),Object(n["g"])(h,{totalNotes:c.notesMaxLength,mostFrequentAuthor:c.mostFrequentAuthor},null,8,["totalNotes","mostFrequentAuthor"])],64)}var c=r("1da1"),s=(r("96cf"),r("d81d"),r("4e82"),r("fb6a"),Object(n["s"])("data-v-6b5af01f"));Object(n["j"])("data-v-6b5af01f");var u={class:"container content"},i={class:"row justify-content-center justify-content-md-start g-4"};Object(n["i"])();var l=s((function(e,t,r,o,a,c){var l=Object(n["m"])("note-constructor"),d=Object(n["m"])("note-instance");return Object(n["h"])(),Object(n["d"])("div",u,[Object(n["g"])("div",i,[Object(n["g"])(l,{ref:"noteConstructor",class:"list-item",onFetchNotes:t[1]||(t[1]=function(t){return e.$emit("fetch-notes")})},null,512),Object(n["g"])(n["b"],{name:"list"},{default:s((function(){return[(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["k"])(r.notes,(function(e){return Object(n["h"])(),Object(n["d"])(d,{key:e.id,id:e.id,author:e.author,body:e.body,dateModified:e.dateModified,class:"list-item"},null,8,["id","author","body","dateModified"])})),128))]})),_:1})])])})),d={class:"col-xxl-3 col-xl-4 col-md-6 col-12"},h={class:"d-flex flex-row justify-content-center"},b={class:"note ex-shadow d-flex flex-column"},f={class:"mb-2"},p={class:"mb-auto f-regular"},m={class:"text-end m-0"};function j(e,t,r,o,a,c){return Object(n["h"])(),Object(n["d"])("div",d,[Object(n["g"])("div",h,[Object(n["g"])("div",b,[Object(n["g"])("p",f,Object(n["n"])(r.dateModified.toLocaleDateString()),1),Object(n["g"])("p",p,Object(n["n"])(r.body),1),Object(n["g"])("p",m,Object(n["n"])(r.author),1)])])])}r("a9e3");var g={props:{id:Number,author:String,body:String,dateModified:Date}};r("7eb5");g.render=j;var O=g,v=r("04ab"),y=r.n(v),x=r("8d1f"),w=r.n(x),k=r("be7e"),F=r.n(k),T=Object(n["s"])("data-v-7566c538");Object(n["j"])("data-v-7566c538");var M={class:"col-xxl-3 col-xl-4 col-md-6 col-12"},C={class:"d-flex flex-row justify-content-center"},N=Object(n["g"])("img",{class:"icon",src:y.a,alt:"Add",width:"45"},null,-1),S={key:1,class:"d-flex flex-column note-body"},A={class:"mb-2"},Q=Object(n["g"])("img",{class:"icon",width:"16",src:w.a,alt:"Discard"},null,-1),R=Object(n["g"])("img",{class:"icon",width:"16",src:F.a,alt:"Submit"},null,-1);Object(n["i"])();var D=T((function(e,t,r,o,a,c){return Object(n["h"])(),Object(n["d"])("div",M,[Object(n["g"])("div",C,[Object(n["g"])("div",{class:["note ex-shadow d-flex flex-column",c.createModeClasses]},[a.createModeEnabled?(Object(n["h"])(),Object(n["d"])("div",S,[Object(n["g"])("div",A,[Object(n["f"])(Object(n["n"])((new Date).toLocaleDateString())+" ",1),Object(n["g"])("button",{onClick:t[2]||(t[2]=function(e){return a.createModeEnabled=!1}),class:"control-buttons no-border transparent"},[Q]),Object(n["g"])("button",{onClick:t[3]||(t[3]=function(){return c.createNote&&c.createNote.apply(c,arguments)}),class:"control-buttons no-border transparent"},[R])]),Object(n["r"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.bodyText=e}),placeholder:a.placeholder,maxlength:"256",class:"no-border transparent f-regular",ref:"textarea"},null,8,["placeholder"]),[[n["o"],a.bodyText,void 0,{trim:!0}]]),Object(n["r"])(Object(n["g"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.author=e}),placeholder:a.authorPlaceholder,maxlength:"16",class:"text-end no-border transparent"},null,8,["placeholder"]),[[n["o"],a.author,void 0,{trim:!0}]])])):(Object(n["h"])(),Object(n["d"])("button",{key:0,class:"create-button no-border transparent",onClick:t[1]||(t[1]=function(e){return a.createModeEnabled=!0})},[N]))],2)])])})),_=r("bc3a"),E=r.n(_),P=!1,L=P?"https://localhost:5000/api/Notes":"https://notesdotnet.herokuapp.com/api/Notes",q=E.a.create({baseURL:L,timeout:1500});function I(){return $.apply(this,arguments)}function $(){return $=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function U(e,t,r){return H.apply(this,arguments)}function H(){return H=Object(c["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.get("/Search",{params:{author:t,from:r,to:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function B(e,t){return V.apply(this,arguments)}function V(){return V=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.post("/New",{body:r,author:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}var Y={data:function(){return{createModeEnabled:!1,authorPlaceholder:"Anonymous",author:"",bodyText:"",placeholder:"Type something awesome!"}},methods:{setRandomPlaceholderText:function(){var e=Math.floor(3*Math.random());switch(e){case 0:this.placeholder="You didn't type anything :(";break;case 1:this.placeholder="There is nothing!";break;default:this.placeholder="We're very sad now. Here is a blank note.";break}},createNote:function(){"admin"===this.author.toLowerCase()?(this.author="",this.authorPlaceholder="You're not an admin :0"):0!==this.bodyText.length?(this.createModeEnabled=!1,this.sendPostRequest(),this.bodyText=""):this.setRandomPlaceholderText()},sendPostRequest:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B(e.author,e.bodyText);case 2:e.$emit("fetch-notes");case 3:case"end":return t.stop()}}),t)})))()}},computed:{createModeClasses:function(){return{"d-flex align-items-center justify-content-center cursor-pointer note-hover":!this.createModeEnabled,"scaled-note":this.createModeEnabled}}},watch:{createModeEnabled:function(){var e=this;this.createModeEnabled&&(this.placeholder="Type something awesome!",setTimeout((function(){e.$refs.textarea.focus()}),10))}}};r("43c4");Y.render=D,Y.__scopeId="data-v-7566c538";var J=Y,W={components:{NoteInstance:O,NoteConstructor:J},props:{notes:{type:Array,required:!0}}};r("1ef9");W.render=l,W.__scopeId="data-v-6b5af01f";var G=W,X=Object(n["s"])("data-v-8994aa68");Object(n["j"])("data-v-8994aa68");var z={class:"d-flex justify-content-center"},K=Object(n["g"])("div",{class:"lds-ellipsis"},[Object(n["g"])("div"),Object(n["g"])("div"),Object(n["g"])("div"),Object(n["g"])("div")],-1);Object(n["i"])();var Z=X((function(e,t){return Object(n["h"])(),Object(n["d"])("div",z,[K])}));r("378d");const ee={};ee.render=Z,ee.__scopeId="data-v-8994aa68";var te=ee,re=r("df5e"),ne=r.n(re),oe=r("667d"),ae=r.n(oe),ce=Object(n["s"])("data-v-2f7223a2");Object(n["j"])("data-v-2f7223a2");var se={class:"container"},ue={class:"d-flex flex-wrap align-items-center justify-content-around my-1"},ie={class:"d-flex align-items-center mb-3 mb-lg-0 me-lg-auto"},le=Object(n["g"])("img",{class:"icon",src:ne.a,alt:"Notes.NET",width:"48"},null,-1),de=Object(n["g"])("img",{class:"icon",src:ae.a,alt:"Bulb",width:"19"},null,-1),he={class:"col-12 col-lg-5 mb-2 mb-lg-0 me-lg-3"},be={class:"col-12 col-lg-3"};Object(n["i"])();var fe=ce((function(e,t,r,o,a,c){var s=Object(n["m"])("refresh-button"),u=Object(n["m"])("input-date"),i=Object(n["m"])("input-text");return Object(n["h"])(),Object(n["d"])("header",{class:["p-2 ex-shadow sticky-top",c.toggleVisibility]},[Object(n["g"])("div",se,[Object(n["g"])("div",ue,[Object(n["g"])("div",ie,[le,Object(n["g"])("button",{onClick:t[1]||(t[1]=function(e){return a.darkMode=!a.darkMode}),class:"bulb no-border transparent ms-5 p-1"},[de]),Object(n["g"])(s,{num:r.notesCanFetch,onRefresh:c.refresh},null,8,["num","onRefresh"])]),Object(n["g"])("div",he,[Object(n["g"])(u,{dateFrom:a.searchFromDateQuery,"onUpdate:dateFrom":t[2]||(t[2]=function(e){return a.searchFromDateQuery=e}),dateTo:a.searchToDateQuery,"onUpdate:dateTo":t[3]||(t[3]=function(e){return a.searchToDateQuery=e}),onClear:c.clearDateQuery},null,8,["dateFrom","dateTo","onClear"])]),Object(n["g"])("div",be,[Object(n["g"])(i,{"search-query":a.searchAuthorQuery,"onUpdate:search-query":t[4]||(t[4]=function(e){return a.searchAuthorQuery=e}),onClear:c.clearSearchAuthorQuery,placeholder:"Search for somebody..."},null,8,["search-query","onClear","placeholder"])])])])],2)})),pe=(r("ac1f"),r("841c"),Object(n["s"])("data-v-18860cba"));Object(n["j"])("data-v-18860cba");var me={class:"d-flex justify-content-end align-items-center"},je=Object(n["g"])("img",{class:"icon",src:w.a,alt:"Notes.NET",width:"12"},null,-1);Object(n["i"])();var ge=pe((function(e,t,r,o,a,c){return Object(n["h"])(),Object(n["d"])("div",me,[Object(n["g"])("input",{value:r.searchQuery,onInput:t[1]||(t[1]=function(t){return e.$emit("update:search-query",t.target.value)}),type:"text",placeholder:r.placeholder,class:"flex-fill f-regular"},null,40,["value","placeholder"]),0!==r.searchQuery.length?(Object(n["h"])(),Object(n["d"])("button",{key:0,onClick:t[2]||(t[2]=function(t){return e.$emit("clear")}),class:"clear-button transparent no-border p-0"},[je])):Object(n["e"])("",!0),Object(n["l"])(e.$slots,"default",{},void 0,!0)])})),Oe={props:{placeholder:String,searchQuery:String}};r("c6d9");Oe.render=ge,Oe.__scopeId="data-v-18860cba";var ve=Oe,ye=Object(n["s"])("data-v-5009a05c");Object(n["j"])("data-v-5009a05c");var xe={class:"input-group input-group-sm align-items-center align-items-end"},we=Object(n["g"])("span",{class:"input-group-text to"},"To",-1),ke=Object(n["g"])("img",{class:"icon",src:w.a,alt:"Notes.NET",width:"12"},null,-1);Object(n["i"])();var Fe=ye((function(e,t,r,o,a,c){return Object(n["h"])(),Object(n["d"])("div",xe,[Object(n["g"])("span",{class:["input-group-text from",a.isFromActive]},"From",2),Object(n["g"])("input",{value:r.dateFrom,onInput:t[1]||(t[1]=function(t){return e.$emit("update:dateFrom",t.target.value)}),class:"form-control shadow-none",type:"date","aria-describedby":"from-text"},null,40,["value"]),we,Object(n["g"])("input",{value:r.dateTo,onInput:t[2]||(t[2]=function(t){return e.$emit("update:dateTo",t.target.value)}),class:"form-control shadow-none",type:"date","aria-describedby":"to-text"},null,40,["value"]),0!==r.dateFrom.length||0!==r.dateTo.length?(Object(n["h"])(),Object(n["d"])("button",{key:0,onClick:t[3]||(t[3]=function(t){return e.$emit("clear")}),class:"clear-button"},[ke])):Object(n["e"])("",!0)])})),Te={props:{dateFrom:String,dateTo:String},data:function(){return{isToActive:!1,isFromActive:!1}}};r("4b90");Te.render=Fe,Te.__scopeId="data-v-5009a05c";var Me=Te,Ce=r("4be1"),Ne=r.n(Ce),Se=Object(n["g"])("img",{class:"icon",src:Ne.a,alt:"Refresh",width:"23"},null,-1),Ae={ref:"utdText",class:"utd-text"};function Qe(e,t,r,o,a,c){return Object(n["h"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("refresh"),c.refreshClickHandler()}),disabled:a.refreshClicked,class:"refresh no-border transparent ms-5 p-0"},[Se],8,["disabled"]),Object(n["r"])(Object(n["g"])("span",{class:"new-notes-text"},Object(n["n"])(r.num)+" new",513),[[n["p"],r.num>0]]),Object(n["r"])(Object(n["g"])("span",Ae,"Up to date",512),[[n["p"],a.refreshClicked]])],64)}var Re={props:{num:Number},data:function(){return{refreshClicked:!1}},methods:{refreshClickHandler:function(){var e=this;this.refreshClicked=!0,setTimeout((function(){e.$refs.utdText.style.opacity=0}),2e3),setTimeout((function(){e.refreshClicked=!1,e.$refs.utdText.style.opacity=100}),3e3)}}};r("6450");Re.render=Qe;var De=Re,_e={components:{InputText:ve,InputDate:Me,RefreshButton:De},props:{notesCanFetch:Number},data:function(){return{searchAuthorQuery:"",searchFromDateQuery:"",searchToDateQuery:"",scrollPrev:0,headerHidden:!1,darkMode:!1}},methods:{search:function(){var e=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){e.$emit("fetch-by-search-query",e.searchAuthorQuery,e.searchFromDateQuery,e.searchToDateQuery)}),800)},clearSearchAuthorQuery:function(){this.searchAuthorQuery=""},clearDateQuery:function(){this.searchToDateQuery="",this.searchFromDateQuery=""},handleScroll:function(){var e=window.scrollY;e>200&&e>this.scrollPrev?this.headerHidden=!0:e<this.scrollPrev&&(this.headerHidden=!1),this.scrollPrev=e},refresh:function(){0!==this.notesCanFetch&&this.$emit("fetch-notes")}},mounted:function(){var e=document.documentElement,t=localStorage.getItem("theme");"dark"===t?(e.setAttribute("theme","dark"),this.darkMode=!0):(e.setAttribute("theme","light"),this.darkMode=!1)},created:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},watch:{darkMode:function(){var e=document.documentElement;this.darkMode?(localStorage.setItem("theme","dark"),e.setAttribute("theme","dark")):(localStorage.setItem("theme","light"),e.setAttribute("theme","light"))},searchAuthorQuery:function(){this.search()},searchFromDateQuery:function(){this.search()},searchToDateQuery:function(){this.search()}},computed:{toggleVisibility:function(){return{"hide ":this.headerHidden}}}};r("7437");_e.render=fe,_e.__scopeId="data-v-2f7223a2";var Ee=_e,Pe=Object(n["s"])("data-v-675d3946");Object(n["j"])("data-v-675d3946");var Le={class:"content d-flex justify-content-center"};Object(n["i"])();var qe=Pe((function(e,t){return Object(n["h"])(),Object(n["d"])("div",Le,[Object(n["g"])("h4",null,[Object(n["l"])(e.$slots,"default",{},void 0,!0)])])}));r("fd61");const Ie={};Ie.render=qe,Ie.__scopeId="data-v-675d3946";var $e=Ie,Ue=r("a9d0"),He=r.n(Ue),Be=Object(n["s"])("data-v-7d813ee0");Object(n["j"])("data-v-7d813ee0");var Ve={class:"container f-regular"},Ye={class:"d-flex flex-wrap justify-content-md-between justify-content-around align-items-center content"},Je=Object(n["g"])("div",{class:"d-flex"},[Object(n["g"])("p",{class:"me-3"},"© 2021 Notes.NET"),Object(n["g"])("p",null,[Object(n["g"])("a",{class:"text-decoration-none",href:"https://github.com/Quatters/NotesDotNet",target:"_blank"},"Github")])],-1),We={class:"d-flex summary"},Ge={class:"mx-3"},Xe=Object(n["f"])(" Total notes: "),ze={class:"me-3"},Ke=Object(n["f"])(" Most known author: "),Ze=Object(n["g"])("img",{class:"icon mb-3",src:He.a,alt:"Up",width:"17"},null,-1);Object(n["i"])();var et=Be((function(e,t,r,o,a,c){return Object(n["h"])(),Object(n["d"])("footer",null,[Object(n["g"])("div",Ve,[Object(n["g"])("div",Ye,[Je,Object(n["g"])("div",We,[Object(n["g"])("p",Ge,[Xe,Object(n["g"])("strong",null,Object(n["n"])(r.totalNotes),1)]),Object(n["g"])("p",ze,[Ke,Object(n["g"])("strong",null,Object(n["n"])(r.mostFrequentAuthor),1)]),Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return c.scrollUp&&c.scrollUp.apply(c,arguments)}),class:"up p-0 no-border transparent"},[Ze])])])])])})),tt={props:{mostFrequentAuthor:"",totalNotes:0},methods:{scrollUp:function(){this.$refs.noteConstructor;window.scrollTo(0,0)}}};r("3f73");tt.render=et,tt.__scopeId="data-v-7d813ee0";var rt=tt,nt={components:{NoteList:G,LoadingSpinner:te,AppHeader:Ee,ErrorMsg:$e,AppFooter:rt},data:function(){return{notes:[],isDataLoaded:!1,networkErrorOccured:!1,notesCanFetch:-1,notesMaxLength:0,mostFrequentAuthor:""}},methods:{castResponse:function(e){return e.data.map((function(e){return{id:e.id,author:e.author,body:e.body,dateModified:new Date(e.dateModified)}}))},fetchNotes:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I();case 3:r=t.sent,e.notes=e.castResponse(r),e.notesMaxLength=e.notes.length,e.notesCanFetch=r.data.length-e.notesMaxLength,e.computeMostFrequentAuthor(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.networkErrorOccured=!0;case 13:return t.prev=13,e.isDataLoaded=!0,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()},fetchSilently:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I();case 3:r=t.sent,e.notesCanFetch=r.data.length-e.notesMaxLength,e.networkErrorOccured&&(e.notes=e.castResponse(r),e.notesMaxLength=e.notes.length,e.notesCanFetch=0,e.networkErrorOccured=!1,e.isDataLoaded=!0),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.networkErrorOccured=!0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchBySearchQuery:function(e,t,r){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(0!==e.length||0!==t.length||0!==r.length){o.next=3;break}return n.fetchNotes(),o.abrupt("return");case 3:return o.next=5,U(e,t,r);case 5:a=o.sent,n.notes=n.castResponse(a);case 7:case"end":return o.stop()}}),o)})))()},authorComparer:function(e,t){return e.author>t.author?1:e.author<t.author?-1:0},computeMostFrequentAuthor:function(){for(var e=this.notes.slice().sort(this.authorComparer),t=1,r=e[0],n=1,o=1;o<e.length;o++)0==this.authorComparer(e[o],e[o-1])?n++:(n>t&&(t=n,r=e[o-1]),n=1);return n>t&&(t=n,r=e[e.length-1]),this.mostFrequentAuthor=r.author}},mounted:function(){var e=this;this.fetchNotes(),setInterval((function(){e.fetchSilently()}),15e3)}};nt.render=a;var ot=nt;r("ab8b"),r("aede"),r("1856");Object(n["c"])(ot).mount("#app")},6450:function(e,t,r){"use strict";r("7f05")},"667d":function(e,t,r){e.exports=r.p+"img/Bulb.1b621f6a.svg"},"6de2":function(e,t,r){},7437:function(e,t,r){"use strict";r("9485")},7602:function(e,t,r){},"7eb5":function(e,t,r){"use strict";r("12f3")},"7f05":function(e,t,r){},"82b0":function(e,t,r){},8681:function(e,t,r){},8698:function(e,t,r){},"8d1f":function(e,t,r){e.exports=r.p+"img/X.3283befe.svg"},9485:function(e,t,r){},a9d0:function(e,t,r){e.exports=r.p+"img/Arrow.a0e9d72c.svg"},ad85:function(e,t,r){},aede:function(e,t,r){},be7e:function(e,t,r){e.exports=r.p+"img/Check.09375898.svg"},c6d9:function(e,t,r){"use strict";r("7602")},df5e:function(e,t,r){e.exports=r.p+"img/Logo.4cb43ffd.svg"},f4ae:function(e,t,r){},fd61:function(e,t,r){"use strict";r("8698")}});
//# sourceMappingURL=app.5d4c6c34.js.map