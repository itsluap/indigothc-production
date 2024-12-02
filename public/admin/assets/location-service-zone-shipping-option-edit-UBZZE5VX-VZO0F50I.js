import{a as C}from"./chunk-R2O6QX4D-CX21ziz_.js";import{S as k}from"./chunk-T4W4USY7-kvf0YQSU.js";import{f as F}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{u as j}from"./chunk-6CNRNROJ-CjHgetFc.js";import{C as b}from"./chunk-BNH57GBH-BmeCfgHZ.js";import{a1 as O,a3 as x,eL as T,a4 as E,b as L,R as V,ar as P,j as e,H as I,s as y,a8 as w,t as v,w as o,x as N,D as R,B as S}from"./index-BQuBQHu2.js";import{u as B,c as q}from"./chunk-STLKFKTM-e0-PjoCp.js";import{S as D}from"./chunk-JLD5AXG6-X1qF3gXs.js";import{K as M}from"./chunk-6HTZNHPT-CCqLVFCa.js";import{b as m,u as K}from"./chunk-KL22UNUW-DQ4Yc_uw.js";import{R as _}from"./radio-group-C4OSJurG.js";import"./x-mark-mini-B_qiNB3E.js";import"./triangles-mini-C-9j81Ak.js";import"./plus-mini-Cf-VDbQN.js";import"./prompt-Dgmkzrq9.js";function H(l,n){const s={};return n.forEach(r=>{r in l&&(s[r]=l[r])}),s}O({name:x().min(1),price_type:T(k),enabled_in_store:E().optional(),shipping_profile_id:x(),provider_id:x()});var z=({locationId:l,shippingOption:n})=>{const{t:s}=L(),{handleSuccess:r}=K(),c=j({queryFn:i=>y.admin.shippingProfile.list(i),queryKey:["shipping_profiles"],getOptions:i=>i.shipping_profiles.map(a=>({label:a.name,value:a.id})),defaultValue:n.shipping_profile_id}),d=j({queryFn:i=>y.admin.fulfillmentProvider.list({...i,stock_location_id:l}),queryKey:["fulfillment_providers"],getOptions:i=>i.fulfillment_providers.map(a=>({label:F(a.id),value:a.id})),defaultValue:n.provider_id}),t=w({defaultValues:{name:n.name,price_type:n.price_type,enabled_in_store:C(n),shipping_profile_id:n.shipping_profile_id,provider_id:n.provider_id}}),{mutateAsync:u,isPending:h}=q(n.id),f=t.handleSubmit(async i=>{const a=n.rules.map(p=>({...H(p,["id","attribute","operator","value"])})),g=a.find(p=>p.attribute==="enabled_in_store");g?g.value=i.enabled_in_store?"true":"false":a.push({value:i.enabled_in_store?"true":"false",attribute:"enabled_in_store",operator:"eq"}),await u({name:i.name,price_type:i.price_type,shipping_profile_id:i.shipping_profile_id,provider_id:i.provider_id,rules:a},{onSuccess:({shipping_option:p})=>{v.success(s("stockLocations.shippingOptions.edit.successToast",{name:p.name})),r(`/settings/locations/${l}`)},onError:p=>{v.error(p.message)}})});return e.jsx(m.Form,{form:t,children:e.jsxs(M,{onSubmit:f,className:"flex flex-1 flex-col",children:[e.jsx(m.Body,{children:e.jsx("div",{className:"flex flex-col gap-y-8",children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsx(o.Field,{control:t.control,name:"price_type",render:({field:i})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:s("stockLocations.shippingOptions.fields.priceType.label")}),e.jsx(o.Control,{children:e.jsxs(_,{...i,onValueChange:i.onChange,children:[e.jsx(_.ChoiceBox,{className:"flex-1",value:"flat",label:s("stockLocations.shippingOptions.fields.priceType.options.fixed.label"),description:s("stockLocations.shippingOptions.fields.priceType.options.fixed.hint")}),e.jsx(_.ChoiceBox,{className:"flex-1",value:"calculated",label:s("stockLocations.shippingOptions.fields.priceType.options.calculated.label"),description:s("stockLocations.shippingOptions.fields.priceType.options.calculated.hint")})]})}),e.jsx(o.ErrorMessage,{})]})}),e.jsxs("div",{className:"grid gap-y-4",children:[e.jsx(o.Field,{control:t.control,name:"name",render:({field:i})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:s("fields.name")}),e.jsx(o.Control,{children:e.jsx(N,{...i})}),e.jsx(o.ErrorMessage,{})]})}),e.jsx(o.Field,{control:t.control,name:"shipping_profile_id",render:({field:i})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:s("stockLocations.shippingOptions.fields.profile")}),e.jsx(o.Control,{children:e.jsx(b,{...i,options:c.options,searchValue:c.searchValue,onSearchValueChange:c.onSearchValueChange,disabled:c.disabled})}),e.jsx(o.ErrorMessage,{})]})}),e.jsx(o.Field,{control:t.control,name:"provider_id",render:({field:i})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{tooltip:s("stockLocations.fulfillmentProviders.shippingOptionsTooltip"),children:s("stockLocations.shippingOptions.fields.provider")}),e.jsx(o.Control,{children:e.jsx(b,{...i,options:d.options,searchValue:d.searchValue,onSearchValueChange:d.onSearchValueChange,disabled:d.disabled})}),e.jsx(o.ErrorMessage,{})]})})]}),e.jsx(R,{}),e.jsx(D,{control:t.control,name:"enabled_in_store",label:s("stockLocations.shippingOptions.fields.enableInStore.label"),description:s("stockLocations.shippingOptions.fields.enableInStore.hint")})]})})}),e.jsx(m.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(m.Close,{asChild:!0,children:e.jsx(S,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(S,{size:"small",type:"submit",isLoading:h,children:s("actions.save")})]})})]})})},re=()=>{const{t:l}=L(),{location_id:n,so_id:s}=V(),{shipping_options:r,isPending:c,isFetching:d,isError:t,error:u}=B({id:s}),h=r==null?void 0:r.find(f=>f.id===s);if(!c&&!d&&!h)throw P({message:`Shipping option with ID ${s} was not found`},404);if(t)throw u;return e.jsxs(m,{children:[e.jsx(m.Header,{children:e.jsx(I,{children:l("stockLocations.shippingOptions.edit.header")})}),h&&e.jsx(z,{shippingOption:h,locationId:n})]})};export{re as Component};
