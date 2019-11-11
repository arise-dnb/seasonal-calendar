<template>
  <div>
    <div @click="consolelog($event)" class="home">{{ count }}</div>
    <!--@event = v-on:event-->
    <div v-for="element in filteredArray" v-bind:key="element.name">{{ element.name }}</div>
    <!--:key = v-bind:key-->
    <input type="text" v-model="filter" />
    <GridView />
  </div>
</template>

<script>
// @ is an alias to /src...
import HelloWorld from "@/components/HelloWorld.vue";
import GridView from "@/components/GridView.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    GridView
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
    }
  }
}; //Teil der ausgeführt wird
</script>
