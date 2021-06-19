import {request} from './index'
// 登录请求
export function toLogin(data){
  return request({
    url:'/login',
    method: 'POST',
    data
  })
}

// 注册请求接口
export function toRegister(data){
  return request({
    url:'/register',
    method: 'POST',
    data
  })
}
