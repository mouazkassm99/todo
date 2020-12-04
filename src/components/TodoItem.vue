<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input
        type="checkbox"
        @click="toggleTodo($event)"
        :checked="todo.completed"
      />
      <div :class="{completed : todo.completed}" class="todo-item-label">
        {{ todo.title }}
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-danger" @click="deleteTodo">
        <i class="fa fa-trash-o"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    deleteTodo() {
      this.$emit("delete-todo");
    },
    toggleTodo(event) {
      this.$emit("toggle-complete", event);
    },
  },
};
</script>

<style scoped>
.todo-item{
  margin: 10px;
}
input {
  cursor: pointer;
  text-align: center;
  margin: 10px;
  transform: scale(1.3);
}

.btn-danger {
  border-radius: 7px;
}

.todo-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}

.todo-item-left {
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding-left: 5px;
}
.completed {
  text-decoration: line-through;
  /* color: grey; */
}

</style>