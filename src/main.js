import Vue from 'vue'
import AspectRatio from 'v-aspect-ratio'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(AspectRatio)

new Vue({
  render: h => h(App),
}).$mount('#app')
