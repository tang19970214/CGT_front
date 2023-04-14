import Vue from 'vue'

export default ({ $request }, inject) => {
  const api = {
    language: {
      load(params) {
        return $request({
          url: "languagess/load",
          method: "get",
          params
        })
      }
    },
    banner: {
      load(params) {
        return $request({
          url: "bannerss/load",
          method: "get",
          params
        })
      }
    },
    news: {
      load(params) {
        return $request({
          url: "newss/load",
          method: "get",
          params
        })
      },
      get(params) {
        return $request({
          url: "newss/get",
          method: "get",
          params
        })
      },
    },
    category: {
      load(params) {
        return $request({
          url: "categorys/load",
          method: "get",
          params
        })
      },
    },
    product: {
      load(params) {
        return $request({
          url: "productss/loadClient",
          method: "get",
          params
        })
      },
      get(params) {
        return $request({
          url: "productss/getDetail",
          method: "get",
          params
        })
      },
      sendMail(data) {
        return $request({
          url: "productss/sendMail",
          method: "post",
          data
        })
      },
    },
    webSEO: {
      load(params) {
        return $request({
          url: "webSEO/loadByPath",
          method: "get",
          params
        })
      },
    },
  }

  Vue.prototype.api = api
  inject('api', api)
}
