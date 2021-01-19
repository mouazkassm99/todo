(function(e){function t(t){for(var n,r,i=t[0],d=t[1],u=t[2],a=0,p=[];a<i.length;a++)r=i[a],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);s&&s(t);while(p.length)p.shift()();return l.push.apply(l,u||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,i=1;i<o.length;i++){var d=o[i];0!==c[d]&&(n=!1)}n&&(l.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},c={app:0},l=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=d;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1923:function(e,t,o){"use strict";o("9132")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c={class:"container"},l=Object(n["e"])("h2",null,"Todo App",-1),r={class:"todos-container"};function i(e,t,o,i,d,u){var s=Object(n["j"])("TodoItem"),a=Object(n["j"])("Filters");return Object(n["f"])(),Object(n["c"])("div",c,[l,Object(n["m"])(Object(n["e"])("input",{type:"text",class:"form-control",placeholder:"Insert todo item ...","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.newTodoTitle=e}),onKeyup:t[2]||(t[2]=Object(n["n"])((function(){return u.addTodo.apply(u,arguments)}),["enter"]))},null,544),[[n["l"],d.newTodoTitle]]),Object(n["e"])("div",r,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(u.filteredTodos,(function(e){return Object(n["f"])(),Object(n["c"])(s,{key:e.id,todo:e,onDeleteTodo:function(t){return u.handleDeleteTodo(e.id)},onToggleComplete:function(t){return u.handleToggleComplete(t,e.id)}},null,8,["todo","onDeleteTodo","onToggleComplete"])})),128))]),Object(n["e"])(a,{remainingTodosNumber:u.remainingTodos,onFilterUpdated:t[3]||(t[3]=function(e){return u.updateFilter(e)}),onCheckAllTodos:t[4]||(t[4]=function(e){return u.checkAllTodos(e)}),onClearCompletedTodos:u.clearCompleted},null,8,["remainingTodosNumber","onClearCompletedTodos"])])}o("4de4"),o("4160"),o("d3b7"),o("159b");var d=Object(n["o"])("data-v-0943c610");Object(n["h"])("data-v-0943c610");var u={class:"todo-item"},s={class:"todo-item-left"},a=Object(n["e"])("i",{class:"fa fa-trash-o"},null,-1);Object(n["g"])();var p=d((function(e,t,o,c,l,r){return Object(n["f"])(),Object(n["c"])("div",u,[Object(n["e"])("div",s,[Object(n["e"])("input",{type:"checkbox",onClick:t[1]||(t[1]=function(e){return r.toggleTodo(e)}),checked:o.todo.completed},null,8,["checked"]),Object(n["e"])("div",{class:[{completed:o.todo.completed},"todo-item-label"]},Object(n["k"])(o.todo.title),3)]),Object(n["e"])("div",null,[Object(n["e"])("button",{type:"button",class:"btn btn-danger",onClick:t[2]||(t[2]=function(){return r.deleteTodo.apply(r,arguments)})},[a])])])})),f={name:"TodoItem",props:["todo"],data:function(){return{}},methods:{deleteTodo:function(){this.$emit("delete-todo")},toggleTodo:function(e){this.$emit("toggle-complete",e)}}};o("1923");f.render=p,f.__scopeId="data-v-0943c610";var b=f,h=Object(n["o"])("data-v-a7ef11e2");Object(n["h"])("data-v-a7ef11e2");var m={class:"inner-container"},j=Object(n["d"])("Check All"),O={class:"inner-container"};Object(n["g"])();var v=h((function(e,t,o,c,l,r){return Object(n["f"])(),Object(n["c"])("div",null,[Object(n["e"])("div",m,[Object(n["e"])("div",null,[Object(n["e"])("label",null,[Object(n["e"])("input",{class:"inner-container-input",type:"checkbox",onChange:t[1]||(t[1]=function(e){return r.checkAllTodos(e.target.checked)})},null,32),j])]),Object(n["e"])("div",null,Object(n["k"])(o.remainingTodosNumber)+" items left",1)]),Object(n["e"])("div",O,[Object(n["e"])("div",null,[Object(n["e"])("button",{onClick:t[2]||(t[2]=function(e){return r.updateFilter("all")}),class:[{marked:l.all},"btn btn-outline-success"]}," All ",2),Object(n["e"])("button",{onClick:t[3]||(t[3]=function(e){return r.updateFilter("not-completed")}),class:[{marked:l.notCompleted},"btn btn-outline-success"]}," Not Completed ",2),Object(n["e"])("button",{onClick:t[4]||(t[4]=function(e){return r.updateFilter("completed")}),class:[{marked:l.completed},"btn btn-outline-success"]}," Completed ",2)]),Object(n["e"])("div",null,[Object(n["e"])("button",{class:"btn btn-outline-success",onClick:t[5]||(t[5]=function(){return r.clearCompleted.apply(r,arguments)})},"Clear Completed")])])])})),T={props:["remainingTodosNumber"],data:function(){return{currentFilter:"all",all:!0,notCompleted:!1,completed:!1}},methods:{updateFilter:function(e){this.currentFilter=e,this.$emit("filter-updated",e),"all"===this.currentFilter?(this.all=!0,this.notCompleted=!1,this.completed=!1):"not-completed"===this.currentFilter?(this.all=!1,this.notCompleted=!0,this.completed=!1):(this.all=!1,this.notCompleted=!1,this.completed=!0)},checkAllTodos:function(e){this.$emit("check-all-todos",e)},clearCompleted:function(){this.$emit("clear-completed-todos")}},computed:{}};o("a110");T.render=v,T.__scopeId="data-v-a7ef11e2";var g=T,C={name:"App",created:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=4").then((function(e){return e.json()})).then((function(t){console.log(t),e.todos=t}))},components:{TodoItem:b,Filters:g},data:function(){return{newTodoTitle:"",currentFilter:"all",todos:[]}},computed:{nextId:function(){return this.todos.length},filteredTodos:function(){return"all"===this.currentFilter?this.todos:"completed"===this.currentFilter?this.todos.filter((function(e){return e.completed})):this.todos.filter((function(e){return!e.completed}))},remainingTodos:function(){return this.filteredTodos.filter((function(e){return!e.completed})).length}},methods:{addTodo:function(){var e=this.newTodoTitle;this.todos.unshift({title:e,completed:!1,id:this.nextId+1}),this.newTodoTitle=""},clearCompleted:function(){this.todos=this.todos.filter((function(e){return!e.completed}))},handleDeleteTodo:function(e){this.todos=this.todos.filter((function(t){return t.id!==e}))},handleToggleComplete:function(e,t){this.todos.forEach((function(o){o.id!==t||(o.completed=e.target.checked)}))},checkAllTodos:function(e){this.todos.forEach((function(t){t.completed=e}));var t=this.todos;this.todos=t},updateFilter:function(e){this.currentFilter=e}}};o("64be");C.render=i;var k=C;Object(n["b"])(k).mount("#app")},"64be":function(e,t,o){"use strict";o("c894")},9132:function(e,t,o){},a110:function(e,t,o){"use strict";o("cc40")},c894:function(e,t,o){},cc40:function(e,t,o){}});
//# sourceMappingURL=app.058a288f.js.map