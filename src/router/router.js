import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/notes",
    name: "Notes",
    component: () => import("../views/Notes.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
