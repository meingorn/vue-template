<template>
  <div class="nav--container">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/pisces.svg"/>
      </router-link>
    </div>
    <div class="nav--links">
      <router-link to="/">
        <a>Home</a>
      </router-link>
      <router-link to="inputs">
        <a>VueSimpleSuggest</a>
      </router-link>
      <router-link to="vueinstant">
        <a>VueInstant</a>
      </router-link>
      <router-link to="playground">
        <a>Playground</a>
      </router-link>
      <router-link to="about">
        <a>About</a>
      </router-link>
      <router-link to="hello">
        <a>Vue Links</a>
      </router-link>
    </div>
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
a {
  font-size: 26px;
  padding-right: 10px;
}

.logo {
  float: left;
  margin-left: 30px;
}

.nav--container {
  background-color: #8ee3ef;
  min-height: 6vh;
  padding-top: 20px;
}

.nav--links {
  padding-left: 15vw;
  text-align: left;
}
</style>
