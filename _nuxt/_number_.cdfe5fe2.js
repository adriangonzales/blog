import{_ as b}from"./primary.303ed7ba.js";import{_ as x,a as y,b as N}from"./pagination.d73dcc71.js";import k from"./ContentQuery.a46adf91.js";import{a as B}from"./chevronDown.d758a16d.js";import{D as C,P,o as u,b as L,Y as t,C as e,c as H,q as R}from"./entry.b1ffa80d.js";import"./nuxt-link.a1698b8c.js";/* empty css                       */import"./query.f4807ffe.js";import"./utils.3de6fe3e.js";/* empty css                    */const z={__name:"[number]",setup(V){const{path:$,params:g}=C(),a=6,r=n=>Math.ceil(n/a),o=()=>Number(g.number),m=P();let s;try{s=o(),(isNaN(s)||s<=0)&&m.replace("/blog/")}catch(n){console.error(n),m.replace("/blog/")}return(n,q)=>{const d=b,p=x,_=y,h=N,l=k,i=B;return u(),L("main",null,[t(d),t(l,{path:"/blog",only:["headline","excerpt","date","tags","_path","image"],sort:{date:-1},skip:a*(o()-1),limit:a},{default:e(({data:f})=>[t(p),t(i,{id:"main",class:"!pt-0"},{default:e(()=>[t(_,{data:f},null,8,["data"]),t(l,{path:"/blog",only:["headline"]},{default:e(({data:c})=>[r(c.length)>1?(u(),H(h,{key:0,class:"mt-8","current-page":o(),"total-pages":r(c.length),"next-page":o()<r(c.length),"base-url":"/blog/","page-url":"/blog/page/"},null,8,["current-page","total-pages","next-page"])):R("",!0)]),"not-found":e(()=>[]),_:2},1024)]),_:2},1024)]),"not-found":e(()=>[t(p),t(i,{id:"main",class:"!pt-0"},{default:e(()=>[t(_,{data:[],message:"There are no posts in this page, maybe try searching on another one."})]),_:1})]),_:1},8,["skip"])])}}};export{z as default};