<template>
  <div>
         <el-dialog
  title="详细信息"
  :visible.sync="dialogVisible1"
  width="30%"
  >
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
            <el-input style="width: 300px" v-model="ruleForm.faxnoname"></el-input>
           
          </el-form-item>
          <el-form-item label-width="120px" label="政治面貌" prop="partyname">
            <el-input style="width: 300px" v-model="ruleForm.partyname"></el-input>
           
          </el-form-item>
          <el-form-item label-width="120px" label="职务类别" prop="degreename">
            <el-input style="width: 300px" v-model="ruleForm.degreename"></el-input>
           
          </el-form-item>
          <el-form-item label-width="120px" label="部门类别" prop="workexpname">
            <el-input
              style="width: 300px"
              v-model="ruleForm.workexpname"
            ></el-input>
          
          </el-form-item>
          <el-form-item label-width="120px" label="所属单位" prop="orgname">
            <el-input style="width: 300px" v-model="ruleForm.orgname"></el-input>
           
          </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
  </span>
</el-dialog>
    <div class="tree">
      <el-dialog
        title="添加管理员"
        :visible.sync="centerDialogVisible"
        width="45%"
        center
      >
        <div class="dialog_wrap" style="display: flex">
          <div class="tree_wrap">
            <Tree1 @ok="choose1" isCheckbox :data="data_tree"></Tree1>
          </div>

          <div class="from_wrap">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
            >
              <el-form-item label="添加管理员">
                <el-input
                  disabled
                  v-model="change_name"
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
      <div>
        <criteria @ok="choose" :isCheckbox="true" :data="data_tree"></criteria>
      </div>

      <div class="table">
        <el-card class="box-card">
          <div class="title">用户信息列表</div>
          <el-button size="mini" @click="handleadd()" type="primary"
            >新增管理员</el-button
          >
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
              prop="orgEmployee.empname"
              label="中文名称"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="orgEmployee.cardno"
              label="用户证件号"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="orgEmployee.workexp"
              label="所在部门"
            >
            </el-table-column>
            <el-table-column align="center" prop="phone" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleDetails(scope.row.orgEmployee)"
                  type="warning"
                  >详情</el-button
                >
                <el-button
                  size="mini"
                  @click="handleDele(scope.row.orgEmployee.empid)"
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
import criteria from "@/views/layout/components/Tree/criteria";
import Tree1 from "@/views/layout/components/Tree/mul1";
import { criteria_p, criteria_dele,criteria_add,criteria_g } from "@/api/criteria";
export default {
  components: {
    criteria,
    Tree1,
  },
  data() {
    return {
      ruleForm:[],
      dialogVisible1:false,
      change_name:'',
      id:'',
      changeUser: "",
      centerDialogVisible: false,
      page_size: 10,
      total: 0,
      page:0,
      formInline: {
        post: "",
        user: "",
        alarm: "",
      },
      new_orgin: "",
      data_tree: [],
      tableData: [],
    };
  },
  methods: {
    //人选复选框被选择
    choose1(e,e1,e3){
        this.change_name=e1
          this.new_orgin = e3;
      this.changeUser = this.new_orgin;
    },
    //应用被选中触发
    choose(e, e1) {
      this.y_name = e1;
      this.id = e;
    
      let data = { systemid: this.id,page: { length: this.page_size, isCount: true, begin: this.page*10 } } ;
      criteria_g(data).then((res) => {
        if(res.page){
          this.total=res.page.count
        }
          
        this.tableData = res.uSystemManagers;
        this.tableData.forEach((element) => {
          element.name = localStorage.getItem("token").replace(/^\"|\"$/g, "");
        });
      });
    },

    //点击页数调用
    page_data(){
       let data = { systemid: this.id,page: { length: this.page_size, isCount: true, begin: this.page*10 } } ;
      criteria_g(data).then((res) => {
          if(res.page){
          this.total=res.page.count
        }
        this.tableData = res.uSystemManagers;
        this.tableData.forEach((element) => {
          element.name = localStorage.getItem("token").replace(/^\"|\"$/g, "");
        });
      });
    },
    //成功刷新
    create_data(){
      let data = { systemid: this.id } ;
      criteria_g(data).then((res) => {

        this.tableData = res.uSystemManagers;
        this.tableData.forEach((element) => {
          element.name = localStorage.getItem("token").replace(/^\"|\"$/g, "");
        });
      });
    },
    //确定管理员
    change() {
      this.changeUser = this.new_orgin;
      let data={systemId:this.id,empid:this.changeUser}
      criteria_add(data).then(res=>{
        if(res.returnCode==1){
          this.create_data()
           this.$message.success('添加成功')
           
           this.centerDialogVisible = false;
            }else{
               this.$message.warning('添加失败')
        }
      
      })
    },
    //添加管理人员
    handleadd() {
      if(this.id==''){
         this.$message({
            type: "info",
            message: "请选择要添加的系统",
          });
      }else{
        this.centerDialogVisible = true;
      }
      
    },
    //审核通过
    handleOk(e) {},
     //审核详情
    handleDetails(e) {
      console.log(e,'ddd')
      this.ruleForm=e
      this.dialogVisible1=true
    },
    //审核删除
    handleDele(e) {
      this.$confirm(
        `此操作将永久删除该人员对${this.y_name}的管理权限, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          let data = { systemId: this.id, empid: e };
          criteria_dele(data).then((res) => {
            if (res.returnCode == 1) {
              this.choose();
              this.$message({
                type: "success",
                message: "删除成功!",
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
      this.page=e-1
      this.page_data()
    },
    //点击下一页
    next_click(e) {
       this.page=e-1
      this.page_data()
    },
    //点击页数事件
    currentChange(e) {
       this.page=e-1
      this.page_data()
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