import{r as d,j as e}from"./index-DM7GYe2w.js";import{u as x,a as u,p as j,q as g,F as n,r as v,i as N,M as y,j as w,k,l as C,m as I}from"./index-DmhXLMt4.js";import{N as F}from"./Navbar-uKPJPZbC.js";const S=[{href:"https://www.instagram.com/cliniqueibnrochd_berkane",icon:k},{href:"https://facebook.com/profile.php?id=61554170039546",icon:C},{href:"https://www.linkedin.com/company/cliniqueibnrochdberkane",icon:I}],T=()=>{const{t:a,i18n:_}=x(),i=_.language==="MA",[h,r]=d.useState(!1),[s,m]=d.useState({name:"",email:"",phone:"",message:""}),b=async o=>{o.preventDefault();try{(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:"dccd1cb8-9a98-429d-bbc9-8fff6b1da741",...s})})).ok&&(r(!0),m({name:"",email:"",phone:"",message:""}))}catch(t){console.error("Error submitting form:",t)}},c=o=>{const{name:t,value:l}=o.target;m(f=>({...f,[t]:l}))},p=[{icon:u,label:a("contact.mobile.info.phone.label"),description:a("contact.mobile.info.phone.value")},{icon:j,label:a("contact.mobile.info.fax.label"),description:a("contact.mobile.info.fax.value")},{icon:g,label:a("contact.mobile.info.email.label"),description:a("contact.mobile.info.email.value")}];return e.jsxs("div",{className:"mobile__contact__page page__mobile",children:[e.jsx(F,{}),e.jsxs("div",{style:{marginInline:"2rem",marginTop:"10rem"},children:[e.jsx("div",{className:"mobile__contact__header",children:e.jsx("h1",{children:a("contact.mobile.title")})}),e.jsxs("div",{className:"mobile__contact__content",children:[e.jsxs("div",{className:"mobile__contact__form__container",children:[e.jsx("div",{className:"mobile__contact__description",children:a("contact.mobile.description")}),e.jsxs("form",{className:"mobile__contact__form",onSubmit:b,children:[e.jsx("input",{type:"text",name:"name",value:s.name,onChange:c,placeholder:a("contact.mobile.form.name"),required:!0,style:{direction:i?"rtl":"ltr"}}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:c,placeholder:a("contact.mobile.form.email"),required:!0,style:{direction:i?"rtl":"ltr"}}),e.jsx("input",{type:"tel",name:"phone",value:s.phone,onChange:c,placeholder:a("contact.mobile.form.phone"),required:!0,style:{direction:i?"rtl":"ltr"}}),e.jsx("textarea",{name:"message",value:s.message,onChange:c,placeholder:a("contact.mobile.form.message"),required:!0,style:{direction:i?"rtl":"ltr"}}),e.jsx("button",{type:"submit",children:a("contact.mobile.form.submit")})]})]}),e.jsxs("div",{className:"mobile__contact__info__section",children:[e.jsx("div",{className:"mobile__social__links",children:S.map(({href:o,icon:t},l)=>e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"mobile__social__link",children:e.jsx(n,{icon:t})},l))}),e.jsx("div",{className:"mobile__contact__details",style:{direction:i?"rtl":"ltr"},children:p.map((o,t)=>e.jsxs("div",{className:"mobile__contact__detail__item",children:[e.jsx("div",{className:"mobile__contact__detail__icon",children:e.jsx(n,{icon:o.icon})}),e.jsxs("div",{className:"mobile__contact__detail__text",children:[e.jsx("div",{className:"mobile__contact__detail__label",children:o.label}),e.jsx("div",{className:"mobile__contact__detail__description",style:{direction:"ltr",textAlign:i?"right":"left"},children:o.description})]})]},t))}),e.jsxs("div",{className:"mobile__location__container",children:[e.jsxs("div",{className:"mobile__location__header",style:{direction:i?"rtl":"ltr"},children:[e.jsx(n,{icon:v}),e.jsx("h3",{children:a("contact.mobile.ourLocation")})]}),e.jsx("iframe",{title:"Clinique Ibn Rochd Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2994464503795!2d-2.3322184248582527!3d34.9240262596539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd782311d259185f%3A0xfc8fa46e03f20b64!2zQ2xpbmlxdWUgSWJuIFJvY2hkINmF2LXYrdipINil2KjZhiDYsdi02K8!5e0!3m2!1sen!2sma!4v1732550143802!5m2!1sen!2sma",width:"100%",height:"300",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})]})]}),e.jsx("div",{className:"mobile__back__to__top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:e.jsx(n,{icon:N,size:"lg"})}),e.jsx("footer",{className:"mobile__footer",style:{direction:i?"rtl":"ltr"},children:a("contact.copyright")})]}),e.jsxs(y,{isOpen:h,onClose:()=>r(!1),children:[e.jsx(n,{icon:w,className:"success-icon"}),e.jsx("h2",{className:"success-message",children:a("contact.successMessage")})]})]})};export{T as default};
