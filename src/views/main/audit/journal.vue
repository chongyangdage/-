<template>
  <div>
       <el-card  class="box-card">
    <el-form

      size="mini"
      :inline="true"
      :model="form"
      class="demo-form-inline"
    >
      <el-form-item class="form-item" label="登录人姓名:">
        <el-input v-model="form.loginUserName" placeholder="请输入姓名"></el-input>
      </el-form-item>
    <el-form-item label="登录时间范围">
          <div style="display:flex">
               <el-date-picker
            type="date"
            placeholder="选择开始日期"
            v-model="form.loginTimeMin"
            style="width: 100%"
          ></el-date-picker>
  
       <div style="margin-left:5px;margin-right:5px"> — </div>
      
          <el-date-picker
            type="date"
            placeholder="选择结束日期"
            v-model="form.loginTimeMax"
            style="width: 100%"
          ></el-date-picker>
          </div>
         
       
      </el-form-item>
      <el-form-item label="登陆状态">
    <el-radio-group v-model="form.loginStae">
      <el-radio label="登录成功">正常</el-radio>
      <el-radio label="登录失败">锁定</el-radio>
    </el-radio-group>
  </el-form-item>
      <div style="font-size:13px;margin-left:10px;color:red;margin-top:3px">（登录超过五次锁定）</div>
      <el-form-item class="form-item" >
       <el-button style="margin-left:40px" type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      
    </el-form>
  </el-card>
       

      <div class="table">
        <el-card class="box-card">
          <div class="title">用户信息列表</div>
          <el-table
            :stripe="true"
            :border="true"
            size="mini"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column align="center" prop="loginIp" label="登录IP">
            </el-table-column>
              <el-table-column align="center" prop="loginUserName" label="登录人">
            </el-table-column>
            <el-table-column align="center" prop="loginUserId" label="所用账号">
            </el-table-column>
          
            <el-table-column align="center" prop="loginNumber" label="登录次数">
            </el-table-column>
            <el-table-column align="center" prop="loginTime" label="登录时间">
            </el-table-column>
            <el-table-column align="center" prop="loginStae" label="登陆状态">
              
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              @current-change="currentChange"
              @prev-click="prev_click"
              @next-click="next_click"
              background
              layout="prev, pager, next"
              :pageSize="page_size"
              :total="total"
            >
            </el-pagination>
          </div>
        </el-card>
      </div>

  </div>
</template>
<script>
import Tree from "@/views/layout/components/Tree";
import {audit_login} from '@/api/audit'

export default {
  components: {
    Tree,
  },
  data() {
    return {
       form:{
         
       },
      page_size: 10,
      total: 0,
      page:0,
      tableData: [
      
      ],
    };
  },
  methods: {
      //回复删除
      handleOk(e){

      },
    //点击上一页
    prev_click(e) {
  
      this.page=e-1
      this.onSubmit()
    },
    //点击下一页
    next_click(e) {
 
       this.page=e-1
      this.onSubmit()
    },
    //点击页数事件
    currentChange(e) {
   
       this.page=e-1
      this.onSubmit()
    },
    //查询警员
    onSubmit() {
      this.form.page={length:this.page_size,isCount:false,begin:this.page*10}
      let data=this.form
      audit_login(data).then(res=>{
  
        this.total=res.page.count
        this.tableData=res.uloginlogs
      })
    },
  },
};
</script>
<style  scoped>
.demo-form-inline{

    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    
}
.box-card {
  width: 1000px;
  margin-left: 20px;
}
.form-item {
  margin-left: 0px;
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
}
.tree {
  height: 100%;
  display: flex;
}
.pagination {
  margin-top: 10px;
}
</style>