<template>
  <div class="container">
    <h2>Todo App</h2>
    <input
      type="text"
      class="form-control"
      placeholder="Insert todo item ..."
      v-model="newTodoTitle"
      v-on:keyup.enter="addTodo"
    />

    <div class="todos-container">

      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @delete-todo="handleDeleteTodo(todo.id)"
        @toggle-complete="handleToggleComplete($event, todo.id)"
      ></TodoItem>
    </div>

    <Filters
      :remainingTodosNumber="remainingTodos"
      @filter-updated="updateFilter($event)"
      @check-all-todos="checkAllTodos($event)"
      @clear-completed-todos="clearCompleted"
    ></Filters>
  </div>
</template>

<script>
// import Todos from "./Todos";
import TodoItem from "./components/TodoItem";
import Filters from "./components/Filters";
export default {
  name: "App",

  created(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(json =>{
         console.log(json)
         this.todos = json;
      })
  },
  components: {
    TodoItem,
    Filters,
  },
  data() {
    return {
      newTodoTitle: "",
      currentFilter: "all",
      // todos: Todos.getTodos(),
      todos: []
    };
  },

  computed: {
    nextId() {
      return this.todos.length;
    },
    
    filteredTodos() {
      return this.currentFilter === "all"
        ? this.todos
        : this.currentFilter === "completed"
        ? this.todos.filter((todo) => todo.completed)
        : this.todos.filter((todo) => !todo.completed);
    },
    remainingTodos() {
      return this.filteredTodos.filter((todo) => !todo.completed).length;
    },
  },

  methods: {
    addTodo() {
      let title = this.newTodoTitle;
      
      this.todos.unshift(
        {title: title,
        completed: false,
        id: this.nextId + 1,}
      );
      this.newTodoTitle = "";
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    handleDeleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);

    },
    handleToggleComplete(event, id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = event.target.checked;
          return;
        }
      });
    },
    checkAllTodos(check) {
      this.todos.forEach((todo) => {
        todo.completed = check;
      });
      let temp = this.todos;
      this.todos = temp;
    },
    updateFilter(e) {
      this.currentFilter = e;
    },
    
  },
};
</script>
  
<style>
body {
  font-size: 24px;
  font-family: "Roboto", Tahoma, Geneva, Verdana, sans-serif;
background: #8e9eab;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
input {
  margin: 20px 0;
}

.container {
  max-width: 800px;
  max-height: 600px;
  height: 600px;
  margin: 30px auto;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  opacity: 0.7;
}

.active {
  background: lightseagreen;
}

.todos-container{
  height: 230px;
  overflow-y: scroll;
  
}
</style>
