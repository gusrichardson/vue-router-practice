<template>
  <!-- {here we bind the ".is-complete" class to the div if the condition of todo.completed is met} -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <!-- {when the checkbox changes, execute the markComplete function} -->
      <input type="checkbox" v-on:change="markComplete">
      {{todo.title}}
      <!-- {$emit is used to send custom events from child components upwards to parent components (since data can regularly only move downwards in the form of props). In this case the child component contains the button but the parent component contains the data on the todos so we need the delete method to emit up to the App component where the todo can be erased from the data. Here, 'del-todo' is the name and todo.id is the parameter} -->
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
//export this component to its parent component
export default {
  name: "ToDoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      //we want this to target the todo item and add or remove the "is-complete" class. Since we have already indicated that the class will change based on whether or not todo.completed, we simply create a function to toggle todo.completed rather than explicity making the function to toggle the class. So, when the checkbox is clicked todo.completed will switch to the opposite of what it currently is since it is a True/ Flase boolean
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>


<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>

