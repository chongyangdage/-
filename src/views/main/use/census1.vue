<template>
  <div>
    <div class="tree">
      <!-- <div>
        <Tree :isCheckbox="true" :data="data_tree"></Tree>
      </div> -->

      <div class="table">
        <el-card class="box-card">
          <div class="title">业务系统用户账号开统计</div>
          <el-table
            :stripe="true"
            :border="true"
            size="mini"
            :data="tableData"
            style="width: 600px"
          >
            <el-table-column  align="center" prop="SYSTEM_NAME" label="应用名">
            </el-table-column>
            <el-table-column align="center" prop="CUN" label="用户数">
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
  </div>
</template>
<script>
import Tree from "@/views/layout/components/Tree";
import { criteria_total } from "@/api/criteria";
export default {
  components: {
    Tree,
  },
  data() {
    return {
      page_size: 10,
      total: 0,
      page:0,
      formInline: {
        post: "",
        user: "",
        alarm: "",
      },
      data_tree: [
  
      ],
      tableData: [
    
      ],
    };
  },
  created() {
   this.data_create()
  },
  methods: {
    //初始化数据
    data_create(){
       criteria_total({ page: { length: this.page_size, isCount: true, begin: this.page*10 }}).then(res=>{
      console.log(res,'kkkk')
      this.tableData=res.data
    })
    },
      //审核通过
      handleOk(e){

      },
      //审核详情
      handleDetails(e){

      },
      //审核删除
      handleDele(e){

      },
    //点击上一页
    prev_click(e) {
      console.log(e);
      this.page=e-1
      this.data_create()
    },
    //点击下一页
    next_click(e) {
      console.log(e);
       this.page=e-1
      this.data_create()
    },
    //点击页数事件
    currentChange(e) {
      console.log(e);
       this.page=e-1
      this.data_create()
    },
    //查询警员
    onSubmit() {
      
    },
  },
};
</script>
<style  scoped>
.box-card {
  width: 1000px;
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