<template>
  <div>
    <div class="tree">
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
            <el-form :inline="true"  class="demo-form-inline">
              <el-form-item label="添加管理员">
                <el-input
                  @input="change1"
                  disabled
                  v-model="form.orgmanager_name"
                  placeholder="请选择管理员"
                ></el-input>
              </el-form-item>
              <el-form-item class="form-item" label="部门名称:">
                <el-input
                  @input="change1"
                  v-model="form.orgname"
                  placeholder="请输入部门名称"
                ></el-input>
              </el-form-item>

              <el-form-item class="form-item" label="部门编码:">
                <el-input
                  @input="change1"
                  v-model="form.orgcode"
                  placeholder="请填写部门编码"
                ></el-input>
              </el-form-item>

              <el-form-item label="部门类别">
                <el-select v-model="form.orgtype" placeholder="请选择部门类别">
                  <el-option
                    v-for="(item, index) in dic_data4"
                    :key="index"
                    :label="item.dictname"
                    :value="item.dictid"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="部门描述">
                <el-input
                  @input="change1"
                  type="textarea"
                  v-model="form.remark"
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
      <div>
        <Tree
          @add="add"
          @dele="dele"
          @ok="node_click"
          :isCheckbox="true"
          :data="data_tree"
        ></Tree>
      </div>
      <el-card class="box-card">
        <el-form
          size="mini"
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
        >
          <el-form-item class="form-item" label="部门名称:">
            <el-input
              v-model="formInline.orgname"
              placeholder="请输入部门名称"
            ></el-input>
          </el-form-item>

          <el-form-item class="form-item" label="部门编码:">
            <el-input
              v-model="formInline.orgcode"
              placeholder="请填写部门编码"
            ></el-input>
          </el-form-item>

          <el-form-item label="部门类别">
            <el-select
              v-model="formInline.orgtype"
              placeholder="请选择部门类别"
            >
              <el-option
                v-for="(item, index) in dic_data4"
                :key="index"
                :label="item.dictname"
                :value="item.dictid"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="部门描述">
            <el-input type="textarea" v-model="formInline.remark"></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="">
            <el-button
              size="mini"
              style="margin-top: 20px"
              type="primary"
              @click="onSubmit"
              >保存</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import Tree from "@/views/layout/components/Tree/index_dele";
import { dele, edit, add } from "@/api/department";
import mul from "@/views/layout/components/Tree/mul";
import mul1 from "@/views/layout/components/Tree/mul1";
import { dicttype_index } from "@/api/dicttype";
export default {
  components: {
    Tree,
    mul1,
    mul,
  },
  data() {
    return {
      num: false,
      obj: "",
      form: {
        orgOrganization: { orgid: "" },
      },
      orgmanager: "",
      centerDialogVisible: false,
      now_orgid: "",
      parentId: "",
      dic_data4: "",
      page_size: 7,
      total: 100,
      formInline: {},
      data_tree: [],
    };
  },
  created() {
    //部门类别
    dicttype_index({ dicttypeid: "COF_ORGTYPE" }).then((res) => {
      this.dic_data4 = res.data;

    });
  },
  watch: {
    num(val) {
  
      if (val == true) {
        this.dele_b();
      }
    },
  },
  methods: {
    //更新dom
    change1() {
      this.$forceUpdate();
    },
    //删除部门接口
    dele_b() {
      let data = {
        nodeId: this.obj.orgid,
        nodeType: "OrgOrganization",
        parentId: this.obj.orgOrganization.orgid,
        parentType: "OrgOrganization",
        isDeleteCascade: true,
      };
      dele(data).then((res) => {
        this.num = false;
      });
    },
    //确定增加
    change() {
      this.form.orgOrganization.orgid = this.parentId1;
      let data = { orgOrganization: this.form };
      add(data).then((res) => {
        if (res.response.flag) {
          location.reload()
          this.$message.success("添加成功");
          this.centerDialogVisible = false;
        } else {
          this.$message.warning("添加失败");
        }
      });
    },
    //人选复选框被选择
    choose1(e, e1, e3) {
      console.log(e,e1,e3)
      this.form.orgmanager_name = e1;
      console.log(this.form.orgmanager_name,'sssaaa')
      
      this.form.orgmanager = e3;
      this.form1=this.form
      this.form={}
       this.form=this.form1
    },
    //删除部门
    dele(e) {
      this.obj = e;
      let that = this;
      this.$confirm(`此操作将永久删除${e.nodeName}, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          that.num = true;
          location.reload()
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //z增加部门
    add(e) {
      console.log(e,'ddddd')
      this.centerDialogVisible = true;

      if (e.orgOrganization) {
        this.parentId1 = e.orgid;
         console.log(e,'gggggggggggggg')
      } else {
        this.parentId1 = "";
      }
    },
    //节点被选中
    node_click(e) {
      this.now_orgid = e.orgid;
      this.parentId = e.orgOrganization.orgid;
      this.formInline = e;
      console.log(e,'快快快快快快')
    },

    //修改部门
    onSubmit() {
      let data = { orgOrganization: this.formInline };
      edit(data).then((res) => {
        if (res.response.flag) {
          this.$message.success("修改成功");
        } else {
          this.$message.warning("修改失败");
        }
      });
    },
  },
};
</script>
<style  scoped>
.demo-form-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box-card {
  width: 700px;
  height: 300px;
  margin-left: 50px;
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