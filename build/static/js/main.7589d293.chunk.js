(this.webpackJsonpmailbox=this.webpackJsonpmailbox||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(11),l=a.n(o),i=(a(22),a(23),a(12)),r=a(13),m=a(16),c=a(15),u=a(14),h=a.n(u),d=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),h()({method:"POST",url:"",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&(alert("Message failed to send."),console.log(e))}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),s.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"message"},"Message"),s.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(n.Component);function g(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.7589d293.chunk.js.map