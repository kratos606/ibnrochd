import{r,j as e}from"./index-Btj9RO6W.js";import{C as m,H as f}from"./ContactInfo-IPXvDn0m.js";import{T as d,S as u}from"./Sponsors-sjrMXcN4.js";import{C as v}from"./Contact-B1TOU9Be.js";import{u as _,F as x,e as j}from"./index-Spj70BRB.js";/* empty css                    */const y=["8b09f8c296a829da5d22736046e64f84.webp","dac531343433d67ad1859b5e8b22ec7a.webp","10d4d7f0a517f8c0a8f9fdcd34db140b.webp","6bdc55373d4fded98f68d8fe79870be0.webp","18825dfe41ba83b88eb5a963cbb2e712.webp","981e14ca60d564e39dcf65faf5036dee.webp"],w=[1,2,3],S=()=>{const{t:a,i18n:o}=_(),[n,p]=r.useState(1),[b,c]=r.useState([{src:"/dac531343433d67ad1859b5e8b22ec7a.webp",title:a("gallery.videos.title"),active:!0},{src:"/aa2af345e93eeea0eeb7efb594b2b6a6.webp",title:a("gallery.videos.defaultTitle"),active:!1},{src:"/9eb95320ae2883dfea85158872ab13cd.webp",title:a("gallery.videos.defaultTitle"),active:!1},{src:"/38b8fac457189fc27f3de71b38e89e02.webp",title:a("gallery.videos.defaultTitle"),active:!1}]);return r.useEffect(()=>{(()=>{c(i=>i.map(s=>({...s,title:a(s.src==="/dac531343433d67ad1859b5e8b22ec7a.webp"?"gallery.videos.title":"gallery.videos.defaultTitle")})))})()},[o.language]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"galerie__page",children:[e.jsx(m,{}),e.jsxs(f,{children:[e.jsx(d,{title:a("gallery.explore.title"),subtitle:a("gallery.explore.subtitle"),description:a("gallery.explore.description")}),e.jsx("div",{className:"video__galerie",children:b.map((t,i)=>e.jsxs("div",{className:`video__item ${t.active?"active":""}`,onClick:()=>{c(s=>{const l=s.map(g=>({...g,active:!1}));return l[i].active=!l[i].active,l})},children:[e.jsx("img",{loading:"lazy",src:t.src,alt:`${a("gallery.videos.alt")} ${i+1}`}),e.jsx("div",{className:"video__title",children:t.title}),t.active&&e.jsx("div",{className:"play-icon",children:e.jsx(x,{icon:j})})]},i))}),e.jsx(d,{title:a("gallery.pictures.title"),subtitle:a("gallery.pictures.subtitle"),description:a("gallery.pictures.description")}),e.jsx("div",{className:"image__galerie__grid",children:y.map((t,i)=>e.jsx("div",{style:{"--i":`item${i+1}`},className:"image__galerie__item",children:e.jsx("img",{loading:"lazy",src:t,alt:`${a("gallery.images.alt")} ${i+1}`})},i))}),e.jsx("div",{className:"image__galerie__pagination",children:w.map(t=>e.jsx("div",{className:`image__galerie__pagination__item ${t===n?"active":""}`,onClick:()=>p(t),children:`0${t}`},t))}),e.jsx(u,{})]})]}),e.jsx(v,{})]})};export{S as default};