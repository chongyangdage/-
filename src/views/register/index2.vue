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

          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="姓名"
              prop="empname"
              :rules="[
                { required: true, message: '请输入姓名', trigger: 'blur' },
                {
                  min: 2,
                  max: 5,
                  message: '长度在 3 到 5 个字符',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="ruleForm.empname"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
            <el-form-item
              prop="cardtype"
              :rules="[
                {
                  required: true,
                  message: '请选择证件类型',
                  trigger: 'change',
                },
              ]"
              label="证件类型"
            >
              <el-select
                v-model="ruleForm.cardtype"
                placeholder="请选择证件类型"
              >
                <el-option v-for="(item,index) in dic_data" :key='index' :label="item.dictname" :value="item.dictid"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="身份证号码"
              prop="cardno"
              :rules="[
                { required: true, message: '请输入证件号', trigger: 'blur' },
                {
                  min: 18,
                  max: 18,
                  message: '长度为18个字符',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="ruleForm.cardno"
                placeholder="请输入身份证号码"
              ></el-input>
            </el-form-item>
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请选择性别',
                  trigger: 'change',
                },
              ]"
              label="性别"
              prop="gender"
            >
              <el-radio-group v-model="ruleForm.gender">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              label="手机号"
              prop="mobileno"
              :rules="[
                {
                  required: true,
                  message: '请输入警务通手机号',
                  trigger: 'blur',
                },
                {
                  min: 11,
                  max: 11,
                  message: '长度为11 个字符',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="ruleForm.mobileno"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="警务通号"
              prop="otel"
              :rules="[
                { required: true, message: '请输入警务通号', trigger: 'blur' },
              ]"
            >
              <el-input
                v-model="ruleForm.otel"
                placeholder="请输入警务通手机号"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="警号/协警号"
              prop="empcode"
              :rules="[
                {
                  required: true,
                  message: '请输入警号/协警号',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="ruleForm.empcode"
                placeholder="请输入警号/协警号"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="邮箱"
              prop="oemail"
              :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input
                v-model="ruleForm.oemail"
                placeholder="此邮箱作为找回密码使用"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <!-- <el-button type="primary" @click="apply_sh()"
                >上一步</el-button
              > -->
              <el-button type="primary" @click="apply_zh('ruleForm')"
                >下一步</el-button
              >
             
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import {dicttype_index} from '@/api/dicttype'
export default {
  name: "register2",
  data() {
    return {
      dic_data:'',
      ruleForm: {
        empname: "",
        cardno: "",
        gender: "",
        mobileno: "",
        otel: "",
        empcode: "",
        oemail: "",
        cardtype: "",
      },

      rules: {},
      radio: "1",
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
          color: "#ccc",
        },
        {
          content: "账号安全设置",
          color: "#ccc",
          icon: "el-icon-s-home",
          size: "large",
        },
        {
          size: "large",
          color: "#ccc",
          content: "账号申请完成",
          icon: "el-icon-success",
        },
      ],
    };
  },
  created() {
    dicttype_index({dicttypeid:'COF_CARDTYPE'}).then(res=>{
      this.dic_data=res.data

    })
  },
  methods: {
    // //点击上一步
    // apply_sh(){
    //    this.$router.go(-1);
    // },
    //点击下一步
    apply_zh(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = JSON.stringify(this.ruleForm);
          this.$router.push({
            path: "/register3",
            query: {
              from: data,
            },
          });
        } else {
       
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
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