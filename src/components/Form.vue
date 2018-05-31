<template>
  <div>
    <router-link  tag="li" to="/">
      <a>Dropdown</a>
    </router-link>
    <router-link  tag="li" to="hello">
      <a>Vue Links</a>
    </router-link>
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

</style>
