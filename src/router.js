import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Fruit from "./views/Fruit.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/fruit",
      name: "fruit",
      component: Fruit
    }
  ]
});
