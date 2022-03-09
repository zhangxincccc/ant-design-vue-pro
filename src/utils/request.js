/*
 * @Author: your name
 * @Date: 2021-12-14 13:59:34
 * @LastEditTime: 2022-03-08 10:43:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ant-design-vue-pro\src\utils\request.js
 */
import axios from 'axios';
import store from '@/store';
import storage from 'store';
import notification from 'ant-design-vue/es/notification';
import { VueAxios } from './axios';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import VueCookies from 'vue-cookies';
// 异常拦截处理器
const errorHandler = error => {
  if (error.response) {
    const data = error.response.data;
    const token = storage.get(ACCESS_TOKEN) || VueCookies.get(ACCESS_TOKEN);
    // 从 localstorage 获取 token
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      });
    }
    if (error.response.status === 400) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      });
    }
    if (error.response.status === 500) {
      notification.error({
        message: '服务器错误',
        description: data.message
      });
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      });
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }
    }
  }
  return Promise.reject(error);
};

// request interceptor
axios.interceptors.request.use(config => {
  const token = storage.get(ACCESS_TOKEN);
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  config.headers['X-Requested-With'] = 'XMLHttpRequest ';
  return config;
}, errorHandler);

// response interceptor
axios.interceptors.response.use(response => {
  return response.data;
}, errorHandler);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, axios);
  }
};

export default axios;

export { installer as VueAxios, axios };
