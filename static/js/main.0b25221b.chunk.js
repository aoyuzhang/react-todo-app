(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{14:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),r=o(8),d=o.n(r),a=o(7),i=o(2),s=o(3),l=o(5),p=o(4),u=o(0);var h=function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"checkbox",checked:e.todo.completed,onChange:function(){return e.handleChangeProps(e.todo.id)}}),Object(u.jsx)("button",{onClick:function(){return e.deleteTodoProps(e.todo.id)},children:"Delete"}),e.todo.title]})},j=function(e){Object(l.a)(o,e);var t=Object(p.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this;return Object(u.jsx)("ul",{children:this.props.todos.map((function(t){return Object(u.jsx)(h,{todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps},t.id)}))})}}]),o}(c.a.Component),b=function(){return Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:" todos"})})},O=function(e){Object(l.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={todos:[{id:1,title:"Setup development environment",completed:!0},{id:2,title:"Develop website and add content",completed:!1},{id:3,title:"Deploy to live server",completed:!1}]},e.handleChange=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(a.a)(Object(a.a)({},e),{},{completed:!e.completed}):e}))}})),console.log("clicked",t)},e.delTodo=function(e){console.log("deleted",e)},e}return Object(s.a)(o,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsx)(j,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo})]})}}]),o}(c.a.Component);d.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0b25221b.chunk.js.map