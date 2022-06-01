import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

import "@/assets/scss/element-variable.scss";
import ElementPlus from "element-plus";

import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
ApiService.init(app);
if (JwtService.getToken()) ApiService.setHeader();

app.use(store).use(router).use(ElementPlus).mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
