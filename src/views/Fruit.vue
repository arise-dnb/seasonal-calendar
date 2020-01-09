<template>
  <div class="wrapper">
    <h2>the fruit is: {{ this.$route.params.id }}</h2>
    {{ this.$route.params.name }}
    <div class="header"></div>
  </div>
</template>

<script>
// @ is an alias to /src...

//import GridView from "@/components/GridView.vue";

export default {
  name: "Fruit",
  components: {},
  data: function() {
    return {};
  }
}; //Teil der ausgeführt wird
</script>

<style>
.wrapper {
  height: 100vh;
  width: 100vw;
  background-color: blueviolet;
}
</style>
