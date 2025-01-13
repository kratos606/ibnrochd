import{r as e,a as t,u as n,j as i,N as s}from"./index-C2bHaVJi.js";import{u as r,F as a,t as l,v as o,w as c}from"./api-qJTwS0fI.js";const d=()=>{const[d,p]=e.useState(!1),[m,h]=e.useState(!1),g=t(),{t:u,i18n:x}=r(),j="MA"===x.language,y=u("home.navbar.languages",{returnObjects:!0}),{currentLanguage:f,changeLanguage:b}=n(),v=e=>g.pathname===e;return i.jsxs(i.Fragment,{children:[i.jsxs("nav",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.5rem",backgroundColor:"white",position:"fixed",top:0,left:0,zIndex:1e4},children:[i.jsx(s,{to:"/",end:!0,style:{all:"unset",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx("img",{src:"/logo.webp",style:{width:"40px",aspectRatio:"1"},alt:"logo"})}),i.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[i.jsx(a,{icon:l,style:{color:"black",fontSize:"1.5rem",cursor:"pointer",marginRight:"1rem"},onClick:()=>h(!0)}),i.jsx(a,{icon:o,style:{color:"black",fontSize:"1.5rem",cursor:"pointer"},onClick:()=>p(!0)})]})]}),m&&i.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e6,display:"flex",justifyContent:"center",alignItems:"center",direction:j?"rtl":"ltr"},onClick:()=>h(!1),children:i.jsxs("div",{style:{backgroundColor:"white",borderRadius:"1rem",padding:"2rem",width:"80%",maxWidth:"400px"},onClick:e=>e.stopPropagation(),children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[i.jsx("h2",{style:{margin:0},children:u("nav.language")}),i.jsx(a,{icon:c,style:{fontSize:"1.5rem",cursor:"pointer",color:"#4CB9C1"},onClick:()=>h(!1)})]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:y.map((e=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",cursor:"pointer",backgroundColor:e.code===f?"#f3f4f6":"white",borderRadius:"0.5rem"},onClick:()=>(e=>{b(e.code),h(!1)})(e),children:[i.jsx("img",{src:`https://flagsapi.com/${e.flagCode}/shiny/64.png`,alt:`${e.name} flag`,style:{width:"24px",height:"24px",borderRadius:"50%",objectFit:"cover"}}),i.jsx("span",{style:{flex:1},children:e.name}),e.code===f&&i.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#4CB9C1"}})]},e.code)))})]})}),d&&i.jsxs("ul",{className:"navbar-menu__phone",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e6,padding:"2rem",listStyle:"none",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2rem",backgroundColor:"white"},children:[i.jsx(a,{icon:c,style:{position:"absolute",top:"2rem",right:"2rem",fontSize:"1.5rem",cursor:"pointer",color:"black"},onClick:()=>p(!1)}),i.jsx("li",{className:"navbar__menu-item__phone "+(v("/")?"active":""),children:i.jsx(s,{to:"/",end:!0,style:{all:"unset",cursor:"pointer"},children:u("nav.home")})}),i.jsx("li",{className:"navbar__menu-item__phone "+(v("/apropos")?"active":""),children:i.jsx(s,{to:"/apropos",end:!0,style:{all:"unset",cursor:"pointer"},children:u("nav.about")})}),i.jsx("li",{className:"navbar__menu-item__phone "+(v("/specialites")?"active":""),children:i.jsx(s,{to:"/specialites",end:!0,style:{all:"unset",cursor:"pointer"},children:u("nav.specialties")})}),i.jsx("li",{className:"navbar__menu-item__phone "+(v("/galerie")?"active":""),children:i.jsx(s,{to:"/galerie",end:!0,style:{all:"unset",cursor:"pointer"},children:u("nav.gallery")})}),i.jsx("li",{className:"navbar__menu-item__phone "+(v("/contact")?"active":""),children:i.jsx(s,{to:"/contact",end:!0,style:{all:"unset",cursor:"pointer"},children:u("nav.contact")})})]})]})};export{d as N};
