<template>
  <div class="wrapper">
    <div class="header">
      <h2>the fruit is: {{ this.$route.params.fruit.name }}</h2>

      <b-img
        :id="this.$route.params.fruit.name"
        :src="this.$route.params.fruit.src"
        :wert="this.$route.params.fruit.wert"
      />
      <h3>Nährwerte (für 100 g):</h3>
      <table style="width:25%">
        <tr>
          <th>Brennwert</th>
          <th>{{ this.$route.params.fruit.wert[0] }} kJ</th>
        </tr>
        <tr>
          <th>Kalorien:</th>
          <th>{{ this.$route.params.fruit.wert[1] }} kcal</th>
        </tr>
        <tr>
          <th>Protein:</th>
          <th>{{ this.$route.params.fruit.wert[2] }} g</th>
        </tr>
        <tr>
          <th>Kohlenhydrate:</th>
          <th>{{ this.$route.params.fruit.wert[3] }} g</th>
        </tr>
        <tr>
          <th>Fett:</th>
          <th>{{ this.$route.params.fruit.wert[4] }} g</th>
        </tr>
        <tr>
          <th>Ballaststoffe:</th>
          <th>{{ this.$route.params.fruit.wert[5] }} g</th>
        </tr>
        <tr>
          <th>Wassergehalt:</th>
          <th>{{ this.$route.params.fruit.wert[6] }} %</th>
        </tr>
      </table>

      <var></var>
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
