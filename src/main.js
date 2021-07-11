import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*// 引入插件
import vpay from './lib/vpay/lib/pay'
// 使用插件
Vue.use(vpay);*/
import myPlugin from "@/lib/vpay/lib";

Vue.use(myPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
