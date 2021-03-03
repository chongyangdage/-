<template>
  <div>
    <div class="nav_wrap">
      <div style="display: flex; align-items: center; padding-left: 30px">
        <img src="@/assets/logo.png" alt="" srcset="" />
        <div class="nav_wrap_text">
          包头市公安局交通警察支队统一用户管理系统
        </div>
      </div>

      <div class="fun">
        <el-button round type="primary">申请账号</el-button>
        <el-button round type="primary">查询账号</el-button>
        <el-button round type="primary">重置密码</el-button>
        <el-button round type="primary">系统登陆</el-button>
      </div>
    </div>
    <div class="wrap">
      <el-card class="box-card">
        <el-steps :active="3" simple>
          <el-step title="输入统一账号" icon="el-icon-edit"></el-step>
          <el-step title="选择找回方式" icon="el-icon-share"></el-step>
          <el-step title="重置密码" icon="el-icon-refresh-left"></el-step>
          <el-step title="完成" icon="el-icon-check"></el-step>
        </el-steps>
        <div>
          <i class="el-icon-success"></i>
          <div class="text">
            申请统一账号成功！由于系统后台需要同步统一账号，请在30秒之后登陆个人自助服务系统及其他应用系统。
          </div>
          <el-button class="ok" type="primary">登录系统</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.ok {
  margin: 45px auto 30px auto;
  display: block;
}
.text {
  width: 550px;
  font-weight: bold;
  margin: 30px auto 0 auto;
}
.el-icon-success {
  display: block;
  margin: 30px auto 0 auto;
  color: #76cb42;
  width: 50px;
  font-size: 50px;
}
.demo-ruleForm {
  width: 300px;
  margin: 50px auto 0 auto;
}
.box-card {
  width: 80%;
  height: 70%;
  margin: 60px auto 0 auto;
}
.card {
  padding-left: 110px;
  margin: 100px 50px 0 auto;
  font-weight: bold;
}
.dis {
  padding-left: 110px;
  margin: 30px 50px 0 auto;
  display: flex;
}
.blue {
  padding-left: 110px;
  margin: 30px 50px 0 auto;
  color: #6897c6;
}

.fun {
  padding-right: 10px;
}
.nav_wrap {
  border-bottom: 2px solid #f8f8f8;
  align-items: center;
  height: 10%;
  background: #222b45;
  display: flex;
  justify-content: space-between;
}
.nav_wrap_text {
  color: #ffffff;
  line-height: calc(100vh * 10%);
  font-size: 23px;
  font-weight: bold;
  padding-left: 20px;
}
.app-wrapper {
  height: 90%;
  width: 100%;
}
.app-wrapper1 {
  position: relative;
  height: 100%;
  overflow: hidden;
  width: 100%;
}
</style>