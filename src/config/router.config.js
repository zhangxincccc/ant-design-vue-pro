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
          {
            path: '/system/organization',
            name: 'organization',
            component: () => import('@/views/system/organization'),
            meta: {
              title: '组织机构管理',
              permission: ['system:organizations'],
              icon: workplace
            }
          },
          {
            path: '/system/department',
            name: 'department',
            component: () => import('@/views/system/department'),
            meta: {
              title: '部门管理',
              permission: ['system:departments'],
              icon: workplace
            }
          },
          {
            path: '/system/role',
            name: 'role',
            component: () => import('@/views/system/role'),
            meta: {
              title: '角色管理',
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
