import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: EventList
  },
  {
    path: "/show",
    name: "Show",
    component: EventShow
  },
  {
    path: "/create",
    name: "Create",
    component: EventCreate
  },
];

const router = new VueRouter({
  routes
});

export default router;
