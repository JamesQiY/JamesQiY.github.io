(this.webpackJsonpwind=this.webpackJsonpwind||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"bot":{"name":"Wargroove Damage Discord Bot","date":"2021","link":"https://github.com/JamesQiY/calcBot","tech":["Node.js","Discord API","Heroku"],"desc":"A Discord bot that parases and calculates user input for the game Wargroove. Hosted on a third-party cloud service, deployed in the official Wargroove discord. Features custom string parser for maximum convenience for the user. Twitch chat integration for personal account."},"ai":{"name":"Natural Language Predictor","date":"2021","link":"https://github.com/JamesQiY/Tagger","tech":["Python","Machine Learning"],"desc":"Part-Of-Speech (POS) tagging training and prediction. A Hidden Markov Model is created with a generated probability table. The tables uses given words that are associated with a part-of-speech tag to create the necessary components of the model. "},"site":{"name":"Personal Website","date":"2021","link":"https://jamesqiy.github.io/","tech":["React","Tailwind CSS","Three.js"],"desc":"This website right here! Next improvement for the site is to add resposive elements for medium and small screens"},"image":{"name":"PGM Image Processor","date":"2020","link":"https://github.com/JamesQiY/PGM-proc","tech":["C","Python"],"desc":"An image processor that implements pThreads to apply various Laplace filters to the given PGM image for sharpening images. Different methods of execution was explored (eg. sharded-rows, work-queue). Done as an assignment for CSC367 (Parallel Programming)"}}')},27:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var a=r(6),s=r(22),i=r.n(s),n=(r(27),r(11)),o=r(16),c=r(13),d=r(15),l=r(5),h="2rem",m=function(e){var t=e.icon,r=e.text,a=void 0===r?"tooltip":r;return Object(l.jsxs)("div",{className:"sidebar_icon group",children:[t,Object(l.jsx)("span",{className:"sidebar_text group-hover:scale-100 group-active:scale-100",children:a})]})},j=function(e){var t=e.link,r=void 0===t?"":t,a=e.icon,s=e.text,i=void 0===s?"tooltip":s,n=e.download,c=void 0!==n&&n;return Object(l.jsx)("a",Object(o.a)(Object(o.a)({href:r},c),{},{children:Object(l.jsx)(m,{icon:a,text:i})}))},u=function(e){var t=e.darkTheme,r=e.setDarkTheme;return Object(l.jsx)("div",{onClick:function(){return r(!t)},children:t?Object(l.jsx)(m,{icon:Object(l.jsx)(c.k,{size:h}),text:"Light mode"}):Object(l.jsx)(m,{icon:Object(l.jsx)(c.i,{size:h}),text:"Dark mode"})})},x=function(e){var t=e.darkTheme,r=e.setDarkTheme;return Object(l.jsxs)("div",{className:"top-0 left-0 w-16 h-full m-0 pt-4 flex flex-col flex-none bg-white dark:bg-gray-700 text-white shadow-lg",children:[Object(l.jsx)(d.b,{to:"/",children:Object(l.jsx)(m,{icon:Object(l.jsx)(c.f,{size:h}),text:"Home"})}),Object(l.jsx)(d.b,{to:"/projects",children:Object(l.jsx)(m,{icon:Object(l.jsx)(c.a,{size:h}),text:"Projects"})}),Object(l.jsx)(j,{link:"https://github.com/JamesQiY",icon:Object(l.jsx)(c.e,{size:h}),text:"Github"}),Object(l.jsx)(j,{link:"/RESUME_JAMES_YANG.pdf",icon:Object(l.jsx)(c.c,{size:h}),text:"Resume",download:!0}),Object(l.jsx)(j,{link:"https://www.instagram.com/reddishjam/",icon:Object(l.jsx)(c.g,{size:h}),text:"Instagram"}),Object(l.jsx)(u,{darkTheme:t,setDarkTheme:r})]})},b=r(7),p=function(){return Object(l.jsx)("span",{className:"header",children:"James Yang"})},f=function(){return Object(l.jsx)("div",{className:"flex-1 overflow-auto",children:Object(l.jsx)("div",{className:"flex flex-1 justify-center",children:Object(l.jsxs)("div",{className:"flex flex-col flex-1 my-4 mx-2 max-w-lg items-center bg-truegray-300 bg-opacity-50 dark:bg-gray-400 dark:bg-opacity-25 rounded-3xl z-10 shadow-md",children:[Object(l.jsx)(p,{className:"bg-transparent"}),Object(l.jsx)("div",{className:"p-5 mt-5 text-center dark:text-white",children:" Recent Graduate ( Developer / Amateur Artist )"}),Object(l.jsx)("img",{className:"flex items-center justify-center m-5 \r border-2 border-red-400 rounded-full \r w-sm sm:min-w-lg xl:min-w-3xl h-auto",src:"/profile_pic.png",alt:"pic of me :)"}),Object(l.jsxs)("div",{className:"p-5 text-center dark:text-white max-w-lg px-auto",children:["My name is Qi Hang Yang but I can also be called James.",Object(l.jsx)("br",{}),"I am a recent graduate from University of Toronto under the Software Engineering Stream. I'm always trying to learn new ideas and expand my knowledge. Outside of coding, I'm passionate about the world of board games and concept art "]})]})})})},g=r(17),w=function(e){var t=e.icon,r=e.project,a=void 0===r?{name:"",tech:[],desc:""}:r;return Object(l.jsxs)("div",{className:"m-2 mb-2 pt-1 max-w-lg min-w-400 sm:min-w-400 lg:min-w-1/4 \r flex flex-one flex-col items-center justify-center rounded-3xl \r bg-gray-100 dark:bg-truegray-700 shadow-md",children:[Object(l.jsx)("div",{className:"flex flex-col items-center justify-center",children:Object(l.jsxs)("a",{className:"mt-5 mb-5 rounded-full h-16 w-16 \r flex items-center justify-center \r bg-red-300  bg-opacity-100 cursor-pointer\r transition-transform hover:bg-red-400 hover:shadow-md \r group transform hover:-translate-y-1 hover:scale-150 ",href:a.link,children:[t,Object(l.jsx)("div",{className:"absolute align-bottom px-5 py-1 \r text-white bg-gray-700 rounded-lg text-sm\r transition-all scale-0 duration-100 origin-top \r group-hover:translate-y-12 group-hover:scale-100  group-active:scale-100",children:"Link"})]})}),Object(l.jsx)("h2",{className:"mb-1 text-center align-middle justify-center dark:text-white text-xl font-bold",children:a.name}),Object(l.jsx)("span",{className:"m-1 text-center dark:text-white text-md",children:a.date}),Object(l.jsx)(v,{tech:a.tech}),Object(l.jsx)("span",{className:"m-2 p-2 px-auto dark:text-white",children:a.desc}),Object(l.jsx)("a",{className:"flex flex-grow flex-1 \r w-full px-4 py-1 text-black justify-center bg-red-300 rounded-b-3xl ",href:a.link,children:"Link to Project"})]})},v=function(e){var t=e.tech,r=void 0===t?[]:t;return Object(l.jsx)("div",{className:"flex flex-row",children:r.map((function(e){return Object(l.jsx)("div",{className:"\r m-1.5 px-2 py-1 rounded-full \r text-xs\r flex text-center items-center justify-center\r text-white dark:text-black bg-gray-700 dark:bg-gray-100",children:e},e)}))})},O=function(){return Object(l.jsxs)("div",{className:"flex flex-row flex-grow flex-wrap max-h-full items-center justify-center overflow-auto",children:[Object(l.jsx)(w,{icon:Object(l.jsx)(c.b,{size:"3em"}),project:g.bot}),Object(l.jsx)(w,{icon:Object(l.jsx)(c.d,{size:"3em"}),project:g.image}),Object(l.jsx)(w,{icon:Object(l.jsx)(c.h,{size:"3em"}),project:g.ai}),Object(l.jsx)(w,{icon:Object(l.jsx)(c.j,{size:"3em"}),project:g.site})]})},k=r(0),y=r(1),N=r(9),z=r(2),T=r(3),G=r(14),B=function(e){Object(z.a)(r,e);var t=Object(T.a)(r);function r(e){var a;return Object(k.a)(this,r),(a=t.call(this,e)).state={dark:e.darkTheme,statex:a.props.width,statey:a.props.height},a.listeners={},a.starBG={},a.handleResize=a.handleResize.bind(Object(N.a)(a)),a.startAnimation=a.startAnimation.bind(Object(N.a)(a)),a}return Object(y.a)(r,[{key:"handleResize",value:function(){this.x=this.props.width,this.y=this.props.height}},{key:"componentDidUpdate",value:function(){this.starBG.renderer.setSize(this.props.width,this.props.height),this.starBG.camera.aspect=this.props.width/this.props.height,this.starBG.camera.updateProjectionMatrix()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.background_init(),this.listeners=this.startAnimation()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize);try{window.removeEventListener("mousemove",this.listeners)}catch(e){console.log(e)}}},{key:"render",value:function(){return Object(l.jsx)("canvas",{id:"bg",className:"absolute p-0 m-0 -z-10 opacity-90 overflow-hidden",width:this.props.width,height:this.props.height})}},{key:"background_init",value:function(){var e=this.state.dark?2171169:16777215,t=new G.i,r=document.querySelector("canvas"),a=this.x,s=this.y,i=new G.e(75,a/s,.1,100);i.position.x=0,i.position.y=0,i.position.z=2,t.add(i);var n=new G.j({canvas:r});n.setSize(a,s),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(e);var o=new G.f(16777215,.1,100);o.position.set(50,50,50),t.add(o);for(var c=new G.a,d=[],l=[],h=new G.c,m=0;m<6e3;m++){var j=8*(Math.random()-.5),u=8*(Math.random()-.5),x=8*(Math.random()-.5),b=Math.random(),p=Math.random()*j,f=Math.random();h.setRGB(b,p,f),d.push(j,u,x),l.push(h.r,h.g,h.b)}c.setAttribute("position",new G.d(d,3)),c.setAttribute("color",new G.d(l,3)),c.computeBoundingSphere();var g=new G.h({vertexColors:!0,size:.0075}),w=new G.g(c,g);t.add(w),this.starBG.mesh=w,this.starBG.renderer=n,this.starBG.scene=t,this.starBG.camera=i}},{key:"startAnimation",value:function(){var e=this,t=this.starBG.renderer,r=0,a=0,s=document.addEventListener("mousemove",(function(e){r=e.clientX,a=e.clientY}));var i=new G.b;return function s(){e.starBG.mesh.rotation.y=.3*i.getElapsedTime(),e.starBG.mesh.rotation.x=.3*i.getElapsedTime(),r>0&&(e.starBG.mesh.rotation.x+=.01*r*.075,e.starBG.mesh.rotation.y+=.01*a*.075),t.render(e.starBG.scene,e.starBG.camera),window.requestAnimationFrame(s)}(),s}}]),r}(a.Component),S=function(e){var t=e.darkTheme;return Object(l.jsxs)(b.c,{children:[" ",Object(l.jsx)(b.a,{exact:!0,path:"/",element:Object(l.jsx)(f,{darkTheme:t},t)}),Object(l.jsx)(b.a,{exact:!0,path:"/projects",element:Object(l.jsx)(O,{darkTheme:t},t)}),Object(l.jsx)(b.a,{element:Object(l.jsx)(B,{darkTheme:t},t)})]})},M=function(){var e=function(e,t){var r=Object(a.useState)((function(){var r=window.localStorage.getItem(e);return r?JSON.parse(r):t})),s=Object(n.a)(r,2),i=s[0],o=s[1];return[i,function(t){o(t),window.localStorage.setItem(e,JSON.stringify(t))}]}("dark-theme",!0),t=Object(n.a)(e,2),r=t[0],s=t[1];return Object(a.useEffect)((function(){var e="dark",t=window.document.body.classList;r?t.add(e):t.remove(e)}),[r]),[r,s]};var P=function(){var e=M(),t=Object(n.a)(e,2),r=t[0],s=t[1],i=Object(a.useRef)(),o=Object(a.useState)({width:0,height:0}),c=Object(n.a)(o,2),d=c[0],h=c[1];return Object(a.useEffect)((function(){function e(){i.current&&h({width:i.current.scrollWidth,height:i.current.scrollHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[r]),Object(l.jsxs)("div",{className:"h-full flex flex-row",id:"app",ref:i,children:[Object(l.jsx)(B,{darkTheme:r,width:d.width,height:d.height},r),Object(l.jsx)(x,{darkTheme:r,setDarkTheme:s}),Object(l.jsx)(S,{})]})};i.a.render(Object(l.jsx)(d.a,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.cae1ee51.chunk.js.map