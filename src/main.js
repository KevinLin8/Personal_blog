import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "reset-css";
import "./assets/css/global.css";
import { Tooltip } from "element-ui"; // 按需引入组件
Vue.component(Tooltip.name, Tooltip); // 注册全局组件
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
