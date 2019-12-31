import VueRouter from "vue-router";

const routes = [
  { 
    path: '/', component: () => import("./pages/index/components")
  },
]

const router = new VueRouter({
  routes
});

export default router;