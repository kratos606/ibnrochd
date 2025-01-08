import{r as x,j as e,L as W}from"./index-BaLeEX27.js";/* empty css                 */import{N as Y}from"./Navbar-BUYHEPnb.js";import{T as w,S as V}from"./Sponsors-DRk4IiWl.js";import{C as Q}from"./CardBoard-CPE634dp.js";import{u as v,F as m,d as k,e as y,f as U,a as G,b as Z,M as J,c as K,h as $,i as B,g as M,j as ee}from"./api-Ova5q5Bt.js";import{C as te}from"./Contact-6XIOJPko.js";const je=()=>{const{t,i18n:r}=v(),n=r.language==="MA",[o,a]=x.useState(!1),[d,g]=x.useState({email:"",phone:"",appointment_date:""}),l=u=>{const{name:p,value:_}=u.target;g(b=>({...b,[p]:_}))},h=async u=>{u.preventDefault();try{const p=new Date(d.appointment_date);p.setHours(9,0,0);const _={...d,appointment_date:p.toISOString(),status:"pending"};(await ee.post("/appointments",_)).status===200&&(a(!0),g({email:"",phone:"",appointment_date:""}))}catch(p){console.log(p)}};return e.jsxs("div",{className:"home__page__mobile page__mobile",children:[e.jsx(Y,{}),e.jsxs("div",{className:"home__mobile__hero",children:[e.jsxs("div",{className:"hero__mobile__content",style:{direction:n?"rtl":"ltr"},children:[e.jsxs("h1",{className:"hero__mobile__title",style:{textAlign:"center"},children:[t("home.hero.title"),", ",t("home.hero.subtitle")]}),e.jsx("p",{className:"hero__mobile__description","data-direction":n?"rtl":"ltr",children:t("home.hero.description")}),e.jsxs("div",{className:"hero__mobile__cta",children:[e.jsx(W,{to:"/apropos",style:{all:"unset",cursor:"pointer"},children:e.jsx("button",{className:"hero__cta__mobile__button",style:{cursor:"pointer"},children:t("home.hero.button")})}),e.jsx(W,{to:"/apropos",style:{all:"unset",cursor:"pointer"},children:e.jsx("div",{className:"hero__arrow__mobile",style:{cursor:"pointer"},children:e.jsx(m,{style:{fontSize:"1.2rem"},icon:n?k:y})})})]})]}),e.jsx("div",{className:"hero__mobile__image",children:e.jsx("img",{src:"/21699d032d59eb23405a4c8f3e2df35b.webp",alt:"Hero"})})]}),e.jsxs("div",{className:"booking__form__mobile",style:{direction:n?"rtl":"ltr"},children:[e.jsxs("form",{children:[e.jsxs("div",{className:"form-container",children:[e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"email",children:[e.jsx(m,{icon:U})," ",t("home.bookingForm.email")]}),e.jsx("input",{type:"email",id:"email",name:"email",value:d.email,onChange:l,placeholder:t("home.bookingForm.emailPlaceholder"),required:!0,style:{direction:n?"rtl":"ltr"}})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"phone",children:[e.jsx(m,{icon:G})," ",t("home.bookingForm.phone")]}),e.jsx("input",{type:"tel",id:"phone",name:"phone",value:d.phone,onChange:l,placeholder:t("home.bookingForm.phonePlaceholder"),required:!0,style:{direction:n?"rtl":"ltr"}})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"date",children:[e.jsx(m,{icon:Z})," ",t("home.bookingForm.date")]}),e.jsx("input",{type:"date",id:"date",name:"appointment_date",value:d.appointment_date,onChange:l,required:!0,style:{direction:n?"rtl":"ltr"}})]}),e.jsx("div",{className:"form-submit",children:e.jsx("button",{type:"submit",onClick:h,children:t("home.bookingForm.submit")})})]}),e.jsxs(J,{isOpen:o,onClose:()=>a(!1),children:[e.jsx(m,{icon:K,className:"success-icon"}),e.jsx("h2",{className:"success-message",children:t("contact.appointmentSuccessMessage")})]})]}),e.jsxs("h1",{className:"quote__title",children:["“",e.jsx("span",{children:t("home.quote")}),"“"]})]}),e.jsxs("div",{className:"video__mobile__section",children:[e.jsx(w,{title:t("home.explore.title"),subtitle:t("home.explore.subtitle"),description:t("home.explore.description"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}}),e.jsx(ie,{}),e.jsx(w,{title:t("home.difference.title"),subtitle:t("home.difference.subtitle"),description:t("home.difference.description"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}}),e.jsx(le,{}),e.jsx(Q,{}),e.jsx(w,{title:t("home.personalCare.title"),subtitle:t("home.personalCare.subtitle"),description:t("home.personalCare.description"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}}),e.jsx(se,{}),e.jsx(w,{title:t("home.clinicWings.title"),subtitle:t("home.clinicWings.subtitle"),description:t("home.clinicWings.description"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}}),e.jsx(ae,{number:t("home.clinicWings.wings.0.number"),title:t("home.clinicWings.wings.0.title"),description:t("home.clinicWings.wings.0.description"),images:["/b8dabe7f11276a7a5a058c97166b0c15.webp","/f800cfb2aa8238b84077530434eb11c5.webp","/300726901718ac044bf52aa78933c642.webp"]}),e.jsx(w,{title:t("home.doctors.title"),subtitle:t("home.doctors.subtitle"),description:t("home.doctors.description"),style:{title:{fontSize:"24px",lineHeight:"28px"},subtitle:{fontSize:"24px",lineHeight:"28px"},description:{fontSize:"16px",lineHeight:"20px"},container:{marginBlock:"1rem"}}}),e.jsx(me,{}),e.jsx(V,{})]}),e.jsx(te,{})]})},se=()=>{const{t,i18n:r}=v(),n=r.language==="MA",o=t("home.specialties.items",{returnObjects:!0}),[a,d]=x.useState(0),g=()=>{d(h=>(h+1)%o.length)},l=()=>{d(h=>h===0?o.length-1:h-1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"home__specialites",style:{width:"100%",height:"fit-content",gap:"1rem",padding:"0",direction:n?"rtl":"ltr"},children:[e.jsxs("div",{className:"specialties__title",children:[n?e.jsxs(e.Fragment,{children:[e.jsx(m,{icon:$,className:"arrow"}),e.jsx(m,{icon:$,className:"arrow"})]}):e.jsxs(e.Fragment,{children:[e.jsx(m,{icon:B,className:"arrow"}),e.jsx(m,{icon:B,className:"arrow"})]}),e.jsx("h2",{"data-direction":n?"rtl":"ltr",children:t("home.specialties.title")})]}),e.jsx("hr",{className:"specialties__divider"}),e.jsx("p",{className:"specialties__description",children:t("home.specialties.description")})]}),e.jsx(oe,{specialties:o,activeIndex:a,setActiveIndex:d}),e.jsx(ne,{onNext:g,onPrev:l,activeIndex:a,totalButtons:o.length})]})},ie=()=>{const[t,r]=x.useState(!1);return e.jsx("div",{className:"home__video__mobile__container","data-video-status":t,children:t?e.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/ZgUA8t4lr5Q?si=iswGaE4zljLUcnQQ&autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}):e.jsxs(e.Fragment,{children:[e.jsx("img",{loading:"lazy",src:"/background.webp",alt:"Home"}),e.jsx("div",{className:"play-icon",onClick:()=>r(!0),children:e.jsx(m,{icon:M})})]})})},ne=({onNext:t,onPrev:r,activeIndex:n,totalButtons:o})=>e.jsxs("div",{className:"back__next__container",style:{width:"100%",display:"flex",paddingInline:"0",marginBottom:"2rem"},children:[e.jsx("div",{className:"current__item__container",children:e.jsx("div",{className:"current__item__indicator"})}),e.jsxs("div",{className:"back__next__item",children:[e.jsx("div",{className:"back__next__item__arrow",onClick:r,children:e.jsx(m,{icon:k,style:{fontSize:"1rem"}})}),e.jsx("div",{className:"back__next__item__arrow active",onClick:t,children:e.jsx(m,{icon:y,style:{fontSize:"1rem"}})})]})]}),oe=({specialties:t,activeIndex:r,setActiveIndex:n})=>e.jsx("div",{className:"button__group",style:{width:"100%",display:"block",paddingInline:"0"},children:t.map((o,a)=>e.jsxs("div",{className:`button__item ${a===r?"active":""}`,style:{paddingInline:"1rem",cursor:"pointer"},onClick:()=>n(a),children:[a===r&&e.jsx("div",{className:"button__item__arrow",children:e.jsx(m,{icon:y,style:{fontSize:"1.5rem"}})}),o]},a))}),ae=({number:t,title:r,description:n,images:o})=>{const{t:a,i18n:d}=v(),g=d.language==="MA",[l,h]=x.useState(0),u=x.useRef(null),p=Math.min(window.innerWidth*.85,400),_=32,[b,z]=x.useState(null),[c,f]=x.useState(null),F=50,[T,P]=x.useState(0),j=[{number:a(`home.clinicWings.wings.${T}.number`),title:a(`home.clinicWings.wings.${T}.title`),description:a(`home.clinicWings.wings.${T}.description`,{returnObjects:!0}),videos:["/wings/1.mp4","/wings/6.mp4","/wings/2.mp4","/wings/7.mp4","/wings/3.mp4","/wings/4.mp4","/wings/5.mp4","/wings/8.mp4"]}],L=[j[0].videos[j[0].videos.length-1],...j[0].videos,...j[0].videos],I=()=>{const i=S.current[l+1];i&&(i.pause(),C(!1)),h(s=>s<j[0].videos.length?s+1:s),P(s=>s<7?s+1:0)},E=()=>{const i=S.current[l+1];i&&(i.pause(),C(!1)),h(s=>s>-1?s-1:-1),P(s=>s>0?s-1:7)},D=i=>{f(null),z(i.touches[0].clientX)},O=i=>{f(i.touches[0].clientX)},q=()=>{if(!b||!c)return;const i=b-c,s=i>F,N=i<-F;s?I():N&&E()},R=j[0];x.useEffect(()=>{console.log("Current Index:",l);const i=u.current;if(!i)return;const s=()=>{if(l===-1){console.log("Transitioning to last slide"),i.style.transition="none";const X=(p+_)*o.length;i.style.transform=`translateX(-${X}px)`,h(o.length-1),i.offsetHeight}else l===j[0].videos.length&&(console.log("Transitioning to first slide"),i.style.transition="none",i.style.transform=`translateX(-${p+_}px)`,h(0),i.offsetHeight)};i.style.transition="transform 0.5s ease-in-out";const N=(l+1)*(p+_);return i.style.transform=`translateX(-${N}px)`,i.addEventListener("transitionend",s),()=>{i.removeEventListener("transitionend",s)}},[l,o.length,p,_]);const S=x.useRef({}),[A,C]=x.useState(!1),H=i=>{const s=S.current[i];s&&(s.paused?(s.play(),C(!0)):(s.pause(),C(!1)))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"header-section","data-direction":g?"rtl":"ltr",style:{width:"100%"},children:e.jsxs("div",{className:"header-section__content",style:{direction:g?"rtl":"ltr"},children:[e.jsx("h1",{className:"header-section__title",children:R.title}),e.jsx("hr",{style:{width:"78vw"}}),e.jsx("ul",{className:"header-section__description",children:R.description.map((i,s)=>e.jsx("li",{children:i},s))})]})}),e.jsxs("div",{className:"image-carousel__container-mobile",style:{alignSelf:"flex-start",width:"100%"},children:[e.jsx("div",{className:"image-carousel-mobile",ref:u,onTouchStart:D,onTouchMove:O,onTouchEnd:q,style:{display:"flex",transition:"transform 0.5s ease-in-out",width:"100%",gap:"2rem"},children:L.map((i,s)=>e.jsxs("div",{className:"image-carousel__card",style:{width:"min(85vw,400px)",aspectRatio:"254 / 359",height:"unset"},children:[e.jsx("video",{ref:N=>S.current[s]=N,loading:"lazy",src:`${i}#t=1`,alt:`Video ${s}`,style:{width:"100%"},onClick:()=>{s-1===l&&H(s)},loop:!0,playsInline:!0}),s-1===l&&e.jsx("div",{className:"play-icon",onClick:()=>H(s),style:{opacity:A?0:1},children:e.jsx(m,{icon:M})}),s+2===l&&e.jsx("div",{className:"play-icon",onClick:()=>H(s),style:{opacity:A?0:1},children:e.jsx(m,{icon:M})})]},s))}),e.jsx(re,{currentIndex:l,totalImages:j[0].videos.length,onNext:I,onPrev:E})]})]})},re=({currentIndex:t,totalImages:r,onNext:n,onPrev:o})=>e.jsxs("div",{className:"navigation-controls",style:{width:"100vw"},children:[e.jsxs("div",{className:"numbers",children:[e.jsx("span",{className:"navigation-controls__number",children:String((t+r)%r+1).padStart(2,"0")}),"/",e.jsx("span",{className:"navigation-controls__number",children:String(r).padStart(2,"0")})]}),e.jsxs("div",{className:"arrows",children:[e.jsx("div",{className:"icon__arrow left",onClick:o,children:e.jsx(m,{icon:k,className:"navigation-controls__arrow"})}),e.jsx("div",{className:"icon__arrow right",onClick:n,children:e.jsx(m,{icon:y,className:"navigation-controls__arrow"})})]})]}),le=()=>{const{t,i18n:r}=v();r.language;const n=[{icon:"/features/microscope.svg",title:t("home.features.items.0.title"),description:t("home.features.items.0.description")},{icon:"/features/security.svg",title:t("home.features.items.1.title"),description:t("home.features.items.1.description")},{icon:"/features/care.svg",title:t("home.features.items.2.title"),description:t("home.features.items.2.description")},{icon:"/features/equipe.svg",title:t("home.features.items.3.title"),description:t("home.features.items.3.description")}];return e.jsx("div",{className:"features__container__mobile",style:{gap:"1rem",display:"flex",flexDirection:"column",marginBlock:"2rem"},children:n.map((o,a)=>e.jsx(ce,{...o},a))})},ce=({icon:t,title:r,description:n})=>{const{t:o,i18n:a}=v(),d=a.language==="MA";return e.jsxs("div",{className:"features__list__item",style:{width:"100%",direction:d?"rtl":"ltr"},children:[e.jsx("div",{className:"feature__icon",children:e.jsx("img",{loading:"lazy",src:t,alt:r})}),e.jsx("div",{className:"feature__title",children:r}),e.jsx("div",{className:"feature__description",style:{width:"100%"},children:n})]})},me=()=>{const{t,i18n:r}=v();r.language;const n=t("home.doctors.team",{returnObjects:!0}),[o,a]=x.useState(0),d=x.useRef(null),g=320,l=25,h=g+l,u=n.length,p=[n[u-1],...n,...n],_=-((o+1)*h);x.useEffect(()=>{const c=d.current,f=()=>{o===-1?(c.style.transition="none",c.style.transform=`translateY(-${h*u}px)`,a(u-1)):o===u&&(c.style.transition="none",c.style.transform=`translateY(-${h}px)`,a(0))};return c.style.transition="transform 0.5s ease",c.style.transform=`translateY(${_}px)`,c.addEventListener("transitionend",f),()=>{c.removeEventListener("transitionend",f)}},[_,o,u,h]);const b=()=>{a(c=>c<u?c+1:c)},z=()=>{a(c=>c>-1?c-1:-1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"team__carousel__container",style:{width:"100%",margin:"auto",overflow:"hidden"},children:e.jsx("div",{className:"team__container",ref:d,style:{width:"100%"},children:e.jsx("div",{className:"team__track",style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"1330px"},children:p.map((c,f)=>e.jsx(de,{...c,memberHeight:`${g}px`,gap:`${l}px`,index:f},f))})})}),e.jsxs("div",{className:"back__next__container",style:{paddingInline:"0rem",marginBlock:"2rem"},children:[e.jsx("div",{className:"current__item__container",children:e.jsx("div",{className:"current__item__indicator"})}),e.jsxs("div",{className:"back__next__item",children:[e.jsx("div",{className:"back__next__item__arrow active",onClick:z,children:e.jsx(m,{icon:k,style:{fontSize:"1rem"}})}),e.jsx("div",{className:"back__next__item__arrow",onClick:b,children:e.jsx(m,{icon:y,style:{fontSize:"1rem"}})})]})]})]})},de=({name:t,specialty:r,image:n,isDefault:o,memberHeight:a,gap:d,index:g})=>{function l(p){return p*Math.PI/180}const u=(p=>{const _=l(p);return{cos:Math.cos(_),sin:Math.sin(_)}})(-45);return e.jsxs("div",{className:"team__item",style:{flex:"0 0 auto",height:a,marginBottom:d},children:[e.jsxs("div",{className:"team__item__image",children:[e.jsx("img",{loading:"lazy",src:n,alt:t,className:`${o?"default":null}`}),e.jsx("div",{style:{"--cos":u.cos,"--sin":u.sin,cursor:"pointer"},className:"team__member__arrow",onClick:()=>{window.localStorage.setItem("doctorIndex",g-1),location.href="/apropos#apropos__doctor__team"},children:e.jsx(m,{icon:y,style:{fontSize:"1rem",transform:"rotate(-45deg)"}})})]}),e.jsx("h2",{children:t}),e.jsx("h3",{children:r})]})};export{je as default};
