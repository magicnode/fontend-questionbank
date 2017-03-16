import Vue from 'vue';
import Router from 'vue-router';

import Index from 'view/Index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: 'paper/create',
        name: 'PaperCreate',
        component: require('view/PaperCreate')
      }, {
        path: 'paper/auto',
        name: 'PaperAuto',
        component: require('view/PaperAuto')
      }, {
        path: 'topic/create',
        name: 'TopicCreate',
        component: require('view/TopicCreate')
      }, {
        path: 'topic/show',
        name: 'TopicShow',
        component: require('view/TopicShow')
      }]
    }
  ]
});
