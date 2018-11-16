import Vue from "vue";
import Router from "vue-router";
import Main from "./components/Main/index.vue";
import Counter from "./components/Counter/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/counter",
      name: "counter",
      component: Counter
    }
  ]
});
