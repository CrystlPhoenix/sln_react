import{r as o,j as e,C as x}from"./index-C0NjFAOU.js";import{u as m}from"./use-in-view-DTovywoA.js";const i=({number:s,label:r,startCount:a})=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("div",{className:"text-white text-5xl lg:text-7xl font-bold flex items-center",children:[a?e.jsx(x,{end:s,duration:2}):0,e.jsx("span",{className:"text-2xl lg:text-4xl ml-1 mt-2",children:"+"})]}),e.jsx("div",{className:"text-white mt-2",children:r})]}),d=({style:s})=>e.jsx("div",{className:"absolute rounded-full bg-white",style:s}),h=()=>{const[s,r]=o.useState([]),a=o.useRef(null),n=m(a,{once:!0,margin:"-100px"});return o.useEffect(()=>{(()=>{const c=[];for(let l=0;l<50;l++)c.push({id:l,size:Math.random()*6+2,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDuration:`${Math.random()*2+2}s`,animationDelay:`${Math.random()}s`,opacity:Math.random()*.5+.4});r(c)})()},[]),e.jsxs("div",{ref:a,className:"w-screen -mx-[calc((100vw-100%)/2)] bg-blue-800 flex items-center justify-center relative overflow-hidden py-20",children:[s.map(t=>e.jsx(d,{style:{width:`${t.size}px`,height:`${t.size}px`,left:t.left,top:t.top,opacity:t.opacity,animation:`float ${t.animationDuration} ease-in-out infinite`,animationDelay:t.animationDelay}},t.id)),e.jsxs("div",{className:"px-4 z-10 relative",children:[e.jsx("h2",{className:"text-2xl font-bold text-white text-center mb-5",children:"Trusted for Reliable Electrical and Power Engineering Solutions"}),e.jsx("p",{className:"text-white text-center mb-16 text-sm",children:"Delivering dependable engineering services that keep your systems running safely and efficiently."}),e.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-10 text-center",children:[e.jsx(i,{number:100,label:"Satisfied Clients",startCount:n}),e.jsx(i,{number:200,label:"Successful Referrals",startCount:n}),e.jsx(i,{number:50,label:"Partnered Businesses",startCount:n}),e.jsx(i,{number:5,label:"Years of Experience",startCount:n})]})]}),e.jsx("style",{children:`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-70px) scale(1.3);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `})]})};export{h as S};
