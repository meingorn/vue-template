import Vue from 'vue';
import Router from 'vue-router';
import DraggableTable from '@/components/DraggableTable';
import HelloWorld from '@/components/HelloWorld';
import Playground from '@/components/Playground';
import About from '@/components/About';
import VueSimpleSuggest from '@/components/VueSimpleSuggest';
import VueInstant from '@/components/VueInstant';
import Datepicker from '@/components/Datepicker';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/DraggableTable',
      name: 'DraggableTable',
      component: DraggableTable,
    },
    {
      path: '/',
      name: 'Datepicker',
      component: Datepicker,
    },
    {
      path: '/inputs',
      name: 'VueSimpleSuggest',
      component: VueSimpleSuggest,
    },
    {
      path: '/vueinstant',
      name: 'VueInstant',
      component: VueInstant,
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
