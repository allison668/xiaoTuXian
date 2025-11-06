import axios from "axios";

const http = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})

//拦截器
//请求
http.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))
//响应
http.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})



export default http
