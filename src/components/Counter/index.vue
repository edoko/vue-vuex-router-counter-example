<template>
  <div>
    <h3>Count: {{ $store.state.count }}</h3>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increase_ten">+10</button>
    <button @click="decrease_ten">-10</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: "counter",
  methods: {
    increase() {
      this.$store.commit("INCREASE");
    },
    decrease() {
      this.$store.commit("DECREASE");
    },
    increase_ten() {
      this.$store.commit("INCREASE_TEN");
    },
    decrease_ten() {
      this.$store.commit("DECREASE_TEN");
    },
    reset() {
      this.$store.commit("RESET");
    }
  }
};
</script>
