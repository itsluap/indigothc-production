import{u as F}from"./chunk-RJSD5KRU-D4Cy6feM.js";import{a1 as I,ad as z,a3 as D,R as B,h as H,j as e,b as C,a8 as M,a9 as N,ex as L,r as b,e as V,k as K,t as S,E as O,B as y,V as q}from"./index-BQuBQHu2.js";import{u as G,a as Q}from"./chunk-24OILC3G-Cgr1-88Z.js";import{u as Z,D as $}from"./chunk-HMRXSHOP-BNUbNDv4.js";import"./lodash-fC6B5DOT.js";import"./chunk-JU27BRLN-DNZr3CKD.js";import"./chunk-KHOKHZC6-BG_Tq9SP.js";import{K as J}from"./chunk-6HTZNHPT-CCqLVFCa.js";import{R as l,u as U}from"./chunk-KL22UNUW-DQ4Yc_uw.js";import{C as j}from"./checkbox-C0c0ryIj.js";import{c as W}from"./index-BEBjA3ix.js";import"./chunk-RERSP5B2-BpW1f3xU.js";import"./chunk-ADOCJB6L-DI5-Yq5N.js";import"./chunk-P3UUX2T6-CsEGVYfb.js";import"./chunk-C76H5USB-Bh_A6rbf.js";import"./chunk-YEDAFXMB-Bc4XkWNl.js";import"./chunk-AOFGTNG6-D2P2T4B4.js";import"./chunk-WX2SMNCD-DsZ84O7g.js";import"./plus-mini-Cf-VDbQN.js";import"./command-bar-DeBS_hMu.js";import"./index-D_JOgVLq.js";import"./chunk-N65KPW3C-lXubDjyZ.js";import"./format-Bn7asWVz.js";import"./date-picker-BEV8QPIU.js";import"./popover-BAKxVwNM.js";import"./x-mark-mini-B_qiNB3E.js";import"./triangle-left-mini-DhrHHWcd.js";import"./prompt-Dgmkzrq9.js";var X=I({product_ids:z(D()).min(1)}),f=50,Y=({salesChannel:r})=>{const{t:s}=C(),{handleSuccess:t}=U(),a=M({defaultValues:{product_ids:[]},resolver:N(X)}),{setValue:d}=a,{mutateAsync:c,isPending:p}=L(r.id),[u,m]=b.useState({}),n=o=>{const i=typeof o=="function"?o(u):o,h=Object.keys(i);d("product_ids",h,{shouldDirty:!0,shouldTouch:!0}),m(i)},{searchParams:P,raw:v}=G({pageSize:f}),{products:_,count:g,isPending:k,isError:A,error:R}=V({fields:"*variants,*sales_channels",...P},{placeholderData:K}),x=se(),T=Q(["sales_channel_id"]),{table:w}=Z({data:_??[],columns:x,enableRowSelection:o=>{var i;return!((i=o.original.sales_channels)!=null&&i.map(h=>h.id).includes(r.id))},enablePagination:!0,getRowId:o=>o.id,pageSize:f,count:g,rowSelection:{state:u,updater:n},meta:{salesChannelId:r.id}}),E=a.handleSubmit(async o=>{await c(o.product_ids,{onSuccess:()=>{S.success(s("salesChannels.toast.update")),t()},onError:i=>S.error(i.message)})});if(A)throw R;return e.jsx(l.Form,{form:a,children:e.jsxs(J,{onSubmit:E,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(l.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:a.formState.errors.product_ids&&e.jsx(O,{variant:"error",children:a.formState.errors.product_ids.message})})}),e.jsx(l.Body,{className:"flex size-full flex-col overflow-y-auto",children:e.jsx($,{table:w,count:g,columns:x,pageSize:f,isLoading:k,filters:T,orderBy:[{key:"title",label:s("fields.title")},{key:"status",label:s("fields.status")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],queryObject:v,layout:"fill",pagination:!0,search:"autofocus",noRecords:{message:s("salesChannels.products.add.list.noRecordsMessage")}})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(y,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(y,{size:"small",type:"submit",isLoading:p,children:s("actions.save")})]})})]})})},ee=W(),se=()=>{const r=F(),{t:s}=C();return b.useMemo(()=>[ee.display({id:"select",header:({table:t})=>e.jsx(j,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:a=>t.toggleAllPageRowsSelected(!!a)}),cell:({row:t,table:a})=>{var m;const{salesChannelId:d}=a.options.meta,c=(m=t.original.sales_channels)==null?void 0:m.map(n=>n.id).includes(d),p=t.getIsSelected()||c,u=e.jsx(j,{checked:p,disabled:c,onCheckedChange:n=>t.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}});return c?e.jsx(q,{content:s("salesChannels.productAlreadyAdded"),side:"right",children:u}):u}}),...r],[s,r])},we=()=>{const{id:r}=B(),{sales_channel:s,isPending:t,isError:a,error:d}=H(r);if(a)throw d;return e.jsx(l,{children:!t&&s&&e.jsx(Y,{salesChannel:s})})};export{we as Component};
