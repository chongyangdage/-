<template>
  <div>
    <el-card class="box-card">
      <el-form
        size="mini"
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-form-item class="form-item" label="真实姓名:">
          <el-input
            v-model="formInline.empname"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>

        <el-form-item class="form-item" label="警号/辅警号:">
          <el-input
            v-model="formInline.empcode"
            placeholder="请填写警号/辅警号"
          ></el-input>
        </el-form-item>
         <el-form-item class="form-item" label="邮箱">
          <el-input
            v-model="formInline.oemail"
            placeholder="请填邮箱"
          ></el-input>
        </el-form-item>
         <el-form-item class="form-item" label="证件号">
          <el-input
            v-model="formInline.cardno"
            placeholder="请填证件号"
          ></el-input>
        </el-form-item>
       
        <el-form-item class="form-item">
          <el-button type="primary" @click="onSubmit">搜索</el-button>
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
          <el-table-column align="center" prop="empname" label="真实姓名">
          </el-table-column>
          <el-table-column align="center" prop="mobileno" label="手机号">
          </el-table-column>
          <el-table-column align="center" prop="empcode" label="警号/辅警号">
          </el-table-column>

          <el-table-column align="center" prop="oemail" label="电子邮箱">
          </el-table-column>
          <el-table-column align="center" prop="lastmodytime" label="删除时间">
          </el-table-column>
          <el-table-column align="center" prop="phone" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleOk(scope.row.empid)"
                type="success"
                >恢复</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- <div class="pagination">
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
        </div> -->
      </el-card>
    </div>
  </div>
</template>
<script>
import Tree from "@/views/layout/components/Tree";
import { historical_users, historical_users_h } from "@/api/historical_users";

export default {
  components: {
    Tree,
  },
  data() {
    return {
      form: {
        data1: "",
        data2: "",
      },
      page_size: 7,
      total: 100,
      formInline: {},
      tableData: [],
    };
  },
  methods: {
    //回复删除
    handleOk(e) {
      let data1 = { employee: { empstatus: 2, empid: e } };
      historical_users_h(data1).then((res) => {
        if (res.data.flag) {
          this.$message.success("恢复成功");
        } else {
          this.$message.warning("恢复失败");
        }
      });
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
      let data = this.formInline;
      data.empstatus = 4;
      data._op = "=";
      let data1 = { criteria: { _expr: [data] } };
      historical_users(data1).then((res) => {
  
        this.tableData = res.data;
      });
     
    },
  },
};
</script>
<style  scoped>
.demo-form-inline {
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