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
          <div class="card">
              请根据您的账号拥有情况进行选择：
          </div>
          <div>
              <el-radio class="blue" v-model="radio" label="1">没有统一账号，只申请统一账号</el-radio>
          </div>
          
          <div class="dis">
              <el-button @click="apply_zh" type="primary">下一步</el-button>
              <el-button @click="quxiao" type="info">取消</el-button>
          </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name:'register1',
  data() {
    return {
        radio: '1'
    };
  },
  methods: {
    //点击下一步
    apply_zh(){
      this.$router.push({ path: '/register2' })
    },
    //取消
    quxiao(){
      this.$router.replace({ path: '/' })
    }
  },
};
</script>
<style scoped>
.box-card{
    width: 80%;
    height: 70%;
    margin: 60px auto 0 auto;
}
.card{
    padding-left: 110px;
    margin: 100px 50px 0 auto;
    font-weight: bold;
}
.dis{
    padding-left: 110px;
    margin: 30px 50px 0 auto;
    display: flex;
}
.blue{
    padding-left: 110px;
   margin: 30px 50px 0 auto;
    color: #6897C6;
}
.wrap {
  width: 700px;
  height: 550px;
  border: 2px solid #aed3e1;
  margin: 60px auto 0 auto;
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