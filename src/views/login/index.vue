<template>
  <el-row class="login-wrapper" type="flex" justify="center" align="middle">
    <div class="login">
      <div class="header">
        <img src="@/assets/logo.png" alt="" />
        <div class="text_top">
          <div class="t_text">包头市公安局交通警察支队</div>
          <div class="t_text">统一用户管理系统</div>
        </div>
      </div>
      <el-form :model="formLogin" label-position="left">
        <el-form-item class="title"> </el-form-item>
        <el-form-item>
          <el-input
            ref="account"
            v-model="formLogin.loginName"
            placeholder="账号"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="formLogin.password"
            placeholder="密码"
            type="password"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-row type="flex" justify="center">
          <el-button
            type="primary"
            @click="login"
            :disabled="!formLogin.loginName || !formLogin.password"
            >登陆</el-button
          >
        </el-row>
      </el-form>
    </div>
    <!-- <p class="bottom-text">艾瑞咨询集团</p> -->
  </el-row>
</template>

<script>
import { login } from "@/api/login";
import localStore from "storejs";
export default {
  name: "login",
  data() {
    return {
      formLogin: {
        password: "",
        loginName: "",
      },
      isMobile: false,
    };
  },
  mounted() {
    this.isMobile = this.$native().android || this.$native().iPhone;
    this.$refs.account.focus();
  },
  methods: {
    login() {
      let tempData = {
        userId: this.formLogin.loginName,
        password: this.formLogin.password,
      };
      login(tempData).then((res) => {
        tempData.empid = res.employee.empid;
        if (res.retCode == 1) {
          let data = [1];
          //admin
          if (res.employee.major == null) {
            data = [1, 2, 3, 4, 5];
          }
          //系统管理

          if (res.employee.major == 1) {
            data.push(2);
          }
          //应用管理
          if (res.employee.specialty == 1) {
            data.push(4);
          }
          //单位部门管理
          if (res.employee.weibo == 1) {
            data.push(3);
          }
          //安全管理
          if (res.employee.qq == 1) {
            data.push(5);
          }
          localStore.set("power", data);
          this.$store.dispatch("login", tempData).then((res) => {
            this.$message.success("登录成功");
            this.$router.replace({ path: "/" });

            this.$router.go(0);
          });
        } else {
          this.$message.warning("登录失败");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.text_top {
  margin-left: 20px;
  margin-top: 12px;
}
.t_text {
  font-size: 20px;
  color: #fff;
}
.header {
  display: flex;
}
.login-wrapper {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background: url(../../assets/login.jpg);
  height: 100%;
  @media screen and (max-width: 768px) {
    .login {
      width: 85%;
    }
  }
  @media screen and (min-width: 768px) {
    .login {
      width: 500px;
    }
  }
  .login {
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    padding: 2% 4%;
    box-sizing: border-box;
    .title {
      text-align: center;
      color: #333;
      /deep/ .el-form-item__content {
        font-size: 20px;
      }
    }
    .el-button {
      width: 50%;
    }
  }
}
.bottom-text {
  position: absolute;
  bottom: 5%;
  color: #eee;
  font-size: 12px;
}
</style>