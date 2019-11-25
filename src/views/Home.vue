<template>
  <div id="wrapper">
    <div class="header">
      <DateHeader />
      <SearchBar @childToParent="onSearch" />
      <div v-for="element in filteredArray" :key="element.name">{{ element.name }}</div>
      <!--:key = v-bind:key-->
      <button @click="onButton()">update</button>
      {{ today }}
    </div>
    <GridView :pictures="imgArray" />
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
        { name: "Apfel", month: "1" },
        { name: "Birne", month: "1" },
        { name: "Brombeere", month: "2" },
        { name: "Apfel", month: "2" },
        { name: "Birne", month: "2" },
        { name: "Brombeere", month: "3" }
      ],
      imgArray: [
        { name: "Mandarine", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Apfel", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Birne", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Orange", src: "https://picsum.photos/250/250/?image=58" }
      ]
    };
  },
  computed: {
    filteredArray() {
      let self = this;
      return this.array.filter(function(x) {
        return x.month.includes(self.filter);
      });
    },
    today() {
      return new Date() + this.filter;
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
      // console.log(testobj);
      console.log(testobj.var2);
      let var3 = "var2";
      console.log(testobj[var3]); //Objekt ist im Prinzip nur ein Array
    },

    onButton() {
      console.log(this.today);
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
  width: 100%;
  background-color: #d4c9c0;
}
</style>
