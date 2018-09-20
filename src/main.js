import Vue from 'vue'
import App from './App.vue'
import FullCalendar from "vue-full-calendar";
import router from './router/index.js'
import "fullcalendar/dist/fullcalendar.min.css";

Vue.config.productionTip = false
Vue.use(FullCalendar);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
