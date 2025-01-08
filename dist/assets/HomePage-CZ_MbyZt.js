import{j as e,r as j}from"./index-ClELDP67.js";import{C as L,H as M}from"./ContactInfo-CONK_wEC.js";import{u as f,F as d,f as X,a as D,b as q,c as b,d as v,e as S,g as P,h as R,i as H}from"./api-C8HO-yYh.js";import{T as y,S as B}from"./Sponsors-DJf_4ObA.js";import{C as O}from"./CardBoard-9OwnM0gP.js";import{C as V}from"./Contact-cilSLW3x.js";/* empty css                 */const he=()=>{const{t}=f();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"home__page",children:[e.jsx(L,{}),e.jsx(M,{children:e.jsx(U,{})}),e.jsx(Q,{}),e.jsx(y,{title:t("home.explore.title"),subtitle:t("home.explore.subtitle"),description:t("home.explore.description")}),e.jsx(G,{}),e.jsx(y,{title:t("home.difference.title"),subtitle:t("home.difference.subtitle"),description:t("home.difference.description")}),e.jsx(Y,{})]}),e.jsx(O,{}),e.jsxs("div",{className:"home__page",children:[e.jsx(y,{title:t("home.personalCare.title"),subtitle:t("home.personalCare.subtitle"),description:t("home.personalCare.description"),style:{title:{fontSize:"57.71px"},subtitle:{fontSize:"57.71px"}}}),e.jsx(J,{}),e.jsx(ee,{}),e.jsx(y,{title:t("home.doctors.title"),subtitle:t("home.doctors.subtitle"),description:t("home.doctors.description"),style:{title:{fontSize:"57.71px"},subtitle:{fontSize:"57.71px"}}}),e.jsx(ie,{}),e.jsx(B,{})]}),e.jsx(V,{})]})},Q=()=>{const{t,i18n:i}=f(),s=i.language==="MA",[n,a]=j.useState({email:"",phone:"",appointment_date:""}),o=_=>{const{name:l,value:p}=_.target;a(x=>({...x,[l]:p}))},u=async _=>{_.preventDefault();try{const l=new Date(n.appointment_date);l.setHours(9,0,0);const p={...n,appointment_date:l.toISOString(),status:"pending"};await H.post("/appointments",p),console.log("success"),a({email:"",phone:"",appointment_date:""})}catch(l){console.log(l)}};return e.jsxs("div",{className:"render__vous__form","data-direction":s?"rtl":"ltr",style:{direction:s?"rtl":"ltr"},children:[e.jsx("form",{children:e.jsxs("table",{className:"form-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:s?"right":"left"},children:e.jsxs("label",{htmlFor:"email",children:[e.jsx(d,{icon:X})," ",t("home.bookingForm.email")]})}),e.jsx("th",{style:{textAlign:s?"right":"left"},children:e.jsxs("label",{htmlFor:"phone",children:[e.jsx(d,{icon:D})," ",t("home.bookingForm.phone")]})}),e.jsx("th",{style:{textAlign:s?"right":"left"},children:e.jsxs("label",{htmlFor:"date",children:[e.jsx(d,{icon:q})," ",t("home.bookingForm.date")]})}),e.jsx("th",{style:{width:"167px"}})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:o,placeholder:t("home.bookingForm.emailPlaceholder"),style:{direction:s?"rtl":"ltr"},required:!0})}),e.jsx("td",{children:e.jsx("input",{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:o,placeholder:t("home.bookingForm.phonePlaceholder"),style:{direction:s?"rtl":"ltr"},required:!0})}),e.jsx("td",{children:e.jsx("input",{type:"date",id:"appointment_date",name:"appointment_date",value:n.appointment_date,onChange:o,style:{direction:s?"rtl":"ltr"},required:!0})}),e.jsx("td",{style:{width:"167px"},children:e.jsx("div",{className:"form-submit",children:e.jsx("button",{type:"submit",onClick:u,children:t("home.bookingForm.submit")})})})]})})]})}),e.jsxs("h1",{className:"quote__title",children:["“",e.jsx("span",{children:t("home.quote")}),"“"]})]})},U=()=>{const{t,i18n:i}=f(),s=i.language==="MA";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"stroke__home"}),e.jsx("div",{className:"hero__background","data-direction":s?"rtl":"ltr",children:e.jsx("img",{loading:"lazy",src:"/21699d032d59eb23405a4c8f3e2df35b.webp",alt:"Background"})}),e.jsx("div",{className:"hero__container","data-direction":s?"rtl":"ltr",children:e.jsxs("h1",{className:"hero__title",children:[t("home.hero.title"),", ",t("home.hero.subtitle")]})}),e.jsxs("div",{className:"hero__quote",children:[t("home.hero.description"),e.jsxs("div",{className:"hero__cta",children:[e.jsx("button",{className:"hero__cta__button",children:t("home.hero.button")}),e.jsx("div",{className:"hero__arrow",children:s?e.jsx(d,{style:{fontSize:"1.5rem"},icon:b}):e.jsx(d,{style:{fontSize:"1.5rem"},icon:v})})]})]})]})},G=()=>{const[t,i]=j.useState(!1);return e.jsx("div",{className:"home__video__container","data-video-status":t,children:t?e.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/ZgUA8t4lr5Q?si=iswGaE4zljLUcnQQ&autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}):e.jsxs(e.Fragment,{children:[e.jsx("img",{loading:"lazy",src:"/background.webp",alt:"Home"}),e.jsx("div",{className:"play-icon",onClick:()=>i(!0),children:e.jsx(d,{icon:S})})]})})},Y=()=>{const{t}=f(),i=[{icon:"/features/microscope.svg",title:t("home.features.items.0.title"),description:t("home.features.items.0.description")},{icon:"/features/security.svg",title:t("home.features.items.1.title"),description:t("home.features.items.1.description")},{icon:"/features/care.svg",title:t("home.features.items.2.title"),description:t("home.features.items.2.description")},{icon:"/features/equipe.svg",title:t("home.features.items.3.title"),description:t("home.features.items.3.description")}];return e.jsxs("div",{className:"features__container",children:[e.jsx("div",{className:"features__image",children:e.jsx("img",{loading:"lazy",src:"/08b22943500b5ee2d90ca52fb8376213.webp",alt:"Features"})}),e.jsx("div",{className:"features__list",children:i.map((s,n)=>e.jsx(Z,{...s},n))})]})},Z=({icon:t,title:i,description:s})=>{const{t:n,i18n:a}=f(),o=a.language==="MA";return e.jsxs("div",{className:"features__list__item",style:{direction:o?"rtl":"ltr"},children:[e.jsx("div",{className:"feature__icon",children:e.jsx("img",{loading:"lazy",src:t,alt:i})}),e.jsx("div",{className:"feature__title",children:i}),e.jsx("div",{className:"feature__description",children:s})]})},J=()=>{const{t,i18n:i}=f(),s=i.language==="MA",n=t("home.specialties.items",{returnObjects:!0}),[a,o]=j.useState(0),u=()=>{o(l=>(l+1)%n.length)},_=()=>{o(l=>l===0?n.length-1:l-1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"home__specialites",style:{direction:s?"rtl":"ltr"},children:[e.jsxs("div",{className:"specialties__title",children:[s?e.jsxs(e.Fragment,{children:[e.jsx(d,{icon:P,className:"arrow"}),e.jsx(d,{icon:P,className:"arrow"})]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{icon:R,className:"arrow"}),e.jsx(d,{icon:R,className:"arrow"})]}),e.jsx("h2",{"data-direction":s?"rtl":"ltr",children:t("home.specialties.title")})]}),e.jsx("hr",{className:"specialties__divider"}),e.jsx("p",{className:"specialties__description",style:{fontSize:"18px"},children:t("home.specialties.description")})]}),e.jsx(K,{specialties:n,activeIndex:a,setActiveIndex:o}),e.jsx(I,{onNext:u,onPrev:_,activeIndex:a,totalButtons:n.length})]})},K=({specialties:t,activeIndex:i,setActiveIndex:s})=>e.jsx("div",{className:"button__group",children:t.map((n,a)=>e.jsxs("div",{className:`button__item ${a===i?"active":""}`,onClick:()=>s(a),style:{cursor:"pointer"},children:[a===i&&e.jsx("div",{className:"button__item__arrow",children:e.jsx(d,{icon:v,style:{fontSize:"1.5rem"}})}),n]},a))}),I=({onNext:t,onPrev:i,activeIndex:s,totalButtons:n})=>e.jsxs("div",{className:"back__next__container",children:[e.jsx("div",{className:"current__item__container",style:{position:"relative"},children:e.jsx("div",{className:"current__item__indicator",style:{width:"33%",transform:`translateX(calc(100% * ${(s+n)%n}))`,position:"absolute"}})}),e.jsxs("div",{className:"back__next__item",children:[e.jsx("div",{className:"back__next__item__arrow",onClick:i,children:e.jsx(d,{icon:b,style:{fontSize:"1rem"}})}),e.jsx("div",{className:"back__next__item__arrow active",onClick:t,children:e.jsx(d,{icon:v,style:{fontSize:"1rem"}})})]})]}),ee=()=>{const{t,i18n:i}=f(),s=i.language==="MA",[n,a]=j.useState(0),[o,u]=j.useState(0),_=[{number:t(`home.clinicWings.wings.${o}.number`),title:t(`home.clinicWings.wings.${o}.title`),description:t(`home.clinicWings.wings.${o}.description`,{returnObjects:!0}),videos:["/wings/1.mp4","/wings/6.mp4","/wings/2.mp4","/wings/7.mp4","/wings/3.mp4","/wings/4.mp4","/wings/5.mp4","/wings/8.mp4"]}],l=()=>{a(c=>c<_[0].videos.length?c+1:c),u(c=>c<7?c+1:0)},p=()=>{a(c=>c>-1?c-1:-1),u(c=>c>0?c-1:7)},x=_[0];return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:t("home.clinicWings.title"),subtitle:t("home.clinicWings.subtitle"),description:t("home.clinicWings.description"),style:{title:{fontSize:"57.71px"},subtitle:{fontSize:"57.71px"}}}),e.jsx("div",{className:"stages__container",style:{flexDirection:s?"row-reverse":"row"},children:e.jsx(te,{number:x.number,title:x.title,description:x.description,videos:x.videos,currentIndex:n,setCurrentIndex:a,onNext:l,onPrev:p})})]})},te=({number:t,title:i,description:s,videos:n,currentIndex:a,setCurrentIndex:o,onNext:u,onPrev:_})=>{const{t:l,i18n:p}=f(),x=p.language==="MA",c=30,N=1,r=c+N,g=n.length,w=j.useRef([]),[F,C]=j.useState(!1),A=[n[n.length-1],...n,...n],z=j.useRef(null),k=h=>{const m=w.current[h];m&&(m.paused?(m.play(),C(!0)):(m.pause(),C(!1)))},$=-((a+1)*r);j.useEffect(()=>{const h=z.current,m=()=>{a===-1?(h.style.transition="none",h.style.transform=`translateX(-${r*g}vw)`,o(g-1)):a===g&&(h.style.transition="none",h.style.transform=`translateX(-${r}vw)`,o(0))};return h.style.transition="transform 0.5s ease",h.style.transform=`translateX(${$}vw)`,h.addEventListener("transitionend",m),()=>{h.removeEventListener("transitionend",m)}},[$,a,g,r]);const T=()=>{const h=w.current[a+1];h&&(h.pause(),C(!1)),u(a+1)},W=()=>{_(a-1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"header-section","data-direction":x?"rtl":"ltr",style:{direction:x?"rtl":"ltr"},children:[e.jsx("div",{className:"header-section__number",children:parseInt(t)+2}),e.jsxs("div",{className:"header-section__content",children:[e.jsx("h1",{className:"header-section__title",children:i}),e.jsx("hr",{style:{width:"300.5px"}}),e.jsx("ul",{className:"header-section__description",children:s.map((h,m)=>e.jsx("li",{children:h},m))})]})]}),e.jsxs("div",{className:"image-carousel__container",children:[e.jsx("div",{className:"image-carousel",style:{overflow:"hidden"},children:e.jsx("div",{className:"image-carousel__track",ref:z,style:{display:"flex"},children:A.map((h,m)=>e.jsxs("div",{className:"image-carousel__card",style:{height:"auto",width:`${c}vw`,aspectRatio:"253 / 359",marginRight:`${N}vw`},children:[e.jsx("video",{ref:E=>w.current[m]=E,loading:"lazy",src:`${h}#t=1`,alt:`Video ${m}`,style:{width:"100%"},onClick:()=>{m-1===a&&k(m)},loop:!0,playsInline:!0}),m-1===a&&e.jsx("div",{className:"play-icon",onClick:()=>k(m),style:{opacity:F?0:1},children:e.jsx(d,{icon:S})}),m+2===a&&e.jsx("div",{className:"play-icon",onClick:()=>k(m),style:{opacity:F?0:1},children:e.jsx(d,{icon:S})})]},m))})}),e.jsx(se,{currentIndex:a,totalImages:g,onNext:T,onPrev:W})]})]})},se=({currentIndex:t,totalImages:i,onNext:s,onPrev:n})=>e.jsxs("div",{className:"navigation-controls",children:[e.jsxs("div",{className:"arrows",children:[e.jsx("div",{className:"icon__arrow left",onClick:n,children:e.jsx(d,{icon:b,className:"navigation-controls__arrow"})}),e.jsx("div",{className:"icon__arrow right",onClick:s,children:e.jsx(d,{icon:v,className:"navigation-controls__arrow"})})]}),e.jsxs("div",{className:"numbers",children:[e.jsx("span",{className:"navigation-controls__number",children:String((t+i)%i+1).padStart(2,"0")}),e.jsx("div",{className:"indicator__container",style:{position:"relative"},children:e.jsx("div",{className:"indicator",style:{width:`${100/i}%`,transform:`translateX(calc(100% * ${(t+i)%i}))`,position:"absolute"}})}),e.jsx("span",{className:"navigation-controls__number",children:String(i).padStart(2,"0")})]})]}),ie=()=>{const{t}=f(),[i,s]=j.useState(0),n=j.useRef(null),a=230,o=25,u=a+o,_=t("home.doctors.team",{returnObjects:!0}),l=_.length,p=[..._,..._],x=-((i+1)*u);j.useEffect(()=>{const r=n.current,g=()=>{i===-1?(r.style.transition="none",r.style.transform=`translateX(-${u*l}px)`,s(l-1)):i===l&&(r.style.transition="none",r.style.transform=`translateX(-${u}px)`,s(0))};return r.style.transition="transform 0.5s ease",r.style.transform=`translateX(${x}px)`,r.addEventListener("transitionend",g),()=>{r.removeEventListener("transitionend",g)}},[x,i,l,u]);const c=()=>{s(r=>r<l?r+1:r)},N=()=>{s(r=>r>-1?r-1:-1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"team__carousel__container",style:{width:"995px",margin:"auto",overflow:"hidden"},children:[e.jsx("div",{className:"team__container",ref:n,children:e.jsx("div",{className:"team__track",style:{display:"flex"},children:p.map((r,g)=>e.jsx(ne,{...r,memberWidth:`${a}px`,gap:`${o}px`,index:g},g))})}),e.jsxs("div",{className:"back__next__container",style:{paddingInline:"0rem"},children:[e.jsx("div",{className:"current__item__container",children:e.jsx("div",{className:"current__item__indicator"})}),e.jsxs("div",{className:"back__next__item",children:[e.jsx("div",{className:"back__next__item__arrow active",onClick:N,children:e.jsx(d,{icon:b,style:{fontSize:"1rem"}})}),e.jsx("div",{className:"back__next__item__arrow",onClick:c,children:e.jsx(d,{icon:v,style:{fontSize:"1rem"}})})]})]})]})})},ne=({name:t,specialty:i,image:s,isDefault:n,memberWidth:a,gap:o,index:u})=>{function _(x){return x*Math.PI/180}const p=(x=>{const c=_(x);return{cos:Math.cos(c),sin:Math.sin(c)}})(-45);return e.jsxs("div",{className:"team__item",style:{flex:"0 0 auto",width:a,marginRight:o},children:[e.jsxs("div",{className:"team__item__image",children:[e.jsx("img",{loading:"lazy",src:s,alt:t,className:`${n?"default":null}`}),e.jsx("div",{style:{"--cos":p.cos,"--sin":p.sin,cursor:"pointer"},className:"team__member__arrow",onClick:()=>{window.localStorage.setItem("doctorIndex",u),location.href="/apropos#apropos__doctor__team"},children:e.jsx(d,{icon:v,style:{fontSize:"1rem",transform:"rotate(-45deg)"}})})]}),e.jsx("h2",{children:t}),e.jsx("h3",{children:i})]})};export{he as default};
