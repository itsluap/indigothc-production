import{L as Q}from"./chunk-I3VB6NM2-CSQkVJjW.js";import{u as H}from"./chunk-QR72ESDG-C-3rGyl7.js";import{g as F}from"./chunk-G2J2T2QU-LrVmof6g.js";import{D as I}from"./chunk-JWQZ23TW-BK-A-8yw.js";import{u as M}from"./chunk-RJSD5KRU-D4Cy6feM.js";import{dO as w,j as e,q as $,R as J,a as K,S as W,dP as Y,s as G,b as u,H as j,A as m,dN as X,aE as Z,T as d,u as U,r as L,e as V,k as ee,dQ as C,W as se,t as p}from"./index-BQuBQHu2.js";import{u as te,a as ie}from"./chunk-24OILC3G-Cgr1-88Z.js";import{T as g}from"./chunk-2RQLKDBF-BDHDfG71.js";import{u as re,D as ae}from"./chunk-HMRXSHOP-BNUbNDv4.js";import"./lodash-fC6B5DOT.js";import"./chunk-JU27BRLN-DNZr3CKD.js";import"./chunk-KHOKHZC6-BG_Tq9SP.js";import{P as x}from"./pencil-square-Nmnw9YVK.js";import{T as k}from"./trash-C4POu7J1.js";import{u as N}from"./use-prompt-X-fK_bxM.js";import{C as y}from"./container-QtDO671d.js";import{S as oe}from"./status-badge-DEJeK6kH.js";import{C as P}from"./checkbox-C0c0ryIj.js";import{c as ce}from"./index-BEBjA3ix.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./chunk-N65KPW3C-lXubDjyZ.js";import"./format-Bn7asWVz.js";import"./chunk-RERSP5B2-BpW1f3xU.js";import"./chunk-ADOCJB6L-DI5-Yq5N.js";import"./chunk-P3UUX2T6-CsEGVYfb.js";import"./chunk-C76H5USB-Bh_A6rbf.js";import"./Trans-Di37dP-o.js";import"./x-mark-mini-B_qiNB3E.js";import"./chunk-YEDAFXMB-Bc4XkWNl.js";import"./chunk-AOFGTNG6-D2P2T4B4.js";import"./chunk-WX2SMNCD-DsZ84O7g.js";import"./plus-mini-Cf-VDbQN.js";import"./command-bar-DeBS_hMu.js";import"./index-D_JOgVLq.js";import"./date-picker-BEV8QPIU.js";import"./popover-BAKxVwNM.js";import"./triangle-left-mini-DhrHHWcd.js";import"./prompt-Dgmkzrq9.js";var Ve=i=>{const{id:s}=i.params||{},{price_list:t}=w(s,void 0,{initialData:i.data,enabled:!!s});return t?e.jsx("span",{children:t.title}):null},ne=i=>({queryKey:Y.detail(i),queryFn:async()=>G.admin.priceList.retrieve(i)}),es=async({params:i})=>{const s=i.id,t=ne(s);return $.ensureQueryData(t)},le=({priceList:i})=>{const{t:s}=u();return e.jsxs(y,{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(j,{level:"h2",children:s("priceLists.configuration.header")}),e.jsx(de,{priceList:i})]}),e.jsx(m,{groups:[{actions:[{label:s("actions.edit"),to:"configuration",icon:e.jsx(x,{})}]}]})]}),e.jsx(I,{endsAt:i.ends_at,startsAt:i.starts_at,showTime:!0})]})},de=({priceList:i})=>{const{t:s}=u(),t=i.rules.customer_group_id,{customer_groups:r,isPending:a,isError:o,error:n}=X({id:t},{enabled:!!(t!=null&&t.length)});if(o)throw n;return t!=null&&t.length?a||!r?e.jsx(Z,{className:"h-5 w-full max-w-48"}):e.jsxs("div",{className:"txt-small-plus text-ui-fg-muted flex items-center gap-x-1.5",children:[e.jsx("span",{className:"text-ui-fg-subtle",children:s("priceLists.fields.customerAvailability.attribute")}),e.jsx("span",{children:"·"}),e.jsx(Q,{list:r.map(c=>c.name),n:1,className:"txt-small-plus text-ui-fg-muted"})]}):null},ue=({priceList:i})=>{var c;const{t:s}=u(),t=((c=i.prices)==null?void 0:c.length)||0,{color:r,text:a}=F(s,i),o=H({priceList:i}),n=i.type==="sale"?s("priceLists.fields.type.options.sale.label"):s("priceLists.fields.type.options.override.label");return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{children:i.title}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx(oe,{color:r,children:a}),e.jsx(m,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:e.jsx(x,{})}]},{actions:[{label:s("actions.delete"),onClick:o,icon:e.jsx(k,{})}]}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(d,{leading:"compact",size:"small",weight:"plus",children:s("fields.type")}),e.jsx(d,{size:"small",className:"text-pretty",children:n})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(d,{leading:"compact",size:"small",weight:"plus",children:s("fields.description")}),e.jsx(d,{size:"small",className:"text-pretty",children:i.description})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(d,{leading:"compact",size:"small",weight:"plus",children:s("priceLists.fields.priceOverrides.label")}),e.jsx(d,{size:"small",className:"text-pretty",children:t||"-"})]})]})},f=10,h="p",pe=({priceList:i})=>{const{t:s}=u(),t=U(),r=N(),[a,o]=L.useState({}),{searchParams:n,raw:c}=te({pageSize:f,prefix:h}),{products:T,count:b,isLoading:D,isError:_,error:A}=V({...n,price_list_id:[i.id]},{placeholderData:ee}),E=ie(),v=xe(i),{mutateAsync:R}=C(i.id),{table:z}=re({data:T||[],count:b,columns:v,enablePagination:!0,enableRowSelection:!0,pageSize:f,getRowId:l=>l.id,rowSelection:{state:a,updater:o},prefix:h}),O=async()=>{await r({title:s("general.areYouSure"),description:s("priceLists.products.delete.confirmation",{count:Object.keys(a).length}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&R({remove:Object.keys(a)},{onSuccess:()=>{p.success(s("priceLists.products.delete.successToast",{count:Object.keys(a).length})),o({})},onError:B=>{p.error(B.message)}})},q=async()=>{const l=Object.keys(a).join(",");t(`products/edit?ids[]=${l}`)};if(_)throw A;return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{children:s("priceLists.products.header")}),e.jsx(m,{groups:[{actions:[{label:s("priceLists.products.actions.addProducts"),to:"products/add",icon:e.jsx(se,{})},{label:s("priceLists.products.actions.editPrices"),to:"products/edit",icon:e.jsx(x,{})}]}]})]}),e.jsx(ae,{table:z,filters:E,columns:v,count:b,pageSize:f,isLoading:D,navigateTo:l=>`/products/${l.original.id}`,orderBy:[{key:"title",label:s("fields.title")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],commands:[{action:q,label:s("actions.edit"),shortcut:"e"},{action:O,label:s("actions.delete"),shortcut:"d"}],pagination:!0,search:!0,prefix:h,queryObject:c})]})},me=({product:i,priceList:s})=>{const{t}=u(),r=N(),{mutateAsync:a}=C(s.id),o=async()=>{await r({title:t("general.areYouSure"),description:t("priceLists.products.delete.confirmation",{count:1}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&a({remove:[i.id]},{onSuccess:()=>{p.success(t("priceLists.products.delete.successToast",{count:1}))},onError:c=>{p.error(c.message)}})};return e.jsx(m,{groups:[{actions:[{icon:e.jsx(x,{}),label:t("priceLists.products.actions.editPrices"),to:`products/edit?ids[]=${i.id}`}]},{actions:[{icon:e.jsx(k,{}),label:t("actions.remove"),onClick:o}]}]})},S=ce(),xe=i=>{const s=M();return L.useMemo(()=>[S.display({id:"select",header:({table:t})=>e.jsx(P,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:r=>t.toggleAllPageRowsSelected(!!r)}),cell:({row:t})=>e.jsx(P,{checked:t.getIsSelected(),onCheckedChange:r=>t.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...s,S.display({id:"actions",cell:({row:t})=>e.jsx(me,{product:t.original,priceList:i})})],[s,i])},ss=()=>{const{id:i}=J(),{price_list:s,isLoading:t,isError:r,error:a}=w(i),{getWidgets:o}=K();if(t||!s)return e.jsx(W,{mainSections:2,sidebarSections:1,showJSON:!0});if(r)throw a;return e.jsxs(g,{widgets:{after:o("price_list.details.after"),before:o("price_list.details.before"),sideAfter:o("price_list.details.side.after"),sideBefore:o("price_list.details.side.before")},data:s,showJSON:!0,children:[e.jsxs(g.Main,{children:[e.jsx(ue,{priceList:s}),e.jsx(pe,{priceList:s})]}),e.jsx(g.Sidebar,{children:e.jsx(le,{priceList:s})})]})};export{Ve as Breadcrumb,ss as Component,es as loader};
