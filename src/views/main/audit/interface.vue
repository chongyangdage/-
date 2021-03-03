<template>
  <el-card class="box-card">
    <el-card class="box-card">
      <el-form
        size="mini"
        :inline="true"
        :model="form"
        class="demo-form-inline"
      >
        <el-form-item class="form-item" label="登录人姓名:">
          <el-input
            v-model="form.systemName"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="登录时间范围">
          <div style="display: flex">
            <el-date-picker
              type="date"
              placeholder="选择开始日期"
              v-model="form.callTimeMin"
              style="width: 100%"
            ></el-date-picker>

            <div style="margin-left: 5px; margin-right: 5px">—</div>

            <el-date-picker
              type="date"
              placeholder="选择结束日期"
              v-model="form.callTimeMax"
              style="width: 100%"
            ></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item class="form-item">
          <el-button style="margin-left: 40px" type="primary" @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <div class="table_t">
     
    </div>
    <el-table
      size="mini"
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column align="center" prop="systemName" label="操作系统">
      </el-table-column>
      <el-table-column align="center" prop="callTime" label="时间">
      </el-table-column>
      <el-table-column align="center" prop="callDesc" label="描述">
      </el-table-column>
    </el-table>
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
  </el-card>
</template>

<style>
.box-card {
  width: 800px;
}
.table_t2 {
  margin-left: 500px;
  font-size: 14px;
  font-weight: bold;
}
.table_t1 {
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
}
.table_t {
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
import { Interface } from "@/api/audit";

export default {
  methods: {
    //查询警员
    onSubmit() {
      
      this.form.page={length:this.page_size,isCount:true,begin:this.page*10}
      let data = this.form;
      Interface(data).then((res) => {
      
        if(res.uCallInterfaceLog.length==0){
          this.total=0
        }else{
          // this.total=res.page.count
        }
        
        this.tableData = res.uCallInterfaceLog;
        console.log(this.tableData,'ddddd')
      });
    },
    //表格隔行换色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
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
  },
  data() {
    return {
      page:0,
      form: {},
      total: 0,
      page_size: 10,
      total_name: 20,
      tableData: [],
    };
  },
};
</script>