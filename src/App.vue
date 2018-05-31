<template>
  <div id="app">
    <el-container>
        <Nav />
      <div class="main--container">
        <router-view/>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </el-container>
  </div>
</template>

<script>
import Nav from './components/Nav';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #254E70;
  background-color: #FFF;
}

.main--container {
  min-height: 80vh !important;
}

.footer {
  width:100%;
  background-color: #8EE3EF;
  min-height: 5vh;
}
</style>
