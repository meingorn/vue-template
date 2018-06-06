<template>
  <div class="playground--container">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <Form> <p>hi i'm testing slots</p> </Form>
  </div>
</template>

<script>

export default {
  name: 'Playground',
  data() {
    return {
      message: '',
      selected: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playground--container {
  margin-top: 10px;
}

</style>
