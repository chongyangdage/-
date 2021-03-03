<template>
  <div>
    <el-dialog title="开通应用" :visible.sync="dialogFormVisible">
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="应用名称">
          <el-input v-model="formLabelAlign.app_name"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="formLabelAlign.empname"></el-input>
        </el-form-item>
        <el-form-item label="证件号">
          <el-input v-model="formLabelAlign.cardno"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formLabelAlign.oemail"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="app_ok">确定开通</el-button>
      </span>
    </el-dialog>
    <div class="app_wrap">
      <div
        @click="open(item.loginAdress)"
        v-for="(item, index) in data"
        :key="index"
        class="list"
      >
        <div v-if="item.allow == 1">
          <div>
            <img class="yy_img img" src="@/assets/app.jpg" alt="" srcset="" />
          </div>

          <div class="yy_text">{{ item.systemName }}</div>
        </div>
      </div>
    </div>

    <div class="app_wrap">
      <div
        @click="open_app(item.systemName, item.systemId)"
        v-for="(item, index) in data"
        :key="index"
        class="list"
      >
        <div v-if="item.allow != 1 || !item.allow">
          <img class="yy_img_1" src="@/assets/suo.png" alt="" srcset="" />
          <div>
            <img class="yy_img img" src="@/assets/app.jpg" alt="" srcset="" />
          </div>
          <div class="yy_text">{{ item.systemName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { my_app, open_app } from "@/api/criteria";
import { index1 } from "@/api/people";
export default {
  name: "My_app",
  data() {
    return {
      formLabelAlign: {},
      dialogFormVisible: false,
      test: "",
      data: "",
    };
  },
  methods: {
    //初始化数据
    begin_data() {
      console.log(
        localStorage.getItem("empid").replace(/^\"|\"$/g, ""),
        "dddd"
      );
      let data1 = {
        template: {
          empid: parseInt(
            localStorage.getItem("empid").replace(/^\"|\"$/g, "")
          ),
        },
      };
      index1(data1).then((res) => {
        this.formLabelAlign.empname = res.employee.empname;
        this.formLabelAlign.cardno = res.employee.cardno;
        this.formLabelAlign.oemail = res.employee.oemail;
        this.formLabelAlign.empid = res.employee.empid;
      });
    },
    //确定开通
    app_ok() {
      let data = {
        empid: this.formLabelAlign.empid,
        systemid: this.formLabelAlign.systemid,
      };
      open_app(data).then((res) => {
        console.log(res, "dssasssddsss");
        if (res.returnCode == 1) {
          this.dialogFormVisible = false;
          this.$message.success("添加成功");
        } else {
          this.$message.warning("添加失败");
          this.dialogFormVisible = false;
        }
      });
    },
    //开通应用
    open_app(e_name, e_id) {
      this.formLabelAlign.app_name = e_name;
      this.formLabelAlign.systemid = e_id;
      this.dialogFormVisible = true;
    },
    //跳转页面
    open(e) {
      window.open(e);
    },
    //查询app
    my_app() {
      my_app().then((res) => {
        this.data = res.mySystem;
      });
    },
  },
  created() {
    this.my_app();
    this.begin_data();
  },
};
</script>
<style scoped>
.img {
  border-radius: 10px;
  overflow: hidden;
}
.yy_img_1 {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 75px;
  top: 45px;
  z-index: 100;
}
.app_wrap {
  display: flex;
  margin-top: 30px;
}
.list {
  position: relative;
  width: 100px;
  margin-left: 40px;
}
.yy_img {
  width: 100px;
  height: 70px;
  object-fit: cover;
}
.yy_text {
  text-align: center;
  line-height: 35px;
  font-weight: bold;
}
</style>