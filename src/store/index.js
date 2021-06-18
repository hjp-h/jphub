import Vue from 'vue'
import Vuex from 'vuex'
// 在Vue中安装vuex
Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
  state: {
    token:'',
    userInfo:{userId:'',userName:''}
  },
  mutations:{
    setToken(state,payload) {
      state.token = payload
    },
    setUserInfo(state,payload) {
      state.userInfo.userId = payload.userId;
      state.userInfo.userName = payload.userName;
    }
  },
  actions:{
    aLogin({commit},userInfo){
      return new Promise((resolve, reject) => {
        // 调用登录接口发送请求
      })
    }
  }
})

export default store
