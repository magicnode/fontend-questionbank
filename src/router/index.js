import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Element from 'components/Element';
import Topic from 'components/Topic';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/element',
    	name: 'Element',
    	component: Element
    },{
      path: '/topic',
      name: 'Topic',
      component: Topic
    }
  ],
});
