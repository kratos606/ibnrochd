import{r as c,a as y,u as v,j as e,N as s}from"./index-BNiYdM8F.js";import{u as b,F as r,r as _,s as C,t as d}from"./index-xJdGuxwd.js";const N=()=>{const[p,o]=c.useState(!1),[u,i]=c.useState(!1),m=y(),{t:n,i18n:h}=b(),x=h.language==="MA",g=n("home.navbar.languages",{returnObjects:!0}),{currentLanguage:l,changeLanguage:f}=v(),a=t=>m.pathname===t,j=t=>{f(t.code),i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("nav",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.5rem"},children:[e.jsx(s,{to:"/",end:!0,style:{all:"unset",cursor:"pointer"},children:e.jsx("img",{src:"/logo.webp",style:{width:"40px",aspectRatio:"1"},alt:"logo"})}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{icon:_,style:{color:"black",fontSize:"1.5rem",cursor:"pointer",marginRight:"1rem"},onClick:()=>i(!0)}),e.jsx(r,{icon:C,style:{color:"black",fontSize:"1.5rem",cursor:"pointer"},onClick:()=>o(!0)})]})]}),u&&e.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e6,display:"flex",justifyContent:"center",alignItems:"center",direction:x?"rtl":"ltr"},onClick:()=>i(!1),children:e.jsxs("div",{style:{backgroundColor:"white",borderRadius:"1rem",padding:"2rem",width:"80%",maxWidth:"400px"},onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[e.jsx("h2",{style:{margin:0},children:n("nav.language")}),e.jsx(r,{icon:d,style:{fontSize:"1.5rem",cursor:"pointer",color:"#4CB9C1"},onClick:()=>i(!1)})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:g.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",cursor:"pointer",backgroundColor:t.code===l?"#f3f4f6":"white",borderRadius:"0.5rem"},onClick:()=>j(t),children:[e.jsx("img",{src:`https://flagsapi.com/${t.flagCode}/shiny/64.png`,alt:`${t.name} flag`,style:{width:"24px",height:"24px",borderRadius:"50%",objectFit:"cover"}}),e.jsx("span",{style:{flex:1},children:t.name}),t.code===l&&e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#4CB9C1"}})]},t.code))})]})}),p&&e.jsxs("ul",{className:"navbar-menu__phone",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e6,padding:"2rem",listStyle:"none",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2rem",backgroundColor:"white"},children:[e.jsx(r,{icon:d,style:{position:"absolute",top:"2rem",right:"2rem",fontSize:"1.5rem",cursor:"pointer",color:"black"},onClick:()=>o(!1)}),e.jsx("li",{className:`navbar__menu-item__phone ${a("/")?"active":""}`,children:e.jsx(s,{to:"/",end:!0,style:{all:"unset",cursor:"pointer"},children:n("nav.home")})}),e.jsx("li",{className:`navbar__menu-item__phone ${a("/apropos")?"active":""}`,children:e.jsx(s,{to:"/apropos",end:!0,style:{all:"unset",cursor:"pointer"},children:n("nav.about")})}),e.jsx("li",{className:`navbar__menu-item__phone ${a("/specialites")?"active":""}`,children:e.jsx(s,{to:"/specialites",end:!0,style:{all:"unset",cursor:"pointer"},children:n("nav.specialties")})}),e.jsx("li",{className:`navbar__menu-item__phone ${a("/galerie")?"active":""}`,children:e.jsx(s,{to:"/galerie",end:!0,style:{all:"unset",cursor:"pointer"},children:n("nav.gallery")})}),e.jsx("li",{className:`navbar__menu-item__phone ${a("/contact")?"active":""}`,children:e.jsx(s,{to:"/contact",end:!0,style:{all:"unset",cursor:"pointer"},children:n("nav.contact")})})]})]})};export{N};
