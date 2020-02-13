import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'
import FilmsView from '@/views/FilmsView';
import WatchedView from '@/views/WatchedView';

Vue.use(Router);

const router = new Router ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: FilmsView
    },
    {
      path: '/watched',
      name: 'watched',
      component: WatchedView
    }
  ]
})

export default router;
