import Vue from 'vue'
import Vuex from 'vuex'
import { toLogin } from "../network/login";
// 在Vue中安装vuex
Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
  state: {
    token:'',
    userInfo:{userId:'',userName:''}
  },
  mutations:{
    setToken(state,token) {
      state.token = token
    },
    setUserInfo(state,userInfo) {
      state.userInfo.userId = userInfo.userId;
      state.userInfo.userName = userInfo.userName;
    }
  },
  actions:{
    aLogin({commit},userInfo){
      return new Promise((resolve, reject) => {
        // 调用登录接口发送请求
        toLogin(userInfo)
        .then(res => {
          if(res.status === 200) {
            console.log(res);
            const {id,name,token} = res;
            const userInfo = {id:id,name:name};
            // 将用户信息 token保存在本地
            localStorage.setItem("access_token",token);
            localStorage.setItem("userInfo",userInfo);
            // 将用户信息保存在vuex中
            commit('setToken',token);
            commit('setUserInfo',userInfo);
            // 返回给视图层
            resolve(res);
          }else{
            // 返回给视图层
            resolve(res);
          }
        })
        .catch(err => {
          reject(err);
        });
      })
    }
  },
  getters:{
    token: state => state.token,
    userInfo: state => state.userInfo
  }
})

export default store
