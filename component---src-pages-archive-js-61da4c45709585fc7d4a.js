(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nRki:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("TJpk"),i=a("nLfd"),c=a("20nU"),o=a("Kvkj"),s=a("g67X"),m=a("vOnD"),h=a("InJ6");const{colors:p,fonts:d,fontSizes:f}=h.h,g=Object(m.c)(h.d).withConfig({displayName:"archive__StyledMainContainer",componentId:"sc-1shh8jg-0"})([""]),u=m.c.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-1shh8jg-1"})(["margin:100px -20px;",";"],h.f.tablet`
    margin: 100px -10px;
  `),b=m.c.table.withConfig({displayName:"archive__StyledTable",componentId:"sc-1shh8jg-2"})(["width:100%;border-collapse:collapse;.hide-on-mobile{",";}tbody tr{transition:",";&:hover,&:focus{background-color:",";}}th,td{cursor:default;line-height:1.5;padding:10px 20px;",";}th{text-align:left;}td{&.year{width:10%;",";}&.title{padding-top:15px;color:",";font-size:",";font-weight:700;}&.company{width:15%;padding-top:15px;font-size:",";}&.tech{font-size:",";font-family:",";.separator{margin:0 5px;}span{display:inline-block;}}&.links{span{display:flex;align-items:center;a{",";}a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}"],h.f.tablet`
      display: none;
    `,h.h.transition,p.lightNavy,h.f.tablet`
      padding: 10px;
    `,h.f.tablet`
        font-size: ${f.sm};
      `,p.lightestSlate,f.xl,f.lg,f.xs,d.SFMono,h.g.flexCenter);t.default=e=>{let{location:t,data:a}=e;const m=a.allMarkdownRemark.edges,h=Object(n.useRef)(null),p=Object(n.useRef)(null),d=Object(n.useRef)([]);return Object(n.useEffect)(()=>{i.a.reveal(h.current,Object(c.srConfig)()),i.a.reveal(p.current,Object(c.srConfig)()),d.current.forEach((e,t)=>i.a.reveal(e,Object(c.srConfig)(10*t)))},[]),l.a.createElement(o.i,{location:t},l.a.createElement(r.Helmet,null,l.a.createElement("title",null,"Archive | Ayon Karmakar"),l.a.createElement("link",{rel:"canonical",href:"https://ayon-ssp-portfolio.netlify.app/"})),l.a.createElement(g,null,l.a.createElement("header",{ref:h},l.a.createElement("h1",{className:"big-title"},"Archive"),l.a.createElement("p",{className:"subtitle"},"A big list of things I've worked on")),l.a.createElement(u,{ref:p},l.a.createElement(b,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Title"),l.a.createElement("th",{className:"hide-on-mobile"},"Made at"),l.a.createElement("th",{className:"hide-on-mobile"},"Built with"),l.a.createElement("th",null,"Link"))),l.a.createElement("tbody",null,m.length>0&&m.map((e,t)=>{let{node:a}=e;const{date:n,github:r,external:i,title:c,tech:o,company:m}=a.frontmatter;return l.a.createElement("tr",{key:t,ref:e=>d.current[t]=e},l.a.createElement("td",{className:"overline year"},""+new Date(n).getFullYear()),l.a.createElement("td",{className:"title"},c),l.a.createElement("td",{className:"company hide-on-mobile"},m?l.a.createElement("span",null,m):l.a.createElement("span",null,"—")),l.a.createElement("td",{className:"tech hide-on-mobile"},o.length>0&&o.map((e,t)=>l.a.createElement("span",{key:t},e,"",t!==o.length-1&&l.a.createElement("span",{className:"separator"},"·")))),l.a.createElement("td",{className:"links"},l.a.createElement("span",null,i&&l.a.createElement("a",{href:i,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},l.a.createElement(s.a,{name:"External"})),r&&l.a.createElement("a",{href:r,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"GitHub Link"},l.a.createElement(s.a,{name:"GitHub"})))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-61da4c45709585fc7d4a.js.map