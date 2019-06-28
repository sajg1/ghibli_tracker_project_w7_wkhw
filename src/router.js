import Vue from 'vue';
import Router from 'vue-router';
import FilmsView from '@/views/FilmsView'
import Watched from '@/views/Watched'

Vue.use(Router);

const router = new Router ({
  routes: [
    {
      path: '/films',
      name: 'films',
      component: FilmsView
    },
    {
      path: '/watched',
      name: 'watched',
      component: Watched
    }
  ]
})

export default router;
