(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{12:function(e,s,c){},15:function(e,s,c){},17:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(6),i=c.n(a),n=(c(12),c(2)),l=c(4),r=c(7),j=c.n(r),d=(c(15),c(0)),o=function(e){if(e.data)var s=e.data.name,c=e.data.occupation,t=e.data.description,a=e.data.address.city,i=e.data.social.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})},e.name)}));return Object(d.jsxs)("header",{id:"home",children:[Object(d.jsxs)("nav",{id:"nav-wrap",children:[Object(d.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(d.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(d.jsxs)("ul",{id:"nav",className:"nav",children:[Object(d.jsx)("li",{className:"current",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(d.jsx)("div",{className:"row banner",children:Object(d.jsxs)("div",{className:"banner-text",children:[Object(d.jsxs)("h1",{className:"responsive-headline",children:["I'm ",s,"."]}),Object(d.jsxs)("h3",{children:["I'm a ",a," based ",Object(d.jsx)("span",{children:c}),". ",t,"."]}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"social",children:i})]})}),Object(d.jsx)("p",{className:"scrolldown",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(d.jsx)("i",{className:"icon-down-circle"})})})]})},b=function(e){if(e.data)var s=e.data.social.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})},e.name)}));return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("ul",{className:"social-links",children:s}),Object(d.jsxs)("ul",{className:"copyright",children:[Object(d.jsx)("li",{children:"\xa9 Copyright 2021 Rinshin Jalal"}),Object(d.jsxs)("li",{children:["Design by ",Object(d.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(d.jsx)("div",{id:"go-top",children:Object(d.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(d.jsx)("i",{className:"icon-up-open"})})})]})})},h=function(e){if(e.data){var s=e.data.name,c="images/"+e.data.image,t=e.data.bio,a=e.data.address.street,i=e.data.address.city,n=e.data.address.state,l=e.data.address.zip,r=e.data.email;e.data.resumedownload}return Object(d.jsx)("section",{id:"about",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"three columns",children:Object(d.jsx)("img",{className:"profile-pic",src:c,alt:"Tim Baker Profile Pic"})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:t}),Object(d.jsx)("div",{className:"row_",children:Object(d.jsxs)("div",{className:"columns contact-details",children:[Object(d.jsx)("h2",{children:"Contact Details"}),Object(d.jsxs)("p",{className:"address",children:[Object(d.jsx)("span",{children:s}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:[a,Object(d.jsx)("br",{}),i," ",n,", ",l]}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:r})]})]})})]})]})})},m=function(e){if(e.data)var s=e.data.skillmessage,c=e.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{style:{width:e.level},className:s}),Object(d.jsx)("em",{children:e.name})]},e.name)}));return Object(d.jsx)("section",{id:"resume",children:Object(d.jsxs)("div",{className:"row skill",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Skills"})})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("p",{children:s}),Object(d.jsx)("div",{className:"bars",children:Object(d.jsx)("ul",{className:"skills",children:c})})]})]})})},O=function(e){var s=Object(t.useState)(""),c=Object(n.a)(s,2),a=c[0],i=c[1],l=Object(t.useState)(""),r=Object(n.a)(l,2),j=r[0],o=r[1],b=Object(t.useState)(""),h=Object(n.a)(b,2),m=h[0],O=h[1],x=Object(t.useState)(""),u=Object(n.a)(x,2),p=u[0],v=u[1];if(e.data)var f=e.data.name,N=e.data.address.street,g=e.data.address.city,w=e.data.address.state,y=e.data.address.zip,S=(e.data.email,e.data.contactmessage);return Object(d.jsxs)("section",{id:"contact",children:[Object(d.jsxs)("div",{className:"row section-head",children:[Object(d.jsx)("div",{className:"two columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Get In Touch."})})}),Object(d.jsx)("div",{className:"ten columns",children:Object(d.jsx)("p",{className:"lead",children:S})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"eight columns",children:[Object(d.jsx)("form",{action:"",onSubmit:function(e){return function(e){e.preventDefault();var s={service_id:"service_873mqul",template_id:"template_z23oeyz",user_id:"user_8N2E0cVovnFxrrqHna2w9",template_params:{from_name:a,email:j,message:m,subject:p}};$.ajax("https://api.emailjs.com/api/v1.0/email/send",{type:"POST",data:JSON.stringify(s),contentType:"application/json"}).done((function(){console.log("Your mail is sent!"),i(""),o(""),v(""),O("")})).fail((function(e){console.log("Oops... "+JSON.stringify(e))}))}(e)},method:"post",id:"contactingForm",name:"contactingForm",children:Object(d.jsxs)("fieldset",{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("input",{type:"text",value:a,size:"35",id:"contactName",name:"contactName",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("input",{type:"text",value:j,size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(d.jsx)("input",{type:"text",value:p,size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return v(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",value:m,name:"contactMessage",onChange:function(e){return O(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"submited",children:"Submit"}),Object(d.jsx)("span",{id:"image-loader",children:Object(d.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(d.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(d.jsxs)("div",{id:"message-success",children:[Object(d.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(d.jsx)("br",{})]})]}),Object(d.jsx)("aside",{className:"four columns footer-widgets",children:Object(d.jsxs)("div",{className:"widget widget_contact",children:[Object(d.jsx)("h4",{children:"Address and Phone"}),Object(d.jsxs)("p",{className:"address",children:[f,Object(d.jsx)("br",{}),N," ",Object(d.jsx)("br",{}),g,", ",w," ",y,Object(d.jsx)("br",{})]})]})})]})]})},x=function(e){if(e.data)var s=e.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(d.jsx)("div",{className:"columns portfolio-item",children:Object(d.jsx)("div",{className:"item-wrap",children:Object(d.jsxs)("a",{href:e.url,title:e.title,children:[Object(d.jsx)("img",{alt:e.title,src:s}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"portfolio-item-meta",children:[Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("p",{children:e.category})]})}),Object(d.jsx)("div",{className:"link-icon",children:Object(d.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(d.jsx)("section",{id:"portfolio",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"twelve columns collapsed",children:[Object(d.jsx)("h1",{children:"Check Out Some of My Works."}),Object(d.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:s})]})})})},u=function(){var e=Object(t.useState)({}),s=Object(n.a)(e,2),c=s[0],a=s[1],i=Object(t.useState)("bar"),r=Object(n.a)(i,2);r[0],r[1];return l.a.initialize("UA-110570651-1"),l.a.pageview(window.location.pathname),Object(t.useEffect)((function(){!function(){j.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){a(e)}.bind(this),error:function(e,s,c){console.log(c),alert(c)}})}()})),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o,{data:c.main}),Object(d.jsx)(h,{data:c.main}),Object(d.jsx)(m,{data:c.resume}),Object(d.jsx)(x,{data:c.portfolio}),Object(d.jsx)(O,{data:c.main}),Object(d.jsx)(b,{data:c.main})]})};i.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.848a22c6.chunk.js.map