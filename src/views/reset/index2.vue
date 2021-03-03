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
        <el-steps :active="1" simple>
          <el-step title="输入统一账号" icon="el-icon-edit"></el-step>
          <el-step title="选择找回方式" icon="el-icon-share"></el-step>
          <el-step title="重置密码" icon="el-icon-refresh-left"></el-step>
          <el-step title="完成" icon="el-icon-check"></el-step>
        </el-steps>
        <div  v-show="is_show_sj" class="dianhua">
          <div class="phone">移动电话：18547979964</div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="手机验证码">
            <el-input v-model="formInline.user" placeholder="验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">点击获取验证码</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary">下一步</el-button>
        </div>
        <div  v-show="is_show_mb" class="dianhua">
          <div class="phone">密保问题：我就读的高中学校的班主任是谁？</div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="密码答案">
            <el-input v-model="formInline.user" placeholder="答案"></el-input>
          </el-form-item>
        
        </el-form>
        <el-button type="primary">下一步</el-button>
        </div>
        <div v-show="is_show">
          <div class="main">
            <div class="main_list">
              <i class="el-icon-mobile-phone dis"></i>
              <el-button @click="phone_checking" type="primary">通过手机验证码验证</el-button>
            </div>
            <div class="main_list">
              <i class="el-icon-tickets dis"></i>
              <el-button @click="tickets" type="primary">通过密码问题验证</el-button>
            </div>
          </div>
          <div class="footer">
            <div class="footer_main">
              <i class="el-icon-s-opportunity yellow"></i>
              <div class="w_t">温馨提示</div>
            </div>
            <div class="text">
              1.当您已经设置了手机号时，您可以选择手机验证码验证；
            </div>
            <div class="text">
              2.当您已经设置了密码提示问题时，您可以选择密码提示验证，此时您需要输入密码提示问题答案；
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      is_show_sj:false,
      is_show_mb:false,
      is_show:true,
      formInline: {
        user: "",
        region: "",
      },
      ruleForm: {
        pass: "",
      },
    };
  },
  methods: {
    //点击密保问题
    tickets(){
      this.is_show_mb=true
      this.is_show=false
    },
    //点击手机验证
    phone_checking(){
      this.is_show_sj=true
      this.is_show=false
    },
    onSubmit() {
    
    },
  },
};
</script>
<style scoped>
.dianhua{
  width: 50%;
  padding-left: 150px;
  margin: 80px auto 0  auto;
}
.phone{
  font-weight: bold;
  margin-bottom: 20px;
}
.text {
  color: #555555;
  font-size: 13px;
  margin-left: 25px;
}
.footer {
  margin-top: 70px;
}
.footer_main {
  display: flex;
}
.w_t {
  margin-bottom: 13px;
  font-weight: bold;
}
.yellow {
  font-size: 23px;
  display: block;
  color: yellow;
}
.dis {
  display: block;
  padding-left: 50px !important;
  padding-bottom: 40px;
  font-size: 60px;
  color: #9ae7fb;
}

.main {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.demo-ruleForm {
  width: 300px;
  margin: 50px auto 0 auto;
}
.box-card {
  padding-bottom: 40px;
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