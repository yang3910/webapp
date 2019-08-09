import Vue from 'vue'
import App from './App.vue'
import store from 'store';
import router from 'router';
import observer from "./observer";
import "common/compoents/index.js"
import VueTouch from "vue-touch";
import { Row,Col,Button } from 'ant-design-vue';
Vue.prototype.$observer = observer;
Vue.config.productionTip = false
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.use(VueTouch, {name: 'v-touch'})
// Vue.use(Grid)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
