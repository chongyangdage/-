<template>
  <div>
    <div class="tree">
      <el-dialog title="详细信息" :visible.sync="dialogVisible1" width="30%">
        <el-form label-width="80px" :model="ruleForm">
          <el-form-item label-width="120px" label="真实姓名" prop="empname">
            <el-input
              style="width: 300px"
              v-model="ruleForm.empname"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="证件类型" prop="cardtype">
            <el-input
              style="width: 300px"
              v-model="ruleForm.cardtype"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="证件号" prop="cardno">
            <el-input style="width: 300px" v-model="ruleForm.cardno"></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="警号/辅警号" prop="empcode">
            <el-input
              style="width: 300px"
              v-model="ruleForm.empcode"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="手机号" prop="mobileno">
            <el-input
              style="width: 300px"
              v-model="ruleForm.mobileno"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="警务通手机号" prop="otel">
            <el-input style="width: 300px" v-model="ruleForm.otel"></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="公安网邮箱" prop="oemail">
            <el-input style="width: 300px" v-model="ruleForm.oemail"></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="人员类别" prop="faxnoname">
            <el-input
              style="width: 300px"
              v-model="ruleForm.faxnoname"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="政治面貌" prop="partyname">
            <el-input
              style="width: 300px"
              v-model="ruleForm.partyname"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="职务类别" prop="degreename">
            <el-input
              style="width: 300px"
              v-model="ruleForm.degreename"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="部门类别" prop="workexpname">
            <el-input
              style="width: 300px"
              v-model="ruleForm.workexpname"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="所属单位" prop="orgid">
            <el-input
              style="width: 300px"
              v-model="ruleForm.orgname"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
        </span>
      </el-dialog>

      <el-dialog
        title="添加管理员"
        :visible.sync="centerDialogVisible"
        width="45%"
        center
      >
        <div class="dialog_wrap" style="display: flex">
          <div class="tree_wrap">
            <mul1 @ok="choose1" isCheckbox :data="data_tree"></mul1>
          </div>

          <div class="from_wrap">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <el-form-item label="添加管理员">
                <el-input
                  disabled
                  v-model="changeUser"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-form>
            <div style="display: flex">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="change">确 定</el-button>
            </div>
          </div>
        </div>
      </el-dialog>

      <div class="table">
        <el-card class="box-card">
          <div class="title">用户信息列表</div>
          <div>
            <el-button size="mini" @click="add_p()" type="warning"
              >增加安全管理员</el-button
            >
          </div>
          <el-table
            :stripe="true"
            :border="true"
            size="mini"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              width="80"
              align="center"
              prop="empname"
              label="中文名称"
            >
            </el-table-column>
            <el-table-column align="center" prop="cardno" label="用户证件号">
            </el-table-column>
            <el-table-column align="center" prop="orgname" label="所在部门">
            </el-table-column>
            <el-table-column align="center" prop="phone" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleDetails(scope.row)"
                  type="warning"
                  >详情</el-button
                >
                <el-button
                  size="mini"
                  @click="handleDele(scope.row.empid)"
                  type="danger"
                  >删除</el-button
                >
              </template>
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
import mul1 from "@/views/layout/components/Tree/mul1";
import { add, find_p, dele } from "@/api/administrators";
export default {
  components: {
    Tree,
    mul1,
  },
  data() {
    return {
      dialogVisible1: false,
      ruleForm: {},
      form: {},
      data_tree: [],
      changeUser: "",
      centerDialogVisible: false,
      page_size: 10,
      total: 0,
      page: 0,
      formInline: {
        post: "",
        user: "",
        alarm: "",
      },

      tableData: [],
    };
  },
  created() {
    this.all_data();
  },
  methods: {
    //初始化数据
    all_data() {
      let data = {
        criteria: { _expr: [{ qq: "1", _op: "=" }] },
        page: { length: this.page_size, isCount: false, begin: this.page * 10 },
      };
      find_p(data).then((res) => {
        this.tableData = res.data;
      });
    },
    //点击增加管理员
    add_p() {
      this.centerDialogVisible = true;
    },
    //确定添加管理员
    change() {
      let data = {
        employee: {
          empid: this.changeUser,
          qq: 1,
        },
      };
      add(data).then((res) => {
        if (res.response.flag) {
          this.$message.success("添加成功");
          this.all_data();
          this.centerDialogVisible = false;
        } else {
          this.$message.warning("添加失败");
        }
      });
    },
    //人选复选框被选择
    choose1(e, e1, e3) {
      this.new_orgin = e3;
      this.changeUser = this.new_orgin;
    },
    //审核通过
    handleOk(e) {},
    //审核详情
    handleDetails(e) {
      this.ruleForm = e;
      this.dialogVisible1 = true;
    },
    //删除
    handleDele(e) {
      this.$confirm("此操作将永久删除该人员, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = { employee: { empid: e, qq: 0 } };
          dele(data).then((res) => {
            if (res.response.flag) {
              this.all_data();
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            } else {
              this.$message({
                type: "warning",
                message: "删除失败!",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //点击上一页
    prev_click(e) {
      console.log(e);
      this.pahe = e - 1;
      this.all_data();
    },
    //点击下一页
    next_click(e) {
      console.log(e);
      this.pahe = e - 1;
      this.all_data();
    },
    //点击页数事件
    currentChange(e) {
      console.log(e);
      this.pahe = e - 1;
      this.all_data();
    },
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