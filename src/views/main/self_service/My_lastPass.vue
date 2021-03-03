<template>
  <div class="wrap">
    <el-card class="box-card1">
      <div class="flex">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="旧密码" prop="old_pass">
            <el-input
              type="password"
              v-model="ruleForm.old_pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
          </el-form-item>
        </el-form>

        <el-card class="box-card">
          <div style="font-weight: bold">提示信息</div>
          <div class="text">
            <i class="el-icon-message-solid"></i>
            输入密码之前需要输入正确的旧密码
          </div>
          <div class="text">
            <i class="el-icon-message-solid"></i>
            新密码必须满足系统设定的密码策略
          </div>
          <div class="text">
            <i class="el-icon-message-solid"></i> 新密码必须设置为6位以上
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
<script>
import { My_lastPass } from "@/api/My_lastPass";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
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
      ruleForm: {
        pass: "",
        checkPass: "",
        old_pass: "",
      },
      rules: {
        pass: [
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            validator: validatePass,
            trigger: "blur",
          },
        ],
        old_pass: [
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        
          let data = {
            user: {
              userId:localStorage.getItem('token').replace(/^\"|\"$/g,''),
              password: this.ruleForm.checkPass,
            },
            password: this.ruleForm.old_pass,
          };
          My_lastPass(data).then(res => {
        
            if(res.returnCode==1){
               this.$message.success('密码修改成功')
            }else{
               this.$message.warning('修改失败,请确认密码原密码是否正确')
            }
          });
        
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
<style  scoped>
.text {
  font-size: 14px;
  padding: 8px 0;
}
.box-card {
  height: 170px;
  width: 300px;
}
.box-card1 {
  width: 800px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
</style>