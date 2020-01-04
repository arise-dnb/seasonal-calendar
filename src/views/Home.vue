<template>
  <div>
    <div class="header">
      <DateHeader />
      <SearchBar @childToParent="onSearch" />
      <!--<div v-for="element in filteredArray" :key="element">{{ element }}</div>-->
      <!--:key = v-bind:key-->
      <hr />
    </div>
    <div class="list">
      <GridView :pictures="filteredArray" />
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
      array: [{ name: "Apfel", month: "1" }, { name: "Birne", month: "1" }],

      crops: {
        apfel: {
          name: "Apfel",
          id: "101",
          src: require("../assets/fruits/apple_s.jpg")
        },
        birne: {
          name: "Birne",
          id: "102",
          src: require("../assets/fruits/pear_s.jpg")
        },
        blaubeere: {
          name: "Blaubeeren",
          id: "103",
          src: require("../assets/fruits/blueberry_s.jpg")
        },
        brombeere: {
          name: "Brombeeren",
          id: "104",
          src: require("../assets/fruits/blackberry_s.jpg")
        },
        erdbeere: {
          name: "Erdbeere",
          id: "105",
          src: require("../assets/fruits/strawberry_s.jpg")
        },
        kirsche: {
          name: "Kirsche",
          id: "106",
          src: require("../assets/fruits/cherry_s.jpg")
        },
        pflaume: {
          name: "Pflaume",
          id: "107",
          src: require("../assets/fruits/plum_s.jpg")
        },
        aubergine: {
          name: "Aubergine",
          id: "201",
          src: require("../assets/fruits/eggplant_s.jpg")
        },
        blumenkohl: {
          name: "Blumenkohl",
          id: "202",
          src: require("../assets/fruits/cauli_s.jpg")
        },
        erbse: {
          name: "Erbse",
          id: "203",
          src: require("../assets/fruits/pea_s.jpg")
        },
        lauch: {
          name: "Lauch",
          id: "204",
          src: require("../assets/fruits/leek_s.jpg")
        },
        karotte: {
          name: "Karotte",
          id: "205",
          src: require("../assets/fruits/carrot_s.jpg")
        },
        paprika: {
          name: "Paprika",
          id: "206",
          src: require("../assets/fruits/paprika_s.jpg")
        },
        spinat: {
          name: "Spinat",
          id: "207",
          src: require("../assets/fruits/spinach_s.jpg")
        }
      },

      months: [
        { mID: "1", name: "Januar", seasonal: ["lauch", "lauch", "lauch"] },
        { mID: "2", name: "Februar", seasonal: ["lauch"] },
        { mID: "3", name: "März", seasonal: ["lauch", "spinat"] },
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
          seasonal: ["apfel", "lauch", "karotte", "apfel", "lauch", "karotte"]
        } //eigentlich nur lauch
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
    this.currentMonth();
  },

  methods: {
    consolelog(test) {
      console.log(test);
      let count = 2000;
      this.count++; //nur Zugriff auf diese Komponente
      console.log(count); //Zugriff nur auf Variablen innerhalb der Funktion
      this.count += count;
      let testobj = {
        var1: 0,
        var2: 28
      };
      // console.log(testobj);
      console.log(testobj.var2);
      let var3 = "var2";
      console.log(testobj[var3]); //Objekt ist im Prinzip nur ein Array
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
.header {
  width: 100%;
  height: auto;
  padding: 0% 3%;
}

hr {
  background-color: #2c3e50;
  width: 95%;
  height: 1px !important;
  margin-left: auto;
  margin-right: auto;
}

.list {
  margin: 2%;
}
</style>
