(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/9aa":function(e,t,n){var o=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){var o=n("dVn5"),r=n("fo6e"),a=n("dt0z"),u=n("9NmV");e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?r(e)?u(e):o(e):e.match(t)||[]}},"6qSS":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("Wbzz"),u=n("TJpk"),c=n.n(u),f=n("N1om"),i=n.n(f),l=n("Kvkj"),s=n("vOnD"),d=n("InJ6");const{colors:x}=d.h,m=Object(s.c)(d.d).withConfig({displayName:"post__StyledPostContainer",componentId:"zi9sw9-0"})(["max-width:1000px;"]),p=s.c.header.withConfig({displayName:"post__StyledPostHeader",componentId:"zi9sw9-1"})(["margin-bottom:50px;.tag{margin-right:10px;}"]),g=s.c.div.withConfig({displayName:"post__StyledPostContent",componentId:"zi9sw9-2"})(["margin-bottom:100px;h1,h2,h3,h4,h5,h6{margin:2em 0 1em;}p{margin:1em 0;line-height:1.5;color:",";}"],x.lightSlate);t.default=e=>{let{data:t,location:n}=e;const{frontmatter:o,html:u}=t.markdownRemark,{title:f,date:s,tags:d}=o;return r.a.createElement(l.i,{location:n},r.a.createElement(c.a,null,r.a.createElement("title",null,f," | Ayon Karmakar"),r.a.createElement("link",{rel:"canonical",href:"https://chandrikadeb7.github.io/pensieve"})),r.a.createElement(m,null,r.a.createElement("span",{className:"breadcrumb"},r.a.createElement("span",{className:"arrow"},"←"),r.a.createElement(a.Link,{to:"/pensieve"},"All memories")),r.a.createElement(p,null,r.a.createElement("h1",{className:"medium-title"},f),r.a.createElement("p",{className:"subtitle"},r.a.createElement("time",null,new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),r.a.createElement("span",null," — "),d&&d.length>0&&d.map((e,t)=>r.a.createElement(a.Link,{key:t,to:`/pensieve/tags/${i()(e)}/`,className:"tag"},"#",e)))),r.a.createElement(g,{dangerouslySetInnerHTML:{__html:u}})))}},"9NmV":function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",r="\\d+",a="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+u+"|"+c+")",d="(?:"+l+"|"+c+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,i].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),p="(?:"+[a,f,i].join("|")+")"+m,g=RegExp([l+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,l,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,l+s,"$"].join("|")+")",l+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,p].join("|"),"g");e.exports=function(e){return e.match(g)||[]}},AP2z:function(e,t,n){var o=n("nmnc"),r=Object.prototype,a=r.hasOwnProperty,u=r.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(f){}var r=u.call(e);return o&&(t?e[c]=n:delete e[c]),r}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},N1om:function(e,t,n){var o=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=o},NykK:function(e,t,n){var o=n("nmnc"),r=n("AP2z"),a=n("KfNM"),u=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?r(e):a(e)}},TKrE:function(e,t,n){var o=n("qRkn"),r=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(a,o).replace(u,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("eKGF"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},asDA:function(e,t){e.exports=function(e,t,n,o){var r=-1,a=null==e?0:e.length;for(o&&a&&(n=e[++r]);++r<a;)n=t(n,e[r],r,e);return n}},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,n){var o=n("zoYe");e.exports=function(e){return null==e?"":o(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},nmnc:function(e,t,n){var o=n("Kz5y").Symbol;e.exports=o},qRkn:function(e,t,n){var o=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=o},sgoq:function(e,t,n){var o=n("asDA"),r=n("TKrE"),a=n("6nK8"),u=RegExp("['’]","g");e.exports=function(e){return function(t){return o(a(r(t).replace(u,"")),e,"")}}},zoYe:function(e,t,n){var o=n("nmnc"),r=n("eUgh"),a=n("Z0cm"),u=n("/9aa"),c=o?o.prototype:void 0,f=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(u(t))return f?f.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-post-js-6ad8662fc5afedfd51f0.js.map