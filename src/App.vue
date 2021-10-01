<template>
  <div id="app">
    <auto-complete :data="data" />
  </div>
</template>

<script>
import AutoComplete from "./components/auto-complete.vue";
export default {
  name: "App",
  components: {
    AutoComplete,
  },
  data() {
    return {
      data: [
        { id: 1, name: "AAAAAA" },
        { id: 2, name: "BBBBBB" },
        { id: 3, name: "CCCCCC" },
        { id: 4, name: "DDDDDD" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
