<template>
  <div>
    <vue-simple-suggest
      v-model="chosen"
      :list="simpleSuggestionList"
      :filter-by-query="true">
  <!-- Filter by input text to only show the matching results -->
    </vue-simple-suggest>
    <br>
    <p>Chosen element: {{ chosen }}</p>
  </div>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest';
import 'vue-simple-suggest/dist/styles.css'; // Optional CSS

export default {
  components: {
    VueSimpleSuggest,
  },
  data() {
    return {
      chosen: '',
    };
  },
  methods: {
    simpleSuggestionList() {
      return ['Vue.js', 'React.js', 'Angular.js'];
    },
  },
};
</script>
