import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router/router.js"
import "bootstrap"
import "./assets/app.scss"
import { firestorePlugin } from "vuefire"

const app = createApp(App)
app.use(router)
app.mount("#app")
