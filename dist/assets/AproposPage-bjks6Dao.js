import{r as d,j as e}from"./index-dq4cPYKl.js";/* empty css                    */import{N as h}from"./Navbar-CFHgc45Y.js";import{T as _,S as g}from"./Sponsors-BetMu81U.js";import{C as x}from"./Contact-88fkz0SJ.js";import{u as p,F as m,g as f,d as j,e as u}from"./api-BwuPv3np.js";const y=[{src:"/38b8fac457189fc27f3de71b38e89e02.webp",className:"section__image top",alt:"Section Image 1"},{src:"/9eb95320ae2883dfea85158872ab13cd.webp",className:"section__image",alt:"Section Image 2"}],b=[{src:"/981e14ca60d564e39dcf65faf5036dee.webp",alt:"Vidéo 1"}],C=()=>{const{t,i18n:c}=p(),s=c.language==="MA",[r,l]=d.useState(!1),a=t("apropos.bulletPoints",{returnObjects:!0});return d.useEffect(()=>{const o=window.location.hash;if(o){const i=document.getElementById(o.substring(1));i&&window.scrollTo(0,i.offsetTop-100)}},[]),e.jsxs("div",{className:"apropos__page__mobile page__mobile",children:[e.jsx(h,{}),e.jsxs("div",{className:"apropos__image__section",children:[e.jsx(_,{title:t("apropos.title"),subtitle:t("apropos.subtitle"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}}),e.jsxs("div",{className:"section__phone__container",style:{marginBlock:"4rem",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"fit-content",display:"flex",gap:"2rem"},children:[e.jsxs("div",{className:"section__container__item image__container",style:{height:"fit-content",width:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[y.map((o,i)=>e.jsx("img",{loading:"lazy",src:o.src,className:o.className,alt:t(`apropos.images.section${i+1}`),style:{position:"static",width:"100%",height:"100%",objectFit:"contain"}},i)),e.jsxs("div",{className:"phone__number",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[e.jsx("div",{className:"icon__container",children:e.jsx("img",{loading:"lazy",src:"/contact/phone.svg",alt:t("apropos.images.phoneIcon")})}),e.jsx("p",{children:"+212-536-614446"})]})]}),e.jsxs("div",{className:"section__container__item",style:{direction:s?"rtl":"ltr"},children:[e.jsx("div",{className:"section__sub__header",style:{textAlign:s?"right":"left",direction:s?"rtl":"ltr"},children:t("apropos.subHeader")}),e.jsx("div",{className:"section__header",style:{textAlign:s?"right":"left"},children:e.jsxs("h1",{style:{textAlign:s?"right":"left"},children:[t("apropos.patientCaring.title")," ",e.jsx("span",{children:t("apropos.patientCaring.highlight")})]})}),e.jsx("div",{className:"section__description",children:t("apropos.description")}),e.jsx("div",{className:"section__bullets",children:e.jsx("ul",{children:a.map((o,i)=>e.jsxs("li",{children:[e.jsx("img",{loading:"lazy",src:"/checklist.svg",alt:t("apropos.images.checklistIcon")})," ",o]},i))})})]}),e.jsx("div",{className:"apropos__video__container",style:{marginBlock:"2rem",aspectRatio:"16 / 9",width:"100%"},children:b.map((o,i)=>e.jsx("div",{className:"apropos__video__item",children:r?e.jsx("iframe",{style:{borderRadius:"25px"},width:"100%",height:"100%",src:"https://www.youtube.com/embed/ZgUA8t4lr5Q?si=iswGaE4zljLUcnQQ&autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}):e.jsxs(e.Fragment,{children:[e.jsx("img",{loading:"lazy",style:{width:"100%",height:"100%"},src:o.src,alt:t(`apropos.images.video${i+1}`)}),e.jsx("div",{className:"play-icon",onClick:()=>l(!0),children:e.jsx(m,{icon:f})})]})},i))})]})]}),e.jsx("div",{className:"title__title__container",children:e.jsx(_,{title:t("apropos.doctors.title"),subtitle:t("apropos.doctors.subtitle"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}})}),e.jsxs("div",{style:{paddingInline:"2rem"},children:[e.jsx(v,{}),e.jsx(g,{})]}),e.jsx(x,{})]})},v=()=>{const{t,i18n:c}=p(),s=c.language==="MA",[r,l]=d.useState(window.localStorage.getItem("doctorIndex")||0),a=t("home.doctors.team",{returnObjects:!0}),o=()=>{l(n=>n<a.length-1?(n+1)%a.length:0)},i=()=>{l(n=>n===-1?a.length-2:n-1)};return e.jsxs("div",{id:"apropos__doctor__team",className:"apropos__doctor__team",style:{width:"100%",height:"fit-content",gap:"2rem",flexDirection:"column",justifyContent:"center",alignItems:"center",direction:s?"rtl":"ltr",overflow:"visible"},children:[e.jsxs("div",{className:"doctor__team__item doctor__team__content",style:{width:"100%",height:"fit-content"},children:[e.jsxs("div",{className:"doctor__cardboard","data-direction":s?"rtl":"ltr",children:[e.jsx("div",{className:"doctor__name",style:{fontSize:"1.5rem"},children:a.at(r).name}),e.jsx("div",{className:"doctor__speciality",style:{fontSize:"1.5rem",textAlign:s?"right":"left"},children:a.at(r).speciality})]}),e.jsx("div",{className:"doctor__team__title",style:{fontSize:"1.5rem",textAlign:s?"right":"left",lineHeight:"2rem",marginBlock:"1rem"},children:t("apropos.doctorTeam.title")}),e.jsx("div",{className:"doctor__team__description",children:t("apropos.doctorTeam.description")}),e.jsxs("div",{className:"doctor__team__cta",style:{justifyContent:"space-between"},children:[e.jsxs("div",{className:"back__next__item",style:{flexDirection:s?"row-reverse":"row",marginBlock:"1rem"},children:[e.jsx("div",{className:"back__next__item__arrow active",onClick:i,children:e.jsx(m,{icon:j,style:{fontSize:"1rem"}})}),e.jsx("div",{className:"back__next__item__arrow",onClick:o,children:e.jsx(m,{icon:u,style:{fontSize:"1rem"}})})]}),e.jsx("div",{className:"doctor__team__separator"}),e.jsx("div",{className:"doctor__team__contact__us",style:{cursor:"pointer",width:"fit-content",paddingInline:"1rem"},onClick:()=>window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),children:t("apropos.doctorTeam.contactUs")})]})]}),e.jsxs("div",{className:"doctor__team__item doctor__team__image",style:{width:"100%"},children:[e.jsx("img",{style:{width:"100%",height:"100%",objectFit:"contain"},loading:"lazy",src:a.at(r).image,alt:"Image"}),e.jsx("div",{className:"background__mobile",style:{width:"90vw",aspectRatio:"1/1",transform:"translate(-50%,-50%)",left:"50%",top:"50%",position:"absolute",background:"linear-gradient(180deg, #4CB9C1 0%, #24575B 100%)",borderRadius:"50%",zIndex:"-1"}})]})]})};export{C as default};
