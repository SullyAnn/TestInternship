import Vue from 'vue'
import AspectRatio from 'v-aspect-ratio'
import VueMobileDetection from "vue-mobile-detection";
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(AspectRatio)
Vue.use(VueMobileDetection);



new Vue({
  render: h => h(App),
}).$mount('#app')

