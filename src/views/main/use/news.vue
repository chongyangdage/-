<template>
  <div>
         <el-dialog
  title="详细信息"
  :visible.sync="dialogVisible1"
  width="60%"
  >
  <el-card class="box-card">
        <el-form size='mini' ref="form" :model="form" label-width="80px">
          <el-form-item label="应用名称:">
            <el-input v-model="form1.systemName"></el-input>
          </el-form-item>
          <el-form-item label="登录地址:">
            <el-input v-model="form1.loginAdress"></el-input>
          </el-form-item>
          <el-form-item label="机构同步接口:">
            <el-input v-model="form1.orgSyncInterface"></el-input>
          </el-form-item>
          <el-form-item label="人员同步接口:">
            <el-input v-model="form1.empSyncInterface"></el-input>
          </el-form-item>
          <el-form-item label="图标地址:">
            <el-input v-model="form1.icon"></el-input>
          </el-form-item>
          <el-form-item label="审核方式:">
            <el-radio-group v-model="form1.userAuditMode">
              <el-radio :label="1" >用户申请自动通过</el-radio>
              <el-radio :label="2" >由应用管理员手工审核通过</el-radio>
              <el-radio :label="3" >由应用管理员添加</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="是否可见:">
            <el-radio-group v-model="form1.visible">
              <el-radio :label="0" >不可见</el-radio>
              <el-radio :label="1" >可见</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="状态:">
            <el-radio-group v-model="form1.state">
              <el-radio :label="1" >可用</el-radio>
              <el-radio :label="0" >不可用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
          </el-form-item>
        </el-form>
      </el-card>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible1=false">取消</el-button>
      <el-button type="primary" @click="onSubmit1">保存</el-button>
       </span>
  </el-dialog>
   
    <div class="tree">
      <div>
        <criteria @click_node='node_text' :isCheckbox="false" :data="data_tree"></criteria>
      </div>
      
      <el-card class="box-card">
        <el-button style="margin-bottom:20px" type="primary" @click="dialogVisible1=true">添加应用</el-button>
        <el-form size='mini' ref="form" :model="form" label-width="80px">
       
          <el-form-item label="应用名称:">
            <el-input v-model="form.systemName"></el-input>
          </el-form-item>
          <el-form-item label="登录地址:">
            <el-input v-model="form.loginAdress"></el-input>
          </el-form-item>
          <el-form-item label="机构同步接口:">
            <el-input v-model="form.orgSyncInterface"></el-input>
          </el-form-item>
          <el-form-item label="人员同步接口:">
            <el-input v-model="form.empSyncInterface"></el-input>
          </el-form-item>
          <el-form-item label="图标地址:">
            <el-input v-model="form.icon"></el-input>
          </el-form-item>
          <el-form-item label="审核方式:">
            <el-radio-group v-model="form.userAuditMode">
              <el-radio :label="1" >用户申请自动通过</el-radio>
              <el-radio :label="2" >由应用管理员手工审核通过</el-radio>
              <el-radio :label="3" >由应用管理员添加</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="是否可见:">
            <el-radio-group v-model="form.visible">
              <el-radio :label="0" >不可见</el-radio>
              <el-radio :label="1" >可见</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="状态:">
            <el-radio-group v-model="form.state">
              <el-radio :label="1" >可用</el-radio>
              <el-radio :label="0" >不可用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import criteria from "@/views/layout/components/Tree/criteria";
import { criteria_keep } from "@/api/criteria";
export default {
  components: {
    criteria,
  },
  data() {
    return {
      form1:{},
      dialogVisible1:false,
      page_size: 7,
      total: 100,
      form: {
        
      },
      data_tree: [],
    };
  },
  methods: {
    //应用被点击
    node_text(e){
      console.log(e,'sssssssssssss')
      this.form=e
    },
    //提交
    onSubmit() {
      
      this.form.id=parseInt(this.form.id)
      let data=this.form
      let data1={uApplicationSystem:data}
      criteria_keep(data1).then((res) => {
        console.log(res,'ddddd')
        if(res.returnCode==1){
          this.$message.success('保存成功')
        }else{
           this.$message.warning('保存失败')
        }
      });
    },

        //提交1
    onSubmit1() {
      
     
      let data=this.form1
      let data1={uApplicationSystem:data}
      criteria_keep(data1).then((res) => {
        console.log(res,'ddddd')
        if(res.returnCode==1){
          this.$message.success('保存成功')
          this.dialogVisible1=false
        }else{
           this.$message.warning('保存失败')
           this.dialogVisible1=false
        }
      });
    },
    //点击上一页
    prev_click(e) {
      console.log(e);
    },
    //点击下一页
    next_click(e) {
      console.log(e);
    },
    //点击页数事件
    currentChange(e) {
      console.log(e);
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
  height: 550px;
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