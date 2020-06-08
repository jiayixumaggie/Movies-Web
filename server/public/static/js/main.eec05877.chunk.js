(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{50:function(e,t,a){e.exports=a(84)},55:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=(a(55),a(4)),i=a(45),u=(a(58),i.initializeApp({apiKey:"AIzaSyAuC8npowkshVai9yChdt81YJuajagKVEs",authDomain:"final-project-94ce2.firebaseapp.com",databaseURL:"https://final-project-94ce2.firebaseio.com",projectId:"final-project-94ce2",storageBucket:"final-project-94ce2.appspot.com",messagingSenderId:"701041941591"})),m=r.a.createContext(),s=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(!0),d=Object(l.a)(s,2),v=d[0],p=d[1];return Object(n.useEffect)((function(){u.auth().onAuthStateChanged((function(e){i(e),setTimeout((function(){p(!1)}),2e3)}))}),[]),v?r.a.createElement("h1",{style:{color:"DodgerBlue",textAlign:"center",marginTop:"21%"}},"Loading..."):r.a.createElement(m.Provider,{value:{currentUser:o}},t)},d=a(7),v=a.n(d),p=a(102),g=a(109),h=a(106),f=a(104),E=a(107),b=a(105),j=a(13),O=a.n(j),w=Object(p.a)({root:{width:280,backgroundColor:"grey",marginRight:"40px",marginBottom:"40px",height:380},media:{height:300,width:300},text:{fontSize:20,textAlign:"center"}}),k=function(e){var t=e.movieInfo,a=e.callback,c=w(),o=Object(n.useState)(0),i=Object(l.a)(o,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){v.a.get("http://localhost:8080/movies/rating/"+t.Movie_name).then((function(e){console.log(e.data.number),m(e.data.number)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"card"},r.a.createElement(g.a,{className:c.root},r.a.createElement(h.a,{onClick:function(){a(!1,t,u)}},r.a.createElement(f.a,{className:c.media,image:t.Poster_URL}),r.a.createElement(b.a,{className:c.text},t.Movie_name.replace(/_/g," "))),r.a.createElement(E.a,{className:c.rating,name:"customized-empty",value:u,precision:.5,emptyIcon:r.a.createElement(O.a,{fontSize:"inherit"})})))},y=function(e){var t=e.callback,a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){v.a.get("http://localhost:8080/movies").then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Movie"},o.map((function(e,a){return r.a.createElement(k,{movieInfo:e,callback:t,key:a})})))},C=a(6),S=function(){var e=Object(n.useState)({Movie_name:"",Director:"",Poster_URL:"",Genre:"",Trailer_URL:"",Comment:[],Intro:""}),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{id:"dropdown-container"},r.a.createElement("form",{type:"submit",className:"moviecontent"},r.a.createElement("input",{id:"moviename",placeholder:"Movie Name",value:a.Movie_name,onChange:function(e){var t=e.target.value;t=(t=t.replace(/ /g,"_")).toUpperCase(),c(Object(C.a)({},a,{Movie_name:t}))}}),r.a.createElement("input",{id:"director_name",placeholder:"Director",value:a.Director,onChange:function(e){var t=e.target.value;t=(t=t.replace(/ /g,"_")).toUpperCase(),c(Object(C.a)({},a,{Director:t}))}}),r.a.createElement("input",{id:"poster_URL",placeholder:"Poster URL",value:a.Poster_URL,onChange:function(e){return c(Object(C.a)({},a,{Poster_URL:e.target.value}))}}),r.a.createElement("input",{id:"Genre",placeholder:"Genre",value:a.Genre,onChange:function(e){return c(Object(C.a)({},a,{Genre:e.target.value.toUpperCase()}))}}),r.a.createElement("input",{id:"trailer_URL",placeholder:"Trailer URL",value:a.Trailer_URL,onChange:function(e){var t=e.target.value;t=t.replace("watch?v=","embed/"),c(Object(C.a)({},a,{Trailer_URL:t}))}}),r.a.createElement("textarea",{placeholder:"Add Introduction",id:"comment",onChange:function(e){return c(Object(C.a)({},a,{Intro:e.target.value}))}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),v.a.get("http://localhost:8080/movies/name/"+a.Movie_name).then((function(e){console.log(e.data),"no result"!==e.data?alert("This Movie has already been added by others"):v.a.post("/movies",a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}},"Submit")))},_=function(e){var t=e.callback,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)([]),m=Object(l.a)(u,2),s=m[0],d=m[1],p=Object(n.useState)(""),g=Object(l.a)(p,2),h=g[0],f=g[1];return r.a.createElement("div",{id:"search"},r.a.createElement("div",{id:"uppersearch"},r.a.createElement("h1",null,"Movie search!"),r.a.createElement("div",{id:"radiobutton"},r.a.createElement("input",{type:"radio",id:"movieName",name:"select",for:"movieName",value:"movieName"}),r.a.createElement("label",null,"Movie name"),r.a.createElement("input",{type:"radio",id:"genre",name:"select",for:"genre",value:"genre"}),r.a.createElement("label",null,"Genre"),r.a.createElement("input",{type:"radio",id:"director",name:"select",for:"director",value:"director"}),r.a.createElement("label",null,"Director")),r.a.createElement("form",{type:"submit",className:"moviecontent1"},r.a.createElement("input",{placeholder:"",value:o,onChange:function(e){return i(e.target.value.replace(/ /g,"_").toUpperCase())}}),r.a.createElement("button",{onClick:function(e){var t;if(e.preventDefault(),document.getElementById("movieName").checked)t=document.getElementById("movieName").value;else if(document.getElementById("genre").checked)t=document.getElementById("genre").value;else{if(!(t=document.getElementById("director").checked))return void f("You need to select one in order to search");t=document.getElementById("director").value}"movieName"===t?v.a.get("http://localhost:8080/movies/name/"+o).then((function(e){d(e.data),console.log(e.data)})).catch((function(e){console.log(e)})):"genre"===t?v.a.get("http://localhost:8080/movies/genre/"+o).then((function(e){d(e.data),console.log(e.data)})).catch((function(e){console.log(e)})):v.a.get("http://localhost:8080/movies/director/"+o).then((function(e){d(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}},r.a.createElement("i",{className:"fa fa-search"})))),r.a.createElement("div",{id:"searchresult"},h.length>0?r.a.createElement("h1",null,h):"no result"===s?r.a.createElement("h1",null,"Result not found"):s.length>0?s.map((function(e){return r.a.createElement(k,{movieInfo:e,callback:t})})):""))};function N(e){var t,a=e.callback,c=Object(n.useState)({itempage:"moviepage"}),o=Object(l.a)(c,2),i=o[0],u=o[1];t="moviepage"===i.itempage?r.a.createElement(y,{callback:a}):"addmovie"===i.itempage?r.a.createElement(S,null):r.a.createElement(_,{callback:a});return r.a.createElement("div",{className:"menumovie"},r.a.createElement("div",{className:"menutext"},r.a.createElement("button",{className:"addmovie",onClick:function(){u({itempage:"addmovie"})}},r.a.createElement("h1",null,"Add a movie")),r.a.createElement("button",{className:"addmovie",onClick:function(){u({itempage:"moviepage"})}},r.a.createElement("h1",null,"Movie List")),r.a.createElement("button",{className:"addmovie",onClick:function(){u({itempage:"moviesearch"})}},r.a.createElement("h1",null,"Search a movie"))),r.a.createElement("div",{className:"Movie"},t))}var x=Object(p.a)({rating:{marginBottom:"1px"}}),I=function(e){var t=e.name,a=e.review,n=e.rating,c=x();return r.a.createElement("div",{id:"reviewcard"},r.a.createElement("div",{id:"userName"},r.a.createElement("h1",null,t)),r.a.createElement(E.a,{id:"rating",className:c.rating,name:"customized-empty",defaultValue:n,precision:.5,emptyIcon:r.a.createElement(O.a,{fontSize:"inherit"})}),r.a.createElement("div",{id:"userreview"},r.a.createElement("h2",null,a)))},U=Object(p.a)({rating:{marginBottom:"1px"}}),L=function(e){var t=e.movie_info,a=e.callback,c=e.rate_val;console.log(c);var o=U(),i=Object(n.useState)(!1),u=Object(l.a)(i,2),s=u[0],d=u[1],p=Object(n.useState)(!1),g=Object(l.a)(p,2),h=g[0],f=g[1],b=Object(n.useState)([]),j=Object(l.a)(b,2),w=j[0],k=j[1],y=Object(n.useState)({rating:0,name:"",review:""}),S=Object(l.a)(y,2),_=S[0],N=S[1],x=Object(n.useContext)(m).currentUser;Object(n.useEffect)((function(){v.a.get("http://localhost:8080/userName/"+x.email).then((function(e){N(Object(C.a)({},_,{name:e.data})),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);return r.a.createElement("div",null,s?r.a.createElement("div",{id:"lightbox"},r.a.createElement("button",{className:"closebutton",onClick:function(){d(!1)}}," ","X"," "),r.a.createElement("iframe",{title:"movie tralier",width:"640",height:"400",src:t.Trailer_URL,frameborder:"0",allowfullscreen:""})):h?r.a.createElement("div",{id:"review"},r.a.createElement("div",{id:"upperpart"},r.a.createElement("button",{id:"back_button",onClick:function(){f(!1)}},"Back"),r.a.createElement("textarea",{placeholder:"Add Review here",id:"comment",onChange:function(e){return N(Object(C.a)({},_,{review:e.target.value}))}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("h1",{style:{color:"DodgerBlue"}},"Add a Rating"),r.a.createElement("div",{style:{marginTop:"20px",marginLeft:"10px"}},r.a.createElement(E.a,{className:o.rating,name:"customized-empty",defaultValue:0,precision:.5,onChange:function(e){return N(Object(C.a)({},_,{rating:Number(e.target.value)}))},emptyIcon:r.a.createElement(O.a,{fontSize:"inherit"})}))),r.a.createElement("button",{id:"add_review_button",onClick:function(e){e.preventDefault(),v.a.put("http://localhost:8080/movies/updateComment/"+t.Movie_name,_).then((function(e){console.log(e),v.a.get("http://localhost:8080/movies/comment/"+t.Movie_name).then((function(e){k(e.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}},"Share Review")),r.a.createElement("div",{id:"reviewarea"},w.map((function(e){return r.a.createElement(I,{name:e.name,review:e.review,rating:e.rating})})))):r.a.createElement("div",{id:"back"},r.a.createElement("button",{id:"backbutton",onClick:function(){a(!0)}}," ","Back"," "),r.a.createElement("div",{id:"rating_review"},r.a.createElement("div",null,r.a.createElement("img",{id:"image",alt:"poster",src:t.Poster_URL,width:"280",height:"450"})),r.a.createElement("div",{id:"intro"},r.a.createElement("h1",null,t.Movie_name.replace(/_/g," ")),r.a.createElement("h2",null," Director: ",t.Director.replace(/_/g," ")),r.a.createElement("h2",null,t.Genre," "),r.a.createElement(E.a,{id:"rating",className:o.rating,name:"customized-empty",value:c,precision:.5,emptyIcon:r.a.createElement(O.a,{fontSize:"inherit"})}),r.a.createElement("h2",null,t.Intro),r.a.createElement("div",{id:"review_trailer"},r.a.createElement("button",{className:"btn",onClick:function(){d(!0)}},"Watch Trailer ",r.a.createElement("i",{class:"fa fa-play"})),r.a.createElement("button",{className:"btn",onClick:function(e){f(!0),e.preventDefault(),v.a.get("http://localhost:8080/movies/comment/"+t.Movie_name).then((function(e){k(e.data)})).catch((function(e){console.log(e)}))}}," ","See Review ",r.a.createElement("i",{className:"fa fa-book"})))))))},R=a(19),M=a.n(R),B=a(24),D=function(e){var t=e.toLogin,a=Object(n.useState)({email:"",password:""}),c=Object(l.a)(a,2),o=c[0],i=c[1],m=Object(n.useState)({uid:"",username:""}),s=Object(l.a)(m,2),d=s[0],p=s[1],g=function(){var e=Object(B.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.auth().createUserWithEmailAndPassword(o.email,o.password).then((function(e){v.a.post("http://localhost:8080/userName",d).then((function(e){console(e)})).catch((function(e){console.log(e)}))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert("Error: The email address is already in use. Please use the log in button");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"signup"},r.a.createElement("h1",{style:{color:"DodgerBlue",textAlign:"center",marginBottom:"20px"}},"Sign up"),r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{name:"email",placeholder:"Email",value:o.email,onChange:function(e){i(Object(C.a)({},o,{email:e.target.value})),p(Object(C.a)({},d,{uid:e.target.value}))}}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:o.password,id:"myInput",onChange:function(e){return i(Object(C.a)({},o,{password:e.target.value}))}}),r.a.createElement("input",{name:"username",placeholder:"Username",value:d.username,onChange:function(e){return p(Object(C.a)({},d,{username:e.target.value}))}}),r.a.createElement("button",null,"Sign up")),r.a.createElement("button",{onClick:t},"Log in"))},P=function(e){var t=e.toSignup,a=Object(n.useState)({email:"",password:""}),c=Object(l.a)(a,2),o=c[0],i=c[1],m=function(){var e=Object(B.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.auth().signInWithEmailAndPassword(o.email,o.password);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"signup"},r.a.createElement("h1",{style:{color:"DodgerBlue",textAlign:"center",marginBottom:"20px"}},"Log in"),r.a.createElement("form",{onSubmit:m},r.a.createElement("input",{name:"email",placeholder:"Email",value:o.email,onChange:function(e){return i(Object(C.a)({},o,{email:e.target.value}))}}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:o.password,onChange:function(e){return i(Object(C.a)({},o,{password:e.target.value}))}}),r.a.createElement("button",null,"Log in")),r.a.createElement("button",{onClick:t},"Sign up"))},A=function(){var e=Object(n.useState)("login"),t=Object(l.a)(e,2),a=t[0],c=t[1];return"login"===a?r.a.createElement(P,{toSignup:function(){return c("signup")}}):r.a.createElement(D,{toLogin:function(){return c("login")}})};function z(){var e=Object(n.useState)({Page:!0,Info:"",rating:0}),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"MovieMenu"},r.a.createElement("h1",null,"Movie Recommendation"),r.a.createElement("button",{onClick:function(){u.auth().signOut()}},r.a.createElement("i",{className:"fa fa-user",style:{color:"black",marginRight:"10px"}}),"Sign Out")),a.Page?r.a.createElement(N,{callback:function(e,t,a){return c({Page:e,Info:t,rating:a})}}):r.a.createElement(L,{movie_info:a.Info,rate_val:a.rating,callback:function(e){return c({Page:e})}}))}var T=function(){return null===Object(n.useContext)(m).currentUser?r.a.createElement(A,null):r.a.createElement(z,null)};var G=function(){return r.a.createElement(s,null,r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.eec05877.chunk.js.map