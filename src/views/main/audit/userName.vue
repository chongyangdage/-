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

      <el-form-item label="状态">
        <el-select v-model="formInline.alarm" placeholder="请选择状态">
          <el-option label="待岗" value="1"></el-option>
          <el-option label="在岗" value="2"></el-option>
          <el-option label="退休" value="3"></el-option>
          <el-option label="离职" value="4"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="form-item" label="身份证号:">
        <el-input
          v-model="formInline.cardno"
          placeholder="请填写身份证号"
        ></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="警号/辅警号:">
        <el-input
          v-model="formInline.empcode"
          placeholder="请填写警号/辅警号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="tree">
      <div>
        <Tree @click_node="node_click" :data="data_tree"></Tree>
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
            <el-table-column align="center" prop="orgname" label="所属单位">
            </el-table-column>
            <el-table-column align="center" prop="empname" label="真实姓名">
            </el-table-column>
            <el-table-column align="center" prop="empcode" label="警号/辅警号">
            </el-table-column>
            <el-table-column align="center" prop="mobileno" label="手机号">
            </el-table-column>
            <el-table-column align="center" prop="empstatus" label="状态">
            </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleDele(scope.row.empid)"
                  type="danger"
                  >初始化</el-button
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
import Tree from "@/views/layout/components/Tree/people";
import { index, index_create } from "@/api/people";
import { historical_users } from "@/api/historical_users";
export default {
  components: {
    Tree,
  },
  data() {
    return {
      page_size: 10,
      total: 0,
      page: 0,
      formInline: {},
      data_tree: [],
      tableData: [],
    };
  },
  methods: {
    //页数触发
    page_data() {
      if (this.str == "empid") {
        let data = {
          criteria: { _expr: [{ empid: this.e, _op: "=" }] },
          page: {
            length: this.page_size,
            isCount: true,
            begin: this.page * 10,
          },
        };
        index(data).then((res) => {
          this.tableData = res.data;
          this.total = res.page.count;
        });
      } else {
        this.p_data(this.idd);
      }
    },
    //节点被点击
    node_click(e, str) {
      this.is = true;
      this.str = str;
      this.e = e;
      if (str == "empid") {
        let data = {
          criteria: { _expr: [{ empid: e, _op: "=" }] },
          page: {
            length: this.page_size,
            isCount: true,
            begin: this.page * 10,
          },
        };
        index(data).then((res) => {
          console.log(res, "aaaa");
          this.tableData = res.data;
          this.total = res.page.count;
        });
      } else {
        this.idd = e;
        this.p_data(this.idd);
      }
    },
    //查询单位人
    p_data(e) {
      this.e1 = e;
      let data = {
        criteria: { _expr: [{ orgid: this.e1, _op: "=" }] },
        page: { length: this.page_size, isCount: true, begin: this.page * 10 },
      };
      index(data).then((res) => {
        this.tableData = res.data;
        this.total = res.page.count;
      });
    },
    //点击上一页
    prev_click(e) {
      this.page = e - 1;
      if (this.is) {
        this.page_data();
      } else {
        this.onSubmit();
      }
    },
    //点击下一页
    next_click(e) {
      this.page = e - 1;
      if (this.is) {
        this.page_data();
      } else {
        this.onSubmit();
      }
    },
    //点击页数事件
    currentChange(e) {
      this.page = e - 1;
      if (this.is) {
        this.page_data();
      } else {
        this.onSubmit();
      }
    },
    //点击初始化
    handleDele(e) {
      let data = { empid: e };
      index_create(data).then((res) => {
        if (res.returnCode == 0) {
          this.$message.success("初始化成功");
        } else {
          this.$message.warning("初始化失败");
        }
      });
    },
    //查询警员
    onSubmit() {
      this.is = false;
      this.formInline._op = "=";
      let data = {
        criteria: { _expr: [this.formInline] },
        page: { length: this.page_size, isCount: false, begin: this.page * 10 },
      };
      index(data).then((res) => {
        console.log(res, "lllllll");
        this.tableData = res.data;
        this.total = res.page.count;
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