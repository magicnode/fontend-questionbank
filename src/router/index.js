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
        path: 'paper/show',
        name: 'PaperShow',
        component: require('view/PaperShow')
      }, {
        path: 'paper/demo',
        name: 'PaperDemo',
        component: require('view/PaperDemo')
      }, {
        path: 'topic/create',
        name: 'TopicCreate',
        component: require('view/TopicCreate')
      }, {
        path: 'topic/show',
        name: 'TopicShow',
        component: require('view/TopicShow')
      }, {
        path: '/login',
        name: 'Login',
        component: require('view/Login')
      }]
    }
  ]
});
