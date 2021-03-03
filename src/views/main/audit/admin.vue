<template>
<el-card class="box-card">

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
      
      
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.oprationTime"
            style="width: 100%"
          ></el-date-picker>
      
         
       
      </el-form-item>
  
      
      <el-form-item class="form-item" >
       <el-button style="margin-left:40px" type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      
    </el-form>
  </el-card>
    <div class="table_t">
     
        
    </div>
  <el-table
  size='mini'
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
    align='center'
      prop="empName"
      label="操作人"
      >
    </el-table-column>
    <el-table-column
     align='center'
      prop="oprationTime"
      label="时间">
    </el-table-column>
    <el-table-column
     align='center'
      prop="oprationDesc"
      label="描述">
    </el-table-column>
  </el-table>
  <el-pagination @current-change='currentChange' @prev-click='prev_click' @next-click='next_click' background layout="prev, pager, next" :pageSize='page_size' :total="total">
            </el-pagination>
  </el-card>
</template>

<style>
.box-card{
    width: 800px;
}
.table_t2{
    margin-left: 500px;
    font-size: 14px;
    font-weight: bold;
}
.table_t1{
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
}
.table_t{
    display: flex;
}
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
import {audit_pe} from '@/api/audit'
  export default {
 
    methods: {
        //表格隔行换色
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      //查询日志
      data_create(){
        audit_pe(data).then(res=>{
      
        })
      },

       //查询警员
    onSubmit() {
      let data={criteria:{_expr:[{empname:this.form.loginUserName,_op:'like',_likeRule:'all'},{oprationTime:this.form.oprationTime,_op:'like',_likeRule:'all'}]}}
      audit_pe(data).then(res=>{
   
        this.tableData=res.uOperationLog
      })
    
    },
       //点击上一页
      prev_click(e){
    
      },
      //点击下一页
      next_click(e){
    
      },
      //点击页数事件
      currentChange(e){
      
      },
    },
    data() {
      return {
        form:{},
          total:0,
          page_size:10,
          total_name:20,
        tableData: []
      }
    },

  }
</script>