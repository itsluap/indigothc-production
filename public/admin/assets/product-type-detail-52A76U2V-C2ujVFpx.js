import{u as P}from"./chunk-QVW35SMO-BJe2aoCF.js";import{u as T}from"./chunk-RJSD5KRU-D4Cy6feM.js";import{eU as p,j as r,q as g,R as j,d as v,a as D,dG as S,eV as w,s as _,b as l,H as m,A as C,e as q}from"./index-BQuBQHu2.js";import{u as k,a as A}from"./chunk-24OILC3G-Cgr1-88Z.js";import{S as E}from"./chunk-2RQLKDBF-BDHDfG71.js";import{u as N,D as B}from"./chunk-HMRXSHOP-BNUbNDv4.js";import"./lodash-fC6B5DOT.js";import"./chunk-JU27BRLN-DNZr3CKD.js";import"./chunk-KHOKHZC6-BG_Tq9SP.js";import{P as Q}from"./pencil-square-Nmnw9YVK.js";import{T as z}from"./trash-C4POu7J1.js";import{C as y}from"./container-QtDO671d.js";import"./use-prompt-X-fK_bxM.js";import"./prompt-Dgmkzrq9.js";import"./chunk-RERSP5B2-BpW1f3xU.js";import"./chunk-ADOCJB6L-DI5-Yq5N.js";import"./chunk-P3UUX2T6-CsEGVYfb.js";import"./index-BEBjA3ix.js";import"./chunk-C76H5USB-Bh_A6rbf.js";import"./Trans-Di37dP-o.js";import"./x-mark-mini-B_qiNB3E.js";import"./chunk-YEDAFXMB-Bc4XkWNl.js";import"./chunk-AOFGTNG6-D2P2T4B4.js";import"./chunk-WX2SMNCD-DsZ84O7g.js";import"./plus-mini-Cf-VDbQN.js";import"./command-bar-DeBS_hMu.js";import"./index-D_JOgVLq.js";import"./chunk-N65KPW3C-lXubDjyZ.js";import"./format-Bn7asWVz.js";import"./date-picker-BEV8QPIU.js";import"./popover-BAKxVwNM.js";import"./triangle-left-mini-DhrHHWcd.js";var xe=e=>{const{id:t}=e.params||{},{product_type:a}=p(t,void 0,{initialData:e.data,enabled:!!t});return a?r.jsx("span",{children:a.value}):null},G=e=>({queryKey:w.detail(e),queryFn:async()=>_.admin.productType.retrieve(e)}),Pe=async({params:e})=>{const t=e.id,a=G(t);return g.ensureQueryData(a)},L=({productType:e})=>{const{t}=l(),a=P(e.id);return r.jsxs(y,{className:"flex items-center justify-between",children:[r.jsx(m,{children:e.value}),r.jsx(C,{groups:[{actions:[{label:t("actions.edit"),icon:r.jsx(Q,{}),to:"edit"}]},{actions:[{label:t("actions.delete"),icon:r.jsx(z,{}),onClick:a}]}]})]})},u=10,M=({productType:e})=>{const{t}=l(),{searchParams:a,raw:i}=k({pageSize:u}),{products:o,count:n,isPending:s,isError:f,error:b}=q({...a,type_id:[e.id]}),h=A(["product_types"]),c=T(),{table:x}=N({columns:c,data:o,count:(o==null?void 0:o.length)||0,getRowId:d=>d.id,pageSize:u});if(f)throw b;return r.jsxs(y,{className:"divide-y p-0",children:[r.jsx("div",{className:"px-6 py-4",children:r.jsx(m,{level:"h2",children:t("products.domain")})}),r.jsx(B,{table:x,filters:h,isLoading:s,columns:c,count:n,pageSize:u,navigateTo:({original:d})=>`/products/${d.id}`,orderBy:[{key:"title",label:t("fields.title")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}],queryObject:i,search:!0,pagination:!0})]})},Te=()=>{const{id:e}=j(),t=v(),{product_type:a,isPending:i,isError:o,error:n}=p(e,void 0,{initialData:t}),{getWidgets:s}=D();if(i||!a)return r.jsx(S,{sections:2,showJSON:!0,showMetadata:!0});if(o)throw n;return r.jsxs(E,{widgets:{after:s("product_type.details.after"),before:s("product_type.details.before")},showJSON:!0,showMetadata:!0,data:a,children:[r.jsx(L,{productType:a}),r.jsx(M,{productType:a})]})};export{xe as Breadcrumb,Te as Component,Pe as loader};
