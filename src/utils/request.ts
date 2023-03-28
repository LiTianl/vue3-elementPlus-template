import axios from 'axios'
import {getItem} from './auto'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 2000,
  withCredentials: true
})

// 拦截请求
service.interceptors.request.use(
  async config => {
    if (getItem()){
      config.headers.Authorization = `Bearer ${getItem()}`
    }
    return config
  },
  error => Promise.reject(error)
)


// 拦截响应
service.interceptors.response.use(
  response => {
    return response.data
    // 如果响应状态码不是2XX 则进入error
  }, error => {
    return Promise.reject(error)
  }
)

export default service