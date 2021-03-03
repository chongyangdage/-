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
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请选择密保问题',
                  trigger: 'change',
                },
              ]"
              label="密保问题"
              prop="hzipcode"
            >
              <el-select
                v-model="ruleForm.hzipcode"
                placeholder="请选择密保问题"
              >
                <el-option
                  v-for="(item, index) in dic_data4"
                  :key="index"
                  :label="item.dictname"
                  :value="item.dictid"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="答案"
              prop="htel"
              :rules="[
                {
                  required: true,
                  message: '请输入答案',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                type="text"
                v-model="ruleForm.htel"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()">上一步</el-button>
              <el-button type="primary" @click="apply_zh('ruleForm')"
                >下一步</el-button
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
import { register_index } from "@/api/register";
import { dicttype_index } from "@/api/dicttype";
export default {
  name: "register4",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dic_data4: "",
      ruleForm: {
        pass: "",
        password: "",
        hzipcode: "",
        htel: "",
        ozipcode: "1",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
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
          color: "#ccc",
          content: "账号申请完成",
          icon: "el-icon-success",
        },
      ],
    };
  },
  created() {
    //密保问题
    dicttype_index({ dicttypeid: "WENTI" }).then((res) => {
      this.dic_data4 = res.data;
    });
  },
  activated() {
    this.data = JSON.parse(this.$route.query.from);
  },
  methods: {
    //点击下一步
    apply_zh(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          for (const key in this.ruleForm) {
            this.data[key] = this.ruleForm[key];
          }
          delete this.data.pass;
          let org = { orgid: Number(this.data.orgid) };
          let user = { password: this.data.password, status: parseInt(1) };
          delete this.data.orgid;
          delete this.data.password;
          let data = { employee: this.data };
          data.org = org;
          data.user = user;

          register_index(data).then((res) => {
            if (res.response.flag) {
              this.$router.push({ path: "/register5" });
            } else {
              this.$message.warning("保存失败");
            }
          });
        } else {
          return false;
        }
      });
    },
    //点击上一步
    submitForm() {
      window.history.back();
    },
    resetForm(formName) {
      this.$router.replace({ path: "/" });
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