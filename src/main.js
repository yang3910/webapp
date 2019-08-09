import Vue from 'vue'
import App from './App.vue'
import store from 'store';
import router from 'router';
import {Input} from 'ant-design-vue';
import "swiper/dist/css/swiper.css"
import "./mock/index";

Vue.config.productionTip = false
Vue.use(Input);
new Vue({
  store,
  router,

  render: h => h(App)
}).$mount('#app')
