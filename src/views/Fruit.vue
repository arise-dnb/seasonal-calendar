<template>
  <div class="wrapper">
    <div class="header">
      <h2>{{ this.$route.params.fruit.name }}</h2>

      <b-img
        :id="this.$route.params.fruit.name"
        style="width:100%"
        :src="this.$route.params.fruit.src"
        :cal="this.$route.params.fruit.cal"
        :wert="this.$route.params.fruit.wert"
      />&nbsp;
      <b-img
        :id="this.$route.params.fruit.name"
        style="width:100%"
        :src="this.$route.params.fruit.cal"
        :wert="this.$route.params.fruit.wert"
      />

      <table style="width:100%">
        <tr>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>Mai</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Okt</th>
          <th>Nov</th>
          <th>Dec</th>
        </tr>
        <tr>
          <th v-for="month in this.$route.params.fruit.inseason" :key="month">
            <span v-if="month === 1" background-color="red">{{ month }}</span
            ><span v-else-if="month === 2" background-color="green">{{
              month
            }}</span>
          </th>
        </tr>
      </table>

      <table style="width:100%; background-color:#D8D8D8;">
        <tr>
          <th colspan="2" style="font-size:140%;">Nährwerte</th>
          <th colspan="2" style="font-size:140%;">Vitamine</th>
        </tr>
        <tr>
          <th>Brennwert:</th>
          <th>{{ this.$route.params.fruit.wert[0] }} kJ</th>
          <th>Vitamin C:</th>
          <th>{{ this.$route.params.fruit.vitamins[0] }} mg</th>
        </tr>
        <tr>
          <th>Kalorien:</th>
          <th>{{ this.$route.params.fruit.wert[1] }} kcal</th>
          <th>Vitamin A:</th>
          <th>{{ this.$route.params.fruit.vitamins[1] }} mg</th>
        </tr>
        <tr>
          <th>Protein:</th>
          <th>{{ this.$route.params.fruit.wert[2] }} g</th>
          <th>Vitamin E:</th>
          <th>{{ this.$route.params.fruit.vitamins[2] }} mg</th>
        </tr>
        <tr>
          <th>Kohlenhydrate:</th>
          <th>{{ this.$route.params.fruit.wert[3] }} g</th>
          <th>Vitamin B1:</th>
          <th>{{ this.$route.params.fruit.vitamins[3] }} mg</th>
        </tr>
        <tr>
          <th>Fett:</th>
          <th>{{ this.$route.params.fruit.wert[4] }} g</th>
          <th>Vitamin B2:</th>
          <th>{{ this.$route.params.fruit.vitamins[4] }} mg</th>
        </tr>
        <tr>
          <th>Ballaststoffe:</th>
          <th>{{ this.$route.params.fruit.wert[5] }} g</th>
          <th>Vitamin B6:</th>
          <th>{{ this.$route.params.fruit.vitamins[5] }} mg</th>
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
