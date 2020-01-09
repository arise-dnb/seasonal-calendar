<template>
  <div class="wrapper">
    <div class="header">
      <h2>the fruit is: {{ this.$route.params.fruit.name }}</h2>
      <b-img
        :id="this.$route.params.fruit.name"
        :src="this.$route.params.fruit.src"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src...

//import GridView from "@/components/GridView.vue";

export default {
  name: "Fruit",
  components: {},
  data: function() {
    return {
      fruitDataList: []
    };
  },
  methods: {
    getFruitData() {
      fetch("file.json")
        .then(response => response.json())
        .then(data => (this.fruitDataList = data));
    }
  }
};
//Teil der ausgeführt wird
</script>

<style>
.wrapper {
  height: 100vh;
  width: 100vw;
}
</style>
