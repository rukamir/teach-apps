import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Icon from 'vue-awesome/components/Icon';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.component('v-icon', Icon)

new Vue({
  render: h => h(App)
}).$mount('#app')
