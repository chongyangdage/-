<template>
  <div>
    <el-dialog title="字典类型操作" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="字典类型名称">
          <el-input
            @input="change"
            v-model="form.dicttypename"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="字典类型编码">
          <el-input
            @input="change"
            v-model="form.dicttypeid"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addType_click">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="字典项操作" :visible.sync="dialogFormVisible1">
      <el-form :model="form">
        <el-form-item label="字典类型">
          <el-input
            disabled
            @input="change"
            v-model="form1.dicttypename"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="字典项编码">
          <el-input
            @input="change"
            v-model="form1.dictid"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="字典项名称">
          <el-input
            @input="change"
            v-model="form1.dictname"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="字典项排序">
          <el-input
            @input="change"
            v-model="form1.sortno"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="addx_click">确 定</el-button>
      </div>
    </el-dialog>

    <div class="tree">
      <div>
        <dictionaries
          @click_node="click_dic"
          :isCheckbox="false"
          :data="data_tree"
        ></dictionaries>
      </div>

      <div class="table">
        <el-card class="box-card">
          <div style="display: flex; margin-bottom: 20px">
            <div class="text">当前字典类型：{{ type_name }}</div>
            <div class="text1">当前字典类型编码：{{ type_code }}</div>
            <div>
              <el-button
                round
                size="mini"
                style="margin-top: -8px; margin-left: 20px"
                type="primary"
                @click="add_type"
                >添加类型</el-button
              >
            </div>
            <div>
              <el-button
                round
                size="mini"
                style="margin-top: -8px; margin-left: 20px"
                type="primary"
                @click="edit_type"
                >修改类型</el-button
              >
            </div>
            <div>
              <el-button
                round
                size="mini"
                style="margin-top: -8px; margin-left: 20px"
                type="primary"
                @click="dele_type"
                >删除类型</el-button
              >
            </div>
            <div>
              <el-button
                round
                size="mini"
                style="margin-top: -8px; margin-left: 20px"
                @click="add_x()"
                type="success"
                >添加字典项</el-button
              >
            </div>
            <div>
              <el-button
                round
                size="mini"
                style="margin-top: -8px; margin-left: 20px"
                @click="hc()"
                type="success"
                >刷新字典缓存</el-button
              >
            </div>
          </div>

          <el-table
            :stripe="true"
            :border="true"
            size="mini"
            :data="tableData"
            style="width: 1000px"
          >
            <el-table-column align="center" prop="dictid" label="id">
            </el-table-column>
            <el-table-column align="center" prop="dictname" label="值">
            </el-table-column>
            <el-table-column align="center" prop="phone" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="
                    handleEdit(
                      scope.row.dictid,
                      scope.row.dictname,
                      scope.row.sortno,
                      scope.row.eosDictType.dicttypeid
                    )
                  "
                  type="danger"
                  >修改</el-button
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
import dictionaries from "@/views/layout/components/Tree/dictionaries";
import {
  index_list,
  index_addType,
  index_deleType,
  addx,
  hc,
} from "@/api/Dictionaries";

export default {
  components: {
    dictionaries,
  },
  data() {
    return {
      dialogFormVisible1: false,
      form1: {},
      is: "",
      form: {},
      dialogFormVisible: false,
      type_name: "",
      type_code: "",
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
  created() {},
  methods: {
    //点击修改字典项
    handleEdit(e, e1, e2, e3) {
      this.is1 = "edit";
      this.form1.dicttypename = e3;
      this.form1.dictid = e;
      this.form1.dictname = e1;
      this.form1.sortno = e2;
      this.dialogFormVisible1 = true;
    },
    //字典项添加确定
    addx_click() {
      if (this.is1 == "add") {
        this.form1.action = "add";
      } else {
        this.form1.action = "edit";
      }

      this.form1.sortno = parseInt(this.form1.sortno);
      this.form1.eosDictType = { dicttypeid: this.type_code };

      let data = { data: this.form1 };
      addx(data).then((res) => {
        if (res.status == "success") {
          this.dialogFormVisible1 = false;
          this.index_list_data({ dicttypeid: this.type_code });
          this.$message.success("操作成功");
        } else {
          this.$message.warning("操作失败");
        }
      });
    },
    //刷新字典缓存
    hc() {
      hc().then((res) => {
        if (res.status == "success") {
          this.$message.success("操作成功");
        } else {
          this.$message.warning("操作失败");
        }
      });
    },
    //点击添加字典项
    add_x() {
      this.is1 = "add";
      this.form1 = {};
      if (this.type_name == "") {
        this.$message.warning("请选择一个字典类型进行添加");
      } else {
        this.dialogFormVisible1 = true;
        this.form1.dicttypename = this.type_name;
      }
    },
    //删除字典类型
    dele_type() {
      if (this.type_name == "") {
        this.$message.warning("请选择一个字典类型进行删除");
        return;
      }
      this.$confirm(
        `此操作将永久删除类型为${this.type_name}的字典, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          let data = {
            dicttypeid: this.type_code,
            dicttypename: this.type_name,
            seqno: this.type_seqno,
          };
          let data1 = { data: [data] };
          index_deleType(data1).then((res) => {
            if (res.status == "success") {
              this.dialogFormVisible = false;
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.$router.go(0);
            } else {
              this.$message({
                type: "info",
                message: "已取消删除",
              });
            }
          });
        })
        .catch(() => {});
    },
    //inputchange
    change() {
      this.$forceUpdate();
    },
    //确定添加字典类型
    addType_click() {
      this.form.rank = "";
      this.form.seqno = "";
      if (this.is == "add") {
        this.form.action = "add";
      } else {
        this.form.action = "edit";
      }

      this.form.parentid = "";
      let data = { data: this.form };
      index_addType(data).then((res) => {
        if (res.status == "success") {
          this.dialogFormVisible = false;
          this.$message.success("操作成功");
          this.$router.go(0);
        } else {
          this.$message.warning("操作失败");
        }
      });
    },
    //添加字典类型
    add_type() {
      this.is = "add";
      this.form.dicttypename = "";
      this.form.dicttypeid = "";
      this.dialogFormVisible = true;
    },
    //修改字典类型
    edit_type() {
      if (this.type_name == "") {
        this.$message.warning("请选择一个字典类型进行修改");
      } else {
        this.is = "edit";
        this.form.dicttypename = this.type_name;
        this.form.dicttypeid = this.type_code;
        this.dialogFormVisible = true;
      }
    },
    //字典类型被点击
    click_dic(e, e1, e3) {
      this.type_name = e;
      this.type_code = e1;
      this.type_seqno = e3;
      this.index_list_data({ dicttypeid: this.type_code });
    },
    //查新字典项
    index_list_data(e) {
      index_list(e).then((res) => {
        this.tableData = res.data;
      });
    },
    //审核通过
    handleOk(e) {},
    //审核详情
    handleDetails(e) {},
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
.text {
  color: red;
  font-size: 13px;
}
.text1 {
  color: red;
  font-size: 13px;
  margin-left: 19px;
}
.box-card {
  width: 800px;
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