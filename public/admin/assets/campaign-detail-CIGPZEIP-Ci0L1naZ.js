import{a as K,u as Q,b as F}from"./chunk-6KEI7WC2-Ci0Lej_g.js";import{D as G}from"./chunk-JWQZ23TW-BK-A-8yw.js";import{r as l,bN as h,dy as A,j as t,d as J,R as V,a as W,S as U,q as Y,b as m,H as u,A as j,T as c,u as Z,dx as X,Y as ee,di as te,dz as z,L as se,B as re,av as ae,dA as ie,s as oe,t as S}from"./index-BQuBQHu2.js";import{c as ne}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{T as v}from"./chunk-2RQLKDBF-BDHDfG71.js";import{u as le,D as ce}from"./chunk-HMRXSHOP-BNUbNDv4.js";import"./lodash-fC6B5DOT.js";import"./chunk-JU27BRLN-DNZr3CKD.js";import"./chunk-KHOKHZC6-BG_Tq9SP.js";import{P as y}from"./pencil-square-Nmnw9YVK.js";import{T as k}from"./Trans-Di37dP-o.js";import{T as E}from"./trash-C4POu7J1.js";import{u as _}from"./use-prompt-X-fK_bxM.js";import{C as p}from"./container-QtDO671d.js";import{S as de}from"./status-badge-DEJeK6kH.js";import{C as P}from"./checkbox-C0c0ryIj.js";import{c as me}from"./index-BEBjA3ix.js";import"./chunk-KDXAFTVE-BIJQy-Te.js";import"./chunk-MSDRGCRR-uK01QOLs.js";import"./chunk-P3UUX2T6-CsEGVYfb.js";import"./chunk-ADOCJB6L-DI5-Yq5N.js";import"./chunk-C76H5USB-Bh_A6rbf.js";import"./chunk-N65KPW3C-lXubDjyZ.js";import"./format-Bn7asWVz.js";import"./x-mark-mini-B_qiNB3E.js";import"./chunk-YEDAFXMB-Bc4XkWNl.js";import"./chunk-AOFGTNG6-D2P2T4B4.js";import"./chunk-WX2SMNCD-DsZ84O7g.js";import"./plus-mini-Cf-VDbQN.js";import"./command-bar-DeBS_hMu.js";import"./index-D_JOgVLq.js";import"./date-picker-BEV8QPIU.js";import"./popover-BAKxVwNM.js";import"./triangle-left-mini-DhrHHWcd.js";import"./prompt-Dgmkzrq9.js";var ue=Object.defineProperty,b=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,T=(e,s,r)=>s in e?ue(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,pe=(e,s)=>{for(var r in s||(s={}))O.call(s,r)&&T(e,r,s[r]);if(b)for(var r of b(s))R.call(s,r)&&T(e,r,s[r]);return e},xe=(e,s)=>{var r={};for(var a in e)O.call(e,a)&&s.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&b)for(var a of b(e))s.indexOf(a)<0&&R.call(e,a)&&(r[a]=e[a]);return r};const I=l.forwardRef((e,s)=>{var r=e,{color:a="currentColor"}=r,i=xe(r,["color"]);return l.createElement("svg",pe({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:s},i),l.createElement("g",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},l.createElement("path",{d:"M13.368 10.167a6.446 6.446 0 1 1-8.535-8.535"}),l.createElement("path",{d:"M13.944 7.5A6.444 6.444 0 0 0 7.5 1.056V7.5z"})),l.createElement("defs",null,l.createElement("clipPath",{id:"a"},l.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});I.displayName="ChartPie";function fe(e,s){const r=h(e),a=h(s);return r.getTime()>a.getTime()}function ge(e,s){const r=h(e),a=h(s);return+r<+a}var C="+promotions.id",ct=e=>{const{id:s}=e.params||{},{campaign:r}=A(s,{fields:C},{initialData:e.data,enabled:!!s});return r?t.jsx("span",{children:r.name}):null},he=({campaign:e})=>{var r,a,i;const{t:s}=m();return t.jsxs(p,{className:"flex flex-col gap-y-4 px-6 py-4",children:[t.jsxs("div",{className:"flex justify-between",children:[t.jsxs("div",{className:"flex-grow",children:[t.jsx("div",{className:"bg-ui-bg-base shadow-borders-base float-left flex size-7 items-center justify-center rounded-md",children:t.jsx("div",{className:"bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]",children:t.jsx(I,{className:"text-ui-fg-subtle"})})}),t.jsx(u,{className:"text-ui-fg-subtle ml-10 mt-[1.5px] font-normal",level:"h3",children:s("campaigns.fields.budget_limit")})]}),t.jsx(j,{groups:[{actions:[{icon:t.jsx(y,{}),label:s("actions.edit"),to:"edit-budget"}]}]})]}),t.jsx("div",{children:t.jsx(c,{className:"text-ui-fg-subtle border-ui-border-strong border-l-4 pl-3",size:"small",leading:"compact",children:t.jsx(k,{i18nKey:"campaigns.totalSpend",values:{amount:((r=e==null?void 0:e.budget)==null?void 0:r.limit)||"no limit",currency:((a=e==null?void 0:e.budget)==null?void 0:a.type)==="spend"&&(e!=null&&e.budget.limit)?(i=e.budget)==null?void 0:i.currency_code:""},components:[t.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus text-lg"},"amount"),t.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus text-lg"},"currency")]})})})]})};function be(e){return e.ends_at&&ge(new Date(e.ends_at),new Date)?"expired":e.starts_at&&fe(new Date(e.starts_at),new Date)?"scheduled":"active"}var je=e=>{switch(e){case"expired":return"red";case"scheduled":return"orange";case"active":return"green";default:return"grey"}},ye=({campaign:e})=>{var x,f;const{t:s}=m(),r=_(),a=Z(),{mutateAsync:i}=X(e.id),o=async()=>{await r({title:s("campaigns.delete.title"),description:s("campaigns.delete.description",{name:e.name}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await i(void 0,{onSuccess:()=>{S.success(s("campaigns.delete.successToast",{name:e.name})),a("/campaigns",{replace:!0})},onError:g=>{S.error(g.message)}})},n=be(e);return t.jsxs(p,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(u,{children:e.name}),t.jsxs("div",{className:"flex items-center gap-x-4",children:[t.jsx(de,{color:je(n),children:s(`campaigns.status.${n}`)}),t.jsx(j,{groups:[{actions:[{icon:t.jsx(y,{}),label:s("actions.edit"),to:`/campaigns/${e.id}/edit`}]},{actions:[{icon:t.jsx(E,{}),label:s("actions.delete"),onClick:o}]}]})]})]}),t.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[t.jsx(c,{size:"small",leading:"compact",weight:"plus",children:s("campaigns.fields.identifier")}),t.jsx(c,{size:"small",leading:"compact",children:e.campaign_identifier})]}),t.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[t.jsx(c,{size:"small",leading:"compact",weight:"plus",children:s("fields.description")}),t.jsx(c,{size:"small",leading:"compact",children:e.description||"-"})]}),(e==null?void 0:e.budget)&&e.budget.type==="spend"&&t.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[t.jsx(c,{size:"small",leading:"compact",weight:"plus",children:s("fields.currency")}),t.jsxs("div",{children:[t.jsx(ee,{size:"xsmall",children:e==null?void 0:e.budget.currency_code}),t.jsx(c,{className:"inline pl-3",size:"small",leading:"compact",children:(f=ne[(x=e==null?void 0:e.budget.currency_code)==null?void 0:x.toUpperCase()])==null?void 0:f.name})]})]})]})},w=10,ve=({campaign:e})=>{const[s,r]=l.useState({}),{t:a}=m(),i=_(),o=_e(),n=K(),{searchParams:x,raw:f}=Q({pageSize:w}),{promotions:N,count:g,isLoading:B,isError:L,error:M}=te({...x,campaign_id:e.id}),{table:q}=le({data:N??[],columns:o,count:g,getRowId:d=>d.id,enablePagination:!0,enableRowSelection:!0,pageSize:w,rowSelection:{state:s,updater:r},meta:{campaignId:e.id}});if(L)throw M;const{mutateAsync:H}=z(e.id),$=async()=>{const d=Object.keys(s);await i({title:a("campaigns.promotions.remove.title",{count:d.length}),description:a("campaigns.promotions.remove.description",{count:d.length}),confirmText:a("actions.continue"),cancelText:a("actions.cancel")})&&await H({remove:d},{onSuccess:()=>r({})})};return t.jsxs(p,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(u,{level:"h2",children:a("promotions.domain")}),t.jsx(se,{to:`/campaigns/${e.id}/add-promotions`,children:t.jsx(re,{variant:"secondary",size:"small",children:a("general.add")})})]}),t.jsx(ce,{table:q,columns:o,pageSize:w,isLoading:B,count:g,navigateTo:d=>`/promotions/${d.id}`,filters:n,search:!0,pagination:!0,orderBy:[{key:"code",label:a("fields.code")},{key:"type",label:a("fields.type")},{key:"created_at",label:a("fields.createdAt")},{key:"updated_at",label:a("fields.updatedAt")}],queryObject:f,commands:[{action:$,label:a("actions.remove"),shortcut:"r"}],noRecords:{message:a("campaigns.promotions.list.noRecordsMessage")}})]})},we=({promotion:e,campaignId:s})=>{const{t:r}=m(),{mutateAsync:a}=z(s),i=_(),o=async()=>{await i({title:r("campaigns.promotions.remove.title",{count:1}),description:r("campaigns.promotions.remove.description",{count:1}),confirmText:r("actions.continue"),cancelText:r("actions.cancel")})&&await a({remove:[e.id]})};return t.jsx(j,{groups:[{actions:[{icon:t.jsx(y,{}),label:r("actions.edit"),to:`/promotions/${e.id}/edit`}]},{actions:[{icon:t.jsx(E,{}),label:r("actions.remove"),onClick:o}]}]})},D=me(),_e=()=>{const e=F();return l.useMemo(()=>[D.display({id:"select",header:({table:s})=>t.jsx(P,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:r=>s.toggleAllPageRowsSelected(!!r)}),cell:({row:s})=>t.jsx(P,{checked:s.getIsSelected(),onCheckedChange:r=>s.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...e,D.display({id:"actions",cell:({row:s,table:r})=>{const{campaignId:a}=r.options.meta;return t.jsx(we,{promotion:s.original,campaignId:a})}})],[e])},Ce=({campaign:e})=>{var r,a,i,o;const{t:s}=m();return t.jsxs(p,{className:"flex flex-col gap-y-4 px-6 py-4",children:[t.jsxs("div",{className:"mb-2 grid grid-cols-[28px_1fr] items-center gap-x-3",children:[t.jsx("div",{className:"bg-ui-bg-base shadow-borders-base flex size-7 items-center justify-center rounded-md",children:t.jsx("div",{className:"bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]",children:t.jsx(ae,{className:"text-ui-fg-subtle"})})}),t.jsx(u,{level:"h3",className:"text-ui-fg-subtle font-normal",children:((r=e.budget)==null?void 0:r.type)==="spend"?s("campaigns.fields.total_spend"):s("campaigns.fields.total_used")})]}),t.jsx("div",{children:t.jsx(c,{className:"text-ui-fg-subtle border-ui-border-strong border-l-4 pl-3",size:"small",leading:"compact",children:t.jsx(k,{i18nKey:"campaigns.totalSpend",values:{amount:((a=e==null?void 0:e.budget)==null?void 0:a.used)||0,currency:((i=e==null?void 0:e.budget)==null?void 0:i.type)==="spend"?(o=e==null?void 0:e.budget)==null?void 0:o.currency_code:""},components:[t.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus text-lg"},"amount"),t.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus text-lg"},"currency")]})})})]})},Ne=({campaign:e})=>{const{t:s}=m();return t.jsxs(p,{className:"flex flex-col gap-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx(u,{level:"h2",children:s("campaigns.configuration.header")}),t.jsx(j,{groups:[{actions:[{label:s("actions.edit"),icon:t.jsx(y,{}),to:"configuration"}]}]})]}),t.jsx(G,{startsAt:e.starts_at,endsAt:e.ends_at,showTime:!0})]})},dt=()=>{const e=J(),{id:s}=V(),{campaign:r,isLoading:a,isError:i,error:o}=A(s,{fields:C},{initialData:e}),{getWidgets:n}=W();if(a||!r)return t.jsx(U,{mainSections:2,sidebarSections:3,showJSON:!0,showMetadata:!0});if(i)throw o;return t.jsxs(v,{widgets:{after:n("campaign.details.after"),before:n("campaign.details.before"),sideAfter:n("campaign.details.side.after"),sideBefore:n("campaign.details.side.before")},hasOutlet:!0,showJSON:!0,showMetadata:!0,data:r,children:[t.jsxs(v.Main,{children:[t.jsx(ye,{campaign:r}),t.jsx(ve,{campaign:r})]}),t.jsxs(v.Sidebar,{children:[t.jsx(Ne,{campaign:r}),t.jsx(Ce,{campaign:r}),t.jsx(he,{campaign:r})]})]})},Se=e=>({queryKey:ie.detail(e),queryFn:async()=>oe.admin.campaign.retrieve(e,{fields:C})}),mt=async({params:e})=>{const s=e.id,r=Se(s);return Y.ensureQueryData(r)};export{ct as Breadcrumb,dt as Component,mt as loader};
