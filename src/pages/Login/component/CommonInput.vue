<template>
  <div>
    <el-input class="input-box" placeholder="请输入账号" v-model="username">
      <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
    </el-input>
    <el-input
      class="input-box"
      placeholder="请输入密码"
      v-model="password"
      show-password
    >
      <i slot="prefix" class="el-input__icon el-icon-lock"></i>
    </el-input>
    <slot name="ackInput"> </slot>
    <el-button @click="handleSubmit" class="submit-btn" type="primary">{{
      submitType
    }}</el-button>
    <slot name="loginFooter"></slot>
    <div class="footer">
      <slot name="registerFooter"></slot>
    </div>
  </div>
</template>

<script>
import { toLogin } from "../../../network/login";
export default {
  name: "CommonInput",
  props: {
    submitType: {
      type: String,
      default: ""
    },
    ackpassword: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      const userInfo = { username: this.username, password: this.password };
      toLogin(userInfo)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scope>
/* tab切换的文字 */
.el-tabs__item {
  font-size: 24px;
  color: #ffffff;
}
/* tab的底边 */
.el-tabs__nav-wrap::after {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  z-index: 1;
}
.input-box {
  margin-top: 20px;
}
.input-box:nth-child(1) {
  margin-top: 50px;
}
.submit-btn {
  margin-top: 20px;
  width: 300px;
}
.remember-box {
  margin-top: 20px;
  height: 30px;
}
.other-mode {
  margin-top: 20px;
}
.icon-weixin1,
.icon-QQ {
  display: inline-block;
  font-size: 24px;
  /* color:rgb(97, 202, 171) */
}
.login-mode-link {
  margin-left: 20px;
}
.footer {
  margin-top: 20px;
}
</style>
