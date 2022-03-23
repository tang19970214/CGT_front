import Vue from 'vue';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';

const locales = {
  'zh-tw': () => import('dayjs/locale/zh-tw'),
  'en': () => import('dayjs/locale/en'),
}

function loadLocale (language) {
  if(locales[language]) {
    locales[language]().then(() => dayjs.locale(language))
  } else {
    locales['zh-tw']().then(() => dayjs.locale('zh-tw'))
  }
}

loadLocale(Cookies.get('lang')|| 'zh-tw')

const timePlugin = {
    install(Vue) {
        Vue.prototype.$dayjs = dayjs;
    }
}

Vue.use(timePlugin);