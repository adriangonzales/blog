import{a as $,_ as k}from"./chevronDown.2bb15b93.js";import{a as b,o as s,c as N,C as o,e as a,F as q,b as u,Z as x,$ as P,t as m,q as U,W as r,u as v,m as B,a4 as l,a5 as d,Y as h,a0 as p}from"./entry.3a7d9717.js";import{_ as w}from"./nuxt-link.43cf900f.js";/* empty css                       */const S={},C=a("h1",{class:"mb-4 text-center text-h3 font-bold leading-h3 md:mb-6 md:text-left md:text-h1 md:leading-h1"},"Blog",-1),D=a("p",{class:"mb-3 text-center md:w-8/12 md:text-left md:text-lg md:leading-lg"},"A collection of code snippets, observations, etc.",-1);function V(t,e){const c=$;return s(),N(c,{id:"blog",class:"bg-chelsea-cucumber-50 mb-12 text-typography_primary"},{default:o(()=>[C,D]),_:1})}const H=b(S,[["render",V]]),A={class:"grid grid-cols-10 gap-4 text-typography_primary"},L={class:"wrapper"},F={class:"text-h3 leading-h3 font-semibold mb-2 group-hover:text-brand_primary"},I={class:"text-sm leading-sm mb-4 text-typography_primary/75 dark:text-typography_primary_dark/75"},M={key:0,class:"w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white"},J={__name:"list",props:{data:{type:Array,required:!0},message:{type:String,default:"There are no posts right now, but stay tuned for newer releases in the future."}},setup(t){const{$formatDate:e}=q();return(c,f)=>{const _=w;return s(),u(x,null,[a("ul",A,[(s(!0),u(x,null,P(t.data,n=>(s(),u("li",{key:n._path,class:"col-span-full md:col-span-5 relative rounded-md border-2 border-typography_primary hover:border-brand_primary group"},[r(_,{to:n._path+"/",class:"p-4 block relative"},{default:o(()=>[a("div",L,[a("header",null,[a("h2",F,m(n.headline),1),a("p",I,m(v(e)(n.date)),1),a("p",null,m(n.excerpt),1)])])]),_:2},1032,["to"])]))),128))]),t.data.length==0?(s(),u("p",M,m(t.message),1)):U("",!0)],64)}}},T={class:"pagination-list text-typography_primary"},z={class:"pagination-extra"},E={class:"pagination-extra"},R={__name:"pagination",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},nextPage:{type:Boolean,required:!0},baseUrl:{type:String,required:!0},pageUrl:{type:String,required:!0}},setup(t){const e=t,c=n=>`${e.pageUrl}${n}/`,f=[Math.max(1,e.currentPage-1),e.currentPage,Math.min(e.totalPages,e.currentPage+1)],_=B(()=>e.currentPage===2?e.baseUrl:`${e.pageUrl}${e.currentPage-1}/`);return(n,W)=>{const y=k,g=w;return s(),u("div",T,[l(r(g,{class:"pagination-item pagination-icon",to:v(_)},{default:o(()=>[r(y,{class:"transform rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[d,t.currentPage>1]]),r(g,{class:p(["pagination-item",t.currentPage===1?"active":""]),to:t.baseUrl},{default:o(()=>[h("1")]),_:1},8,["class","to"]),l(a("span",z," ... ",512),[[d,t.currentPage>2]]),(s(),u(x,null,P(f,i=>l(r(g,{key:i,class:p(["pagination-item",t.currentPage===i?"active":""]),to:c(i)},{default:o(()=>[h(m(i),1)]),_:2},1032,["class","to"]),[[d,i!==1&&i!==t.totalPages]])),64)),l(a("span",E," ... ",512),[[d,t.currentPage<t.totalPages-1]]),l(r(g,{class:p(["pagination-item",t.currentPage===t.totalPages?"active":""]),to:c(t.totalPages)},{default:o(()=>[h(m(t.totalPages),1)]),_:1},8,["class","to"]),[[d,t.totalPages>1]]),l(r(g,{class:"pagination-item pagination-icon",to:c(t.currentPage+1)},{default:o(()=>[r(y,{class:"transform -rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[d,t.currentPage<t.totalPages]])])}}},K=b(R,[["__scopeId","data-v-1dac4ff8"]]);export{H as _,J as a,K as b};
