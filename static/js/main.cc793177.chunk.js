(this["webpackJsonpcome-together"]=this["webpackJsonpcome-together"]||[]).push([[0],{23:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},29:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(21),i=a.n(r),c=(a(28),a(13)),s=a(11),o=(a(29),a(16)),u=a(5),m=a(6),p=a(8),d=a(7),E=a(17),h=a.n(E);a(40);h.a.initializeApp({apiKey:"AIzaSyBKRvJY99mZ66k_XE5c-uVNHalZB5UdKw0",authDomain:"artist-connection-2-u.firebaseapp.com",databaseURL:"https://artist-connection-2-u.firebaseio.com",projectId:"artist-connection-2-u",storageBucket:"artist-connection-2-u.appspot.com",messagingSenderId:"419556551471",appId:"1:419556551471:web:f5bff6b1fae50f2677cfda"});var f=h.a.storage(),g=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),console.log("Thank you  "+n.state.name);var t=h.a.database().ref("people"),a={name:e.target.elements.name.value,mediums:e.target.elements.mediums.value,description:e.target.elements.description.value,links:e.target.elements.links.value,phone:e.target.elements.phone.value};t.push(a),n.setState((function(e){return{name:"",mediums:[],description:"",links:[],phone:""}}))},n.state={name:"",mediums:[],description:"",links:[],phone:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.name,t=this.state.mediums,a=this.state.description,n=(this.state.links,this.state.phone);return l.a.createElement("div",{class:"form-style-3"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Make Page"),l.a.createElement("label",{for:"field1"},l.a.createElement("span",null,"Name ",l.a.createElement("span",{class:"required"},"*")," "),l.a.createElement("input",{class:"input-field",type:"text",value:e,name:"name",onChange:this.handleChange})),l.a.createElement("label",{for:"field2"},l.a.createElement("span",null,"Contact Email ",l.a.createElement("span",{class:"required"},"*")),l.a.createElement("input",{type:"email",class:"input-field",name:"field2",value:""})),l.a.createElement("label",{for:"field3"},l.a.createElement("span",null,"Phone ",l.a.createElement("span",{class:"required"},"*")),l.a.createElement("input",{class:"input-field",type:"tel",value:n,name:"phone",onChange:this.handleChange})),l.a.createElement("label",{for:"field4"},l.a.createElement("span",null,"Mediums "),l.a.createElement("select",{value:t,name:"mediums",onChange:this.handleChange,class:"select-field",multiple:!0},l.a.createElement("option",{value:"Audio"},"Audio"),l.a.createElement("option",{value:"Visual"},"Visual"),l.a.createElement("option",{value:"Wearable"},"Wearable"),l.a.createElement("option",{value:"Edible"},"Edible")))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Hello"),l.a.createElement("label",{for:"field6"},l.a.createElement("span",null,"Description ",l.a.createElement("span",{class:"required"},"*")),l.a.createElement("textarea",{class:"textarea-field",value:a,name:"description",onChange:this.handleChange})),l.a.createElement("label",null,l.a.createElement("span",null," "),l.a.createElement("input",{type:"submit",value:"Submit"})))))}}]),a}(n.Component),v=(n.Component,function(){return l.a.createElement(l.a.Fragment,null)}),b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("span",null,"AUDABLE")),l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("span",null,"VISUAL")),l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("span",null,"WEARABLE")),l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("span",null,"EDIBLE")),l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("span",null,"ARTIST LIST")))};n.Component,a(22);var C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){if(e.target.files[0]){var t=e.target.files[0];n.setState((function(){return{image:t}}))}},n.handleUpload=function(){var e=n.state.image;f.ref("images/".concat(e.name)).put(e).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);n.setState({progress:t})}),(function(e){console.log(e)}),(function(){f.ref("images").child(e.name).getDownloadURL().then((function(e){n.setState({url:e})}))}))},n.state={image:null,url:"",progress:0},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("progress",{value:this.state.progress,max:"100"}),l.a.createElement("br",null),l.a.createElement("input",{type:"file",onChange:this.handleChange}),l.a.createElement("button",{onClick:this.handleUpload},"upload"),l.a.createElement("br",null),l.a.createElement("img",{src:this.state.url,alt:"images",height:"300",width:"400"}))}}]),a}(n.Component);var S=function(){var e=l.a.useReducer((function(e,t){switch(t.type){case"SET_DROP_DEPTH":return Object(s.a)({},e,{dropDepth:t.dropDepth});case"SET_IN_DROP_ZONE":return Object(s.a)({},e,{inDropZone:t.inDropZone});case"ADD_FILE_TO_LIST":return Object(s.a)({},e,{fileList:e.fileList.concat(t.files)});default:return e}}),{dropDepth:0,inDropZone:!1,fileList:[]}),t=Object(c.a)(e,2);return t[0],t[1],l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"create-page"},l.a.createElement("h1",{className:"section-title"},"CREATE"),l.a.createElement(g,null)),l.a.createElement("div",{className:"share-page"},l.a.createElement("h1",{className:"section-title"}," SHARE "),l.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.cc793177.chunk.js.map