import{_ as f}from"./primary.303ed7ba.js";import{_ as x,a as y,b}from"./pagination.d73dcc71.js";import h from"./ContentQuery.a46adf91.js";import{a as B}from"./chevronDown.d758a16d.js";import{a2 as C,o as r,b as P,Y as t,C as c,u as n,c as k,q as w}from"./entry.b1ffa80d.js";import{u as q,q as A}from"./query.f4807ffe.js";import{u as H}from"./composables.ed9677d0.js";import"./nuxt-link.a1698b8c.js";/* empty css                       */import"./utils.3de6fe3e.js";/* empty css                    */const j={__name:"index",async setup(L){let o,a;H({title:"Blog - Adrian Gonzales"});const s=6,{data:e}=([o,a]=C(async()=>q("content-/blog",async()=>{const _=await A("/blog").only("headline").find();return Math.ceil(_.length/s)})),o=await o,a(),o);return(_,N)=>{const m=f,l=x,i=y,p=h,u=b,g=B;return r(),P("main",null,[t(m),t(l),t(g,{id:"main",class:"!pt-0"},{default:c(()=>[t(p,{path:"/blog",only:["headline","excerpt","date","tags","_path","image"],sort:{date:-1},limit:s},{default:c(({data:d})=>[t(i,{data:d},null,8,["data"])]),_:1}),n(e)>1?(r(),k(u,{key:0,class:"mt-8",currentPage:1,totalPages:n(e),nextPage:n(e)>1,baseUrl:"/blog/",pageUrl:"/blog/page/"},null,8,["totalPages","nextPage"])):w("",!0)]),_:1})])}}};export{j as default};