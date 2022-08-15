import Vue from "vue";
import VueRouter from "vue-router";
import Estrutura from "../layouts/EstruturaPadrao.vue";
import Branca from "../layouts/EstruturaBranca.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/estrutura",
    component: Estrutura,
  },
  {
    path: "/branca",
    component: Branca,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
