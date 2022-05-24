import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router/index.js"
import "bootstrap"
import "./assets/app.scss"
import { firestorePlugin } from "vuefire"

const app = createApp(App).use(router)
app.use(router)
app.mount("#app")
