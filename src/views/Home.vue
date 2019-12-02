<template>
  <div>
    <div class="header">
      <DateHeader />
      <SearchBar @childToParent="onSearch" />
      <div v-for="element in filteredArray" :key="element">{{ element }}</div>
      <!--:key = v-bind:key-->
      {{ curMonth }}
      {{ filteredArray }}
    </div>
    <GridView :pictures="filteredArray" />
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
          id: "1",
          src: "https://picsum.photos/id/54/250/250"
        },
        birne: {
          name: "Birne",
          id: "2",
          src: "https://picsum.photos/id/59/250/250"
        },
        kirsche: {
          name: "Kirsche",
          id: "3",
          src: "https://picsum.photos/id/59/250/250"
        }
      },

      months: [
        { mID: "1", name: "Januar", seasonal: ["apfel", "birne"] },
        { mID: "2", name: "Februar", seasonal: ["apfel", "birne"] },
        { mID: "3", name: "März", seasonal: ["apfel"] },
        { mID: "4", name: "April", seasonal: ["apfel"] },
        { mID: "5", name: "Mai", seasonal: ["apfel"] },
        { mID: "6", name: "Juni", seasonal: ["birne"] },
        { mID: "7", name: "Juli", seasonal: ["birne"] },
        { mID: "8", name: "August", seasonal: ["apfel", "birne"] },
        { mID: "9", name: "September", seasonal: ["apfel", "birne"] },
        { mID: "10", name: "Oktober", seasonal: ["apfel", "birne"] },
        { mID: "11", name: "November", seasonal: ["apfel"] },
        { mID: "12", name: "Dezember", seasonal: ["kirsche"] }
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
  position: fixed;
  margin: 0 auto;
  background-color: #d4c9c0;
  width: 100%;
}
</style>
