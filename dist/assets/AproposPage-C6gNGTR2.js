import{j as e,r as p}from"./index-CX0wop81.js";/* empty css                    */import{N as h}from"./Navbar-CMXIlOM6.js";import{T as d,S as g}from"./Sponsors-BDQZj4pK.js";import{C as x}from"./Contact-BdHvgZNj.js";import{u as m,F as l,e as f,c as j,d as b}from"./index-BqlWIGKV.js";const y=[{src:"/38b8fac457189fc27f3de71b38e89e02.webp",className:"section__image top",alt:"Section Image 1"},{src:"/9eb95320ae2883dfea85158872ab13cd.webp",className:"section__image",alt:"Section Image 2"}],u=[{src:"/981e14ca60d564e39dcf65faf5036dee.webp",alt:"Vidéo 1"},{src:"/aa2af345e93eeea0eeb7efb594b2b6a6.webp",alt:"Vidéo 2"}],I=()=>{const{t,i18n:r}=m(),i=r.language==="MA",n=t("apropos.bulletPoints",{returnObjects:!0});return e.jsxs("div",{className:"apropos__page__mobile page__mobile",children:[e.jsx(h,{}),e.jsxs("div",{className:"apropos__image__section",children:[e.jsx(d,{title:t("apropos.title"),subtitle:t("apropos.subtitle"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}}),e.jsxs("div",{className:"section__phone__container",style:{marginBlock:"4rem",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"fit-content",display:"flex",gap:"2rem"},children:[e.jsxs("div",{className:"section__container__item image__container",style:{height:"fit-content",width:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[y.map((s,a)=>e.jsx("img",{loading:"lazy",src:s.src,className:s.className,alt:t(`apropos.images.section${a+1}`),style:{position:"static",width:"100%",height:"100%",objectFit:"contain"}},a)),e.jsxs("div",{className:"phone__number",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[e.jsx("div",{className:"icon__container",children:e.jsx("img",{loading:"lazy",src:"/contact/phone.svg",alt:t("apropos.images.phoneIcon")})}),e.jsx("p",{children:"+212-536-614446"})]})]}),e.jsxs("div",{className:"section__container__item",style:{direction:i?"rtl":"ltr"},children:[e.jsx("div",{className:"section__sub__header",style:{textAlign:i?"right":"left",direction:i?"rtl":"ltr"},children:t("apropos.subHeader")}),e.jsx("div",{className:"section__header",style:{textAlign:i?"right":"left"},children:e.jsxs("h1",{style:{textAlign:i?"right":"left"},children:[t("apropos.patientCaring.title")," ",e.jsx("span",{children:t("apropos.patientCaring.highlight")})]})}),e.jsx("div",{className:"section__description",children:t("apropos.description")}),e.jsx("div",{className:"section__bullets",children:e.jsx("ul",{children:n.map((s,a)=>e.jsxs("li",{children:[e.jsx("img",{loading:"lazy",src:"/checklist.svg",alt:t("apropos.images.checklistIcon")})," ",s]},a))})})]}),e.jsx("div",{className:"apropos__video__container",style:{marginBlock:"2rem",height:"fit-content",width:"fit-content",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem"},children:u.map((s,a)=>e.jsxs("div",{className:"apropos__video__item",children:[e.jsx("img",{loading:"lazy",src:s.src,alt:t(`apropos.images.video${a+1}`)}),e.jsx("div",{className:"play-icon",children:e.jsx(l,{icon:f})})]},a))})]})]}),e.jsx("div",{className:"title__title__container",children:e.jsx(d,{title:t("apropos.doctors.title"),subtitle:t("apropos.doctors.subtitle"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}})}),e.jsxs("div",{style:{paddingInline:"2rem"},children:[e.jsx(v,{}),e.jsx(g,{})]}),e.jsx(x,{})]})},o=[{name:"Mohammed RSN",speciality:"Urologie",image:"/b9e277e296051862983be9a23fd769b7.webp"},{name:"Mohammed Likan",speciality:"Urologie",image:"/b9e277e296051862983be9a23fd769b7.webp"}],v=()=>{const{t,i18n:r}=m(),i=r.language==="MA",[n,s]=p.useState(0),a=()=>{s(c=>c<o.length-1?(c+1)%o.length:0)},_=()=>{s(c=>c===-1?o.length-2:c-1)};return e.jsxs("div",{className:"apropos__doctor__team",style:{width:"100%",height:"fit-content",gap:"2rem",flexDirection:"column",justifyContent:"center",alignItems:"center",direction:i?"rtl":"ltr"},children:[e.jsxs("div",{className:"doctor__team__item doctor__team__content",style:{width:"100%",height:"fit-content"},children:[e.jsxs("div",{className:"doctor__cardboard","data-direction":i?"rtl":"ltr",children:[e.jsx("div",{className:"doctor__name",style:{fontSize:"1.5rem"},children:o.at(n).name}),e.jsx("div",{className:"doctor__speciality",style:{fontSize:"1.5rem",textAlign:i?"right":"left"},children:o.at(n).speciality})]}),e.jsx("div",{className:"doctor__team__title",style:{fontSize:"1.5rem",textAlign:i?"right":"left",lineHeight:"2rem",marginBlock:"1rem"},children:t("apropos.doctorTeam.title")}),e.jsx("div",{className:"doctor__team__description",children:t("apropos.doctorTeam.description")}),e.jsxs("div",{className:"doctor__team__cta",style:{justifyContent:"space-between"},children:[e.jsxs("div",{className:"back__next__item",style:{flexDirection:i?"row-reverse":"row",marginBlock:"1rem"},children:[e.jsx("div",{className:"back__next__item__arrow active",onClick:_,children:e.jsx(l,{icon:j,style:{fontSize:"1rem"}})}),e.jsx("div",{className:"back__next__item__arrow",onClick:a,children:e.jsx(l,{icon:b,style:{fontSize:"1rem"}})})]}),e.jsx("div",{className:"doctor__team__separator"}),e.jsx("div",{className:"doctor__team__contact__us",style:{cursor:"pointer",width:"fit-content",paddingInline:"1rem"},onClick:()=>window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),children:t("apropos.doctorTeam.contactUs")})]})]}),e.jsxs("div",{className:"doctor__team__item doctor__team__image",style:{width:"100%"},children:[e.jsx("img",{style:{width:"100%",height:"100%",objectFit:"contain"},loading:"lazy",src:o.at(n).image,alt:"Image"}),e.jsx("div",{className:"background",style:{width:"100%",height:"100%",right:"unset",transform:"translate(-50%,-50%)",left:"50%",bottom:"0",top:"50%"}})]})]})};export{I as default};
