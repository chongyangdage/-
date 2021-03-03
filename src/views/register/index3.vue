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
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose"
      >
        <Tree @ok='choose_ok' :isCheckbox="true" :data="data_tree"></Tree>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible_ok"
            >确 定</el-button
          >
        </span>
      </el-dialog>
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
            :model="form"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              prop="faxno"
              label="人员类型"
              :rules="[
                {
                  required: true,
                  message: '请选择人员类型',
                  trigger: 'change',
                },
              ]"
            >
              <el-select v-model="form.faxno" placeholder="请选择人员类型">
                <el-option v-for="(item,index) in dic_data1" :key='index' :label="item.dictname" :value="item.dictid"></el-option>
                
              </el-select>
            </el-form-item>
            <el-form-item
              prop="party"
              label="政治面貌"
              :rules="[
                {
                  required: true,
                  message: '请选择政治面貌',
                  trigger: 'change',
                },
              ]"
            >
              <el-select v-model="form.party" placeholder="请选择政治面貌">
                <el-option  v-for="(item,index) in dic_data2" :key='index' :label="item.dictname" :value="item.dictid" ></el-option>
              
              </el-select>
            </el-form-item>
            <el-form-item
              prop="degree"
              label="职务类别"
              :rules="[
                {
                  required: true,
                  message: '请选择职务类别',
                  trigger: 'change',
                },
              ]"
            >
              <el-select v-model="form.degree" placeholder="请选择职务类别">
                <el-option  v-for="(item,index) in dic_data3" :key='index' :label="item.dictname" :value="item.dictid" ></el-option>
              
              </el-select>
            </el-form-item>
            <el-form-item
              prop="workexp"
              label="部门类别"
              :rules="[
                {
                  required: true,
                  message: '请选择部门类别',
                  trigger: 'change',
                },
              ]"
            >
              <el-select v-model="form.workexp" placeholder="请选择部门类别">
                <el-option v-for="(item,index) in dic_data4" :key='index' :label="item.dictname" :value="item.dictid"></el-option>
                
              </el-select>
            </el-form-item>
            <el-form-item
              label="所属单位"
              prop="orgid1"
              :rules="[
                {
                  required: true,
                  message: '请选择所属单位',
                  trigger: 'change',
                },
              ]"
            >
              <el-input
                disabled
                v-model="form.orgid1"
                placeholder="请选择所属单位"
              ></el-input>
              <el-button type="primary" @click="dw_show">选择</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="apply_sh()">上一步</el-button>
              <el-button type="primary" @click="apply_zh('ruleForm')"
                >下一步</el-button
              >
              <el-button type="primary" @click="submitForm('ruleForm')"
                >已申请</el-button
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
import Tree from "@/views/layout/components/Tree/register";
import {dicttype_index} from '@/api/dicttype'
export default {
  name: "register3",
  components: {
    Tree,
  },
  data() {
    return {
      value:'',
      dic_data1:'',
      dic_data2:'',
      dic_data3:'',
      dic_data4:'',
      data: "",
      data_tree: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
            },
            {
              id: 5,
              label: "三级 1-2",
            },
            {
              id: 6,
              label: "三级 1-3",
            },
            {
              id: 7,
              label: "三级 1-4",
            },
            {
              id: 8,
              label: "三级 1-5",
            },
            {
              id: 9,
              label: "三级 1-6",
            },
            {
              id: 16,
              label: "三级 1-3",
            },
            {
              id: 17,
              label: "三级 1-4",
            },
            {
              id: 18,
              label: "三级 1-5",
            },
            {
              id: 19,
              label: "三级 1-6",
            },
            {
              id: 26,
              label: "三级 1-3",
            },
            {
              id: 27,
              label: "三级 1-4",
            },
            {
              id: 28,
              label: "三级 1-5",
            },
            {
              id: 29,
              label: "三级 1-6",
            },
            {
              id: 688,
              label: "三级 1-3",
            },
            {
              id: 37,
              label: "三级 1-4",
            },
            {
              id: 38,
              label: "三级 1-5",
            },
            {
              id: 39,
              label: "三级 1-6",
            },
            {
              id: 46,
              label: "三级 1-3",
            },
            {
              id: 47,
              label: "三级 1-4",
            },
            {
              id: 48,
              label: "三级 1-5",
            },
            {
              id: 49,
              label: "三级 1-6",
            },
            {
              id: 56,
              label: "三级 1-3",
            },
            {
              id: 57,
              label: "三级 1-4",
            },
            {
              id: 58,
              label: "三级 1-5",
            },
            {
              id: 59,
              label: "三级 1-6",
            },
            {
              id: 677,
              label: "三级 1-3",
            },
            {
              id: 657,
              label: "三级 1-4",
            },
            {
              id: 68,
              label: "三级 1-5",
            },
            {
              id: 69,
              label: "三级 1-6",
            },
            {
              id: 7446,
              label: "三级 1-3",
            },
            {
              id: 77,
              label: "三级 1-4",
            },
            {
              id: 78,
              label: "三级 1-5",
            },
            {
              id: 98,
              label: "三级 1-6",
            },
            {
              id: 76,
              label: "三级 1-3",
            },
            {
              id: 87,
              label: "三级 1-4",
            },
            {
              id: 88,
              label: "三级 1-5",
            },
            {
              id: 89,
              label: "三级 1-6",
            },
          ],
        },
      ],
      dialogVisible: false,
      form: {
        faxno: "",
        party: "",
        degree: "",
        workexp: "",
        orgid1: "",
        orgid1: "",
      },

      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
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
     //人员类型
    dicttype_index({dicttypeid:'COF_EMPCLASS'}).then(res=>{
      this.dic_data1=res.data
 
    })
    //政治面貌
    dicttype_index({dicttypeid:'COF_PARTYVISAGE'}).then(res=>{
      this.dic_data2=res.data
    
    })
    //职务类别
    dicttype_index({dicttypeid:'COF_DUTIES'}).then(res=>{
      this.dic_data3=res.data
  
    })
    //部门类别
    dicttype_index({dicttypeid:'COF_ORGTYPE'}).then(res=>{
      this.dic_data4=res.data
   
    })
  },
  activated() {
    this.data = JSON.parse(this.$route.query.from);

  },
  methods: {
    //点击确定选择人
    dialogVisible_ok(){
 
      this.form.orgid1=this.value
      this.form.orgid=""+this.id
      this.dialogVisible=false
    },
    //复选框被选择触发
    choose_ok(id,value){
  
      this.id=id
      this.value=value
     
    },
    //点击上一步
    apply_sh() {
      window.history.back();
    },
    //点击下一步
    apply_zh(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          for (const key in this.data) {
            this.form[key] = this.data[key];
          }
          let data = JSON.stringify(this.form);
          this.$router.push({
            path: "/register4",
            query: {
              from: data,
            },
          });
        } else {
        
          return false;
        }
      });
    },
    resetForm(){
      this.$router.replace({ path: '/' })
    },
    dw_show() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
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