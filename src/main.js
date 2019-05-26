import Vue from 'vue'

//this is where we import the exported data from the App.vue file
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
