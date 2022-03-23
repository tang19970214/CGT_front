import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { configure,localize } from 'vee-validate'

Vue.use(VueI18n);
export default ({ app, store }) => {
    const nowLocale = app.$cookies.get('lang') || store.state.locale
    let obj = {}
    obj[nowLocale] = typeof store.state.langList === 'string' ? JSON.parse(store.state.langList) : store.state.langList;
    // 避免初次進入獲取不到值
    if (obj[nowLocale] === undefined) {
        obj[nowLocale] = require('~/locales/zh-tw.json')
    }

    app.i18n = new VueI18n({
        locale: app.$cookies.get('lang') || store.state.locale,
        fallbackLocale: 'zh-tw',
        messages: obj,
        // 消除 i18 警告
        silentTranslationWarn: true,
    })

    app.i18n.path = (link) => {
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`
        }
        return `/${app.i18n.locale}/${link}`
    }
 
    if(process.client) {
        // const getLocale = Cookies.get('lang') || store.state.locale;
        const getLocale = app.$cookies.get('lang') || store.state.locale;
        if(!getLocale || getLocale === 'zh-tw') {
            localize('zh_TW')
        } else {
            localize(getLocale)
        }
    }

    configure({
        defaultMessage: (field, values) => {
        values._field_ = app.i18n.t(`${field}`);
        return app.i18n.t(`validation.${values._rule_}`, values);
        }
    });
}