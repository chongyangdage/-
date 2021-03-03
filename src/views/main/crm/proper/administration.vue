<template>
  <div>
    <el-form
      size="mini"
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item class="form-item" label="姓名:">
        <el-input
          v-model="formInline.empname"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>

      <!-- <el-form-item class="form-item" label="登录名:">
        <el-input
          v-model="formInline.alarm"
          placeholder="请填写登录名"
        ></el-input>
      </el-form-item> -->
      <el-form-item class="form-item" label="身份证号:">
        <el-input
          v-model="formInline.cardno"
          placeholder="请填写证件号"
        ></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="E-Mail:">
        <el-input
          v-model="formInline.oemail"
          placeholder="请填写邮箱号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="tree">
      <div>
        <criteria @ok="choose" :isCheckbox="true" :data="data_tree"></criteria>
      </div>

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
            <el-table-column
              align="center"
              prop="orgEmployee.workexp"
              label="所属部门"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="orgEmployee.empname"
              label="真实姓名"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="orgEmployee.mobileno"
              label="手机号"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="orgEmployee.oemail"
              label="电子邮箱"
            >
            </el-table-column>
            <el-table-column align="center" prop="allow" label="状态">
              <template slot-scope="scope">
                <el-tag v-if="scope.row.allow == 1">通过</el-tag>
                <el-tag v-if="scope.row.allow == -1">不通过</el-tag>
                <el-tag v-if="scope.row.allow == 0">未审核</el-tag>
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
  </div>
</template>
<script>
import criteria from "@/views/layout/components/Tree/criteria";
import { criteria_p } from "@/api/criteria";

export default {
  components: {
    criteria,
  },
  data() {
    return {
      id: "",
      page_size: 10,
      page: 1,
      total: 100,
      formInline: {},
      data_tree: [],
      tableData: [],
    };
  },
  methods: {
    //应用被选中触发
    choose(e) {
      this.id = e;
      this.all_data(this.id);
    },

    //获取数据
    all_data(e) {
      let data = { criteria: { _expr: [{ "uApplicationSystem.id": e }] } };
      criteria_p(data).then((res) => {
        this.tableData = res.uApplyAuth;
        // this.tableData.forEach(element => {
        //   element.name=localStorage.getItem('token').replace(/^\"|\"$/g,'')
        // });
      });
    },
    //点击上一页
    prev_click(e) {
      this.page = e;
      this.all_data(this.id);
    },
    //点击下一页
    next_click(e) {
      this.page = e;
      this.all_data(this.id);
    },
    //点击页数事件
    currentChange(e) {
      this.page = e;
      this.all_data(this.id);
    },
    //查询警员
    onSubmit() {
      this.formInline.systemId = this.id;
      this.formInline._op = "=";
      let data = { criteria: { _expr: [this.formInline] } };
      criteria_p(data).then((res) => {
        this.tableData = res.uApplyAuth;
        this.tableData.forEach((element) => {
          element.name = localStorage.getItem("token").replace(/^\"|\"$/g, "");
        });
      });
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