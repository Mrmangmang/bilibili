import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';
import http from "../http";
import { Toast } from 'vant';

Vue.prototype.$msg= Toast
Vue.use(Toast);
//这样便可以在任意组件获取
Vue.prototype.$http=http
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
