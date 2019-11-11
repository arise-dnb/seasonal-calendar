<template>
  <div>
    <div @click="consolelog($event)" class="home">{{ count }}</div>
    <!--@event = v-on:event-->
    <div v-for="element in filteredArray" v-bind:key="element.name">{{ element.name }}</div>
    <!--:key = v-bind:key-->
    <SearchBar v-on:childToParent="onSearch"></SearchBar>
  </div>
</template>

<script>
// @ is an alias to /src...
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "home",
  components: {
    SearchBar
  },
  //Variablen und Arrays, die die View verwendet
  data: function() {
    return {
      count: 0,
      filter: "",
      array: [
        { name: "Apfel", image: "link1" },
        { name: "Birne", image: "link2" },
        { name: "Brombeere", image: "link3" }
      ] //,
      //fromChild: "" // This value is set to the value emitted by the child
    };
  },
  //berechnete Variable
  computed: {
    filteredArray() {
      let self = this;
      return this.array.filter(function(x) {
        return x.name.includes(self.filter);
      });
    }
  },
  //auszuführende Methoden
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
      console.log("event activated");
      console.log(value);
    }
  }
}; //Teil der ausgeführt wird
</script>
