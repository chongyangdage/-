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
          <div class="block">
            <el-timeline>
              <el-timeline-item
                style="font-weight: 300"
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
          <div>
            <i class="el-icon-success"></i>
            <div class="text">
              申请统一账号成功！由于系统后台需要同步统一账号，请在30秒之后登陆个人自助服务系统及其他应用系统。
            </div>
            <el-button class="ok" @click="ok" type="primary" >完成</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name:'register5',
  data() {
    return {
      activities: [
        {
          content: "基础信息录入第一部分",
          color: "#0bbd87",
          size: "large",
          type: "success",
          icon: "el-icon-s-comment",
        },
        {
          content: "基础信息录入第二部分",
          size: "large",
          icon: "el-icon-s-comment",
          color: "#0bbd87",
        },
        {
          content: "账号安全设置",
          color: "#0bbd87",
          icon: "el-icon-s-home",
          size: "large",
        },
        {
          size: "large",
          color: "#0bbd87",
          content: "账号申请完成",
          icon: "el-icon-success",
        },
      ],
    };
  },
  methods: {
    //完成
    ok(){
      this.$router.replace({ path: '/' })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {

          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.ok{
 margin: 45px auto 30px auto;
display: block;
}
.text {
  width: 250px;
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
.block {
  margin-top: 20px;
  border: 1px solid #aadbfb;
  padding-right: 28px;
  padding-top: 20px;
}
.wrap_lr {
  display: flex !important;
  justify-content: space-around !important;
}
.box-card {
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