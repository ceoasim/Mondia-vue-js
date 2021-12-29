import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/task",
      name: "tasks",
      component: () => import("./components/TasksList")
    },
    {
      path: "/addTeam",
      name: "addTeam",
      component: () => import("./components/AddTeam")
    },
    {
      path: "/addEmployee",
      name: "addEmployee",
      component: () => import("./components/AddEmployee")
    },
   
  ]
});
