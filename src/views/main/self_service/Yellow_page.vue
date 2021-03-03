<template>
  <div>
    <el-form :inline="true" :model="find_people" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input
          v-model="find_people.template.empname"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item label="职务">
        <el-select
          v-model="find_people.template.degree"
          placeholder="请选择职务"
        >
          <el-option
            v-for="(item, index) in dic_data"
            :key="index"
            :label="item.dictname"
            :value="item.dictid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="警号/辅警号">
        <el-input
          v-model="find_people.template.empcode"
          placeholder="请填写警号或辅警号"
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
            <el-table-column align="center" prop="orgid" label="所属单位">
            </el-table-column>
            <el-table-column align="center" prop="empname" label="真实姓名">
            </el-table-column>
            <el-table-column align="center" prop="empcode" label="警号/辅警号">
            </el-table-column>
            <el-table-column align="center" prop="degree" label="职务">
            </el-table-column>
            <el-table-column align="center" prop="oemail" label="电子邮箱">
            </el-table-column>
            <el-table-column align="center" prop="mobileno" label="手机号">
            </el-table-column>
          </el-table>
          <div v-if="show" class="pagination">
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
import Tree from "@/views/layout/components/Tree/index_yellow";
import { index, index1 } from "@/api/people";
import { dicttype_index } from "@/api/dicttype";
export default {
  components: {
    Tree,
  },
  data() {
    return {
      show: true,
      dic_data: [],
      find_people: {
        template: {
          empid: "",
          empname: "",
          cardtype: "",
          cardno: "",
          gender: "",
          mobileno: "",
          otel: "",
          empcode: "",
          oemail: "",
          faxno: "",
          party: "",
          degree: "",
          workexp: "",
          orgid: "",
          ozipcode: "",
        },
      },
      page_size: 10,
      total: 0,
      page: 0,
      formInline: {
        post: "",
        user: "",
        alarm: "",
      },
      data_tree: [],
      tableData: [],
    };
  },
  created() {
    dicttype_index({ dicttypeid: "COF_DUTIES" }).then((res) => {
      this.dic_data = res.data;
    });
    this.all_data();
  },
  methods: {
    //初始化数据
    all_data() {
      this.ispage = 3;
      index({
        page: { length: this.page_size, isCount: true, begin: this.page * 10 },
      }).then((res) => {
        this.tableData = [];
        this.tableData = res.data;
        this.total = res.page.count;
      });
    },
    //节点被点击
    node_click(e, str) {
      this.page_id = e;

      if (str == "empid") {
        this.show = false;
        this.ispage = 2;
        let data = { criteria: { _expr: [{ empid: e, _op: "=" }] } };
        index(data).then((res) => {
          this.tableData = res.data;
          this.tableData = res.data;
          this.total = res.page.count;
        });
      } else {
        this.ispage = 1;
        let data = {
          criteria: { _expr: [{ orgid: this.page_id, _op: "=" }] },
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
      }
    },
    //单机分页
    page_click() {
      let data = {
        criteria: { _expr: [{ orgid: this.page_id, _op: "=" }] },
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
      if (this.ispage == 3) {
        this.all_data();
      } else if (this.ispage == 1) {
        this.page_click();
      } else {
        this.total = 0;
      }
    },
    //点击下一页
    next_click(e) {
      this.page = e - 1;
      if (this.ispage == 3) {
        this.all_data();
      } else if (this.ispage == 1) {
        this.page_click();
      } else {
        this.total = 0;
      }
    },
    //点击页数事件
    currentChange(e) {
      this.page = e - 1;
      if (this.ispage == 3) {
        this.all_data();
      } else if (this.ispage == 1) {
        this.page_click();
      } else {
        this.total = 0;
      }
    },
    //查询警员
    onSubmit() {
      let data = this.find_people;
      data.length = 1;
      index1(data).then((res) => {
        this.show = false;
        this.tableData = [];
        this.tableData.push(res.employee);
      });
    },
  },
};
</script>
<style  scoped>
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
.box-card {
  width: 1000px;
}
.tree {
  height: 100%;
  display: flex;
}
.pagination {
  margin-top: 10px;
}
</style>