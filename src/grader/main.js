import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon';

Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
