// eslint-disable-next-line
import { bxAnalyse, demos, system } from '@/core/icons';
import { RouteView, PageView } from '@/layouts';
// const RouteView = {
//   name: 'RouteView',
//   render: h => h('router-view')
// };

export const demosRouter = {
  path: '/demos',
  name: 'demos',
  redirect: '/demos/dashboard',
  component: RouteView,
  meta: { title: 'menu.demos', keepAlive: true, icon: demos, permission: ['demos:dashboard'] },
  children: [
    // dashboard
    {
      path: '/demos/dashboard',
      name: 'dashboard',
      redirect: '/demos/dashboard/analysis',
      component: RouteView,
      meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnalyse, permission: ['demos:dashboard'] },
      children: [
        {
          path: '/demos/dashboard/analysis/:pageNo([1-9]\\d*)?',
          name: 'Analysis',
          component: () => import('@/views/demos/dashboard/Analysis'),
          meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['demos:dashboard:analysis'] }
        },
        // 外部链接
        {
          path: 'https://www.baidu.com/',
          name: 'Monitor',
          meta: { title: 'menu.dashboard.monitor', target: '_blank' }
        }
      ]
    },
    // forms
    {
      path: '/demos/form',
      redirect: '/demos/form/base-form',
      component: RouteView,
      meta: { title: 'menu.form', icon: 'form', permission: ['demos:form'] },
      children: [
        {
          path: '/demos/form/base-form',
          name: 'BaseForm',
          component: () => import('@/views/demos/form/basicForm'),
          meta: { title: 'menu.form.basic-form', keepAlive: true, permission: ['demos:form:basic'] }
        },
        {
          path: '/demos/form/step-form',
          name: 'StepForm',
          component: () => import('@/views/demos/form/stepForm/StepForm'),
          meta: { title: 'menu.form.step-form', keepAlive: true, permission: ['demos:form:step'] }
        },
        {
          path: '/demos/form/advanced-form',
          name: 'AdvanceForm',
          component: () => import('@/views/demos/form/advancedForm/AdvancedForm'),
          meta: { title: 'menu.form.advanced-form', keepAlive: true, permission: ['demos:form:advanced'] }
        }
      ]
    },
    // list
    {
      path: '/demos/list',
      name: 'list',
      component: RouteView,
      redirect: '/demos/list/table-list',
      meta: { title: 'menu.list', icon: 'table', permission: ['demos:list'] },
      children: [
        {
          path: '/demos/list/table-list/:pageNo([1-9]\\d*)?',
          name: 'TableList',
          hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
          component: () => import('@/views/demos/list/TableList'),
          meta: { title: 'menu.list.table-list', keepAlive: true, permission: ['demos:list:table'] }
        },
        {
          path: '/demos/list/basic-list',
          name: 'BasicList',
          component: () => import('@/views/demos/list/BasicList'),
          meta: { title: 'menu.list.basic-list', keepAlive: true, permission: ['demos:list:basic'] }
        },
        {
          path: '/demos/list/card',
          name: 'CardList',
          component: () => import('@/views/demos/list/CardList'),
          meta: { title: 'menu.list.card-list', keepAlive: true, permission: ['demos:list:card'] }
        },
        {
          path: '/demos/list/search',
          name: 'SearchList',
          component: () => import('@/views/demos/list/search/SearchLayout'),
          redirect: '/demos/list/search/article',
          meta: { title: 'menu.list.search-list', keepAlive: true, permission: ['demos:list:search'] },
          children: [
            {
              path: '/demos/list/search/article',
              name: 'SearchArticles',
              component: () => import('../views/demos/list/search/Article'),
              meta: { title: 'menu.list.search-list.articles', keepAlive: true, permission: ['demos:list:search:article'] }
            },
            {
              path: '/demos/list/search/project',
              name: 'SearchProjects',
              component: () => import('../views/demos/list/search/Projects'),
              meta: { title: 'menu.list.search-list.projects', keepAlive: true, permission: ['demos:list:search:project'] }
            },
            {
              path: '/demos/list/search/application',
              name: 'SearchApplications',
              component: () => import('../views/demos/list/search/Applications'),
              meta: { title: 'menu.list.search-list.applications', keepAlive: true, permission: ['demos:list:search:application'] }
            }
          ]
        }
      ]
    },

    // profile
    {
      path: '/demos/profile',
      name: 'profile',
      component: RouteView,
      redirect: '/demos/profile/basic',
      meta: { title: 'menu.profile', icon: 'profile', permission: ['demos:profile'] },
      children: [
        {
          path: '/demos/profile/basic',
          name: 'ProfileBasic',
          component: () => import('@/views/demos/profile/basic'),
          meta: { title: 'menu.profile.basic', permission: ['demos:profile:basic'] }
        },
        {
          path: '/demos/profile/advanced',
          name: 'ProfileAdvanced',
          component: () => import('@/views/demos/profile/advanced/Advanced'),
          meta: { title: 'menu.profile.advanced', permission: ['demos:profile:advanced'] }
        }
      ]
    },

    // result
    {
      path: '/demos/result',
      name: 'result',
      component: RouteView,
      redirect: '/demos/result/success',
      meta: { title: 'menu.result', icon: 'check-circle-o', permission: ['demos:result'] },
      children: [
        {
          path: '/demos/result/success',
          name: 'ResultSuccess',
          component: () => import(/* webpackChunkName: "result" */ '@/views/demos/result/Success'),
          meta: {
            title: 'menu.result.success',
            keepAlive: false,
            hiddenHeaderContent: true,
            permission: ['demos:result:success']
          }
        },
        {
          path: '/demos/result/fail',
          name: 'ResultFail',
          component: () => import(/* webpackChunkName: "result" */ '@/views/demos/result/Error'),
          meta: {
            title: 'menu.result.fail',
            keepAlive: false,
            hiddenHeaderContent: true,
            permission: ['demos:result:fail']
          }
        }
      ]
    },

    // Exception
    {
      path: '/demos/exception',
      name: 'exception',
      component: RouteView,
      redirect: '/demos/exception/403',
      meta: { title: 'menu.exception', icon: 'warning', permission: ['demos:exception'] },
      children: [
        {
          path: '/demos/exception/403',
          name: 'Exception403',
          component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
          meta: { title: 'menu.exception.not-permission', permission: ['demos:exception:403'] }
        },
        {
          path: '/demos/exception/404',
          name: 'Exception404',
          component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
          meta: { title: 'menu.exception.not-find', permission: ['demos:exception:404'] }
        },
        {
          path: '/demos/exception/500',
          name: 'Exception500',
          component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
          meta: { title: 'menu.exception.server-error', permission: ['demos:exception:500'] }
        }
      ]
    },

    // account
    {
      path: '/demos/account',
      component: RouteView,
      redirect: '/demos/account/center',
      name: 'account',
      meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['demos:account'] },
      children: [
        {
          path: '/demos/account/center',
          name: 'AccountCenter',
          component: () => import('@/views/demos/account/center'),
          meta: { title: 'menu.account.center', keepAlive: true, permission: ['demos:account:center'] }
        },
        {
          path: '/demos/account/settings',
          name: 'AccountSettings',
          component: () => import('@/views/demos/account/settings/Index'),
          meta: { title: 'menu.account.settings', hideHeader: true, permission: ['demos:account:settings'] },
          redirect: '/demos/account/settings/basic',
          hideChildrenInMenu: true,
          children: [
            {
              path: '/demos/account/settings/basic',
              name: 'AccountBasicSettings',
              component: () => import('@/views/demos/account/settings/BasicSetting'),
              meta: {
                title: 'account.settings.menuMap.basic',
                hidden: true,
                permission: ['demos:account:settings:basic']
              }
            },
            {
              path: '/demos/account/settings/security',
              name: 'AccountSecuritySettings',
              component: () => import('@/views/demos/account/settings/Security'),
              meta: {
                title: 'account.settings.menuMap.security',
                hidden: true,
                keepAlive: true,
                permission: ['demos:account:settings:security']
              }
            },
            {
              path: '/demos/account/settings/custom',
              name: 'AccountCustomSettings',
              component: () => import('@/views/demos/account/settings/Custom'),
              meta: {
                title: 'account.settings.menuMap.custom',
                hidden: true,
                keepAlive: true,
                permission: ['demos:account:settings:custom']
              }
            },
            {
              path: '/demos/account/settings/binding',
              name: 'AccountBindingSettings',
              component: () => import('@/views/demos/account/settings/Binding'),
              meta: {
                title: 'account.settings.menuMap.binding',
                hidden: true,
                keepAlive: true,
                permission: ['demos:account:settings:binding']
              }
            },
            {
              path: '/demos/account/settings/notification',
              name: 'AccountNotificationSettings',
              component: () => import('@/views/demos/account/settings/Notification'),
              meta: {
                title: 'account.settings.menuMap.notification',
                hidden: true,
                keepAlive: true,
                permission: ['demos:account:settings:notification']
              }
            }
          ]
        }
      ]
    },

    // other
    {
      path: '/demos/other',
      name: 'otherPage',
      component: PageView,
      meta: { title: '其他组件', icon: 'slack' },
      redirect: '/demos/other/icon-selector',
      children: [
        {
          path: '/demos/other/icon-selector',
          name: 'TestIconSelect',
          component: () => import('@/views/demos/other/IconSelectorView'),
          meta: { title: 'IconSelector', icon: 'tool', keepAlive: true }
        },
        {
          path: '/demos/other/list',
          component: RouteView,
          meta: { title: '业务布局', icon: 'layout' },
          redirect: '/demos/other/list/tree-list',
          children: [
            {
              path: '/demos/other/list/tree-list',
              name: 'TreeList',
              component: () => import('@/views/demos/other/TreeList'),
              meta: { title: '树目录表格', keepAlive: true }
            },
            {
              path: '/demos/other/list/edit-table',
              name: 'EditList',
              component: () => import('@/views/demos/other/TableInnerEditList'),
              meta: { title: '内联编辑表格', keepAlive: true }
            },
            {
              path: '/demos/other/list/user-list',
              name: 'UserList',
              component: () => import('@/views/demos/other/UserList'),
              meta: { title: '用户列表', keepAlive: true }
            },
            {
              path: '/demos/other/list/role-list',
              name: 'RoleList',
              component: () => import('@/views/demos/other/RoleList'),
              meta: { title: '角色列表', keepAlive: true }
            },
            {
              path: '/demos/other/list/system-role',
              name: 'SystemRole',
              component: () => import('@/views/demos/other/RoleList2'),
              meta: { title: '角色列表2', keepAlive: true }
            },
            {
              path: '/demos/other/list/permission-list',
              name: 'PermissionList',
              component: () => import('@/views/demos/other/PermissionList'),
              meta: { title: '权限列表', keepAlive: true }
            }
          ]
        }
      ]
    }
  ]
};
