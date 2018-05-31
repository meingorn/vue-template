import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import HelloWorld from '@/components/HelloWorld';
import Playground from '@/components/Playground';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/playground',
      name: 'Playground',
      component: Playground,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
