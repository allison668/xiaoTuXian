import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./styles/base.scss";

// .catch(err => {
//   console.error('请求出错', err);

// })

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
