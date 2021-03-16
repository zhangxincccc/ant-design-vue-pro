// eslint-disable-next-line
import { BasicLayout, RouteView, UserLayout } from '@/layouts';
import { workplace, system, organization } from '@/core/icons';
import { demosRouter } from '@/config/demos-router.config';

// const RouteView = {
//   name: 'RouteView',
//   render: h => h('router-view')
// };
/*
注意：
多标签页请尽量避免使用三级路由，keep-alive存在问题
*/
export const defaultPage = '/workplace';
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: defaultPage, // 首页跳转地址
    children: [
      {
        path: '/workplace', // 工作台
        name: 'workplace',
        component: RouteView,
        hideChildrenInMenu: true,
        redirect: '/workplace/index',
        meta: { title: 'menu.workplace', icon: workplace, permission: ['system'] },
        children: [
          {
            path: '/workplace/index',
            name: 'Workplace',
            component: () => import('@/views/workplace/Workplace'),
            meta: { title: 'menu.workplace', icon: workplace, hidden: true }
          }
        ]
      },
      // 其他路由请在这里添加
      // ...
      {
        path: '/system',
        name: 'system',
        component: RouteView,
        redirect: '/system/organizations',
        meta: { title: 'menu.system', icon: system, permission: ['system'] },
        children: [
          {
            path: '/system/organizations',
            name: 'organizations',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/system/organizations/index'),
            meta: {
              title: 'menu.system.organizations',
              icon: organization,
              keepAlive: true,
              permission: ['system:organizations']
            }
          }
        ]
      },
      demosRouter // 如果不需要示例，请删除这里
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/403',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403')
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/500',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500')
  }
];
