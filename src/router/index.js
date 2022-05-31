import { createRouter, createWebHistory } from "vue-router"
import About from "@/views/About.vue"

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Notes",
    component: () => import("../views/Notes.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
