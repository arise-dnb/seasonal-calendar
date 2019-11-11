<template>
  <div class="search">
    <h1>Search Bar</h1>

    <input type="text" placeholder="Search..." v-model="filter" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>