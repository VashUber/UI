import { createApp } from "vue"
import App from "./App.vue"
import components from "./components/main"

const app = createApp(App)

Object.keys(components).forEach((name) => {
	app.component(name, components[name])
})

app.mount("#app")
