import{r,j as e}from"./index-Btj9RO6W.js";import{N as b}from"./Navbar-B18n085p.js";import{T as m,S as f}from"./Sponsors-sjrMXcN4.js";import{u as x,F as v,e as _}from"./index-Spj70BRB.js";import{C as u}from"./Contact-DPomyrGx.js";/* empty css                    */const y=["8b09f8c296a829da5d22736046e64f84.webp","dac531343433d67ad1859b5e8b22ec7a.webp","10d4d7f0a517f8c0a8f9fdcd34db140b.webp","6bdc55373d4fded98f68d8fe79870be0.webp","18825dfe41ba83b88eb5a963cbb2e712.webp","981e14ca60d564e39dcf65faf5036dee.webp"],h=[1,2,3],z=()=>{const{t:i,i18n:c}=x();c.language;const[o,n]=r.useState(1),[p,d]=r.useState([{src:"/dac531343433d67ad1859b5e8b22ec7a.webp",title:i("gallery.videos.title"),active:!0},{src:"/aa2af345e93eeea0eeb7efb594b2b6a6.webp",title:i("gallery.videos.defaultTitle"),active:!1},{src:"/9eb95320ae2883dfea85158872ab13cd.webp",title:i("gallery.videos.defaultTitle"),active:!1},{src:"/38b8fac457189fc27f3de71b38e89e02.webp",title:i("gallery.videos.defaultTitle"),active:!1}]);return r.useEffect(()=>{(()=>{d(a=>a.map(l=>({...l,title:l.src==="/dac531343433d67ad1859b5e8b22ec7a.webp"?i("gallery.videos.title"):i("gallery.videos.defaultTitle")})))})()},[c.language,i]),e.jsxs("div",{className:"galerie__page__mobile page__mobile",children:[e.jsx(b,{}),e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx(m,{title:i("gallery.explore.title"),subtitle:i("gallery.explore.subtitle"),description:i("gallery.explore.description"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem",width:"100%"}}}),e.jsx("div",{className:"video__galerie",style:{display:"block",marginBlock:"4rem"},children:p.map((t,a)=>e.jsxs("div",{className:`video__item ${t.active?"active":""}`,style:{height:"470px",marginBlock:"1rem"},onClick:()=>{d(l=>{const s=l.map(g=>({...g,active:!1}));return s[a].active=!s[a].active,s})},children:[e.jsx("img",{loading:"lazy",src:t.src,alt:`${i("gallery.videos.alt")} ${a+1}`}),e.jsx("div",{className:"video__title",children:t.title}),e.jsx("div",{className:"play-icon",children:e.jsx(v,{icon:_})})]},a))}),e.jsx(m,{title:i("gallery.pictures.title"),subtitle:i("gallery.pictures.subtitle"),description:i("gallery.pictures.description"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem",width:"100%"}}}),e.jsxs("div",{style:{marginBlock:"4rem"},children:[e.jsx("div",{className:"image__galerie__grid",style:{gridTemplateAreas:'"item1 item1 item1 item1 item2 item2 item2 item2" "item3 item3 item3 item3 item4 item4 item4 item4" "item5 item5 item5 item5 item6 item6 item6 item6"'},children:y.map((t,a)=>e.jsx("div",{style:{"--i":`item${a+1}`},className:"image__galerie__item",children:e.jsx("img",{loading:"lazy",src:t,alt:`${i("gallery.images.alt")} ${a+1}`})},a))}),e.jsx("div",{className:"image__galerie__pagination",children:h.map(t=>e.jsx("div",{className:`image__galerie__pagination__item ${t===o?"active":""}`,onClick:()=>n(t),children:`0${t}`},t))})]})]}),e.jsx("div",{style:{padding:"2rem",width:"100%"},children:e.jsx(f,{})}),e.jsx(u,{})]})};export{z as default};