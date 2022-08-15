import Vue from "vue";
import VueRouter from "vue-router";
import Estrutura from "../layouts/EstruturaPadrao.vue";
import Branca from "../layouts/EstruturaBranca.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Estrutura,
    children: [
      {
        name: "Home",
        path: "",
        component: HomeView,
      },
    ],
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
