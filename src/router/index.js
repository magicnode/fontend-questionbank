import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Menu from 'components/Menu';
import Element from 'components/Element';
import Main from 'components/Main';
import Topic from 'components/Topic';
import TopicIndex from 'components/TopicIndex';
import PaperHand from 'components/PaperHand';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PaperHand',
      component: PaperHand
    },
    {
    	path: '/element',
    	name: 'Element',
    	component: Element
    },{
      path: '/topic',
      name: 'Topic',
      component: Topic
    },{
      path: '/topic/index',
      name: 'TopicIndex',
      component: TopicIndex
    },{
      path: '/paper/hand',
      name: 'PaperHand',
      component: PaperHand
    }
  ],
});
