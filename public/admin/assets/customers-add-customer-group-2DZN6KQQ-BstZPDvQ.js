import{u as F,a as z,b as B}from"./chunk-ZJRFL6ZN-Dwj6i6Iv.js";import{a1 as D,ad as I,a3 as H,R as M,j as e,b as j,r as p,dW as N,a8 as O,a9 as V,dN as K,t as S,E as L,B as x,V as $}from"./index-BQuBQHu2.js";import{u as q,D as Q}from"./chunk-HMRXSHOP-BNUbNDv4.js";import"./lodash-fC6B5DOT.js";import"./chunk-JU27BRLN-DNZr3CKD.js";import"./chunk-KHOKHZC6-BG_Tq9SP.js";import{K as W}from"./chunk-6HTZNHPT-CCqLVFCa.js";import{R as c,u as Z}from"./chunk-KL22UNUW-DQ4Yc_uw.js";import{C as b}from"./checkbox-C0c0ryIj.js";import{c as J}from"./index-BEBjA3ix.js";import"./chunk-C76H5USB-Bh_A6rbf.js";import"./chunk-MSDRGCRR-uK01QOLs.js";import"./chunk-P3UUX2T6-CsEGVYfb.js";import"./chunk-YEDAFXMB-Bc4XkWNl.js";import"./chunk-AOFGTNG6-D2P2T4B4.js";import"./chunk-WX2SMNCD-DsZ84O7g.js";import"./plus-mini-Cf-VDbQN.js";import"./command-bar-DeBS_hMu.js";import"./index-D_JOgVLq.js";import"./chunk-N65KPW3C-lXubDjyZ.js";import"./format-Bn7asWVz.js";import"./date-picker-BEV8QPIU.js";import"./popover-BAKxVwNM.js";import"./x-mark-mini-B_qiNB3E.js";import"./triangle-left-mini-DhrHHWcd.js";import"./prompt-Dgmkzrq9.js";var U=D({customer_group_ids:I(H()).min(1)}),g=10,X=({customerId:a})=>{const{t:o}=j(),{handleSuccess:f}=Z(),[r,i]=p.useState(!1),{mutateAsync:h}=N(a),u=O({defaultValues:{customer_group_ids:[]},resolver:V(U)}),{setValue:n}=u,[l,_]=p.useState({});p.useEffect(()=>{n("customer_group_ids",Object.keys(l).filter(t=>l[t]),{shouldDirty:!0,shouldTouch:!0})},[l,n]);const{searchParams:v,raw:R}=F({pageSize:g}),T=z(),{customer_groups:m,count:y,isPending:P,isError:k,error:w}=K({fields:"*customers",...v}),A=t=>{const s=typeof t=="function"?t(l):t,d=Object.keys(s);n("customer_group_ids",d,{shouldDirty:!0,shouldTouch:!0}),_(s)},C=ee(),{table:G}=q({data:m??[],columns:C,count:y,enablePagination:!0,enableRowSelection:t=>{var s;return!((s=t.original.customers)!=null&&s.map(d=>d.id).includes(a))},getRowId:t=>t.id,pageSize:g,rowSelection:{state:l,updater:A}}),E=u.handleSubmit(async t=>{i(!0);try{await h({add:t.customer_group_ids}),S.success(o("customers.groups.add.success",{groups:t.customer_group_ids.map(s=>m==null?void 0:m.find(d=>d.id===s)).filter(Boolean).map(s=>s==null?void 0:s.name)})),f(`/customers/${a}`)}catch(s){S.error(s.message)}finally{i(!1)}});if(k)throw w;return e.jsx(c.Form,{form:u,children:e.jsxs(W,{className:"flex h-full flex-col overflow-hidden",onSubmit:E,children:[e.jsx(c.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:u.formState.errors.customer_group_ids&&e.jsx(L,{variant:"error",children:u.formState.errors.customer_group_ids.message})})}),e.jsx(c.Body,{className:"size-full overflow-hidden",children:e.jsx(Q,{table:G,columns:C,pageSize:g,count:y,filters:T,orderBy:[{key:"name",label:o("fields.name")},{key:"created_at",label:o("fields.createdAt")},{key:"updated_at",label:o("fields.updatedAt")}],isLoading:P,layout:"fill",search:"autofocus",queryObject:R,noRecords:{message:o("customers.groups.add.list.noRecordsMessage")}})}),e.jsxs(c.Footer,{children:[e.jsx(c.Close,{asChild:!0,children:e.jsx(x,{variant:"secondary",size:"small",children:o("actions.cancel")})}),e.jsx(x,{type:"submit",variant:"primary",size:"small",isLoading:r,children:o("actions.save")})]})]})})},Y=J(),ee=()=>{const{t:a}=j(),o=B();return p.useMemo(()=>[Y.display({id:"select",header:({table:r})=>e.jsx(b,{checked:r.getIsSomePageRowsSelected()?"indeterminate":r.getIsAllPageRowsSelected(),onCheckedChange:i=>r.toggleAllPageRowsSelected(!!i)}),cell:({row:r})=>{const i=!r.getCanSelect(),h=r.getIsSelected()||i,u=e.jsx(b,{checked:h,disabled:i,onCheckedChange:n=>r.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}});return i?e.jsx($,{content:a("customers.groups.alreadyAddedTooltip"),side:"right",children:u}):u}}),...o],[a,o])},Pe=()=>{const{id:a}=M();return e.jsx(c,{children:e.jsx(X,{customerId:a})})};export{Pe as Component};
