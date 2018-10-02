import Vue from 'vue'
import App from './App.vue'
import FullCalendar from "vue-full-calendar";
import router from './router/index.js'
import "fullcalendar/dist/fullcalendar.min.css";
import store from './store';
import loadingMixin from './components/includes/loading-mixin';

Vue.config.productionTip = false
Vue.use(FullCalendar);
Vue.mixin(loadingMixin)

new Vue({
  render: h => h(App),
  router,
  store,
  data: {
    isLoading: true
  }
}).$mount('#app')
