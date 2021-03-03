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
        <div class="wrap_lr">
         

          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"  placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="证件类型" prop="name">
              <el-input disabled value='身份证'  placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="身份证号码" prop="name">
              <el-input v-model="ruleForm.name"  placeholder="请输入身份证号码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >确认</el-button
              >
              <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
 
      },
    };
  },
};
</script>
<style scoped>
.block{
  margin-top: 20px;
  border: 1px solid #AADBFB;
  padding-right: 28px;
  padding-top: 20px;
}
.wrap_lr{
  display: flex !important;
  justify-content: space-around !important;
}
.box-card {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 80%;
  height: 70%;
  margin: 30px auto 30px auto;
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
.wrap {
  width: 70%;
  height: 70%;
  border: 2px solid #aed3e1;
  margin: 20px auto 0 auto;
  background: url("../../assets/zc.jpg");
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