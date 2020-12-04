<template>
  <div>
    <div class="inner-container">
      <div>
        <label
          ><input
            class="inner-container-input"
            type="checkbox"
            @change="checkAllTodos($event.target.checked)"
          />Check All</label
        >
      </div>
      <div>{{ remainingTodosNumber }} items left</div>
    </div>
    <div class="inner-container">
      <div>
        <button
          @click="updateFilter('all')"
          :class="{ marked: all }"
          class="btn btn-outline-success"
        >
          All
        </button>
        <button
          @click="updateFilter('not-completed')"
          :class="{ marked: notCompleted }"
          class="btn btn-outline-success"
        >
          Not Completed
        </button>
        <button
          @click="updateFilter('completed')"
          :class="{ marked: completed }"
          class="btn btn-outline-success"
        >
          Completed
        </button>
      </div>

      <div>
        <button class="btn btn-outline-success" @click="clearCompleted" >Clear Completed</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["remainingTodosNumber"],
  data() {
    return {
      currentFilter: "all",
      all: true,
      notCompleted: false,
      completed: false,
    };
  },
  methods: {
    updateFilter(filter) {
        this.currentFilter = filter;
        this.$emit("filter-updated", filter);
        // alert(this.currentFilter)
        if(this.currentFilter === 'all'){
          this.all=true;
          this.notCompleted = false;
          this.completed = false;
        }else if (this.currentFilter === 'not-completed'){
          this.all=false;
          this.notCompleted = true;
          this.completed = false;
        }else{
          this.all=false;
          this.notCompleted = false;
          this.completed = true;
        }
      
    },
    checkAllTodos(checked) {
      this.$emit("check-all-todos", checked);
    },
    clearCompleted(){
        this.$emit('clear-completed-todos');
    }
  },
  computed:{
    
  }
};
</script>
<style scoped>
input {
  cursor: pointer;
  text-align: center;
  margin: 10px;
  transform: scale(1.3);
}
    
.inner-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* font-size: 16px; */
  border-top: 1px solid lightgrey;
  padding-top: 15px;
  margin-bottom: 13px;
}
.inner-container-input {
  margin-right: 12px;
}
button{
    margin-right: 10px;
}
button:focus{
  outline: 0;
}
button:active{
  outline: 0;
}
.marked{
    background-color: #28a745;
    color: white;
}



</style>