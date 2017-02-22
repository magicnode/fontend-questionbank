// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css';

import Vue from 'vue';
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';

import App from './App';
import router from './router';



Vue.use(Vuex)
Vue.use(VueResource);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    http: {
        root: 'localhost:3000/',
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }
});
