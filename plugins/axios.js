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
    console.error(errorRes.response.status);
  })

  inject('request', service)
}

