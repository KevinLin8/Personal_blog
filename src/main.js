import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "reset-css";
import "./assets/css/global.css";
import { Tooltip, Input } from "element-ui"; // 按需引入组件
Vue.component(Tooltip.name, Tooltip); // 注册全局组件
Vue.component(Input.name, Input); // 注册全局组件

import VueParticles from "vue-particles";
Vue.use(VueParticles);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
