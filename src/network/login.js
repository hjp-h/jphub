import {request} from './index'
// 登录请求
export function toLogin(data){
  return request({
    url:'/login',
    method: 'POST',
    data
  })
}
