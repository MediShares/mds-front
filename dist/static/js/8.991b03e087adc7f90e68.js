webpackJsonp([8],{"2E4k":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("ItkU"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"project"},[e("div",{staticClass:"container"},[e("h4",{staticClass:"title text-center"},[t._v(t._s(t.$t("all_projects")))]),t._v(" "),t.programs.length>0?e("ul",{staticClass:"row project-list"},t._l(t.programs,function(t){return e("li",{key:t.id,staticClass:"col-sm-4 col-xs-12"},[e("project-list",{attrs:{id:t.eosID,picture:t.img,title:t.title,targetAmount:t.targetAmount,amount:t.reciveAmount,time:t.releaseTime,targetToken:t.targetToken}})],1)}),0):e("blank-page"),t._v(" "),t.isLoadEnd?t._e():e("div",{staticClass:"load-more"},[e("p",[e("img",{attrs:{src:"static/img/icon/loading_icon.png",width:"24"}}),t._v(" "),e("span",[t._v(t._s(t.$t("load_more")))])])]),t._v(" "),t.programs.length>0&&t.isOver?e("div",{staticClass:"bottom-line"},[e("span",[t._v(t._s(t.$t("bottom_line")))])]):t._e()],1),t._v(" "),e("foot"),t._v(" "),t.isLoaded?t._e():e("loading")],1)},staticRenderFns:[]};var o=function(t){e("jsmj")},n=e("VU/8")(s.a,i,!1,o,"data-v-386ea273",null);a.default=n.exports},FHam:function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("router-link",{staticClass:"program-list",attrs:{to:{path:"/projectDetail",query:{id:t.id}}}},[e("div",{staticClass:"list-pic",style:{backgroundImage:"url("+t.picture+")"}}),t._v(" "),e("div",{staticClass:"info"},[e("h4",{staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"progress"},[e("p",{staticClass:"progress-bar",style:"width:"+parseFloat(t.amount/t.targetAmount*100)+"%"})]),t._v(" "),e("div",{staticClass:"complete"},[t._v(t._s(t.$t("complete"))+": "+t._s(t.targetAmount)+" "+t._s(t.targetToken))]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t.$t("release_time"))+": "+t._s(t.time.slice(0,10)))])])])},staticRenderFns:[]};var i=e("VU/8")({props:["picture","title","targetAmount","amount","time","id","targetToken"]},s,!1,function(t){e("LLGw")},"data-v-581b7ee7",null);a.a=i.exports},ItkU:function(t,a,e){"use strict";(function(t){var s=e("SC/i"),i=e("IDhe"),o=e("FHam"),n=e("VXza");a.a={data:function(){return{isOver:!1,isLoadEnd:!1,url:"/apiCrowdfunding/homePage?page=",page:1,transferUrl:"/apiEos/getCrowdfundingTransfer?account=",programs:[],isLoaded:!1}},mounted:function(){this.getPrograms()},methods:{getPrograms:function(){var a=this,e=!1;this.$http.get(this.globalData.domain+this.url+this.page).then(function(t){t.data.success&&(a.isLoaded=!0,a.isLoadEnd=!0,a.programs=t.data.data.pageData,e=!(t.data.data.pageData.length<9))},function(t){console.log(t)}),t(window).scroll(function(){1==e&&t(window).scrollTop()+t(window).height()>=t("#app").outerHeight(!0)-t("footer").outerHeight(!0)&&(a.page++,e=!1,a.isLoadEnd=!1,a.$http.get(a.globalData.domain+a.url+a.page).then(function(t){a.programs=a.programs.concat(t.data.data.pageData),a.isLoadEnd=!0,e=!(t.data.data.pageData.length<9)},function(t){console.log(t)}))})}},components:{foot:n.a,projectList:o.a,loading:s.a,blankPage:i.a}}}).call(a,e("7t+N"))},LLGw:function(t,a){},jsmj:function(t,a){}});
//# sourceMappingURL=8.991b03e087adc7f90e68.js.map