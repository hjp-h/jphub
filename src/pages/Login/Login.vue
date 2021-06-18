<template>
  <div id="login">
    <h2 class="slogan" style="top: 30px;">让世界看到你</h2>
    <div id="container-box">
      <div id="container">
        <div id="content">
          <el-tabs class="tab" v-model="activeName">
            <el-tab-pane label="登录" name="first">
              <common-input submitType="登录">
                <div slot="loginFooter">
                  <div class="remember-box">
                    <div class="left">
                      <input type="checkbox" />
                      <span>记住账号</span>
                    </div>
                    <div class="right">
                      <span>忘记密码？</span>
                    </div>
                  </div>
                  <div class="other-mode">
                    <span>其他登录方式</span>
                    <a
                      class="login-mode-link"
                      title="用微信登录"
                      href="javascript:;"
                    >
                      <i class="iconfont icon-weixin1"></i>
                    </a>
                    <a
                      class="login-mode-link"
                      title="用QQ登录"
                      href="javascript:;"
                    >
                      <i class="iconfont icon-QQ"></i>
                    </a>
                  </div>
                </div>
              </common-input>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
              <common-input :ackpassword="ackpassword" submitType="注册">
                <el-input
                  slot="ackInput"
                  class="input-box"
                  placeholder="请再次输入密码"
                  v-model="ackpassword"
                  show-password
                >
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <span slot="registerFooter">已有账号？<a>登录</a></span>
              </common-input>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonInput from "./component/CommonInput";

export default {
  name: "login",
  components: {
    CommonInput
  },
  data() {
    return {
      activeName: "first",
      ackpassword: ""
    };
  },
  methods: {}
};
</script>

<style scope>
#login {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login/login_screen_bg.jpg") no-repeat;
  background-size: cover;
}
.slogan {
  width: 523px;
  height: 108px;
  background: url("../../assets/images/login/login_slogan.png") center 0
    no-repeat;
  font-size: 0;
  color: transparent;
  position: absolute;
  z-index: 4;
  left: 50%;
  margin-left: -250px;
  top: 0;
}
#container-box {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 700px;
}
#container {
  /* 46 64 105 */
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 500px;
  background-image: linear-gradient(
    to right,
    rgba(40, 54, 82, 0.8),
    rgba(76, 104, 170, 0.8)
  );
  border-radius: 25px;
}
#content {
  position: relative;
  top: 50px;
  left: 75px;
  width: 300px;
  color: rgb(243, 240, 240);
}
</style>
