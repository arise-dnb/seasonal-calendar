<template>
  <div id="wrapper">
    <div class="header">
      <DateHeader />
      <SearchBar @childToParent="onSearch" />
      <div v-for="element in filteredArray" :key="element.name">{{ element.name }}</div>
      <!--:key = v-bind:key-->
      {{ cur_month }}
    </div>
    <GridView :pictures="crops" />
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
      cur_month: 0,
      array: [{ name: "Apfel", month: "1" }, { name: "Birne", month: "1" }],

      crops: {
        Apfel: {
          name: "Apfel",
          id: "1",
          src: "https://picsum.photos/id/54/250/250"
        },
        Birne: {
          name: "Birne",
          id: "2",
          src: "https://picsum.photos/id/59/250/250"
        }
      },

      month: {
        jan: { m_id: 1, name: "Januar", crops: [1, 2] },
        feb: { m_id: 2, name: "Februar", crops: [1, 2] },
        mar: { m_id: 3, name: "März", crops: [1] },
        apr: { m_id: 4, name: "April", crops: [1] },
        may: { m_id: 5, name: "Mai", crops: [1] },
        jun: { m_id: 6, name: "Juni", crops: [2] },
        jul: { m_id: 7, name: "Juli", crops: [2] },
        aug: { m_id: 8, name: "August", crops: [1, 2] },
        sep: { m_id: 9, name: "September", crops: [1, 2] },
        oct: { m_id: 10, name: "Oktober", crops: [1, 2] },
        nov: { m_id: 11, name: "November", crops: [1] },
        dec: { m_id: 12, name: "Dezember", crops: [] }
      }
    };
  },
  computed: {
    filteredArray() {
      let self = this;
      return this.array.filter(function(x) {
        return x.month.includes(self.filter);
      });
    },
    /*  Wie filtert man ein Objekt
    filteredObject() {
      let self = this;
      return this.month.filter(function(x) {
        return x.m_id.includes(self.cur_mon);
      });
    },*/
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
      this.cur_month = today.getMonth() + 1;
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
