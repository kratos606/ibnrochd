import{r as a,j as l}from"./index-ClELDP67.js";import{C as N,H as C}from"./ContactInfo-CONK_wEC.js";import{T as y,S as I}from"./Sponsors-DJf_4ObA.js";import{C as E}from"./Contact-cilSLW3x.js";import{u as V,F as R,e as S}from"./api-C8HO-yYh.js";/* empty css                    */const j=Array.from({length:18},(t,o)=>`/gallery/ (${o+1}).webp`),H=()=>{const{t,i18n:o}=V(),[d,_]=a.useState(1),u=6,h=Math.ceil(j.length/u),[b,v]=a.useState([{src:"/gallery/videos/1.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[0],active:!0},{src:"/gallery/videos/2.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[1],active:!1},{src:"/gallery/videos/3.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[2],active:!1},{src:"/gallery/videos/4.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[3],active:!1},{src:"/gallery/videos/5.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[4],active:!1},{src:"/gallery/videos/6.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[5],active:!1},{src:"/gallery/videos/7.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[6],active:!1},{src:"/gallery/videos/8.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[7],active:!1},{src:"/gallery/videos/9.mp4",title:t("gallery.videos.titles",{returnObjects:!0})[8],active:!1}]);a.useEffect(()=>{v(e=>e.map((s,r)=>({...s,title:t("gallery.videos.titles",{returnObjects:!0})[r]})))},[o.language,t]);const[f,n]=a.useState(null),g=a.useRef(!1),c=a.useRef(null),i=a.useRef([]);a.useEffect(()=>()=>{i.current.forEach(e=>{e&&e.pause()})},[]);const p=d*u,m=p-u,x=j.slice(m,p),O=e=>{c.current===e?(i.current[e].pause(),c.current=null,n(null)):(g.current=!0,i.current.forEach((s,r)=>{s&&(s.pause(),s.currentTime=0)}),g.current=!1,i.current[e]&&(i.current[e].play(),n(e),c.current=e)),i.current[e]&&v(s=>{const r=s.map($=>({...$,active:!1}));return r[e].active=!r[e].active,r})},P=e=>{g.current||c.current===e&&(n(null),c.current=null)};return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"galerie__page",children:[l.jsx(N,{}),l.jsxs(C,{children:[l.jsx(y,{title:t("gallery.explore.title"),subtitle:t("gallery.explore.subtitle"),description:t("gallery.explore.description")}),l.jsx("div",{className:"video__galerie",children:b.map((e,s)=>l.jsxs("div",{className:`video__item ${f===s?"playing":""} ${e.active?"active":""}`,onClick:()=>O(s),children:[l.jsx("video",{ref:r=>i.current[s]=r,loading:"lazy",src:e.src,alt:`${t("gallery.videos.alt")} ${s+1}`,controls:!1,onPause:P,onEnded:()=>n(null)}),l.jsx("div",{className:"video__title",children:e.active?e.title:t("gallery.videos.defaultTitle")}),f!==s&&e.active&&l.jsx("div",{className:"play-icon",children:l.jsx(R,{icon:S})})]},s))}),l.jsx(y,{title:t("gallery.pictures.title"),subtitle:t("gallery.pictures.subtitle"),description:t("gallery.pictures.description")}),l.jsx("div",{className:"image__galerie__grid",children:x.map((e,s)=>l.jsx("div",{style:{"--i":`item${s%6+1}`},className:"image__galerie__item",children:l.jsx("img",{loading:"lazy",src:e,alt:`${t("gallery.images.alt")} ${m+s+1}`})},m+s))}),l.jsx("div",{className:"image__galerie__pagination",children:Array.from({length:h},(e,s)=>s+1).map(e=>l.jsx("div",{className:`image__galerie__pagination__item ${e===d?"active":""}`,onClick:()=>_(e),children:`0${e}`},e))})]}),l.jsx(I,{})]}),l.jsx(E,{})]})};export{H as default};
