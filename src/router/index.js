// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GraficheView from "../views/GraficheView.vue";
import ProgettiView from "../views/ProgettiView.vue";
import ContattiView from "../views/ContattiView.vue";
import ForumView from "../views/ForumView.vue";
import CarrelloView from "../views/CarrelloView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/grafiche", component: GraficheView },
  { path: "/progetti", component: ProgettiView },
  { path: "/contatti", component: ContattiView },
  { path: "/forum", component: ForumView },
  { path: "/carrello", component: CarrelloView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
