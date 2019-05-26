<template>
  <div>
    <!-- {v-on submit execute addToDo method. This will require us to send data upwards from child to parent} -->
    <form @submit="addToDo">
      <!-- {v-model is input syntactic sugar for updating data on user input events (input, textarea, select elements). The v-model means that what goes into the input will then update the data object with the corresponding property name - in this case - "title"} -->
      <input type="text" name="title" v-model="title" placeholder="add to do">
      <input type="submit" value="submit" class="btn">
    </form>
  </div>
</template>

<script>
//here we are using uuid which is a package we downloaded off npm (npm i uuid) that helps us to create unique id's
// import uuid from "uuid";
//NOTE uuid has been disabled because jsonplaceholder creates unique id's for us. If we are not using the API and just want to create our own items with unique ids, then we would use the uuid

export default {
  name: "AddToDo",
  data() {
    return {
      //this is where the title of the To Do item will go after it's entered into the input
      title: ""
    };
  },
  methods: {
    addToDo(e) {
      e.preventDefault();
      const newToDo = {
        //here we are using uuid which is a package we downloaded off npm that helps us to create unique id's
        // id: uuid.v4(),
        //this.title references the title from the data section which we get from the user's input
        title: this.title,
        //each todo item will default as being not complete
        completed: false
      };
      //once the addToDo function has created a ToDo with a unique id it will then $emit the newToDo object up to the parent
      this.$emit("add-todo", newToDo);
      //set the input back to an empty string once submitted
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>


