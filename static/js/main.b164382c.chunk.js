(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={form:"ContactForm_form__3xbHk",label:"ContactForm_label__3Nq7J",input:"ContactForm_input__2o8OC",addBtn:"ContactForm_addBtn__32R64",inputTitle:"ContactForm_inputTitle__1YMxJ"}},21:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=(n(21),n(3)),l=n(4),s=n(13),u=function(){return localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):[]},d=Object(l.combineReducers)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u(),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"contacts/add":console.log(e.payload);var n=t.find((function(t){return t.name===e.payload.name}));return n?(alert("Sorry, contact ".concat(e.payload.name," already existing")),t):(localStorage.setItem("contacts",JSON.stringify([].concat(Object(s.a)(t),[e.payload]))),[].concat(Object(s.a)(t),[e.payload]));case"contacts/delete":var a=t.filter((function(t){return t.id!==e.payload.target.id}));return localStorage.setItem("contacts",JSON.stringify(a)),a;default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return"contacts/filter"===e.type?e.payload:t}}),b=n(15),m=Object(l.createStore)(d,Object(b.composeWithDevTools)()),j=(n(28),n(6)),p=n.n(j),f=n(31),O=function(t){var e=t.name,n=t.number;return{type:"contacts/add",payload:{id:Object(f.a)(),name:e,number:n}}},h=function(t){return{type:"contacts/delete",payload:t}},_=n(1);var x=Object(i.b)((function(t){var e=t.filter.toLowerCase();return{contacts:t.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))}}),(function(t){return{addContact:function(){return t(O())},deleteContact:function(e){return t(h(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(_.jsx)(_.Fragment,{children:e.map((function(t){return Object(_.jsxs)("div",{className:p.a.contacts,children:[Object(_.jsx)("p",{id:t.id,className:p.a.contactName,children:t.name}),Object(_.jsx)("p",{className:p.a.contactNumber,children:t.number}),Object(_.jsx)("button",{className:p.a.addBtn,id:t.id,onClick:n,children:"Delete"})]},t.id)}))})})),v=n(9),N=n.n(v);var g=Object(i.b)((function(t){return{data:t.filter}}),(function(t){return{handler:function(e){return t({type:"contacts/filter",payload:e.target.value})}}}))((function(t){var e=t.data,n=t.handler;return console.log(e),Object(_.jsxs)("label",{className:N.a.label,children:[Object(_.jsx)("p",{className:N.a.inputTitle,children:"Find"}),Object(_.jsx)("input",{className:N.a.input,type:"text",name:"filter",value:e,onChange:n})]})})),y=n(10),C=n(2),S=n.n(C);var F=Object(i.b)(null,(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(O({name:n,number:a}))},deleteContact:function(e){return t(h(e))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(y.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),l=Object(y.a)(i,2),s=l[0],u=l[1],d=Object(a.useState)(""),b=Object(y.a)(d,2),m=(b[0],b[1]),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":u(a);break;default:return}},p=Object(f.a)(),O=Object(f.a)();return Object(_.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault(),m({id:Object(f.a)(),name:r,number:s}),e({name:r,number:s}),o(""),u("")},children:[Object(_.jsxs)("label",{className:S.a.label,htmlFor:p,children:[Object(_.jsx)("p",{className:S.a.inputTitle,children:"Name"}),Object(_.jsx)("input",{className:S.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,id:p,onChange:j})]}),Object(_.jsxs)("label",{className:S.a.label,htmlFor:O,children:[Object(_.jsx)("p",{className:S.a.inputTitle,children:"Phone"}),Object(_.jsx)("input",{className:S.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,id:O,onChange:j})]}),Object(_.jsx)("button",{className:S.a.addBtn,type:"submit",children:"Add contact"})]})}));var B=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(F,{}),Object(_.jsx)(g,{}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(x,{})]})};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(i.a,{store:m,children:Object(_.jsx)(B,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contacts:"ContactList_contacts__3UthP",addBtn:"ContactList_addBtn__S4sdJ",contactName:"ContactList_contactName__18R9A",contactNumber:"ContactList_contactNumber__6v1eb"}},9:function(t,e,n){t.exports={label:"Filter_label__3spoi",inputTitle:"Filter_inputTitle___rBBr",input:"Filter_input__1tojl"}}},[[30,1,2]]]);
//# sourceMappingURL=main.b164382c.chunk.js.map