(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],{15:function(e,t,a){e.exports={navItemsStyle:"header_navItemsStyle__1AMbv",langStyle:"header_langStyle__QUhsC",dropStyle:"header_dropStyle__1jLmI",navbarStyle:"header_navbarStyle__3iUwC",iconHeader:"header_iconHeader__JHm9M",navStyle:"header_navStyle__1Y_9D"}},26:function(e,t,a){e.exports={textStyle:"support_textStyle__19s6e"}},35:function(e,t,a){},36:function(e,t,a){},6:function(e,t,a){e.exports={inputWrapper:"main_inputWrapper__j-sd8",inputFileStyle:"main_inputFileStyle__3rIeW",inputFileIconWrapper:"main_inputFileIconWrapper__13iaw",inputFileButtonText:"main_inputFileButtonText__2GdEs",inputFileButton:"main_inputFileButton__3R7_Z",inputFileButtonDisable:"main_inputFileButtonDisable__3u0Tn",rowsButton:"main_rowsButton__wk0tP"}},73:function(e,t,a){"use strict";a.r(t);var n=a(1),s=(a(35),a.p,a(36),a(4)),r=a(9),c=a(13),i=a(16),l=a(5),o=a(6),u=a.n(o),d=a(21),b=a(30),j=a(2),p=function(e){var t,a=Object(n.useState)(e.currentDescription),s=Object(l.a)(a,2),r=s[0],c=s[1],o=Object(n.useState)(!0),p=Object(l.a)(o,2),m=p[0],g=p[1],O=Object(n.useState)(""),x=Object(l.a)(O,2),h=x[0],f=x[1],v=[],N=Object(n.useState)([]),y=Object(l.a)(N,2),w=y[0],F=y[1],_=Object(n.useState)(0),S=Object(l.a)(_,2),C=S[0],D=S[1],P=Object(n.useState)([]),I=Object(l.a)(P,2),E=I[0],k=I[1],B=Object(n.useState)(""),T=Object(l.a)(B,2),R=T[0],A=T[1],L=Object(n.useState)(""),M=Object(l.a)(L,2),W=M[0],H=M[1],G=Object(n.useState)(""),U=Object(l.a)(G,2),J=U[0],q=U[1];Object(n.useEffect)((function(){c(e.currentDescription)}),[e.currentDescription]);return Object(j.jsxs)("div",{className:"container-lg center",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-sm",children:[Object(j.jsx)("input",(t={onChange:function(e){var t=[];F([]),D(0),(v=e.target.files).length>0&&g(!1);for(var a=function(e){var a=new FileReader;a.readAsText(v[e]),a.onload=function(){for(var e=a.result.split("\r"),n=new Array,s=0;s<e.length;s++)""!==e[s].trim()&&(n.push(e[s].replace(/(\r\n|\n|\r)/gm,"")),D(C+=1)),console.log(a.load);t.push(n),F(t)},a.onerror=function(){console.log(a.result)}},n=0;n<v.length;n++)a(n)},name:"file",type:"file"},Object(i.a)(t,"name","file"),Object(i.a)(t,"id","inputFile"),Object(i.a)(t,"className",u.a.inputFileStyle),Object(i.a)(t,"multiple",!0),t)),Object(j.jsxs)("label",{htmlFor:"inputFile",className:u.a.inputFileButton,children:[Object(j.jsx)(d.c,{className:u.a.inputFileIconWrapper}),Object(j.jsx)("span",{className:u.a.inputFileButtonText,children:r.buttons.selectFiles})]})]}),Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsxs)("button",{disabled:m,onClick:function(){var e=[];console.log(w),console.log(C);for(var t=0;t<C;t++)for(var a=0;a<w.length;a++)void 0!==w[a][t]&&e.push(w[a][t]);k(e);var n=e.join("\n");f(n),console.log(n)},type:"submit",className:m?u.a.inputFileButtonDisable:u.a.inputFileButton,children:[Object(j.jsx)(d.b,{className:u.a.inputFileIconWrapper}),Object(j.jsx)("span",{children:r.buttons.loadFiles})]})}),Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsxs)("button",{disabled:m,onClick:function(){var e=[];console.log(w),console.log(C);for(var t=0;t<w.length;t++)for(var a=0;a<C;a++)void 0!==w[t][a]&&e.push(w[t][a]);e=e.sort((function(){return Math.random()-.5})),k(e);var n=e.join("\n");f(n),console.log(n)},type:"submit",className:m?u.a.inputFileButtonDisable:u.a.inputFileButton,children:[Object(j.jsx)(b.a,{className:u.a.inputFileIconWrapper}),Object(j.jsx)("span",{children:r.buttons.loadRandom})]})})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{children:r.form.rowsCount+C}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:r.form.textBefore}),Object(j.jsx)("input",{onChange:function(e){H(e.target.value)},value:W,type:"email",className:"form-control",id:"exampleFormControlInput1"}),Object(j.jsx)("label",{htmlFor:"exampleFormControlInput2",className:"form-label",children:r.form.textAfter}),Object(j.jsx)("input",{onChange:function(e){q(e.target.value)},value:J,type:"email",className:"form-control",id:"exampleFormControlInput2"}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:u.a.rowsButton,children:[Object(j.jsx)("button",{onClick:function(){for(var e=[],t=0;t<E.length;t++)e[t]=W+E[t]+J;console.log(e),f(e.join("\n"))},type:"button",className:"btn btn-outline-dark",children:r.buttons.add}),Object(j.jsx)("button",{onClick:function(){f(E.join("\n")),H(""),q("")},type:"button",className:"btn btn-outline-dark",children:r.buttons.reset})]})]}),Object(j.jsx)("label",{htmlFor:"exampleFormControlInput3",className:"form-label",children:r.form.nameResultFile}),Object(j.jsx)("input",{onChange:function(e){A(e.target.value)},type:"email",className:"form-control",id:"exampleFormControlInput3"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:r.form.result}),Object(j.jsx)("textarea",{onChange:function(e){f(e.target.value)},className:"form-control",value:h,id:"exampleFormControlTextarea1",rows:"7"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("button",{disabled:m,onClick:function(){!function(e,t){e=""===e?"result.txt":e+".txt";var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}(R,h)},type:"submit",className:m?u.a.inputFileButtonDisable:u.a.inputFileButton,children:[Object(j.jsx)(d.a,{className:u.a.inputFileIconWrapper}),Object(j.jsx)("span",{children:r.buttons.downloadFiles})]})]})},m=Object(r.c)(Object(c.b)((function(e){return{currentDescription:e.MainPage.currentDescription}}),{}),s.g)(p),g=a(15),O=a.n(g),x=a.p+"static/media/flag_rf_enl.1d0e560f.jpg",h=a.p+"static/media/flag_england1.d05ac026.jpg",f=a.p+"static/media/flag_ispanija_new.e44d2825.jpg",v=a(19),N=a(32),y=a(12),w=function(e){var t=Object(n.useState)(e.currentDescription),a=Object(l.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){r(e.currentDescription)}),[e.currentDescription]),Object(j.jsx)("div",{className:O.a.navbarStyle,children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-lg center",children:[Object(j.jsx)(y.b,{className:"navbar-brand",to:"/main",children:Object(j.jsx)("b",{children:"Mixer"})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(y.b,{to:"/main",className:"nav-link","aria-current":"page",children:[Object(j.jsx)(v.b,{className:O.a.iconHeader}),s.header.mainPage]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(y.b,{to:"/support",className:"nav-link","aria-current":"page",children:[Object(j.jsx)(v.a,{className:O.a.iconHeader}),s.header.supportPage]})}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsxs)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[Object(j.jsx)(N.a,{className:O.a.iconHeader}),s.header.languageSelect]}),Object(j.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(j.jsx)("li",{className:"dropdown-item",onClick:function(){e.setLanguage("ru")},children:Object(j.jsxs)("span",{className:O.a.langStyle,children:[Object(j.jsx)("img",{src:x,width:"25px"})," \u0420\u0443\u0441\u0441\u043a\u0438\u0439"]})}),Object(j.jsx)("li",{className:"dropdown-item",onClick:function(){e.setLanguage("en")},children:Object(j.jsxs)("span",{className:O.a.langStyle,children:[Object(j.jsx)("img",{src:h,width:"25px"})," English"]})}),Object(j.jsx)("li",{className:"dropdown-item",onClick:function(){e.setLanguage("es")},children:Object(j.jsxs)("span",{className:O.a.langStyle,children:[Object(j.jsx)("img",{src:f,width:"25px"})," Espa\xf1ol"]})})]})]})]})})]})})})},F=a(14),_="SET-LANGUAGE",S="SET-INIT",C=function(e){return{type:_,lang:e}},D={init:0,language:"",currentDescription:{},descriptionRU:{header:{mainPage:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",supportPage:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",languageSelect:"\u042f\u0437\u044b\u043a"},buttons:{selectFiles:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b",loadFiles:"\u041f\u043e\u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e",downloadFiles:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",add:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438",reset:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c",loadRandom:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e"},form:{textBefore:"\u0422\u0435\u043a\u0441\u0442 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438",textAfter:"\u0422\u0435\u043a\u0441\u0442 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u043e\u043a\u0438",nameResultFile:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430",result:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",rowsCount:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a: "},support:{contacts:"\u041f\u0440\u0438\u0432\u0435\u0442! \u041d\u0430 \u044d\u0442\u043e\u043c \u0441\u0430\u0439\u0442\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043c\u0438\u043a\u0441\u0435\u0440\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u0448\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u043d\u0443\u0436\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435. \u041c\u044b \u0431\u0443\u0434\u0435\u043c \u043e\u0447\u0435\u043d\u044c \u0440\u0430\u0434\u044b, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0431\u0443\u0434\u0443 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0445 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u044e\u0434\u0430:",pay:"\u0414\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u043c, \u043d\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0440\u0435\u0448\u0438\u0442\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0435\u0433\u043e \u043c\u043e\u043d\u0435\u0442\u043a\u043e\u0439, \u0442\u043e \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u0432\u0430\u043c.",buttonPay:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"}},descriptionENG:{header:{mainPage:"Main",supportPage:"Support Project",languageSelect:"Language"},buttons:{selectFiles:"Change files",loadFiles:"Alternately",downloadFiles:"Download result",add:"Add Rows",reset:"Reset",loadRandom:"Random"},form:{textBefore:"Text at the beginning of a line",textAfter:"Text at the end of a line",nameResultFile:"File name",result:"Result",rowsCount:"Number of lines: "},support:{contacts:"Hello! On this site, you can use a mixer that will shuffle your lines in the right order. We will be very happy if you have any comments or suggestions, you can write them here:",pay:"This project is free, but if you decide to support it with a coin, we will be very grateful to you.",buttonPay:"Support the project"}},descriptionESP:{header:{mainPage:"Principal",supportPage:"Proyecto de apoyo",languageSelect:"Idioma"},buttons:{selectFiles:"Selecciona archivos",loadFiles:"Alternativamente",downloadFiles:"Descargar resultado",add:"A\xf1adir l\xedneas",reset:"Reiniciar",loadRandom:"Por casualidad"},form:{textBefore:"Texto al principio de una l\xednea",textAfter:"Texto al final de una l\xednea",nameResultFile:"Nombre del archivo",result:"Resultado",rowsCount:"N\xfamero de l\xedneas: "},support:{contacts:"\xa1Hola! En este sitio, puede usar un mezclador que barajar\xe1 sus l\xedneas en el orden correcto. Estaremos muy contentos si tienes alg\xfan comentario o sugerencia, puedes escribirlos aqu\xed:",pay:"Este proyecto es gratuito, pero si decides apoyarlo con una moneda, te estaremos muy agradecidos.",buttonPay:"Apoya el proyecto"}}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;function a(t){return"ru"===t?e.descriptionRU:"en"===t?e.descriptionENG:"es"===t?e.descriptionESP:e.descriptionENG}switch(t.type){case S:return Object(F.a)(Object(F.a)({},e),{},{init:1});case _:return Object(F.a)(Object(F.a)({},e),{},{language:t.lang,currentDescription:a(t.lang)});default:return e}},I=Object(r.c)(Object(c.b)((function(e){return{currentDescription:e.MainPage.currentDescription}}),{setLanguage:C}),s.g)(w),E=a(26),k=a.n(E),B=function(e){var t="https://www.digiseller.market/asp2/pay_wm.asp?id_d=3406110&lang=",a=Object(n.useState)("ru"===e.lang?t+"ru":t+"en"),s=Object(l.a)(a,2),r=s[0],c=s[1],i=Object(n.useState)(e.currentDescription),o=Object(l.a)(i,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){c("ru"===e.lang?t+"ru":t+"en"),d(e.currentDescription)}),[e.lang]),Object(j.jsxs)("div",{className:"container-lg center",children:[Object(j.jsxs)("h4",{className:k.a.textStyle,children:["    ",u.support.contacts]}),Object(j.jsx)("br",{}),Object(j.jsxs)("ul",{className:"list-group",children:[Object(j.jsx)("li",{className:"list-group-item",children:"Telegram - Captain@545"}),Object(j.jsx)("li",{className:"list-group-item",children:"Gmail - mixerdev9341@gmail.com"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("h4",{className:k.a.textStyle,children:["    ",u.support.pay]}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{target:"_blank",href:r,children:Object(j.jsxs)("button",{type:"button",className:"btn btn-danger",children:[Object(j.jsx)(v.a,{})," ",u.support.buttonPay]})})]})},T=Object(r.c)(Object(c.b)((function(e){return{lang:e.MainPage.language,currentDescription:e.MainPage.currentDescription}}),{}),s.g)(B),R=Object(r.c)(Object(c.b)((function(e){return{init:e.MainPage.init}}),{setLanguage:C,setInit:function(){return{type:S}}}),s.g)((function(e){if(console.log(e.init),0===e.init){var t=window.navigator?window.navigator.language||window.navigator.systemLanguage||window.navigator.userLanguage:"en";t=t.slice(0,2),console.log(t),e.setLanguage(t),e.setInit()}return Object(j.jsxs)("div",{children:[Object(j.jsx)(I,{}),Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(s.a,{to:"/main"})}}),Object(j.jsx)(s.b,{path:"/main",component:m}),Object(j.jsx)(s.b,{path:"/support",component:T})]})]})})),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))},L=(a(50),a(51),a(33)),M=Object(r.b)({MainPage:P}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,H=Object(r.d)(M,W(Object(r.a)(L.a))),G=a(20);a.n(G).a.render(Object(j.jsx)(y.a,{children:Object(j.jsx)(c.a,{store:H,children:Object(j.jsx)(R,{})})}),document.getElementById("root")),A()}},[[73,1,2]]]);
//# sourceMappingURL=main.c6c75a8c.chunk.js.map