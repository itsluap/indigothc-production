import{a as v}from"./chunk-B4FQDBC3-BtaMzMAV.js";import{S as h}from"./chunk-2RQLKDBF-BDHDfG71.js";import{P as x}from"./chunk-P3UUX2T6-CsEGVYfb.js";import{u as j,D as b}from"./chunk-HMRXSHOP-BNUbNDv4.js";import{a as g,j as e,b as d,aV as y,H as T,T as _,B as N,L as P,r as w,b7 as S,e2 as k,A as C}from"./index-BQuBQHu2.js";import"./lodash-fC6B5DOT.js";import{u as R}from"./chunk-C76H5USB-Bh_A6rbf.js";import"./chunk-JU27BRLN-DNZr3CKD.js";import"./chunk-KHOKHZC6-BG_Tq9SP.js";import{P as z}from"./pencil-square-Nmnw9YVK.js";import{T as D}from"./trash-C4POu7J1.js";import{u as L}from"./use-prompt-X-fK_bxM.js";import{C as q}from"./container-QtDO671d.js";import{c as A}from"./index-BEBjA3ix.js";import"./format-Bn7asWVz.js";import"./Trans-Di37dP-o.js";import"./x-mark-mini-B_qiNB3E.js";import"./chunk-YEDAFXMB-Bc4XkWNl.js";import"./chunk-AOFGTNG6-D2P2T4B4.js";import"./chunk-WX2SMNCD-DsZ84O7g.js";import"./plus-mini-Cf-VDbQN.js";import"./command-bar-DeBS_hMu.js";import"./index-D_JOgVLq.js";import"./chunk-N65KPW3C-lXubDjyZ.js";import"./date-picker-BEV8QPIU.js";import"./popover-BAKxVwNM.js";import"./triangle-left-mini-DhrHHWcd.js";import"./prompt-Dgmkzrq9.js";var E=({reservation:a})=>{const{t}=d(),s=L(),{mutateAsync:i}=k(a.id),r=async()=>{await s({title:t("general.areYouSure"),description:t("reservations.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await i()};return e.jsx(C,{groups:[{actions:[{label:t("actions.edit"),to:`${a.id}/edit`,icon:e.jsx(z,{})}]},{actions:[{label:t("actions.delete"),onClick:r,icon:e.jsx(D,{})}]}]})},n=A(),I=()=>{const{t:a}=d();return w.useMemo(()=>[n.accessor("inventory_item",{header:a("fields.sku"),cell:({getValue:t})=>{const s=t();return!s||!s.sku?e.jsx(x,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s.sku})})}}),n.accessor("description",{header:a("fields.description"),cell:({getValue:t})=>{const s=t();return s?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})}):e.jsx(x,{})}}),n.accessor("created_at",{header:a("fields.created"),cell:({getValue:t})=>{const s=t();return e.jsx(v,{date:s})}}),n.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:a("fields.quantity")})}),cell:({getValue:t})=>{const s=t();return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:s})})}}),n.display({id:"actions",cell:({row:t})=>{const s=t.original;return e.jsx(E,{reservation:s})}})],[a])},H=()=>{const{t:a}=d(),{stock_locations:t}=S({limit:1e3}),s=[];if(t){const i={type:"select",options:t.map(r=>({label:r.name,value:r.id})),key:"location_id",searchable:!0,label:a("fields.location")};s.push(i)}return s.push({type:"date",key:"created_at",label:a("fields.createdAt")}),s},B=({pageSize:a=20,prefix:t})=>{const s=R(["location_id","offset","created_at","quantity","updated_at","order"],t),{location_id:i,created_at:r,updated_at:o,quantity:p,offset:c,...l}=s;return{searchParams:{limit:a,offset:c?parseInt(c):void 0,location_id:i,created_at:r?JSON.parse(r):void 0,updated_at:o?JSON.parse(o):void 0,...l},raw:s}},u=20,F=()=>{const{t:a}=d(),{searchParams:t}=B({pageSize:u}),{reservations:s,count:i,isPending:r,isError:o,error:p}=y({...t}),c=H(),l=I(),{table:f}=j({data:s||[],columns:l,count:i,enablePagination:!0,getRowId:m=>m.id,pageSize:u});if(o)throw p;return e.jsxs(q,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(T,{children:a("reservations.domain")}),e.jsx(_,{className:"text-ui-fg-subtle",size:"small",children:a("reservations.subtitle")})]}),e.jsx(N,{variant:"secondary",size:"small",asChild:!0,children:e.jsx(P,{to:"create",children:a("actions.create")})})]}),e.jsx(b,{table:f,columns:l,pageSize:u,count:i,isLoading:r,filters:c,pagination:!0,navigateTo:m=>m.id,search:!1})]})},xe=()=>{const{getWidgets:a}=g();return e.jsx(h,{widgets:{before:a("reservation.list.before"),after:a("reservation.list.after")},children:e.jsx(F,{})})};export{xe as Component};
