// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css';

import Vue from 'vue';
import Vuex from 'vuex';
import AMap from 'vue-amap';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';

import App from './App';
import router from './router';

Vue.use(Vuex)
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(AMap);

AMap.initAMapApiLoader({
  key: '2ed5112b80c22bcbf7236155d7008d25',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

Vue.http.options.root = process.env.NODE_ENV === 'production' ? 'https://github.com' :'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    http: {
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }
});
