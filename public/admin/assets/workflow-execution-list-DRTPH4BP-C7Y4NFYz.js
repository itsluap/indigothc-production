import{u as x,g as w,a as g}from"./chunk-RPAL6FHW-C2dAqTIE.js";import{S as h}from"./chunk-ADOCJB6L-DI5-Yq5N.js";import{S as b}from"./chunk-2RQLKDBF-BDHDfG71.js";import{u as E,D as k}from"./chunk-HMRXSHOP-BNUbNDv4.js";import{a as j,j as t,b as p,H as v,T as S,r as T,Y as C,k as P}from"./index-BQuBQHu2.js";import"./lodash-fC6B5DOT.js";import{u as y}from"./chunk-C76H5USB-Bh_A6rbf.js";import"./chunk-JU27BRLN-DNZr3CKD.js";import"./chunk-KHOKHZC6-BG_Tq9SP.js";import{C as z}from"./container-QtDO671d.js";import{c as D}from"./index-BEBjA3ix.js";import"./Trans-Di37dP-o.js";import"./x-mark-mini-B_qiNB3E.js";import"./chunk-YEDAFXMB-Bc4XkWNl.js";import"./chunk-AOFGTNG6-D2P2T4B4.js";import"./chunk-WX2SMNCD-DsZ84O7g.js";import"./plus-mini-Cf-VDbQN.js";import"./command-bar-DeBS_hMu.js";import"./index-D_JOgVLq.js";import"./chunk-N65KPW3C-lXubDjyZ.js";import"./format-Bn7asWVz.js";import"./date-picker-BEV8QPIU.js";import"./popover-BAKxVwNM.js";import"./triangle-left-mini-DhrHHWcd.js";var c=D(),L=()=>{const{t:e}=p();return T.useMemo(()=>[c.accessor("transaction_id",{header:e("workflowExecutions.transactionIdLabel"),cell:({getValue:o})=>t.jsx(C,{size:"2xsmall",children:o()})}),c.accessor("state",{header:e("fields.state"),cell:({getValue:o})=>{const s=o(),r=w(s),a=g(e,s);return t.jsx(h,{color:r,children:t.jsx("span",{className:"capitalize",children:a})})}}),c.accessor("execution",{header:e("workflowExecutions.progressLabel"),cell:({getValue:o})=>{var i;const s=(i=o())==null?void 0:i.steps;if(!s)return"0 of 0 steps";const r=Object.values(s).filter(n=>n.id!==R),a=r.filter(n=>n.invoke.state==="done");return e("workflowExecutions.stepsCompletedLabel",{completed:a.length,count:r.length})}})],[e])},R="_root",W=({pageSize:e=20,prefix:o})=>{const s=y(["q","offset"],o),{offset:r,...a}=s;return{searchParams:{limit:e,offset:r?parseInt(r):0,...a},raw:s}},m=20,I=()=>{const{t:e}=p(),{searchParams:o,raw:s}=W({pageSize:m}),{workflow_executions:r,count:a,isLoading:i,isError:n,error:f}=x({...o},{placeholderData:P}),u=L(),{table:d}=E({data:r||[],columns:u,count:a,pageSize:m,enablePagination:!0,getRowId:l=>l.id});if(n)throw f;return t.jsxs(z,{className:"divide-y p-0",children:[t.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:t.jsxs("div",{children:[t.jsx(v,{children:e("workflowExecutions.domain")}),t.jsx(S,{className:"text-ui-fg-subtle",size:"small",children:e("workflowExecutions.subtitle")})]})}),t.jsx(k,{table:d,columns:u,count:a,isLoading:i,pageSize:m,navigateTo:l=>`${l.id}`,search:!0,pagination:!0,queryObject:s,noRecords:{message:e("workflowExecutions.list.noRecordsMessage")}})]})},ae=()=>{const{getWidgets:e}=j();return t.jsx(b,{widgets:{after:e("workflow.list.after"),before:e("workflow.list.before")},hasOutlet:!1,children:t.jsx(I,{})})};export{ae as Component};
