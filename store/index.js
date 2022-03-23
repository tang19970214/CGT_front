import Cookies from "js-cookie";

export const state = () => ({
  locale: Cookies.get('lang') || 'zh-tw',
  locales: [],
  langList: {},
  productCategory: [],
});

export const mutations = {
  SET_LOCALES(state, payload) {
    state.locales = payload;
  },
  SET_LANG_LIST(state, payload) {
    state.langList = payload;
  },
  SET_PRODUCT_CATEGORY(state, payload) {
    state.productCategory = payload;
  },
  SET_LANG(state, locale) {
    let localesArr = state.locales.map((langs) => (langs.langCode))
      if (localesArr.indexOf(locale) !== -1) {
        Cookies.set('lang', locale);
        state.locale = locale;
      }
  },
}

export const actions = {
    GetLoales({ commit }, payload) {
      commit('SET_LOCALES', payload)
    },
    GetLangList({ commit }, payload) {
      commit('SET_LANG_LIST', payload)
    },
    GetProductCategory({commit}, payload) {
      commit('SET_PRODUCT_CATEGORY', payload)
    },
    INIT_LOCALE({ commit, state }) {
        let locale = Cookies.get('lang')
        let localesArr = state.locales.map((langs) => (langs.langCode))
        if (!localesArr.includes(locale)) {
            locale = 'zh-tw'
        }
        commit('SET_LANG', locale);
    },
}
