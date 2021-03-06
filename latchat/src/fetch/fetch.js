/**
 * 该文件主要是axios的请求和地址配置文件
 * */
import axios from 'axios'
import qs from 'qs'
// 超时时间设置
axios.defaults.timeout = 10000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
// 传参序列化（添加请求拦截器）
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  } else if (config.method === 'put') {
    config.data = qs.stringify(config.data)
  } else if (config.method === 'delete') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.resolve(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, (error) => {
  return Promise.resolve(error)
  // if (res.status && res.status === 200 && res.data.status === 'error') {
  //   return {message: res.data.msg}
  // }
  // return res
// }, error => {
//   if (error.response.status === 504 || error.response.status === 404) {
//     console.log(1)
//   } else if (error.response.status === 403) {
//     console.log(2)
//   } else {
//     console.log(3)
//   }
//   return Promise.resolve(error)
})

// 接口前缀，后期打算加多一个变量imgUrl，表示的是图片接口前缀
// let baseUrl = 'http://127.0.0.1:3000'

export function fetch (url, param, type) {
  if (type === 'GET') {
    // return new Promise((resolve, reject) => {
    //   axios.get(url, param)
    //     .then(response => {
    //       resolve(response.data)
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    //     .finally()
    // })
    return axios.get(url, param)
  } else if (type === 'POST') {
    // return new Promise((resolve, reject) => {
    //   axios.post(url, param)
    //     .then(response => {
    //       resolve(response.data)
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    // })
    return axios.post(url, param)
  } else if (type === 'PUT') {
    // return new Promise((resolve, reject) => {
    //   axios.put(url, param)
    //     .then(response => {
    //       resolve(response.data)
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    // })
    return axios.put(url, param)
  } else if (type === 'DELETE') {
    // return new Promise((resolve, reject) => {
    //   axios.delete(url, param)
    //     .then(response => {
    //       resolve(response.data)
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    // })
    return axios.delete(url, param)
  }
}
