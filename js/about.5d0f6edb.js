(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"219c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sect"},[t.currentSection.error?t._e():n("h1",[t._v(t._s(t.currentSection.title))])])},s=[],i=(n("fdab"),{name:"sect",computed:{currentSection:function(){var t={error:!0};if(this.$route.params.sectionCode){var e=this.$store.state.sections[this.$route.params.sectionCode];e&&(t.error=!1,t.title=e.title)}return t}},components:{}}),o=i,a=n("2877"),c=Object(a["a"])(o,r,s,!1,null,null,null);e["default"]=c.exports},c84b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("transition",{attrs:{name:"fadeLeft"}},[t.show?n("h1",[t._v(t._s(t.item.title))]):t._e()]),n("button",{on:{click:function(e){t.show=!t.show}}},[t._v("\n    Переключить\n  ")])],1)},s=[],i=(n("fdab"),{name:"detail",computed:{item:function(){return"news"===this.$route.params.sectionCode?this.$store.getters.getNewsByID(this.$route.params.id)[0]:this.$store.getters.getArticleByID(this.$route.params.id)[0]}},data:function(){return{show:!0}},components:{},watch:{},mounted:function(){}}),o=i,a=n("2877"),c=Object(a["a"])(o,r,s,!1,null,null,null);e["default"]=c.exports},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],i=n("2877"),o={},a=Object(i["a"])(o,r,s,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=about.5d0f6edb.js.map