<template>
  <div>
    <div class="tip">{{ message }}</div>
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
  </div>
</template>

<script>
import { toRegister } from "../../../network/login";
import { mapActions, mapGetters } from "vuex";
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
      password: "",
      message: ""
    };
  },
  methods: {
    ...mapActions(["aLogin"]),
    handleSubmit() {
      this.message = "";
      const username = this.username;
      const password = this.password;
      const ackpassword = this.ackpassword;
      if (!username || !password) {
        this.message = "账号或密码不能为空！";
        return;
      }
      const userInfo = { username, password };
      if (this.submitType === "登录") {
        // 调用store的登录方法
        // 因为要将登录的状态存进store中
        this.aLogin(userInfo)
          .then(res => {
            if (res.status === 200) {
              console.log("登录成功");
            } else {
              this.message = res.errorMessage;
            }
          })
          .catch(err => {
            this.message = "请求出现错误，请稍候重试！";
          });
      } else {
        if (password !== ackpassword) {
          this.message = "两次输入密码不一致！";
          return;
        }
        toRegister(userInfo)
          .then(res => {
            if (res.status === 200) {
              this.$message({
                message: "注册成功！请登录！",
                type: "success"
              });
            } else {
              this.$message.error({
                message: res.errorMessage
              });
            }
          })
          .catch(err => {
            this.$message.error({
              message: "注册失败！"
            });
          });
      }
    }
  },
  computed: {
    ...mapGetters(["token", "userInfo"])
  }
};
</script>

<style scope>
/* 提示内容 */
.tip {
  color: rgb(216, 115, 115);
  height: 10px;
}

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
.input-box:nth-child(2) {
  margin-top: 10px;
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
