"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=l,m=c["".concat(o,".").concat(k)]||c[k]||s[k]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,r[1]=p;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},32054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],p={},o="4.1 Knife4jCloud\u7efc\u5408\u7ba1\u7406\u5e73\u53f0",u={unversionedId:"middleware-sources/knife4jCloud",id:"middleware-sources/knife4jCloud",title:"4.1 Knife4jCloud\u7efc\u5408\u7ba1\u7406\u5e73\u53f0",description:"4.1.1 \u4ea7\u54c1\u4ecb\u7ecd",source:"@site/docs/middleware-sources/knife4jCloud.md",sourceDirName:"middleware-sources",slug:"/middleware-sources/knife4jCloud",permalink:"/docs/middleware-sources/knife4jCloud",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660471539,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{}},d={},c=[{value:"4.1.1 \u4ea7\u54c1\u4ecb\u7ecd",id:"411-\u4ea7\u54c1\u4ecb\u7ecd",level:2},{value:"4.1.2 \u529f\u80fd\u4ecb\u7ecd",id:"412-\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"4.1.2.1 \u767b\u5f55",id:"4121-\u767b\u5f55",level:3},{value:"4.1.2.2 \u5de5\u4f5c\u53f0",id:"4122-\u5de5\u4f5c\u53f0",level:3},{value:"4.1.2.3 \u9879\u76ee\u7ba1\u7406",id:"4123-\u9879\u76ee\u7ba1\u7406",level:3},{value:"4.1.2.4 \u670d\u52a1\u7ba1\u7406",id:"4124-\u670d\u52a1\u7ba1\u7406",level:3},{value:"4.1.2.5 \u9884\u89c8\u6587\u6863",id:"4125-\u9884\u89c8\u6587\u6863",level:3},{value:"4.1.2.6 \u4e2a\u4eba\u4e2d\u5fc3",id:"4126-\u4e2a\u4eba\u4e2d\u5fc3",level:3},{value:"4.1.3 \u5f00\u653eAPI",id:"413-\u5f00\u653eapi",level:2},{value:"4.1.3.1 \u6ce8\u518cAPI",id:"4131-\u6ce8\u518capi",level:3},{value:"4.1.3.2 Spring Boot\u81ea\u52a8\u6ce8\u518c",id:"4132-spring-boot\u81ea\u52a8\u6ce8\u518c",level:3},{value:"4.1.4 \u4ea7\u54c1\u8bd5\u7528",id:"414-\u4ea7\u54c1\u8bd5\u7528",level:2}],s={toc:c},k="wrapper";function m(e){var t=e.components,p=(0,l.Z)(e,r);return(0,i.kt)(k,(0,a.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"41-knife4jcloud\u7efc\u5408\u7ba1\u7406\u5e73\u53f0"},"4.1 Knife4jCloud\u7efc\u5408\u7ba1\u7406\u5e73\u53f0"),(0,i.kt)("h2",{id:"411-\u4ea7\u54c1\u4ecb\u7ecd"},"4.1.1 \u4ea7\u54c1\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Knife4jCloud"),"\u662f\u4e00\u6b3e\u72ec\u7acb\u90e8\u7f72\u7684\u4e2d\u95f4\u4ef6,\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Boot 2.2.0.RELEASE"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Mybatis 3.5"),"\u8fdb\u884c\u5f00\u53d1."),(0,i.kt)("p",null,"\u5c06\u76ee\u524d\u5f00\u6e90\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u8fdb\u884c\u6574\u5408,\u901a\u8fc7\u4e91\u5e73\u53f0\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"OpenAPI v2"),"\u7684Swagger\u6587\u6863\u8fdb\u884c\u4e91\u7aef\u805a\u5408,\u5728\u7ebf\u5bf9Swagger\u6587\u6863\u8fdb\u884c\u6e32\u67d3\u548c\u8c03\u8bd5,\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf,\u7279\u522b\u662f\u5728\u5fae\u670d\u52a1\u76db\u884c\u7684\u4eca\u5929,\u5bf9\u4e8e\u4f7f\u7528Swagger\u7684\u5f00\u53d1\u8005\u6765\u8bf4,\u662f\u4e00\u6b3e\u975e\u5e38\u8f7b\u5de7\u3001\u65b9\u4fbf\u3001\u7b80\u5355\u3001\u6613\u7528\u7684\u4ea7\u54c1."),(0,i.kt)("p",null,"\u4ea7\u54c1\u7684\u4e3b\u8981\u4f18\u52bf\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1).\u8de8\u8bed\u8a00")),(0,i.kt)("p",null,"\u4f7f\u7528Swagger\u7684\u5f00\u53d1\u8005\u90fd\u77e5\u9053,OpenAPI\u662f\u4e00\u5957\u6807\u51c6\u7684\u89c4\u8303,\u5728\u4e0d\u540c\u7684\u8bed\u8a00\u4e2d\u90fd\u6709\u76f8\u5e94\u7684\u5b9e\u73b0\u65b9\u5f0f,\u5305\u62ecJava\u3001Node\u3001Python\u3001.Net\u7b49\u8bed\u8a00,\u4f7f\u7528\u8303\u56f4\u975e\u5e38\u5e7f\u6cdb,\u7279\u522b\u662fJava\u4f53\u7cfb\u4e0bSpring\u7684\u751f\u6001\u975e\u5e38\u5b8c\u5584,Springfox\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u5bf9OpenAPI\u7684\u652f\u6301,\u5c06SpringMVC\u63a5\u53e3\u548cSwagger\u7d27\u5bc6\u7684\u8054\u7cfb\u4e86\u8d77\u6765,\u65b9\u4fbf\u5f00\u53d1\u8005\u8fdb\u884c\u63a5\u53e3\u7684\u8c03\u8bd5"),(0,i.kt)("p",null,"\u4e5f\u6b63\u662f\u56e0\u4e3a\u8fd9\u79cd\u539f\u56e0,Knife4j\u76ee\u524d\u7ecf\u5386\u8fd13\u5e74\u7684\u53d1\u5c55,OpenAPI2.0\u7248\u672c\u5df2\u7ecf\u8d8a\u6765\u8d8a\u6210\u719f,Java\u7684\u5f00\u53d1\u8005\u96c6\u6210Knife4j\u975e\u5e38\u65b9\u4fbf,\u4f46\u662f\u5176\u4ed6\u8bed\u8a00\u76ee\u524d\u60f3\u8981\u4f7f\u7528Knife4j\u90fd\u4f1a\u6709\u4e00\u4e9b\u96be\u5ea6,\u9700\u8981\u66f4\u6539\u76f8\u5173\u7684\u4ee3\u7801\u624d\u80fd\u505a\u5230\u96c6\u6210,\u4f7f\u7528\u4e0a\u5f88\u9ebb\u70e6"),(0,i.kt)("p",null,"Knife4jCloud\u5e73\u53f0\u4f5c\u4e3a\u72ec\u7acb\u7684\u5e73\u53f0,\u4e0d\u7ba1\u662f\u63d0\u4f9bOpenAPI\u7684\u63a5\u53e3\u8fd8\u662f\u63d0\u4f9bSwagger\u7684JSON,\u90fd\u53ef\u4ee5\u901a\u8fc7\u5728\u5e73\u53f0\u4e0a\u7b80\u5355\u64cd\u4f5c,\u5373\u53ef\u60c5\u51b5\u5c06OpenAPIV2\u7684\u7ed3\u6784\u5728Knife4j\u7684Ui\u4e0a\u5c55\u793a\u51fa\u6765."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2).\u5fae\u670d\u52a1\u6a21\u5f0f\u4e0b\u81ea\u52a8\u805a\u5408")),(0,i.kt)("p",null,"\u5728\u76ee\u524d\u7684Knife4j\u6280\u672f\u4ea4\u6d41\u7fa4\u4e2d,\u7ecf\u5e38\u4f1a\u78b0\u5230\u5404\u4e2a\u5f00\u53d1\u8005\u8be2\u95ee\u5982\u4f55\u5728Spring Cloud\u7684\u5fae\u670d\u52a1\u6280\u672f\u67b6\u6784\u4e0b\u805a\u5408Swagger\u6587\u6863,\u6709\u7684\u4eba\u805a\u5408\u6210\u529f\u4e86,\u6709\u7684\u4eba\u805a\u5408\u5931\u8d25\u4e86"),(0,i.kt)("p",null,"\u7a76\u5176\u539f\u56e0,Spring Cloud\u6280\u672f\u67b6\u6784\u53d1\u5c55\u76f8\u5f53\u8fc5\u901f,\u90e8\u5206\u5f00\u53d1\u4eba\u5458\u65e0\u6687\u53bb\u901a\u8fc7\u8c03\u8bd5\u5e95\u5c42\u4ee3\u7801\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u78b0\u5230\u7684\u95ee\u9898,\u7279\u522b\u662fSwagger\u6587\u6863\u7684\u805a\u5408\u4e00\u822c\u90fd\u662f\u901a\u8fc7\u7f51\u5173\u7684\u7279\u6027\u8fdb\u884c\u805a\u5408,\u800c\u5fae\u670d\u52a1\u67b6\u6784\u7684\u7f51\u5173\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"Zuul"),"\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Cloud Gateway"),"\u7684\u8fed\u4ee3,\u90fd\u662f\u53d1\u5c55\u60ca\u4eba\u7684,\u65b0\u7248\u672c\u7684\u8fed\u4ee3\u5fc5\u7136\u4f1a\u78b0\u5230\u7248\u672c\u517c\u5bb9\u7684\u95ee\u9898,\u7f51\u5173\u7684\u8fed\u4ee3,\u6bcf\u4e00\u6b21\u7684\u8fed\u4ee3\u65b0\u589e\u4e86\u90a3\u4e9b\u7279\u6027,\u5220\u9664\u4e86\u90a3\u4e9b\u7279\u6027,\u5927\u90e8\u5206\u60c5\u51b5\u4e0b,\u6211\u4eec\u662f\u4e0d\u4f1a\u53bb\u770b\u8fed\u4ee3\u65e5\u5fd7\u7684.\u5347\u7ea7\u5c31\u5b8c\u4e8b\u4e86.\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u6709\u4eba\u6210\u529f,\u6709\u4eba\u5931\u8d25"),(0,i.kt)("p",null,"\u90a3\u4e48,\u901a\u8fc7\u73b0\u8c61\u770b\u672c\u8d28,\u6211\u4eec\u78b0\u5230\u7684\u95ee\u9898\u5230\u5e95\u662f\u4ec0\u4e48?"),(0,i.kt)("p",null,"1\u3001\u7f51\u5173\u7248\u672c\u5347\u7ea7,\u5bfc\u81f4\u8bf7\u6c42Swagger\u63a5\u53e3\u5931\u8d25,\u6216\u8005\u4e22\u5931\u67d0\u4e2a\u5c5e\u6027"),(0,i.kt)("p",null,"2\u3001\u7f51\u5173\u914d\u7f6e\u4e0d\u6b63\u786e,\u8c03\u8bd5\u8f6c\u53d1\u5931\u8d25"),(0,i.kt)("p",null,"3\u3001\u7b49\u7b49..."),(0,i.kt)("p",null,"\u6211\u4eec\u5728Spring Boot\u5355\u4f53\u67b6\u6784\u4e0b,\u5f15\u5165Swagger\u6587\u6863\u5982\u6b64\u7b80\u5355,\u4e3a\u4ec0\u4e48\u5728Spring Cloud\u7684\u4f53\u73b0\u8fd9\u4e48\u9ebb\u70e6?\u805a\u5408\u4ee3\u7801\u5199\u4e86\u4e00\u5927\u5806,\u8fd8\u8981\u8c03\u8bd5\u4e3a\u4f55\u5931\u8d25,\u4e0d\u540c\u7684\u7248\u672c\u6709\u4e0d\u540c\u7684\u8981\u6c42.\u7b49\u7b49"),(0,i.kt)("p",null,"\u90a3\u4e48,Knife4jCloud\u662f\u5982\u4f55\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u7684\u5462?"),(0,i.kt)("p",null,"1\u3001Knife4jCloud\u628aSwagger\u7684\u7279\u6027\u5168\u90e8\u62bd\u8c61\u51fa\u6765,\u5168\u90e8\u653e\u5728\u5e73\u53f0\u91cc\u6765\u505a,\u4ed6\u5145\u5f53\u7684\u4e5f\u662f\u4e00\u4e2a\u7f51\u5173\u7684\u89d2\u8272,\u4f46\u662f\u662f\u81ea\u5df1\u6269\u5c55\u5b9e\u73b0\u7684,\u6269\u5c55\u7684\u76ee\u7684\u53ea\u6709\u4e00\u4e2a,\u5c31\u662f\u53ef\u4ee5\u5728\u5e73\u53f0\u4e2d\u8fdb\u884c\u8c03\u8bd5"),(0,i.kt)("p",null,"2\u3001Knife4jCloud\u4e2d\u4f1a\u628a\u6bcf\u4e00\u4e2aSwagger\u6587\u6863\u4f5c\u4e3a\u4e00\u4e2a\u670d\u52a1\u5b9e\u4f8b\uff0c\u5fae\u670d\u52a1\u7684IP\u3001\u7aef\u53e3\u3001Swagger-JSONNeri\u90fd\u4f1a\u4fdd\u5b58\u5728\u5e73\u53f0\u4e2d"),(0,i.kt)("p",null,"\u8fd9\u6837\u5728\u5e73\u53f0\u4e2d,\u5bf9\u4e8eSwagger\u6587\u6863\u53ef\u4ee5\u8fdb\u884c\u4efb\u610f\u805a\u5408,\u548c\u5fae\u670d\u52a1\u5f7b\u5e95\u62dc\u62dc\u4e86~~"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3).\u4e2a\u6027\u5316\u914d\u7f6e")),(0,i.kt)("p",null,"Knife4jCloud\u4ea7\u54c1\u672c\u8eab\u662f\u62e5\u6709\u7528\u6237\u7684\u89d2\u8272\u7684,\u5f00\u53d1\u8005\u53ef\u4ee5\u5c06\u5e73\u53f0\u90e8\u7f72\u5728\u548c\u5b9e\u9645\u540c\u4e00\u4e2a\u7f51\u7edc\u73af\u5883\u4e2d,\u5bf9\u5916\u7684Swagger\u6587\u6863\u53ef\u4ee5\u901a\u8fc7Knife4jCloud\u505a\u5230\u7f51\u7edc\u9694\u79bb"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e00\u4efdSwagger\u6587\u6863\u9875\u53ef\u4ee5\u505a\u5230\u662f\u5426\u767b\u5f55\u540e\u53ef\u770b,\u6587\u6863\u662f\u5426\u53ef\u4ee5\u8c03\u8bd5\u7b49\u7b49\u4e2a\u6027\u5316\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u5728\u5e73\u53f0\u4e2d\u8fdb\u884c\u64cd\u4f5c"),(0,i.kt)("h2",{id:"412-\u529f\u80fd\u4ecb\u7ecd"},"4.1.2 \u529f\u80fd\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Knife4jCloud")," V1.0\u7248\u672c\u76ee\u524d\u63d0\u4f9b\u7684\u529f\u80fd\u4e3b\u8981\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e2a\u4eba\u7528\u6237&\u767b\u5f55&\u6ce8\u518c\uff1a\u901a\u8fc7\u90ae\u7bb1\u7684\u65b9\u5f0f\u8fdb\u884c\u6ce8\u518c,\u6570\u636e\u5b8c\u5168\u9694\u79bb,\u6bcf\u4e2a\u4eba\u53ea\u80fd\u770b\u5230\u81ea\u5df1\u7684\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u53f0\uff1a\u5f53\u524d\u9879\u76ee\u3001\u670d\u52a1\u7684\u7b80\u5355\u7edf\u8ba1\u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul"},"\u9879\u76ee\u7ba1\u7406\uff1a\u53ef\u4ee5\u5bf9\u9879\u76ee\u8fdb\u884c\u7f16\u8f91\u7ef4\u62a4"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7ba1\u7406\uff1a\u53ef\u4ee5\u5bf9\u670d\u52a1\u5217\u8868\u8fdb\u884c\u7f16\u8f91\u7ef4\u62a4")),(0,i.kt)("h3",{id:"4121-\u767b\u5f55"},"4.1.2.1 \u767b\u5f55"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Knife4jCloud"),"\u901a\u8fc7\u4e2a\u4eba\u90ae\u7bb1\u7684\u65b9\u5f0f\u8fdb\u884c\u767b\u5f55\u6ce8\u518c,\u6240\u4ee5\u5728\u7cfb\u7edf\u6570\u636e\u662f\u5b8c\u5168\u9694\u79bb\u7684,\u6bcf\u4e2a\u4eba\u53ea\u80fd\u770b\u5230\u81ea\u5df1\u7684\u6570\u636e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(32152).Z,width:"841",height:"581"})),(0,i.kt)("p",null,"\u6ce8\u518c\u754c\u9762\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11356).Z,width:"841",height:"581"})),(0,i.kt)("h3",{id:"4122-\u5de5\u4f5c\u53f0"},"4.1.2.2 \u5de5\u4f5c\u53f0"),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u4e3b\u9875\u5de5\u4f5c\u53f0,\u4f1a\u663e\u793a\u5f53\u524d\u7528\u6237\u7684\u9879\u76ee\u6570\u91cf\u3001\u670d\u52a1\u6570\u91cf\u3001\u670d\u52a1\u5206\u7c7b\u60c5\u51b5"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9484).Z,width:"1162",height:"503"})),(0,i.kt)("h3",{id:"4123-\u9879\u76ee\u7ba1\u7406"},"4.1.2.3 \u9879\u76ee\u7ba1\u7406"),(0,i.kt)("p",null,"\u9879\u76ee\u7ba1\u7406\u5305\u542b\u4e86\u5bf9\u5f53\u524d\u9879\u76ee\u7684\u65b0\u589e\u3001\u7f16\u8f91\u3001\u5220\u9664\u3001\u67e5\u8be2\u7b49\u529f\u80fd"),(0,i.kt)("p",null,"\u9879\u76ee\u4e3b\u8981\u5305\u542b\u7684\u5b57\u6bb5\uff1a\u9879\u76ee\u7f16\u53f7\u3001\u9879\u76ee\u540d\u79f0\u3001\u9879\u76ee\u63cf\u8ff0"),(0,i.kt)("p",null,"\u9879\u76ee\u7f16\u53f7\u662f\u5168\u5c40\u552f\u4e00,\u5e76\u4e14\u53ea\u80fd\u662f\u6570\u5b57\u6216\u82f1\u6587\u6216\u8005\u662f\u82f1\u6587+\u6570\u5b57+\u4e0b\u5212\u7ebf\u7b49\u65b9\u5f0f\u7ec4\u6210"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(83205).Z,width:"1362",height:"623"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41121).Z,width:"1366",height:"623"})),(0,i.kt)("h3",{id:"4124-\u670d\u52a1\u7ba1\u7406"},"4.1.2.4 \u670d\u52a1\u7ba1\u7406"),(0,i.kt)("p",null,"\u670d\u52a1\u5728Knife4jCloud\u4e2d\u7684\u5b9a\u4e49\u5176\u5b9e\u662f\u4e00\u4e2aOpenAPIv2\u7684\u5b9e\u4f8b,\u4e00\u4e2a\u670d\u52a1\u53ef\u4ee5\u662f\u901a\u8fc7API\u63a5\u53e3\u83b7\u53d6\u7684,\u4e5f\u53ef\u4ee5\u662f\u901a\u8fc7Swagger\u7684JSON\u6765\u521b\u5efa,\u6240\u4ee5\u5728\u670d\u52a1\u7ba1\u7406\u4e2d,\u5b58\u5728\u4e24\u79cd\u7c7b\u578b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API:\u5fae\u670d\u52a1\u5728\u7ebf\u7684\u65b9\u5f0f,\u83b7\u53d6\u5f97\u5230\u5f53\u524d\u7684OPenAPIv2\u7684\u5b9e\u4f8b,\u901a\u8fc7Knife4j\u7684Ui\u8fdb\u884c\u63a5\u53e3\u6e32\u67d3"),(0,i.kt)("li",{parentName:"ul"},"LOCAL:\u672c\u5730\u5316\u7684\u65b9\u5f0f,\u4f7f\u7528\u8005\u63d0\u4f9bSwagger\u7684JSON\u6765\u521b\u5efa\u670d\u52a1\u5b9e\u4f8b")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5742).Z,width:"1365",height:"639"})),(0,i.kt)("p",null,"\u901a\u8fc7\u5728\u7ebfAPI\u7684\u65b9\u5f0f\u6765\u521b\u5efa\u670d\u52a1\u5b9e\u4f8b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11505).Z,width:"1363",height:"627"})),(0,i.kt)("p",null,"\u901a\u8fc7\u672c\u5730LOCAL\u7684\u65b9\u5f0f\u521b\u5efa"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(54686).Z,width:"1366",height:"624"})),(0,i.kt)("h3",{id:"4125-\u9884\u89c8\u6587\u6863"},"4.1.2.5 \u9884\u89c8\u6587\u6863"),(0,i.kt)("p",null,"\u901a\u8fc7\u9879\u76ee\u7ba1\u7406\u5217\u8868\u4e2d\u7684\u64cd\u4f5c\u6309\u94ae,\u53ef\u4ee5\u9009\u62e9\u9884\u89c8\u6587\u6863\u67e5\u770b\u6587\u6863"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14966).Z,width:"1365",height:"627"})),(0,i.kt)("h3",{id:"4126-\u4e2a\u4eba\u4e2d\u5fc3"},"4.1.2.6 \u4e2a\u4eba\u4e2d\u5fc3"),(0,i.kt)("p",null,"\u9f20\u6807\u60ac\u6d6e\u5728\u53f3\u4e0a\u89d2,\u53ef\u4ee5\u9009\u62e9\u7528\u6237\u4fe1\u606f\u3001\u91cd\u7f6e\u5bc6\u7801\u3001\u9000\u51fa\u7b49\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5176\u4e2d\u7528\u6237\u4fe1\u606f\u4e2d\u5305\u542b\u4e86\u5f00\u653e\u6ce8\u518cAPI\u63a5\u53e3\u4e2d\u7684accessKey\u4fe1\u606f,\u5982\u4e0b\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(73818).Z,width:"1361",height:"622"})),(0,i.kt)("h2",{id:"413-\u5f00\u653eapi"},"4.1.3 \u5f00\u653eAPI"),(0,i.kt)("p",null,"Knife4jCloud\u5e73\u53f0\u5bf9\u5916\u63d0\u4f9b\u6ce8\u518cSwagger\u670d\u52a1\u7684\u5f00\u653eAPI\u63a5\u53e3,\u901a\u8fc7\u8be5\u63a5\u53e3,\u975eJava\u8bed\u8a00\u7684\u5f00\u53d1\u8005,\u53ef\u4ee5\u8fdb\u884c\u72ec\u7acb\u5f00\u53d1,\u505a\u5230Swagger\u6587\u6863\u7684\u9879\u76ee\u81ea\u542f\u52a8\u6ce8\u5165\u5e73\u53f0"),(0,i.kt)("h3",{id:"4131-\u6ce8\u518capi"},"4.1.3.1 \u6ce8\u518cAPI"),(0,i.kt)("p",null,"\u63a5\u53e3\u5730\u5740\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"/knife4j/cloud/upload")),(0,i.kt)("p",null,"\u63a5\u53e3\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")),(0,i.kt)("p",null,"\u63a5\u53e3\u65b9\u5f0f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"POST")),(0,i.kt)("p",null,"\u63a5\u53e3\u53c2\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "accessKey":"JDUkd1YvSi5zZmUkMHYuSGNmN1hMazJPajJuMjNJVW43dWNyL2tyR3N4bzJaa1A2ZC5mSUlwNA",\n    "code":"APIFactory",\n    "applicationHost":"192.168.0.152",\n    "applicationPort":"9200",\n    "ssl":false,\n    "client":"",\n    "cloudRoutes":[{\n        "groupName":"\u8ba2\u5355\u670d\u52a1",\n        "content":"{....}",\n        "path":"/aaa/v2/api-docs?group=\u8ba2\u5355\u670d\u52a1"\n    }]\n}\n')),(0,i.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accessKey"),":\u8be5\u53c2\u6570\u662f\u6ce8\u518cAPI\u63a5\u53e3\u7684\u8ba4\u8bc1\u51ed\u8bc1,\u6bcf\u4e00\u4e2a\u6ce8\u518c\u7528\u6237\u62e5\u6709\u81ea\u5df1\u72ec\u7acb\u7684accessKey,\u5e73\u53f0\u6ce8\u518c\u6210\u529f\u540e\u53ef\u4ee5\u5728\u53f3\u4e0a\u89d2\u901a\u8fc7",(0,i.kt)("strong",{parentName:"li"},"\u4e2a\u4eba\u4fe1\u606f"),"\u4e2d\u83b7\u53d6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code"),":\u9879\u76ee\u7f16\u7801,\u5982\u679c\u5728\u5e73\u53f0\u4e2d\u4e0d\u5b58\u5728,\u5219\u6ce8\u518c\u4e0d\u4f1a\u6210\u529f,\u56e0\u6b64\u9700\u8981\u5148\u5728\u5e73\u53f0\u4e2d\u6dfb\u52a0\u9879\u76ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"applicationHost"),":\u5f53\u524d\u5e94\u7528\u670d\u52a1\u7684IP\u5730\u5740,\u8be5\u53c2\u6570\u4e3b\u8981\u4f5c\u7528\u4e8eSwagger\u8c03\u8bd5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"applicationPort"),"\uff1a\u5f53\u524d\u5e94\u7528\u670d\u52a1\u7684\u7aef\u53e3\u53f7"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),":\u9ed8\u8ba4false,\u5982\u679c\u662ftrue,\u5219\u4ee3\u8868\u5f53\u524d\u670d\u52a1\u662fhttps"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client"),":\u914d\u7f6e\u4e00\u4e2a\u5e94\u7528\u670d\u52a1\u7684Client\u5730\u5740,\u4e00\u822c\u662fhttp://host:port,Knife4j\u4f1a\u81ea\u52a8\u8bc6\u522b,\u5982\u679c\u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u662f\u57df\u540d\u8bbf\u95ee,\u9632\u706b\u5899\u5c4f\u853d\u4e86\u7aef\u53e3\u53f7(\u4f8b\u5982\uff1a",(0,i.kt)("a",{parentName:"li",href:"http://doc.xiaominfo.com),%E5%88%99%E5%BC%80%E5%8F%91%E8%80%85%E5%9C%A8%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81%E8%AE%BE%E7%BD%AE%E8%AF%A5%E5%B1%9E%E6%80%A7,%E5%90%A6%E5%88%99%E6%97%A0%E6%B3%95%E8%B0%83%E8%AF%95,%E8%AF%A5%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE%E5%90%8E%E5%88%99Host%E3%80%81Port%E4%B8%8D%E4%BC%9A%E7%94%9F%E6%95%88,%E4%BC%9A%E6%A0%B9%E6%8D%AE%E8%AF%A5%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%A7%A3%E6%9E%90%E5%BE%97%E5%88%B0host%E5%92%8C%E7%AB%AF%E5%8F%A3,%E6%89%80%E4%BB%A5%E4%B8%A4%E4%B8%AA%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%E5%8D%B3%E5%8F%AF",target:"_blank",rel:"noopener"},"http://doc.xiaominfo.com),\u5219\u5f00\u53d1\u8005\u5728\u4e0a\u4f20\u7684\u65f6\u5019\u9700\u8981\u8bbe\u7f6e\u8be5\u5c5e\u6027,\u5426\u5219\u65e0\u6cd5\u8c03\u8bd5,\u8be5\u53c2\u6570\u8bbe\u7f6e\u540e\u5219Host\u3001Port\u4e0d\u4f1a\u751f\u6548,\u4f1a\u6839\u636e\u8be5\u5730\u5740\u81ea\u52a8\u89e3\u6790\u5f97\u5230host\u548c\u7aef\u53e3,\u6240\u4ee5\u4e24\u4e2a\u5c5e\u6027\u914d\u7f6e\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cloudRoutes"),":\u670d\u52a1\u5206\u7ec4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"groupName"),":\u670d\u52a1\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content"),":\u8be5\u5185\u5bb9\u662fOpenAPIv2\u7684JSON\u7ed3\u6784"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),":\u63d0\u4f9b\u8bbf\u95ee\u5f97\u5230OpenAPIv2\u7684\u63a5\u53e3\u5730\u5740,\u5728\u5b9e\u9645\u9884\u89c8\u7684\u65f6\u5019,\u4f1a\u901a\u8fc7\u8be5\u63a5\u53e3\u5f97\u5230Swagger\u7684JSON\u5185\u5bb9\u8fdb\u884c\u6e32\u67d3")))),(0,i.kt)("h3",{id:"4132-spring-boot\u81ea\u52a8\u6ce8\u518c"},"4.1.3.2 Spring Boot\u81ea\u52a8\u6ce8\u518c"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u9879\u76ee\u662f\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Boot"),"\u8fdb\u884c\u5f00\u53d1,\u5e76\u4e14\u4e0d\u60f3\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Knife4jCloud"),"\u63d0\u4f9b\u7684\u754c\u9762\u8fdb\u884c\u64cd\u4f5c,\u5e76\u4e14\u5df2\u7ecf\u96c6\u6210\u4e86springfox-swagger\u7ec4\u4ef6,\u90a3\u4e48,\u4f60\u53ef\u4ee5\u5f15\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Knife4jCloud"),"\u63d0\u4f9b\u7684\u81ea\u52a8\u6ce8\u518c\u7684jar\u5305\u7ec4\u4ef6\u8fdb\u884c\u81ea\u52a8\u6ce8\u518c"),(0,i.kt)("p",null,"1.Maven\u5f15\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-discovery-spring-boot-starter</artifactId>\n    \x3c!--\u5728\u5f15\u7528\u65f6\u8bf7\u5728maven\u4e2d\u592e\u4ed3\u5e93(http://search.maven.org)\u641c\u7d22\u6700\u65b0\u7248\u672c\u53f7--\x3e\n    \x3c!-- \u8be5\u7248\u672c\u5fc5\u987b\u548cKnife4jCloud\u4e3b\u7248\u672c\u4e00\u81f4--\x3e\n    <version>1.0</version>\n</dependency>\n")),(0,i.kt)("p",null,"2\u3001\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u76f8\u5173\u53c2\u6570,\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"yml"),"\u4e3a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  cloud:\n    ## \u53c2\u8003\u6ce8\u518cAPI\u4e2d\u7684accessKey\n    accessKey: JDUkd1YvSi5zZmUkMHYuSGNmN1hMazJPajJuMjNJVW43dWNyL2tyR3N4bzJaa1A2ZC5mSUlwNA\n    ## \u9879\u76ee\u7f16\u53f7\n    code: APITest\n    ## Knife4jCloud\u7684\u5bf9\u5916\u57df\u540d\u5730\u5740\n    server: http://127.0.0.1:19011\n    ## \u5f53\u524d\u670d\u52a1\u662f\u5426\u662fHTTPS\u7684,\u9ed8\u8ba4\u53ef\u4ee5\u4e0d\u914d\u7f6e,\u5e76\u4e14\u8be5\u53c2\u6570\u9ed8\u8ba4\u4e3afalse\n    ssl: false\n    ## \u53c2\u8003\u6ce8\u518cAPI\u4e2d\u7684client\u5c5e\u6027,\u8be5\u53c2\u6570\u53ef\u4ee5\u4e0d\u914d\u7f6e,\u53ea\u6709\u5728\u57df\u540d\u7684\u60c5\u51b5\u4e0b\u9700\u8981\u8fdb\u884c\u914d\u7f6e\n    client: http://test.domain.com\n    \n")),(0,i.kt)("p",null,"3\u3001\u5728Spring Boot\u5e94\u7528\u4e2d\u901a\u8fc7\u6ce8\u89e3",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableKnife4jCloudDiscovery"),"\u8fdb\u884c\u542f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@EnableKnife4jCloudDiscovery\n@SpringBootApplication\npublic class Knife4jSpringBootDemoApplication implements WebMvcConfigurer{\n    //more..\n}\n")),(0,i.kt)("h2",{id:"414-\u4ea7\u54c1\u8bd5\u7528"},"4.1.4 \u4ea7\u54c1\u8bd5\u7528"),(0,i.kt)("p",null,"\u53ef\u4ee5\u8bbf\u95ee",(0,i.kt)("a",{parentName:"p",href:"http://cloud.xiaominfo.com",target:"_blank",rel:"noopener"},"http://cloud.xiaominfo.com"),"\u8fdb\u884c\u6ce8\u518c\u8bd5\u7528\u5427!!!"))}m.isMDXComponent=!0},5742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/item-d8f84aefc5aaa20a56020543b94dec5e.png"},11505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/item1-61c7ecee29de693a21e6cb7aecf3fbd4.png"},54686:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/item2-886aea71dbd5a46ef93a34ddbe194565.png"},11356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-4a8dc2af13fca62c2d3b6e8ba55d0212.png"},32152:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login1-50595f569c5c74b6fc46fbdfb36b39a8.png"},83205:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/product-aa07656f0194aba29a91edc6bd05edad.png"},41121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/product1-82bc5daf4cdc6ceb671377d97f124f87.png"},14966:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/product2-862e04d8a2023c1a90229bd2681abc3d.png"},73818:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/user1-07fb8745f16f583c5288cafb292dd8aa.png"},9484:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/workplan-1f8e48202e457421c0ab17c0cda42955.png"}}]);