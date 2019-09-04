<template>
  <div class="counter-sum">
    <h2>
      Counter Sum:
      <span>{{counterSum}}</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: "counter-sum",
  props: {},
  computed: {
    counterSum: function() {
    //   let sum = 0;
    //   this.counters.forEach(element => {
    //     sum = sum + element.value;
    //   });
      return this.$store.getters.counterSum;
    },
    counters: function() {
      return this.$store.state.counters;
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
