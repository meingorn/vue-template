<template>
  <div>
    <datepicker placeholder="Select Date" ref="programaticOpen"></datepicker>
    <button @click="openPicker">Open Picker</button>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'date-picker',
  components: {
    Datepicker,
  },
  data() {
    return {
      date: 'hi',
    };
  },
  methods: {
    openPicker() {
      this.$refs.programaticOpen.showCalendar();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
