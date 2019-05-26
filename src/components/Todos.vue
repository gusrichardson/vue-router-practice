<template>
  <div>
    <!-- {for each todo item in the todos array... Note: "todo" could be called anything but "todos" is referencing the actual name of the array so it can only be called "todos". If it shows an error, that is eslint telling you you need a unique key} -->
    <div v-bind:key="todo.id" v-for="todo in todos">
      <!-- {here we are taking the particular "todo" from the div parent and binding it to the <ToDoItem />. Each 'todo' will be different because each will be its own iteratrion of the v-for directive} -->
      <ToDoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
      <!-- {with the v-on:del-todo we are listening for the del-todo to be fired and then catching it as it emits upwards from ToDoItem to Todos. Then we emit it again from Todos to App} -->
    </div>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
//here we export this component to the app component. With it, we also include the ToDoItem component that it has imported to itself
export default {
  name: "Todos",
  components: {
    ToDoItem
  },
  props: ["todos"]
};
</script>
 
<style scoped>
</style>


