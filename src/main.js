// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// vuex仓库
import store from "./store/index"
Vue.config.productionTip = false
//引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

import "./rem"
import axios from "./server/Server"
Vue.prototype.$axios =axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
