import Vue from 'vue'

Vue.directive('lazy', {
  // eslint-disable-next-line no-unused-vars
  inserted(el, binding) {
    const observer = new IntersectionObserver(onEnterView)
    observer.observe(el)

    async function onEnterView(entries) {
      for (let i = 0; i < entries.length; i += 1) {
        if (entries[i].isIntersecting) {
          const target = entries[i].target
          target.setAttribute('src', '/images/img_loading.gif')

          const exist = await imageIsExist(binding.value)

          if (exist) {
            target.setAttribute('src', binding.value)
          } else {
            target.setAttribute('src', '/images/loading_error.png')
          }
          observer.unobserve(target)
        }
      }
    }

    async function imageIsExist(url) {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = function () {
          if (this.complete === true) {
            resolve(true)
          }
        }
        img.onerror = function () {
          resolve(false)
        }
        img.src = url
      })
    }
  }
})
