import{u as p,l as m}from"./lodash-fC6B5DOT.js";import{b as f,r as o,j as h,x as i}from"./index-BQuBQHu2.js";var g=({placeholder:l,prefix:r,autofocus:c})=>{const{t:n}=f(),u=l||n("general.search"),e=p({param:"q",prefix:r,multiple:!1}),a=e.get(),s=o.useCallback(m.debounce(d=>{const t=d.target.value;t?e.add(t):e.delete()},500),[e]);return o.useEffect(()=>()=>{s.cancel()},[s]),h.jsx(i,{autoComplete:"off",name:"q",type:"search",size:"small",autoFocus:c,defaultValue:(a==null?void 0:a[0])||void 0,onChange:s,placeholder:u})};export{g as D};
