import Vue from 'vue'
import { required, min } from 'vee-validate/dist/rules'
import * as rules from "vee-validate/dist/rules";
import { ValidationProvider,ValidationObserver, extend, localize} from 'vee-validate'
import tw from "vee-validate/dist/locale/zh_TW.json";

localize('zh_TW', tw);
extend('required',required)
extend('min', min); //最小用冒號 ex. max:8

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});


// phone
extend('phone', {
  validate: (val) => {
    if (val.match(/^[0]{1}[9]{1}[0-9]{8}$/)) {
      return true
    } else {
      return false
    }
  }
})

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
