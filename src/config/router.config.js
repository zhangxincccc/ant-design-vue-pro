import { BasicLayout, UserLayout } from '@/layouts';
import { RouteView } from '@hangar/pro-layout';
import { workplace, system } from '@/core/icons';
import { demosRouter } from '@/config/demos-router.config';
/*
注意：
多标签页请尽量避免使用三级路由，多标签页存在问题
*/
export const defaultPage = '/workplace';
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: {
      title: 'menu.home'
    },
    redirect: defaultPage, // 首页跳转地址
    children: [
      {
        path: '/workplace',
        name: 'Workplace',
        component: () => import('@/views/workplace/Workplace'),
        meta: {
          title: 'menu.workplace',
          icon: workplace
        }
      },
      // 其他路由请在这里添加
      // ...
      {
        path: '/system',
        name: 'system',
        component: RouteView,
        redirect: '/system/organizations',
        meta: {
          title: 'menu.system',
          icon: system,
          permission: ['system']
        },
        children: [
          // {
          //   path: '/system/organizations',
          //   name: 'organizations',
          //   hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
          //   component: () => import('@/views/system/organizations/index'),
          //   meta: {
          //     title: 'menu.system.organizations',
          //     icon: organization,
          //     keepAlive: true,
          //      permission: ['system:organizations']
          //   }
          // },
          {
            path: '/system/user',
            name: 'user',
            component: () => import('@/views/system/user'),
            meta: {
              title: '用户管理',
              permission: ['system:users'],
              icon: workplace
            }
          },
          {
            path: '/system/organization',
            name: 'organization',
            component: () => import('@/views/system/organization'),
            meta: {
              title: '组织机构',
              icon: workplace
            }
          }
        ]
      },
      demosRouter
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
        component: () => import('@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import('@/views/user/RegisterResult')
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
    component: () => import('@/views/exception/403')
  },
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  },
  {
    path: '/500',
    component: () => import('@/views/exception/500')
  }
];
