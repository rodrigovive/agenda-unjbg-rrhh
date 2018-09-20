import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage.vue'
import AboutPage from '../components/about/Us.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
    name: 'HomePage',
    components: {
      default: HomePage,
    },
    },
    {
      path: '/acerca-de-nosotros',
      name: 'AboutPage',
      components: {
        default: AboutPage,
      },
    }],
})