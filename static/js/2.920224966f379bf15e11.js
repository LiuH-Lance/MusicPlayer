webpackJsonp([2],{Mgbc:function(t,e){},"W1+L":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),r=s("qwAB"),a=s("GQaK"),o=s("3Q4o"),c={props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:2e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._autoPlay()},20),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,s=this.$refs.slider.clientWidth,i=0;i<this.children.length;i++){var n=this.children[i];Object(o.a)(n,"slider-item"),n.style.width=s+"px",e+=s}this.loop&&!t&&(e+=2*s),this.$refs.sliderGroup.style.width=e+"px"},_initDots:function(){this.dots=new Array(this.children.length)},_initSlider:function(){var t=this;this.slider=new a.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400},click:!0}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.currentPageIndex=e,t.autoPlay&&(clearTimeout(t.timer),t._autoPlay())})},_autoPlay:function(){var t=this;this.currentPageIndex;this.timer=setTimeout(function(){t.slider.next()},this.interval)}},destroyed:function(){clearTimeout(this.timer)}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"slider",staticClass:"slider"},[s("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),s("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return s("span",{key:i,staticClass:"dot",class:{active:t.currentPageIndex===i}})}),0)])},staticRenderFns:[]};var l=s("VU/8")(c,d,!1,function(t){s("Mgbc")},"data-v-716d4db2",null).exports,u=s("y/jF"),h=s("m40h"),m=s("T452"),f=s("F4+m"),v=s("NYxO"),p={mixins:[f.b],data:function(){return{recommends:[],discList:[]}},components:{Slider:l,Scroll:r.a,Loading:u.a},created:function(){this._getRecommend(),this._getDiscList()},methods:n()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.recommend.style.bottom=e,this.$refs.scroll.refresh()},selectItem:function(t){this.$router.push({path:"/recommend/"+t.dissid}),this.setDisc(t)},_getRecommend:function(){var t=this;Object(h.b)().then(function(e){e.code==m.a&&(t.recommends=e.data.slider)})},_getDiscList:function(){var t=this;Object(h.a)().then(function(e){e.code===m.a&&(t.discList=e.data.list)})},loadImage:function(){this.checkloaded||(this.checkloaded=!0,this.$refs.scroll.refresh())}},Object(v.d)({setDisc:"SET_DISC"}))},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"recommend",staticClass:"recommend"},[s("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[s("div",[t.recommends.length?s("div",{staticClass:"slider-wrapper"},[s("slider",t._l(t.recommends,function(e){return s("div",{key:e.id},[s("a",{attrs:{href:e.linkUrl}},[s("img",{staticClass:"needsclick",attrs:{src:e.picUrl},on:{load:t.loadImage}})])])}),0)],1):t._e(),t._v(" "),s("div",{staticClass:"recommend-list"},[s("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),s("ul",t._l(t.discList,function(e){return s("li",{key:e.dissid,staticClass:"item",on:{click:function(s){return t.selectItem(e)}}},[s("div",{staticClass:"icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),t._v(" "),s("div",{staticClass:"text"},[s("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),s("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}),0)])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[s("loading")],1)]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var _=s("VU/8")(p,g,!1,function(t){s("n+vx")},"data-v-044544d2",null);e.default=_.exports},m40h:function(t,e,s){"use strict";e.b=function(){var t=a()({},c.b,{platform:"h5",uin:0,needNewCode:1});return Object(o.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},e.a=function(){var t=a()({},c.b,{platform:"yqq.json",hostUin:0,sin:0,ein:19,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return l.a.get("/api/getDiscList",{params:t}).then(function(t){return n.a.resolve(t.data)})},e.c=function(t){var e=a()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq.json",needNewCode:0,g_tk:1790477011,inCharset:"utf8",outCharset:"utf-8",notice:0,format:"json"});return l.a.get("/api/getSongList",{params:e}).then(function(t){return n.a.resolve(t.data)})};var i=s("//Fk"),n=s.n(i),r=s("woOf"),a=s.n(r),o=s("Gak4"),c=s("T452"),d=s("mtWM"),l=s.n(d)},"n+vx":function(t,e){}});
//# sourceMappingURL=2.920224966f379bf15e11.js.map