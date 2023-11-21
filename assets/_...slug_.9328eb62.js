import{_ as Kt}from"./primary.5a64d3ba.js";import{_ as k}from"./nuxt-link.43cf900f.js";import{_ as Qt,a as Vt}from"./chevronDown.2bb15b93.js";/* empty css                            */import{o as i,b as l,e as t,Z as $,$ as Ut,W as s,C as _,Y as Xt,t as u,q as I,a as b,r as jt,a0 as g,a1 as Ht,a2 as qt,j as te,L as ee,c as oe,F as ae,D as ne,a3 as Ot,u as y,a4 as se,a5 as ie}from"./entry.3a7d9717.js";import re from"./ContentRenderer.7ab66349.js";import le from"./ContentDoc.60e405ff.js";import{u as Pt,q as v}from"./query.8856ab37.js";import{u as ce}from"./composables.b73c7c81.js";import"./primary.0ff563d1.js";/* empty css                    */import"./ContentRendererMarkdown.dcd2ac7f.js";import"./index.a6ef77ff.js";import"./ContentQuery.4b40e155.js";import"./utils.47f98c6f.js";const de=t("span",{class:"blog-aside-title mb-2 block"},"Continue Reading",-1),pe={class:"list-none"},me={key:0,class:"first:mt-0 mt-4 md:mt-1"},_e={class:"!no-underline md:hidden text-sm leading-sm md:text-xs md:leading-xs mt-1"},ue={__name:"relatedArticles",props:{surround:{type:Array,required:!0}},setup(n){return(o,a)=>{const c=k;return i(),l("div",null,[de,t("ul",pe,[(i(!0),l($,null,Ut(n.surround,(r,d)=>(i(),l($,{key:d},[r?(i(),l("li",me,[s(c,{to:r._path+"/",class:"hover:underline hover:text-brand_primary","aria-label":r.headline},{default:_(()=>[Xt(u(r.headline),1)]),_:2},1032,["to","aria-label"]),t("p",_e,u(r.excerpt),1)])):I("",!0)],64))),128))])])}}},he=n=>(Ht("data-v-4ed4aea9"),n=n(),qt(),n),ge={class:"toc"},fe=he(()=>t("span",{class:"blog-aside-title mb-0"},"Table of Contents",-1)),xe=["href"],ye={__name:"tableOfContents",props:{links:{type:Array,required:!0}},setup(n){const o=r=>r.map(e=>{let m=[e];if(e.children){let f=o(e.children);m=[e,...f]}return m}).flat(1),a=jt(!0),c=()=>{a.value=!a.value};return(r,d)=>{const e=Qt;return i(),l("nav",ge,[t("header",{class:g(["flex flex-row justify-between items-center cursor-pointer",a.value?"mb-2":""]),onClick:c,"aria-label":"Expand the table of contents."},[fe,s(e,{class:g(["w-6 h-6 transform",a.value?"":"rotate-180"]),width:"24",height:"24"},null,8,["class"])],2),n.links?(i(),l("ul",{key:0,class:g([a.value?"block":"hidden"])},[(i(!0),l($,null,Ut(o(n.links),m=>(i(),l("li",{key:m.id,class:g(`toc-link_${m.depth} first:mt-0 mt-2 md:mt-1`)},[t("a",{href:`#${m.id}`,class:"hover:underline hover:text-brand_primary"},u(m.text),9,xe)],2))),128))],2)):I("",!0)])}}},be=b(ye,[["__scopeId","data-v-4ed4aea9"]]),we={},ve={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},$e=t("path",{fill:"currentColor",d:"M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z"},null,-1),ke=[$e];function Ie(n,o){return i(),l("svg",ve,ke)}const Le=b(we,[["render",Ie]]),Se={href:"#","aria-label":"Scroll to Top",class:"flex flex-col items-center py-1 text-center"},Ce=t("span",{class:"text-xxs leading-xxs uppercase font-highlight sm:w-6/12"},"Scroll to Top",-1),Te={__name:"scrollTopIcon",setup(n){const o=jt(!1),a=()=>{if(typeof window<"u"){const c=window.pageYOffset||document.documentElement.scrollTop;o.value=c>window.innerHeight/2}};return typeof window<"u"&&(window.addEventListener("scroll",a),te(()=>a())),ee(()=>{typeof window<"u"&&window.removeEventListener("scroll",a)}),(c,r)=>{const d=Le;return i(),l("div",{class:g(["fixed flex flex-col items-center w-12 sm:w-section_x z-20 bottom-[50px] right-0 text-typography_primary bg-brand_primary/90 transform duration-150 rounded-tl-md rounded-bl-md",o.value?"":"translate-x-full"])},[t("a",Se,[Ce,s(d,{class:"w-4 h-4",width:"16",height:"16"})])],2)}}},Ne={},Ae={class:"flex flex-col items-center justify-center h-full text-center"},Be=t("h1",{class:"font-bold text-typography_primary"},"404 - Not Found",-1),Ee=t("p",{class:"text-typography_primary mt-6 text-lg leading-lg"}," You were looking for something that doesn't exist on this site. I recommend you go back and look for something else. ",-1);function De(n,o){const a=k,c=Vt;return i(),oe(c,{id:"error",fullHeight:!0},{default:_(()=>[t("div",Ae,[Be,Ee,s(a,{text:"Go back home",to:"/",target:"_self",aria:"Go back home.",extraClass:"mx-auto mt-8"})])]),_:1})}const Oe=b(Ne,[["render",De]]);const h=n=>(Ht("data-v-547b1330"),n=n(),qt(),n),Pe={class:"blog-post-text"},Ve={class:"mb-12 flex flex-col items-center md:mb-8 md:flex-row md:justify-between md:text-right"},Ue={itemscope:"",itemtype:"https://schema.org/BreadcrumbList",class:"blog-breadcrumb"},je={itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},He=h(()=>t("span",{itemprop:"name"},"Home",-1)),qe=h(()=>t("meta",{itemprop:"position",content:"1"},null,-1)),Re=h(()=>t("li",{class:"separator"},"/",-1)),ze={itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},Fe=h(()=>t("span",{itemprop:"name"},"Blog",-1)),Ge=h(()=>t("meta",{itemprop:"position",content:"2"},null,-1)),We=h(()=>t("li",{class:"separator"},"/",-1)),Ye={itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},Me={itemprop:"name"},Ze=h(()=>t("meta",{itemprop:"position",content:"3"},null,-1)),Je={class:"dark:text-typography_primary_dark/75 mt-2 font-light text-typography_primary/75 md:mt-0"},Ke={class:"blog-post-text mb-4 text-center text-h3 font-bold leading-h3 md:mb-6 md:text-left md:text-h1 md:leading-h1"},Qe={class:"blog-post-text mb-8 text-center md:w-8/12 md:text-left md:text-lg md:leading-lg"},Xe={class:"col-span-full md:col-span-3 md:hidden"},to={class:"blog-post-text blog-aside-wrapper mb-2"},eo={class:"prose relative col-span-full md:col-span-7"},oo={class:"blog-aside col-span-full h-fit md:col-span-3"},ao={class:"blog-aside-wrapper mb-4 !hidden md:!flex"},no={key:0,class:"blog-aside-wrapper"},so={__name:"[...slug]",async setup(n){var S,C,T,N,A,B,E,D,O,P,V,U,j,H,q,R,z,F,G,W,Y,M,Z,J,K,Q,X,tt,et,ot,at,nt,st,it,rt,lt,ct,dt,pt,mt,_t,ut,ht,gt,ft,xt,yt,bt,wt;let o,a;const{$formatDate:c}=ae(),{path:r}=ne(),d=r.replace(/\/+$/,""),{data:e,error:m}=([o,a]=Ot(async()=>Pt(`content-${d}`,async()=>{let vt=v("/blog").where({_path:d}).findOne(),$t=v("/blog").sort({date:-1}).only(["_path","headline","excerpt"]).findSurround(d,{before:1,after:1});return{article:await vt,surround:await $t}})),o=await o,a(),o),{data:f}=([o,a]=Ot(()=>Pt("home",()=>v("/authors").findOne())),o=await o,a(),o),w="https://virexmachina.com",x=w+(r+"/").replace(/\/+$/,"/"),Rt=w+(((T=(C=(S=e.value)==null?void 0:S.article)==null?void 0:C.socialImage)==null?void 0:T.src)||"/card-twitter.png"),L=w+(((B=(A=(N=e.value)==null?void 0:N.article)==null?void 0:A.socialImage)==null?void 0:B.src)||"/card-og.png"),zt=[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":"https://virexmachina.com/"},url:x,image:L,headline:(D=(E=e.value)==null?void 0:E.article)==null?void 0:D.headline,abstract:(P=(O=e.value)==null?void 0:O.article)==null?void 0:P.excerpt,datePublished:(U=(V=e.value)==null?void 0:V.article)==null?void 0:U.date,dateModified:((H=(j=e.value)==null?void 0:j.article)==null?void 0:H.dateUpdated)||((R=(q=e.value)==null?void 0:q.article)==null?void 0:R.date),author:f.value[(F=(z=e.value)==null?void 0:z.article)==null?void 0:F.author],publisher:f.value["Adrian Gonzales"]})}];return ce({title:(W=(G=e.value)==null?void 0:G.article)==null?void 0:W.title,meta:[{name:"author",content:(M=(Y=e.value)==null?void 0:Y.article)==null?void 0:M.author},{name:"description",content:(J=(Z=e.value)==null?void 0:Z.article)==null?void 0:J.description},{property:"article:published_time",content:(Q=(K=e.value)==null?void 0:K.article)==null?void 0:Q.date.split("T")[0]},{hid:"og:title",property:"og:title",content:(tt=(X=e.value)==null?void 0:X.article)==null?void 0:tt.headline},{hid:"og:url",property:"og:url",content:x},{hid:"og:description",property:"og:description",content:(ot=(et=e.value)==null?void 0:et.article)==null?void 0:ot.description},{hid:"og:image",name:"image",property:"og:image",content:L},{hid:"og:type",property:"og:type",content:"Article"},{hid:"og:image:type",property:"og:image:type",content:`image/${(st=(nt=(at=e.value)==null?void 0:at.article)==null?void 0:nt.socialImage)==null?void 0:st.mime}`||"png"},{hid:"og:image:width",property:"og:image:width",content:((lt=(rt=(it=e.value)==null?void 0:it.article)==null?void 0:rt.socialImage)==null?void 0:lt.width)||1200},{hid:"og:image:height",property:"og:image:height",content:((pt=(dt=(ct=e.value)==null?void 0:ct.article)==null?void 0:dt.socialImage)==null?void 0:pt.height)||630},{hid:"og:image:alt",property:"og:image:alt",content:(ut=(_t=(mt=e.value)==null?void 0:mt.article)==null?void 0:_t.socialImage)==null?void 0:ut.alt},{hid:"twitter:card",name:"twitter:card",content:"Summary"},{hid:"twitter:title",name:"twitter:title",content:(gt=(ht=e.value)==null?void 0:ht.article)==null?void 0:gt.headline},{hid:"twitter:url",name:"twitter:url",content:x},{hid:"twitter:description",name:"twitter:description",content:(xt=(ft=e.value)==null?void 0:ft.article)==null?void 0:xt.description},{hid:"twitter:image",name:"twitter:image",content:Rt},{hid:"twitter:image:alt",name:"twitter:image:alt",content:(wt=(bt=(yt=e.value)==null?void 0:yt.article)==null?void 0:bt.socialImage)==null?void 0:wt.alt}],link:[{hid:"canonical",rel:"canonical",href:x}],script:zt}),(vt,$t)=>{const Ft=Kt,kt=k,It=Vt,Lt=be,Gt=re,Wt=ue,Yt=Te,Mt=Oe,Zt=le;return i(),l("main",Pe,[s(Ft),s(Zt,null,{default:_(({doc:p})=>[s(It,{id:"blog-title",type:"header",class:"bg-chelsea-cucumber-50 mb-12 text-typography_primary"},{default:_(()=>[t("div",Ve,[t("ol",Ue,[t("li",je,[s(kt,{itemprop:"item",to:"/"},{default:_(()=>[He]),_:1}),qe]),Re,t("li",ze,[s(kt,{itemscope:"",itemtype:"https://schema.org/WebPage",itemprop:"item",itemid:"/blog/",to:"/blog/"},{default:_(()=>[Fe]),_:1}),Ge]),We,t("li",Ye,[t("span",Me,u(p.headline),1),Ze])]),t("span",Je,u(y(c)(p.date)),1)]),t("h1",Ke,u(p.headline),1),t("p",Qe,u(p.excerpt),1)]),_:2},1024),s(It,{id:"main",class:"relative grid grid-cols-10 gap-8 !pt-0 lg:gap-12"},{default:_(()=>{var St,Ct,Tt,Nt,At,Bt,Et,Dt;return[t("aside",Xe,[t("div",to,[s(Lt,{links:(Ct=(St=p.body)==null?void 0:St.toc)==null?void 0:Ct.links},null,8,["links"])])]),t("article",eo,[se(t("span",{class:"dark:text-typography_primary_dark/75 absolute -top-8 text-sm font-light italic leading-sm text-typography_primary/75"},"(Updated: "+u(y(c)(p.dateUpdated))+")",513),[[ie,p.dateUpdated]]),s(Gt,{value:p,class:"blog-content blog-post-text"},null,8,["value"])]),t("aside",oo,[t("div",ao,[s(Lt,{links:(Nt=(Tt=p.body)==null?void 0:Tt.toc)==null?void 0:Nt.links,class:"blog-post-text"},null,8,["links"])]),((Et=(Bt=(At=y(e))==null?void 0:At.surround)==null?void 0:Bt.filter(Jt=>Jt!==null))==null?void 0:Et.length)>0?(i(),l("div",no,[s(Wt,{surround:(Dt=y(e))==null?void 0:Dt.surround,class:"blog-post-text"},null,8,["surround"])])):I("",!0)])]}),_:2},1024),s(Yt)]),"not-found":_(()=>[s(Mt)]),_:1})])}}},vo=b(so,[["__scopeId","data-v-547b1330"]]);export{vo as default};