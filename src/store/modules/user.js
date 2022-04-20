import storage from 'store';
import { loginByUsername, logout } from '@/api/auth';
import { userInfo } from '@/api';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import { welcome } from '@/utils/util';
import VueCookies from 'vue-cookies';
const user = {
  state: {
    // 统一配置分页的选择条数
    defaultPaginationOptions: ['5', '7', '10'],
    // 统一配置分页的默认一页条数
    defaultPaginationPagesize: 10,
    welcome: '',
    avatar: '',
    roles: [],
    permissions: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name;
      state.welcome = welcome;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    }
  },

  actions: {
    // 登录
    Login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        loginByUsername(username, password)
          .then(result => {
            storage.set(ACCESS_TOKEN, result.access_token, 7 * 24 * 60 * 60 * 1000);
            VueCookies.set(ACCESS_TOKEN, result.access_token, -1);
            commit('SET_TOKEN', result.access_token);
            resolve(result);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        userInfo()
          .then(response => {
            if (response.code === 200 && response.data) {
              const result = response.data;
              if (result.roles && result.roles.length > 0 && result.permissions && result.permissions.length > 0) {
                commit('SET_ROLES', result.roles);
                commit('SET_PERMISSIONS', result.permissions);
                commit('SET_INFO', result);
              } else {
                reject(new Error('用户角色和权限不能为空'));
              }

              commit('SET_NAME', { name: result.name, welcome: welcome() });
              commit('SET_AVATAR', result.avatar);

              resolve(result);
            } else {
              reject(new Error('获取用户信息失败'));
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    Logout({ commit, state }) {
      console.log('commit, state', commit, state, process.env.VUE_APP_AUTHORIZATION_GRANT_TYPE);
      return new Promise(resolve => {
        // commit('SET_TOKEN', '');
        // commit('SET_ROLES', []);
        // commit('SET_PERMISSIONS', []);
        // storage.remove(ACCESS_TOKEN);
        // VueCookies.remove(ACCESS_TOKEN);
        // resolve();
        if (process.env.VUE_APP_AUTHORIZATION_GRANT_TYPE !== 'authorization_code') {
          logout(state.token)
            .then(() => {
              commit('SET_TOKEN', '');
              commit('SET_ROLES', []);
              commit('SET_PERMISSIONS', []);
              storage.remove(ACCESS_TOKEN);
              VueCookies.remove(ACCESS_TOKEN);
              resolve();
            })
            .catch(() => {
              resolve();
            })
            .finally(() => {});
        } else {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          commit('SET_PERMISSIONS', []);
          storage.remove(ACCESS_TOKEN);
          VueCookies.remove(ACCESS_TOKEN);
          resolve();
        }
      });
    }
  }
};

export default user;
