(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),r=n(7),c=n.n(r);n(17);const o=e=>{let{person:t}=e;return l.a.createElement("div",null,l.a.createElement("li",null,t.name," ",t.number))};var u=n(24);const m="/api/persons",s=()=>{const[e,t]=Object(a.useState)([]),[n,r]=Object(a.useState)(""),[c,s]=Object(a.useState)(""),[i,d]=Object(a.useState)(""),[h,g]=Object(a.useState)([]),[b,p]=Object(a.useState)(null);Object(a.useEffect)(()=>{u.a.get(m).then(e=>e.data).then(e=>{t(e)})},[]);const E=e=>{let{message:t}=e;if(null!==t)return l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{style:{backgroundColor:"grey",color:"green",fontSize:"large",padding:10,borderRadius:5}},t))},f=n=>{if(window.confirm("Are you sure you want to delete this entry?")){try{console.log("reached "),(e=>{return u.a.delete("".concat(m,"/").concat(e)).then(e=>e.data)})(n).catch(e=>alert("".concat(e))),t(e.filter(e=>e.id!==n))}catch(a){console.error("Error deleting entry:",a.message)}console.log("complete")}};return l.a.createElement("div",null,l.a.createElement("h2",null,"Phonebook"),l.a.createElement("form",null,"filter shown with ",l.a.createElement("input",{value:i,onChange:async t=>{await d(t.target.value);const n=await e.filter(e=>e.name.toLowerCase().includes(i.toLowerCase()));0===t.target.value.length?g([]):g(n)}})),h.map(e=>l.a.createElement(o,{key:e.number,person:e})),l.a.createElement(E,{message:b}),l.a.createElement("h2",null,"Add a New Number"),l.a.createElement("form",{onSubmit:a=>{a.preventDefault();const l={name:n,number:c};if(((t,n)=>e.some(e=>e[t]===n))("name",l.name)){let n=window.confirm("".concat(l.name," is already in the phonebook, want to update the number")),a=e.find(e=>e.name===l.name).id;n&&((e,t)=>u.a.put("".concat(m,"/").concat(e),t).then(e=>e.data))(a,{...l,number:c}).then(n=>{t(e.map(e=>e.id!==a?e:n)),p("updated ".concat(l.name)),setTimeout(()=>{p(null)},2e3)}).catch(n=>{p("".concat(l.name," has been deleted")),t(e.filter(e=>e.id!==a)),setTimeout(()=>{p(null)},2e3)})}else(e=>u.a.post(m,e).then(e=>e.data))(l).then(n=>{console.log(n),t(e.concat(n)),p("Added ".concat(l.name)),setTimeout(()=>{p(null)},5e3)}).catch(e=>alert("".concat(e)));r(""),s("")}},l.a.createElement("div",null,"Name: ",l.a.createElement("input",{value:n,onChange:e=>{r(e.target.value)}}),l.a.createElement("br",null),"Number: ",l.a.createElement("input",{value:c,onChange:e=>{s(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"Add"))),l.a.createElement("h2",null,"Numbers"),e.map(e=>l.a.createElement("div",{key:e.number,style:{display:"flex",alignItems:"center"}},l.a.createElement(o,{person:e}),l.a.createElement("button",{style:{marginLeft:"10px"},onClick:()=>f(e.id)}," delete"))))};var i=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:r,getTTFB:c}=t;n(e),a(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(s,null)),i()},8:function(e,t,n){e.exports=n(22)}},[[8,1,2]]]);
//# sourceMappingURL=main.0634c87e.chunk.js.map