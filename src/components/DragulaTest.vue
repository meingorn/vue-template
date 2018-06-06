<template>
  <div class="wrapper">
    <div class="container" v-dragula="colOne" bag="first-bag">
      <!-- with click -->
      <div v-for="text in colOne" @click="onClick">{{text}} [click me]</div>
    </div>
    <div class="container" v-dragula="colTwo" bag="first-bag">
      <div v-for="text in colTwo">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      text: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about--container {

  }
</style>
