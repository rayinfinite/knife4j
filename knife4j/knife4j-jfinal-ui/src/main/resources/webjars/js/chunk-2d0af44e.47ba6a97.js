(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0af44e"],{"0e36":function(e,t,i){"use strict";i.r(t);var n={name:"EditorShow",components:{editor:i("7c9e")},props:{value:{type:String,required:!0,default:""},xmlMode:{type:Boolean,default:!1,required:!1}},data:function(){return{lang:"json",editor:null,editorHeight:200}},methods:{resetEditorHeight:function(){var e=this;setTimeout((function(){var t=e.editor.session.getLength();1==t&&(t=10);var i=16*t;e.editorHeight=i}),300)},editorInit:function(e){var t=this;this.editor=e,i("2099"),i("818b"),i("0696"),this.xmlMode&&(this.lang="xml"),i("1d29"),this.resetEditorHeight(),this.editor.renderer.on("afterRender",(function(){t.$emit("showDescription","123")}))}}},r=i("2877"),o=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("editor",{attrs:{value:e.value,lang:e.lang,theme:"eclipse",width:"100%",height:e.editorHeight},on:{init:e.editorInit}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);