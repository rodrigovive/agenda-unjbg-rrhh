import Vue from 'vue'
import App from './App.vue'
import FullCalendar from "vue-full-calendar";
import router from './router/index.js'
import "fullcalendar/dist/fullcalendar.min.css";
import store from './store';

Vue.config.productionTip = false
Vue.use(FullCalendar);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
