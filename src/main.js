/*
 * @Author: your name
 * @Date: 2021-08-24 11:28:34
 * @LastEditTime: 2021-12-08 17:15:40
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ant-design-vue-pro\src\main.js
 */
// with polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/';
import i18n from './locales';
import { VueAxios } from './utils/request';
import ProLayout, { PageHeaderWrapper } from '@hangar/pro-layout';
import themePluginConfig from '../config/themePluginConfig';
import '@/layouts/scrollbar.less'; // progress bar custom style

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
// import './mock';

import bootstrap from './core/bootstrap';
import './core/lazy_use'; // use lazy load components
import './permission'; // permission control
import './utils/filter'; // global filter
import './global.less'; // global style

Vue.config.productionTip = false;

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios);
// use pro-layout components
Vue.component('pro-layout', ProLayout);
Vue.component('page-container', PageHeaderWrapper);
Vue.component('page-header-wrapper', PageHeaderWrapper);

window.umi_plugin_ant_themeVar = themePluginConfig.theme;

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: bootstrap,
  render: h => h(App)
}).$mount('#app');
