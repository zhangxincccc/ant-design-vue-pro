/*
 * @Author: your name
 * @Date: 2022-01-06 09:06:29
 * @LastEditTime: 2022-03-15 10:27:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ceshi\src\permission.js
 */
import router from './router';
import store from './store';
import NProgress from 'nprogress'; // progress bar
import '@/components/NProgress/nprogress.less'; // progress bar custom style
import notification from 'ant-design-vue/es/notification';
import { domTitle, setDocumentTitle } from '@/utils/domUtil';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import { i18nRender } from '@/locales';
// import VueCookies from 'vue-cookies';
import storage from 'store';
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const allowList = ['login', 'register', 'registerResult']; // no redirect allowList
const loginRoutePath = '/user/login';
const defaultRoutePath = '/';

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`);
  store.dispatch('generateEnumMap');
  /* has token */
  if (storage.get(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath });
      NProgress.done();
    } else {
      // check login user.roles is null
      if (store.getters.roles.length === 0) {
        // request login userInfo
        store
          .dispatch('GetInfo')
          .then(res => {
            const permissions = res && res.permissions;
            // generate dynamic router
            store.dispatch('GenerateRoutes', permissions).then(() => {
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表
              router.addRoutes(store.getters.addRouters);
              // 请求带有 redirect 重定向时，登录自动重定向到该地址
              const redirect = decodeURIComponent(from.query.redirect || to.path);
              if (to.path === redirect) {
                // set the replace: true so the navigation will not leave a history record
                next({ ...to, replace: true });
              } else {
                // 跳转到目的路由
                next({ path: redirect });
              }
            });
          })
          .catch((err) => {
            notification.error({
              message: '错误',
              description: err
            });
            // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
            store.dispatch('Logout').then(() => {
              next({ path: loginRoutePath, query: { redirect: to.fullPath } });
            });
          });
      } else {
        next();
      }
    }
  } else {
    if (allowList.includes(to.name)) {
      // 在免登录名单，直接进入
      next();
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } });
      NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
