<template>
  <div id="app">
    <div id="nav">
      <Header/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  //this is where we export info to the main.js file. To use components in your export, they need to be included in the COMPONENTS OBJECT
  name: "app",
  components: {
    Header
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
