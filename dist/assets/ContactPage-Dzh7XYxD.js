import{r as e,j as a}from"./index-C2bHaVJi.js";import{C as s,H as t}from"./ContactInfo-CKpWa2D7.js";import{u as c,F as i,k as n,M as o,c as l,l as r,m,n as d,j as h}from"./api-qJTwS0fI.js";const _=[{href:"https://www.instagram.com/cliniqueibnrochd_berkane",icon:r},{href:"https://facebook.com/profile.php?id=61554170039546",icon:m},{href:"#",icon:d}],p=()=>{const{t:r,i18n:m}=c(),d="MA"===m.language,[p,x]=e.useState(!1),[f,u]=e.useState({name:"",email:"",phone:"",message:""}),j=e=>{const{name:a,value:s}=e.target;u((e=>({...e,[a]:s})))},b=[{iconSrc:"/contacts/phoneOutline.svg",label:r("contact.mobile.info.phone.label"),description:r("contact.mobile.info.phone.value")},{iconSrc:"/contacts/fax.svg",label:r("contact.mobile.info.fax.label"),description:r("contact.mobile.info.fax.value")},{iconSrc:null,label:r("contact.mobile.info.email.label"),description:r("contact.mobile.info.email.value"),customIcon:a.jsx("div",{className:"blueish"})}];return a.jsxs("div",{className:"contact__page",children:[a.jsx(s,{}),a.jsxs(t,{children:[a.jsxs("div",{className:"contact__us__container","data-direction":d?"rtl":"ltr",children:[a.jsxs("div",{className:"contact__us__subcontainer",style:{direction:d?"rtl":"ltr"},children:[a.jsxs("div",{className:"contact__us__form",children:[a.jsx("h1",{children:r("contact.mobile.title")}),a.jsx("div",{className:"contact__us__description",style:{textAlign:d?"right":"left"},children:r("contact.mobile.description")}),a.jsxs("form",{className:"contact__us__form__input",onSubmit:async e=>{e.preventDefault();try{200===(await h.post("/contact",f)).status&&(x(!0),u({name:"",email:"",phone:"",message:""}))}catch(a){}},children:[a.jsx("input",{type:"text",name:"name",value:f.name,onChange:j,placeholder:r("contact.mobile.form.name"),required:!0}),a.jsx("input",{type:"email",name:"email",value:f.email,onChange:j,placeholder:r("contact.mobile.form.email"),required:!0}),a.jsx("input",{type:"tel",name:"phone",value:f.phone,onChange:j,placeholder:r("contact.mobile.form.phone"),style:{direction:d?"rtl":"ltr"},required:!0}),a.jsx("textarea",{name:"message",value:f.message,onChange:j,placeholder:r("contact.mobile.form.message"),required:!0}),a.jsx("button",{type:"submit",children:r("contact.mobile.form.submit")})]})]}),a.jsxs("div",{className:"socials__and__location",children:[a.jsx("div",{className:"social__links",children:_.map((({href:e,icon:s},t)=>a.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"social__link",children:a.jsx(i,{icon:s})},t)))}),a.jsx("div",{className:"location__container",children:a.jsx("iframe",{title:"Clinique Ibn Rochd Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2994464503795!2d-2.3322184248582527!3d34.9240262596539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd782311d259185f%3A0xfc8fa46e03f20b64!2zQ2xpbmlxdWUgSWJuIFJvY2hkINmF2LXYrdipINil2KjZhiDYsdi02K8!5e0!3m2!1sen!2sma!4v1732550143802!5m2!1sen!2sma",width:"401.61",height:"517.09px",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})]}),a.jsx("div",{className:"contact__page__info",style:{direction:d?"rtl":"ltr"},children:b.map(((e,s)=>a.jsxs("div",{className:"contact__info__item",children:[a.jsx("div",{className:"contact__item__icon",children:e.iconSrc?a.jsx("img",{loading:"lazy",src:e.iconSrc,alt:e.label}):e.customIcon}),a.jsxs("div",{className:"contact__item__text",children:[a.jsx("div",{className:"contact__item__label",style:{textAlign:d?"right":"left"},children:e.label}),a.jsx("div",{className:"contact__item__description",style:{direction:"ltr"},children:e.description})]})]},s)))})]}),a.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:a.jsx("div",{className:"back__to__top",style:{bottom:"0"},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:a.jsx(i,{icon:n,size:"lg"})})})]}),a.jsxs(o,{isOpen:p,onClose:()=>x(!1),children:[a.jsx(i,{icon:l,className:"success-icon"}),a.jsx("h2",{className:"success-message",children:r("contact.successMessage")})]}),a.jsx("footer",{className:"footer",style:{direction:d?"rtl":"ltr"},children:r("contact.copyright")})]})};export{p as default};
