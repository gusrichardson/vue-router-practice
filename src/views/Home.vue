<template>
  <div id="app">
    <Header/>
    <AddToDo v-on:add-todo="addToDo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    <!-- {with v-on:del-todo we are listening for the del-todo to emit up to us from the Todo component and once we catch it in the App component we fire the deleteTodo function to alter this component's data} -->
  </div>
</template>

<script>
//this is where we import the child components into the App component that are inserted in the above <template>
import Todos from "../components/Todos";
import AddToDo from "../components/AddToDo";
import axios from "axios";

export default {
  //this is where we export info to the main.js file. To use components in your export, they need to be included in the COMPONENTS OBJECT
  name: "Home",
  components: {
    AddToDo,
    Todos
  },
  //data is a function that returns and object. In this case, it is going to store out to-dos data, which will be an array of objects
  data() {
    return {
      //to add these todos to our todo component we pass them as props using the 'v-bind' directive
      todos: []
    };
  },
  methods: {
    //in the ToDoItem component you see that where the $emit del-todo is declared the todo.id is used as a parameter. Here is where that todo.id parameter ultimately gets used.
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.log(err));
    },
    addToDo(newToDo) {
      //here we use DESTRUCTURING to pull out some data from the newToDo object.
      const { title, completed } = newToDo;
      //we send the data tojsonplaceholder and include an object that includes the data we want sent, such as the title and whether or not it's completed
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.log(err));
      //the ...spread operator just copies the todos array as it currently is and then tacks the newToDo onto the todos array
      // this.todos = [...this.todos, newToDo];
    }
  },
  //Created is a hook that allows you to run code if the vue instance is created. The created hook executes code as soon as teh vue instance is created. Created is good for making API calls that run as soon as the instance is created (or when the application is first loaded)
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5 ")
      //when the results come in update the todos array to contain the data from the API result
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>

