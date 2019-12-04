import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuelidate from 'vuelidate'

import AppDropdown from './components/shared/AppDropdown'
import AppHero from './components/shared/AppHero'

Vue.config.productionTip = false

Vue.component('AppHero', AppHero)
Vue.component('AppDropdown', AppDropdown)

Vue.use(vuelidate)

new Vue({
  router,
  vuelidate,
  render: h => h(App),
}).$mount('#app')
