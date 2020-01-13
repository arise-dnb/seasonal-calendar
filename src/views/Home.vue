<template>
  <div class="wrapper">
    <div ref="test" class="header">
      <DateHeader />
      <SearchBar @childToParent="onSearch" />
      <!--<div v-for="element in filteredArray" :key="element">{{ element }}</div>-->
      <!--:key = v-bind:key-->
      <hr />
    </div>
    <div class="body">
      <GridView id="FruitGrid" :pictures="filteredArray" :height="divhght + 'px'" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src...

import GridView from "@/components/GridView.vue";
import SearchBar from "@/components/SearchBar.vue";
import DateHeader from "@/components/DateHeader.vue";

export default {
  name: "Home",
  components: {
    DateHeader,
    GridView,
    SearchBar
  },
  data: function() {
    return {
      count: 0,
      filter: "",
      curMonth: "1",
      wdth: 0,
      hght: 0,
      divhght: 0,

      crops: {
        apfel: {
          name: "Apfel",
          id: "101",
          src: require("../assets/fruits/apple_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["226", "54", "0.3", "14.4", "0.1", "2", "83"],
          vitamins: ["12", "0.01", "0.49", "0.04", "0.03", "0.1"]
        },
        birne: {
          name: "Birne",
          id: "102",
          src: require("../assets/fruits/pear_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["218", "52", "0.5", "12.4", "0.3", "2.8", "83"],
          vitamins: ["5", "0", "0.43", "0.03", "0.04", "0.01"]
        },
        blaubeere: {
          name: "Blaubeeren",
          id: "103",
          src: require("../assets/fruits/blueberry_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["176", "42", "0.6", "7.4", "0.6", "4.9", "85"],
          vitamins: ["22", "0.01", "2.1", "0.02", "0.02", "0.06"]
        },
        brombeere: {
          name: "Brombeeren",
          id: "104",
          src: require("../assets/fruits/blackberry_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["2178", "43", "1.2", "6.2", "1", "3.2", "86"],
          vitamins: ["17", "0.21", "0.6", "0.3", "0.04", "0.05"]
        },
        erdbeere: {
          name: "Erdbeere",
          id: "105",
          src: require("../assets/fruits/strawberry_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["134", "32", "0.8", "5.4", "0.4", "2", "90"],
          vitamins: ["57", "0", "0.12", "0.03", "0.05", "0.06"]
        },
        kirsche: {
          name: "Kirsche",
          id: "106",
          src: require("../assets/fruits/cherry_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["268", "64", "0.9", "13.3", "0.3", "1.9", "82"],
          vitamins: ["13", "0.01", "0.3", "0.05", "0.05", "0.4"]
        },
        pflaume: {
          name: "Pflaume",
          id: "107",
          src: require("../assets/fruits/plum_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["187", "45", "0.6", "10", "0.2", "1", "85"],
          vitamins: ["5", "0.06", "0.85", "0.07", "0.04", "0.05"]
        },
        aubergine: {
          name: "Aubergine",
          id: "201",
          src: require("../assets/fruits/eggplant_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["71", "17", "1.2", "2.5", "0.2", "1.4", "94"],
          vitamins: ["5", "0", "0.3", "0.04", "0.04", "0.07"]
        },
        blumenkohl: {
          name: "Blumenkohl",
          id: "202",
          src: require("../assets/fruits/cauli_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["118", "28", "2.5", "2.3", "0.3", "2.9", "91"],
          vitamins: ["64", "0", "0.07", "0.09", "0.09", "0.2"]
        },
        erbse: {
          name: "Erbse",
          id: "203",
          src: require("../assets/fruits/pea_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["343", "82", "6.6", "12.3", "0.5", "5", "75"],
          vitamins: ["25", "0.07", "0.26", "0.3", "0.16", "0.16"]
        },
        lauch: {
          name: "Lauch",
          id: "204",
          src: require("../assets/fruits/leek_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["122", "29", "2.1", "3.3", "0.3", "2.2", "90"],
          vitamins: ["32", "0.12", "0.53", "0.08", "0.07", "0.26"]
        },
        karotte: {
          name: "Karotte",
          id: "205",
          src: require("../assets/fruits/carrot_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["163", "39", "1", "4.8", "0.2", "3.1", "88"],
          vitamins: ["6", "1.2", "0.66", "0.11", "0.01", "0.14"]
        },
        paprika: {
          name: "Paprika",
          id: "206",
          src: require("../assets/fruits/paprika_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["155", "37", "1.3", "6.4", "0.5", "3.6", "87"],
          vitamins: ["140", "0.35", "2.9", "0.04", "0.12", "0.45"],
          inseason: ["0", "2"]
        },
        spinat: {
          name: "Spinat",
          id: "207",
          src: require("../assets/fruits/spinach_s.jpg"),
          cal: require("../assets/fruits/apple_calender.png"),
          wert: ["95", "23", "2.9", "1.4", "0.4", "2.2", "92"],
          vitamins: ["12", "0.01", "0.49", "0.04", "0.03", "0.1"]
        }
      },

      months: [
        {
          mID: "1",
          name: "Januar",
          seasonal: [
            "lauch",
            "apfel",
            "birne",
            "karotte",
            "lauch",
            "apfel",
            "birne",
            "karotte"
          ]
        },
        {
          mID: "2",
          name: "Februar",
          seasonal: ["lauch", "apfel", "birne", "karotte"]
        },
        {
          mID: "3",
          name: "März",
          seasonal: ["lauch", "spinat", "apfel", "birne", "karotte"]
        },
        { mID: "4", name: "April", seasonal: ["lauch", "spinat"] },
        { mID: "5", name: "Mai", seasonal: ["blumenkohl", "spinat"] },
        {
          mID: "6",
          name: "Juni",
          seasonal: [
            "blaubeere",
            "erdbeere",
            "kirsche",
            "blumenkohl",
            "erbse",
            "karotte"
          ]
        },
        {
          mID: "7",
          name: "Juli",
          seasonal: [
            "blaubeere",
            "brombeere",
            "erdbeere",
            "kirsche",
            "pflaume",
            "blumenkohl",
            "erbse",
            "lauch",
            "karotte"
          ]
        },
        {
          mID: "8",
          name: "August",
          seasonal: [
            "apfel",
            "blaubeere",
            "brombeere",
            "erdbeere",
            "kirsche",
            "pflaume",
            "aubergine",
            "blumenkohl",
            "erbse",
            "lauch",
            "karotte",
            "paprika"
          ]
        },
        {
          mID: "9",
          name: "September",
          seasonal: [
            "apfel",
            "birne",
            "blaubeere",
            "brombeere",
            "erdbeere",
            "pflaume",
            "aubergine",
            "blumenkohl",
            "erbse",
            "lauch",
            "karotte",
            "paprika",
            "spinat"
          ]
        },
        {
          mID: "10",
          name: "Oktober",
          seasonal: [
            "apfel",
            "blaubeere",
            "aubergine",
            "blumenkohl",
            "lauch",
            "karotte",
            "paprika",
            "spinat"
          ]
        },
        {
          mID: "11",
          name: "November",
          seasonal: ["apfel", "lauch", "karotte"]
        },
        {
          mID: "12",
          name: "Dezember",
          seasonal: ["lauch"]
        }
      ]
    };
  },
  computed: {
    filteredArray() {
      let self = this;
      return this.months
        .filter(function(month) {
          return month.mID === self.curMonth;
        })[0]
        .seasonal.map(function(seasonal) {
          return self.crops[seasonal];
        });
    },

    today() {
      return new Date() + this.filter;
    }
  },

  mounted() {
    this.currentMonth(), window.addEventListener("resize", this.resizeAction);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resizeAction);
  },

  methods: {
    resizeAction() {
      this.wdth = window.innerWidth;
      this.hght = window.innerHeight;
      this.divhght = (this.hght - this.$refs.test.clientHeight) * 0.5;
    },

    currentMonth() {
      let today = new Date();
      this.curMonth = (today.getMonth() + 1).toString();
    },

    onSearch(value) {
      this.filter = value;
    }
  }
}; //Teil der ausgeführt wird
</script>

<style>
.wrapper {
  background-color: crimson;
  margin: auto;
  max-width: 600px;
}

.header {
  background-color: blue;
  width: 90%;
  min-height: 20%;
  padding-top: 5%;
  margin-left: auto;
  margin-right: auto;
}

hr {
  background-color: #2c3e50;
  width: 95%;
  height: 1px !important;
  margin-left: auto;
  margin-right: auto;
}

.body {
  background-color: aqua;
  display: flex;
  align-items: center;
}
</style>
