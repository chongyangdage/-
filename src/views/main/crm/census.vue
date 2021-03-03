<template>
  <el-card class="box-card">
    <div class="table_t">
      <div class="table_t1">单位部门用户统计</div>
      <div class="table_t2">总数：{{ total_num }}</div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        align="center"
        prop="ORGNAME"
        label="直属科室/直属大队/管辖大队"
      >
      </el-table-column>
      <el-table-column align="center" prop="CUN" label="用户数">
      </el-table-column>
    </el-table>
    <!-- <el-pagination
      @current-change="currentChange"
      @prev-click="prev_click"
      @next-click="next_click"
      background
      layout="prev, pager, next"
      :pageSize="page_size"
      :total="total"
    >
    </el-pagination> -->
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
import { branch_num } from "@/api/branch_num";
export default {
  created() {
    this.all_data();
  },
  methods: {
    //初始化数据
    all_data() {
      branch_num().then(res => {
        console.log(res,'pppppppp')
       this.total_num=res.total

        this.tableData = res.CountEmpByOrg;
        if(res.page){
          this.total = res.page.count;
        }
        
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

      this.page = e;
      this.all_data()
    },
    //点击下一页
    next_click(e) {

       this.page = e;
      this.all_data()
    },
    //点击页数事件
    currentChange(e) {
  
       this.page = e;
      this.all_data()
    },
  },
  data() {
    return {
      total_num:'',
      page_size: 10,
      total: 0,
      page: 0,
      tableData: [],
    };
  },
};
</script>