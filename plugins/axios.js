import Swal from 'sweetalert2'

export default ({ $axios }, inject) => {
  const service = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      }
    }
  })
  service.setBaseURL(process.env.VUE_APP_BASE_API)

  service.interceptors.response.use((response) => {
    if (response.data.code !== 200) {
      Swal.fire({
        icon: 'error',
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      return response
    }
  }, (errorRes) => {
    switch (errorRes.response.status) {
      case 401:
        console.log('401 error')
        break
      case 404:
        console.log('404 error')
        break
      case 500:
        console.log('500 error')
        break
      default:
        console.log(errorRes.response.status);
        break
    }
  })

  inject('request', service)
}

