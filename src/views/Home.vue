<template>
  <div>
    <DateHeader />
    <SearchBar v-on:childToParent="onSearch" />
    <div v-for="element in filteredArray" :key="element.name">
      {{ element.name }}
    </div>
    <!--:key = v-bind:key-->

    <GridView />
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
      array: [
        { name: "Apfel", image: "link1" },
        { name: "Birne", image: "link2" },
        { name: "Brombeere", image: "link3" }
      ]
    };
  },
  computed: {
    filteredArray() {
      let self = this;
      return this.array.filter(function(x) {
        return x.name.includes(self.filter);
      });
    }
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
      console.log(testobj);
      console.log(testobj.var2);
      let var3 = "var2";
      console.log(testobj[var3]); //Objekt ist im Prinzip nur ein Array
    },

    onSearch(value) {
      this.filter = value;
    }
  }
}; //Teil der ausgeführt wird
</script>
