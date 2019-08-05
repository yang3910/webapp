import Vue from 'vue'
import App from './App.vue'
import store from 'store';
import router from 'router';
import "common/compoents/index.js"
import { Row,Col,Button } from 'ant-design-vue';

Vue.config.productionTip = false
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
// Vue.use(Grid)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
