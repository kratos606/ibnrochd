import{r as e,u as a,a as t,j as i,L as n}from"./index-C2bHaVJi.js";import{u as o,F as c,o as s,p as l}from"./api-qJTwS0fI.js";const r=()=>{const[r,d]=e.useState("Acceuil"),[m,p]=e.useState(!1),{currentLanguage:x,changeLanguage:h}=a(),f=t().pathname,{t:_,i18n:u}=o(),g="MA"===u.language,v=_("home.navbar.languages",{returnObjects:!0});e.useEffect((()=>{"/"===f?d("Acceuil"):"/contact"===f?d("Contact"):"/galerie"===f?d("Galerie"):"/specialites"===f?d("Spécialités"):"/apropos"===f&&d("Apropos")}),[f]);return i.jsxs("div",{className:"navbar__container",children:[i.jsx("div",{className:"navbar__logo",children:i.jsx(n,{to:"/",style:{all:"unset",cursor:"pointer"},children:i.jsx("img",{loading:"lazy",className:"navbar__logo__img",src:"/33be266f1579c810ec3b063aa54b549d.webp",alt:"Logo"})})}),i.jsxs("ul",{className:"navbar__navigation",children:[i.jsx(n,{to:"/",style:{textDecoration:"none"},children:i.jsx("li",{className:"navbar__navigation__item "+("Acceuil"===r?"active":""),children:_("nav.home")})}),i.jsx(n,{to:"/apropos",style:{textDecoration:"none"},children:i.jsx("li",{className:"navbar__navigation__item "+("Apropos"===r?"active":""),children:_("nav.about")})}),i.jsx(n,{to:"/specialites",style:{textDecoration:"none"},children:i.jsx("li",{className:"navbar__navigation__item "+("Spécialités"===r?"active":""),children:_("nav.specialties")})}),i.jsx(n,{to:"/galerie",style:{textDecoration:"none"},children:i.jsx("li",{className:"navbar__navigation__item "+("Galerie"===r?"active":""),children:_("nav.gallery")})})]}),i.jsxs("ul",{className:"navbar__contact",children:[i.jsxs("li",{className:"navbar__contact__item",style:{position:"relative"},onClick:()=>{p(!m)},children:[_("nav.language"),i.jsx("div",{className:"navbar__contact__item__arrow",children:i.jsx(c,{icon:m?s:l})}),m&&i.jsx("ul",{style:{position:"absolute",top:"100%",left:0,marginTop:"0.5rem",width:"100%",backgroundColor:"white",listStyle:"none",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid #e5e7eb",borderRadius:"0.25rem",boxShadow:"0px 8px 16px 0px rgba(0, 0, 0, 0.2)",zIndex:10},children:v.map((e=>i.jsxs("li",{style:{paddingBlock:"0.5rem",cursor:"pointer",display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around",alignItems:"center",gap:"0.5rem",paddingLeft:"1rem",backgroundColor:e.code===x?"#f3f4f6":"white",direction:g?"rtl":"ltr",textAlign:g?"right":"left"},onClick:()=>(e=>{h(e.code),p(!1)})(e),children:[i.jsx("img",{src:`https://flagsapi.com/${e.flagCode}/shiny/64.png`,alt:`${e.name} flag`,style:{width:"24px",height:"24px",borderRadius:"50%",objectFit:"cover"}}),i.jsx("p",{style:{flex:1},children:e.name})]},e.code)))})]}),i.jsx(n,{to:"/contact",style:{textDecoration:"none"},children:i.jsx("li",{className:"navbar__contact__item "+("Contact"===r?"active":""),children:_("nav.contact")})})]})]})},d=e=>i.jsxs("div",{className:"header__container",children:[i.jsx(r,{}),e.children]});var m={};!function(e){Object.defineProperty(e,"__esModule",{value:!0});var a="location-dot",t=["map-marker-alt"],i="f3c5",n="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z";e.definition={prefix:"fas",iconName:a,icon:[384,512,t,i,n]},e.faLocationDot=e.definition,e.prefix="fas",e.iconName=a,e.width=384,e.height=512,e.ligatures=t,e.unicode=i,e.svgPathData=n,e.aliases=t}(m);var p={};!function(e){Object.defineProperty(e,"__esModule",{value:!0});var a="phone-volume",t=["volume-control-phone"],i="f2a0",n="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z";e.definition={prefix:"fas",iconName:a,icon:[512,512,t,i,n]},e.faPhoneVolume=e.definition,e.prefix="fas",e.iconName=a,e.width=512,e.height=512,e.ligatures=t,e.unicode=i,e.svgPathData=n,e.aliases=t}(p);var x={};!function(e){Object.defineProperty(e,"__esModule",{value:!0});var a="envelope",t=[128386,9993,61443],i="f0e0",n="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z";e.definition={prefix:"fas",iconName:a,icon:[512,512,t,i,n]},e.faEnvelope=e.definition,e.prefix="fas",e.iconName=a,e.width=512,e.height=512,e.ligatures=t,e.unicode=i,e.svgPathData=n,e.aliases=t}(x);const h=()=>{const{t:e,i18n:a}=o(),t="MA"===a.language;return i.jsxs("ul",{className:"contact__info__container",children:[i.jsx("li",{children:i.jsxs("a",{className:"contact__info__item",style:{textDecoration:"none",color:"white",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"},href:"https://maps.app.goo.gl/cPrPT772ZEz86iEW7",children:[i.jsx(c,{style:{fontSize:"1.5rem"},icon:m.faLocationDot})," ",i.jsx("span",{style:{direction:t?"rtl":"ltr"},children:e("contact.address")})]})}),i.jsx("li",{className:"separator"}),i.jsx("li",{children:i.jsxs("a",{className:"contact__info__item",style:{textDecoration:"none",color:"white",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"},href:"tel:+212-536-614446",children:[i.jsx(c,{style:{fontSize:"1.5rem"},icon:p.faPhoneVolume})," ",e("contact.phone1")]})}),i.jsx("li",{className:"separator"}),i.jsx("li",{children:i.jsxs("a",{className:"contact__info__item",style:{textDecoration:"none",color:"white",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"},href:"mailto:contact@cliniqueibnrochd.ma",children:[i.jsx(c,{style:{fontSize:"1.5rem"},icon:x.faEnvelope})," ",e("contact.email")]})})]})};export{h as C,d as H};
