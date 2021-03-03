<template>
  <div>
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
              prop="orgEmployee.orgname"
              label="所属部门"
            >
            </el-table-column>
            <el-table-column
              width="80"
              align="center"
              prop="orgEmployee.empname"
              label="真实姓名"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="orgEmployee.cardno"
              label="证件号"
            >
            </el-table-column>

            <el-table-column
              align="center"
              prop="orgEmployee.oemail"
              label="电子邮箱"
            >
            </el-table-column>
            <el-table-column align="center" prop="phone" label="操作">
              <template slot-scope="scope">
                <el-button
                  v-if="scope.row.allow == 0"
                  size="mini"
                  @click="handleOk(scope.row.id)"
                  type="success"
                  >通过</el-button
                >
                <el-button
                  v-if="scope.row.allow == 0"
                  size="mini"
                  @click="handleDetails(scope.row.id)"
                  type="warning"
                  >不通过</el-button
                >
                <el-button
                  v-if="scope.row.allow == 1"
                  size="mini"
                  disabled
                  type="success"
                  >已通过</el-button
                >
                <el-button
                  v-if="scope.row.allow == -1"
                  size="mini"
                  disabled
                  type="success"
                  >未通过</el-button
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
  </div>
</template>
<script>
import criteria from "@/views/layout/components/Tree/criteria";
import { criteria_p, criteria_s } from "@/api/criteria";
export default {
  components: {
    criteria,
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
      data_tree: [],
      tableData: [],
    };
  },
  methods: {
    //应用被选中触发
    choose(e) {
      this.id = e;
      let data = { criteria: { _expr: [{ "uApplicationSystem.id": e }] } };
      //  let data = { 'criteria/_expr[1]/uApplicationSystem':{'id':e} };
      criteria_p(data).then((res) => {
        this.tableData = res.uApplyAuth;
        this.tableData.forEach((element) => {
          element.name = localStorage.getItem("token").replace(/^\"|\"$/g, "");
        });
      });
    },
    //审核通过
    handleOk(e) {
      let data = { applyAuthId: e, allow: "1" };
      criteria_s(data).then((res) => {
        if (res.returnCode == 1) {
          this.$message.success("通过成功");
        } else {
          this.$message.warning("通过失败");
        }
      });
    },
    //审核不通过
    handleDetails(e) {
      let data = { applyAuthId: e, allow: "-1" };
      criteria_s(data).then((res) => {
        if (res.returnCode == 1) {
          this.$message.success("操作成功");
        } else {
          this.$message.warning("操作失败");
        }
      });
    },
    //审核删除
    handleDele(e) {},
    //点击上一页
    prev_click(e) {},
    //点击下一页
    next_click(e) {},
    //点击页数事件
    currentChange(e) {},
    //查询警员
    onSubmit() {},
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