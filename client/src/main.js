import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Name from "./components/Name.vue";
import Semester from "./components/Semester.vue";
import Department from "./components/Department.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/name", component: Name, name: "name" },
  { path: "/semester", component: Semester, name: "semester" },
  { path: "/department", component: Department, name: "department" },
];

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
