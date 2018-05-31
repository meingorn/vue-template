<template>
  <div class="footer--container" v-bind:title="msg">
    <h4>Feel free to take my stuff, just give me credit |
    Contact at max@mail.com |
    View source: <a><img class="footer--logo" src="../../static/github.png"/></a>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      msg: 'send $$$',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer--logo {
  margin-top: 10px;
  }
</style>
