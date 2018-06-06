<template>
  <div class="about--container">
    <h2>Welcome to my site</h2>
    <p>This is a site I'm using to practice building and deploying web apps with Vue.js</p>
    <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
</draggable>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about--container {

  }
</style>
