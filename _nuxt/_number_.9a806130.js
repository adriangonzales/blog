import{_ as b}from"./primary.c8c67c6f.js";import{_ as x,a as y,b as N}from"./pagination.1e55ab37.js";import k from"./ContentQuery.36407e52.js";import{a as B}from"./chevronDown.f318d934.js";import{D as C,P,o as u,b as L,W as t,C as e,c as H,q as R}from"./entry.075358d6.js";import"./primary.aa01a723.js";import"./nuxt-link.dcd818c5.js";/* empty css                       */import"./query.07fb3c75.js";import"./utils.f8f5ee39.js";/* empty css                    */const A={__name:"[number]",setup(V){const{path:$,params:g}=C(),a=6,r=n=>Math.ceil(n/a),o=()=>Number(g.number),m=P();let s;try{s=o(),(isNaN(s)||s<=0)&&m.replace("/blog/")}catch(n){console.error(n),m.replace("/blog/")}return(n,q)=>{const d=b,p=x,_=y,h=N,l=k,i=B;return u(),L("main",null,[t(d),t(l,{path:"/blog",only:["headline","excerpt","date","tags","_path","image"],sort:{date:-1},skip:a*(o()-1),limit:a},{default:e(({data:f})=>[t(p),t(i,{id:"main",class:"!pt-0"},{default:e(()=>[t(_,{data:f},null,8,["data"]),t(l,{path:"/blog",only:["headline"]},{default:e(({data:c})=>[r(c.length)>1?(u(),H(h,{key:0,class:"mt-8","current-page":o(),"total-pages":r(c.length),"next-page":o()<r(c.length),"base-url":"/blog/","page-url":"/blog/page/"},null,8,["current-page","total-pages","next-page"])):R("",!0)]),"not-found":e(()=>[]),_:2},1024)]),_:2},1024)]),"not-found":e(()=>[t(p),t(i,{id:"main",class:"!pt-0"},{default:e(()=>[t(_,{data:[],message:"There are no posts in this page, maybe try searching on another one."})]),_:1})]),_:1},8,["skip"])])}}};export{A as default};