<template>
  <div>
    <div class="tree">
      <div>
        <Tree @ok='click_choose' :isCheckbox="true" :data="data_tree"></Tree>
      </div>
      <el-card class="box-card">
        <el-form
          size="mini"
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
        >
          <el-form-item class="form-item" label="证件号:">
            <el-input
              v-model="formInline.cardno"
              placeholder="请输入身份证号"
            ></el-input>
          </el-form-item>

          <el-form-item class="form-item" label="登录名称:">
            <el-input
              v-model="formInline.empcode"
              placeholder="请填写登录名称"
            ></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="真实姓名:">
            <el-input
              v-model="formInline.empname"
              placeholder="请填写真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="所属部门:">
            <el-input
              v-model="formInline.orgname"
              placeholder="请填写所属部门"
            ></el-input>
          </el-form-item>
        </el-form>
        <div style="display: flex; margin-left: 440px">
          <el-button
            size="mini"
            style="margin-top: 20px"
            type="primary"
            @click="onSubmit"
            >保存</el-button
          >
          <el-button
            size="mini"
            style="margin-top: 20px"
            type="danger"
            @click="onSubmit"
            >取消</el-button
          >
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import Tree from "@/views/layout/components/Tree";
import { index, index1, index_dele,index_change } from "@/api/people";
export default {
  components: {
    Tree,
  },
  data() {
    return {
      page_size: 7,
      total: 100,
      formInline: {
        post: "",
        user: "",
        alarm: "",
      },
      data_tree: [
    
      ],
    };
  },
  methods: {
    //复选框被选择
    click_choose(e,e1,e2){
      index1({template:{empid:e}}).then(res=>{
  
        this.formInline=res.employee
      })
    },
    //点击上一页
    prev_click(e) {

    },
    //点击下一页
    next_click(e) {

    },
    //点击页数事件
    currentChange(e) {

    },
    //查询警员
    onSubmit() {

    },
  },
};
</script>
<style  scoped>
.demo-form-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box-card {
  width: 700px;
  height: 300px;
  margin-left: 50px;
}
.form-item {
  margin-left: 20px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 15px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.table {
  height: 65vh;
  margin-left: 20px;
}
.tree {
  height: 100%;
  display: flex;
}
.pagination {
  margin-top: 10px;
}
</style>