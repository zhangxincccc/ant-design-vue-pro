import storage from 'store';
import {
  SIDEBAR_TYPE,
  TOGGLE_MOBILE_TYPE,
  TOGGLE_NAV_THEME,
  TOGGLE_LAYOUT,
  TOGGLE_FIXED_HEADER,
  TOGGLE_FIXED_SIDEBAR,
  TOGGLE_CONTENT_WIDTH,
  TOGGLE_HIDE_HEADER,
  TOGGLE_COLOR,
  TOGGLE_WEAK,
  TOGGLE_MULTI_TAB,
  // i18n
  APP_LANGUAGE,
  ADD_CACHED_VIEWS,
  REMOVE_CACHED_VIEWS
} from '@/store/mutation-types';
import { loadLanguageAsync } from '@/locales';

function removeViewCache(removedView) {
  const view = removedView.matched[removedView.matched.length - 1];
  const $vnode = view.instances.default.$vnode;
  if ($vnode && $vnode.data.keepAlive) {
    if ($vnode.parent && $vnode.parent.componentInstance && $vnode.parent.componentInstance.cache) {
      if ($vnode.componentOptions) {
        const key =
          $vnode.key == null
            ? $vnode.componentOptions.Ctor.cid + ($vnode.componentOptions.tag ? `::${$vnode.componentOptions.tag}` : '')
            : $vnode.key;
        const cache = $vnode.parent.componentInstance.cache;
        const keys = $vnode.parent.componentInstance.keys;
        if (cache[key]) {
          if (keys.length) {
            const index = keys.indexOf(key);
            if (index > -1) {
              keys.splice(index, 1);
            }
          }
          delete cache[key];
        }
      }
    }
  }
}

const app = {
  state: {
    sideCollapsed: false,
    isMobile: false,
    theme: 'dark',
    layout: '',
    contentWidth: '',
    fixedHeader: false,
    fixedSidebar: false,
    autoHideHeader: false,
    color: '',
    weak: false,
    multiTab: false,
    lang: 'en-US',
    _antLocale: {},
    cacheViews: []
  },
  mutations: {
    [SIDEBAR_TYPE]: (state, type) => {
      state.sideCollapsed = type;
      storage.set(SIDEBAR_TYPE, type);
    },
    [TOGGLE_MOBILE_TYPE]: (state, isMobile) => {
      state.isMobile = isMobile;
    },
    [TOGGLE_NAV_THEME]: (state, theme) => {
      state.theme = theme;
      storage.set(TOGGLE_NAV_THEME, theme);
    },
    [TOGGLE_LAYOUT]: (state, mode) => {
      state.layout = mode;
      storage.set(TOGGLE_LAYOUT, mode);
    },
    [TOGGLE_FIXED_HEADER]: (state, mode) => {
      state.fixedHeader = mode;
      storage.set(TOGGLE_FIXED_HEADER, mode);
    },
    [TOGGLE_FIXED_SIDEBAR]: (state, mode) => {
      state.fixedSidebar = mode;
      storage.set(TOGGLE_FIXED_SIDEBAR, mode);
    },
    [TOGGLE_CONTENT_WIDTH]: (state, type) => {
      state.contentWidth = type;
      storage.set(TOGGLE_CONTENT_WIDTH, type);
    },
    [TOGGLE_HIDE_HEADER]: (state, type) => {
      state.autoHideHeader = type;
      storage.set(TOGGLE_HIDE_HEADER, type);
    },
    [TOGGLE_COLOR]: (state, color) => {
      state.color = color;
      storage.set(TOGGLE_COLOR, color);
    },
    [TOGGLE_WEAK]: (state, mode) => {
      state.weak = mode;
      storage.set(TOGGLE_WEAK, mode);
    },
    [APP_LANGUAGE]: (state, lang, antd = {}) => {
      state.lang = lang;
      state._antLocale = antd;
      storage.set(APP_LANGUAGE, lang);
    },
    [TOGGLE_MULTI_TAB]: (state, bool) => {
      storage.set(TOGGLE_MULTI_TAB, bool);
      state.multiTab = bool;
    },
    [ADD_CACHED_VIEWS]: (state, view) => {
      console.log(view);
      if (!state.cacheViews.find(v => v.fullPath === view.fullPath)) {
        state.cacheViews.push(view);
      }
    },
    [REMOVE_CACHED_VIEWS]: (state, view) => {
      const viewIndex = state.cacheViews.findIndex(v => v.fullPath === view.fullPath);
      const removedView = state.cacheViews.find(v => v.fullPath === view.fullPath);
      if (viewIndex > -1) {
        state.cacheViews.splice(viewIndex, 1);
        removeViewCache(removedView);
      }
    }
  },
  actions: {
    setLang({ commit }, lang) {
      return new Promise((resolve, reject) => {
        commit(APP_LANGUAGE, lang);
        loadLanguageAsync(lang)
          .then(() => {
            resolve();
          })
          .catch(e => {
            reject(e);
          });
      });
    },
    addCachedView({ commit }, view) {
      return new Promise((resolve, reject) => {
        commit(ADD_CACHED_VIEWS, view);
        resolve();
      });
    },
    removeCachedView({ commit }, view) {
      return new Promise((resolve, reject) => {
        commit(REMOVE_CACHED_VIEWS, view);
        resolve();
      });
    }
  }
};

export default app;
