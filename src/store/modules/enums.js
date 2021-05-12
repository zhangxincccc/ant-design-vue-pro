import storage from 'store';
import { ENUM_MAP } from '@/store/mutation-types';
import { enumsAll } from '@/api';

const enums = {
    state: {
        map: {}
    },
    mutations: {
        SET_ENUM_MAP: (state, map) => {
            state.map = map;
        }
    },
    actions: {
        generateEnumMap({ commit }) {
            const map = storage.get(ENUM_MAP) || {};
            if (Object.keys(map).length > 0) {
                commit('SET_ENUM_MAP', map);
            } else {
                enumsAll().then(res => {
                    storage.set(ENUM_MAP, res.data);
                    commit('SET_ENUM_MAP', res.data);
                });
            }
        }
    }
};

export default enums;
