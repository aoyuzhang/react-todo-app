(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{10:function(t,e,n){t.exports={item:"TodoItem_item__3MbaD",checkbox:"TodoItem_checkbox__2Jrs8",textInput:"TodoItem_textInput__t35cu"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),c=n(13),s=n.n(c),i=n(12),r=n(6),d=n(2),l=n(3),u=n(5),p=n(4),h=n(10),j=n.n(h),b=n(0),m=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={editing:!1},t.handleEditing=function(){t.setState({editing:!0})},t.handleUpdatedDone=function(e){"Enter"===e.key&&t.setState({editing:!1})},t}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){console.log("Cleaning up...")}},{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,o=e.id,a=e.title,c={},s={};return this.state.editing?c.display="none":s.display="none",Object(b.jsxs)("li",{className:j.a.item,children:[Object(b.jsxs)("div",{onDoubleClick:this.handleEditing,style:c,children:[Object(b.jsx)("input",{type:"checkbox",className:j.a.checkbox,checked:n,onChange:function(){return t.props.handleChangeProps(o)}}),Object(b.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(o)},children:"Delete"}),Object(b.jsx)("span",{style:n?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:a})]}),Object(b.jsx)("input",{type:"text",style:s,className:j.a.textInput,value:a,onChange:function(e){t.props.setUpdate(e.target.value,o)},onKeyDown:this.handleUpdatedDone})]})}}]),n}(a.a.Component),f=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsx)("ul",{children:this.props.todos.map((function(e){return Object(b.jsx)(m,{todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps,setUpdate:t.props.setUpdate},e.id)}))})}}]),n}(a.a.Component),O=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},g=n(9),x=n(14),v=function(t){var e=Object(o.useState)({title:""}),n=Object(x.a)(e,2),a=n[0],c=n[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.title.trim()?(t.addTodoProps(a.title),c({title:""})):alert("Please write item")},className:"form-container",children:[Object(b.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:a.title,name:"title",onChange:function(t){c(Object(r.a)(Object(r.a)({},a),{},Object(g.a)({},t.target.name,t.target.value)))}}),Object(b.jsx)("button",{className:"input-submit",children:"submit"})]})},y=n(23),k=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}})),console.log("clicked",e)},t.delTodo=function(e){t.setState({todos:Object(i.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodoItem=function(e){var n={id:Object(y.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(i.a)(t.state.todos),[n])})},t.setUpdate=function(e,n){t.setState({todos:t.state.todos.map((function(t){return t.id===n&&(t.title=e),t}))})},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){if(e.todos!==this.state.todos){var n=JSON.stringify(this.state.todos);localStorage.setItem("todos",n)}}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&this.setState({todos:e})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(O,{}),Object(b.jsx)(v,{addTodoProps:this.addTodoItem}),Object(b.jsx)(f,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo,setUpdate:this.setUpdate})]})})}}]),n}(a.a.Component);n(20);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1458d242.chunk.js.map