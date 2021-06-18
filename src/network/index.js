import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'/api',
    timeout:10000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    return config;
  },err => {
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res;
  },err => {
    console.log(err)
  })

  // 配置好上述条件后 返回axios实例
  return instance(config);
}
