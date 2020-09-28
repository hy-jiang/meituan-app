import axios from 'axios'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'jiangxiuyang_1591341166159'
  }
  return config
}, function () {
  return Promise.reject(error)
})

export default axios
