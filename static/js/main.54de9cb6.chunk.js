(this.webpackJsonpnote_app=this.webpackJsonpnote_app||[]).push([[0],[,,,function(e,t,n){e.exports={addNote:"AddNote_addNote__2ebhl",footer:"AddNote_footer__2o4zi",small:"AddNote_small__1sTT2",button:"AddNote_button__19jWL"}},,,function(e,t,n){e.exports={note:"note_note__1Z4ze",span:"note_span__3sW2y",noteFooter:"note_noteFooter__1iGYE",deleteIcon:"note_deleteIcon__MEX82"}},,,,function(e,t,n){e.exports={search:"Search_search__1a8YF"}},function(e,t,n){e.exports={header:"Header_header__19B5i",button:"Header_button__M4JWp"}},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(13),o=n.n(s),r=(n(18),n(12)),i=n(2),d=n(3),l=n.n(d),j=n(0),u=function(){var e=c.a.useContext(C).addNote,t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],o=n[1];return Object(j.jsxs)("div",{className:l.a.addNote,children:[Object(j.jsx)("textarea",{className:l.a.textarea,rows:"8",cols:"10",placeholder:"Type to add new Note!",onChange:function(e){200-e.target.value.length>=0?o(e.target.value):alert("Character Limit")},value:s}),Object(j.jsxs)("div",{className:l.a.footer,children:[Object(j.jsxs)("small",{className:l.a.small,children:[" ",200-s.length," Remaining  "]}),Object(j.jsx)("button",{className:l.a.button,onClick:function(){s.trim().length>0&&e(s),o("")},children:" Save"})]})]})},b=n(6),h=n.n(b),x=n(8),O=function(e){var t=e.e,n=c.a.useContext(C).deleteNote;return Object(j.jsxs)("div",{className:h.a.note,children:[Object(j.jsxs)("span",{className:h.a.span,children:[" ",t.text," "]}),Object(j.jsxs)("div",{className:h.a.noteFooter,children:[Object(j.jsxs)("small",{children:[" ",t.date," "]}),Object(j.jsx)(x.a,{className:h.a.deleteIcon,onClick:function(){return n(t.id)},size:"1.3em"})]})]})},f=function(e){var t=e.notes;return Object(j.jsxs)("div",{className:"notesList",children:[t.map((function(e){return Object(j.jsx)(O,{e:e},e.id)})),Object(j.jsx)(u,{})]})},m=(n(20),n(4)),_=n(10),p=n.n(_),N=function(e){var t=e.setsearchText;return Object(j.jsxs)("div",{className:p.a.search,children:[Object(j.jsx)(x.b,{className:p.a.mdsearch,size:"1.3em"}),Object(j.jsx)("input",{onChange:function(e){return t(e.target.value.toLowerCase())},type:"text",placeholder:"type to search..."})]})},v=n(11),g=n.n(v),T=function(e){var t=e.darkTheme;return Object(j.jsxs)("div",{className:g.a.header,children:[Object(j.jsx)("h1",{children:" Notes"}),Object(j.jsx)("button",{onClick:t,className:g.a.button,children:" Toggle Theme "})]})},C=c.a.createContext(),S=function(){var e=Object(a.useState)([{id:Object(m.a)(),text:"This is my Text",date:"19/3/21"},{id:Object(m.a)(),text:"This is second Text",date:"14/7/21"},{id:Object(m.a)(),text:"This is third Text",date:"26/4/21"},{id:Object(m.a)(),text:"This is fourth Text",date:"22/5/21"}]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),d=o[0],l=o[1],u=Object(a.useState)(!1),b=Object(i.a)(u,2),h=b[0],x=b[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("note-app"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("note-app",JSON.stringify(n))}),[n]),Object(j.jsx)("div",{className:"".concat(h&&"dark"),children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(C.Provider,{value:{addNote:function(e){var t=new Date,a={id:Object(m.a)(),text:e,date:t.toLocaleDateString()};c([].concat(Object(r.a)(n),[a]))},deleteNote:function(e){var t=n.findIndex((function(t){return t.id===e})),a=Object(r.a)(n);a.splice(t,1),c(a)}},children:[Object(j.jsx)(T,{darkTheme:function(){x((function(e){return!e}))}}),Object(j.jsx)(N,{setsearchText:l}),Object(j.jsx)(f,{notes:n.filter((function(e){return e.text.includes(d)}))})]})})})};var F=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(S,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),k()}],[[21,1,2]]]);
//# sourceMappingURL=main.54de9cb6.chunk.js.map