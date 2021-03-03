<template>
  <div>

    <Mynewsup v-show="!is_change" :is_mytest="false"></Mynewsup>
    <div v-show="is_change">
      <el-dialog
        title="单位用户变动"
        :visible.sync="centerDialogVisible"
        width="45%"
        center
      >
        <div class="dialog_wrap" style="display: flex">
          <div class="tree_wrap">
            <Tree1 @ok='choose' isCheckbox :data="data_tree"></Tree1>
          </div>

          <div class="from_wrap">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
            >
              <el-form-item label="变动用户">
                <el-input
                  disabled
                  v-model="changeUser"
                  placeholder=""
                ></el-input>
              </el-form-item>
            </el-form>
            <div style="display: flex">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="change"
                >确 定</el-button
              >
            </div>
          </div>
        </div>
      </el-dialog>
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
       <el-form-item
              prop="degree"
              label="职务类别"
             
            >
              <el-select v-model="formInline.degree" placeholder="请选择职务类别">
                <el-option  v-for="(item,index) in dic_data3" :key='index' :label="item.dictname" :value="item.dictid" ></el-option>
              
              </el-select>
            </el-form-item>
        <el-form-item class="form-item" label="警号/辅警号:">
          <el-input
            v-model="formInline.empcode"
            placeholder="请填写警号/辅警号"
          ></el-input>
        </el-form-item>
        <el-form-item class="form-item" label="证件号:">
          <el-input
            v-model="formInline.cardno"
            placeholder="请填写身份证号"
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
          <Tree @click_node="node_click" :data="data_tree"></Tree>
        </div>

        <div class="table">
          <el-card class="box-card">
            <div class="title">用户信息列表</div>
            <el-button style="margin-bottom:10px" size='mini' type="primary" @click="add_people">新增人员</el-button>
            <el-table
              :stripe="true"
              :border="true"
              size="mini"
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column
                width="130"
                align="center"
                prop="orgid"
                label="所属单位"
              >
              </el-table-column>
              <el-table-column
                width="80"
                align="center"
                prop="empname"
                label="真实姓名"
              >
              </el-table-column>
              <el-table-column
                width="100"
                align="center"
                prop="empcode"
                label="警号/辅警号"
              >
              </el-table-column>
              <el-table-column
                width="100"
                align="center"
                prop="degree"
                label="职务"
              >
              </el-table-column>
              <el-table-column
                width="160"
                align="center"
                prop="oemail"
                label="电子邮箱"
              >
              </el-table-column>
              <el-table-column
                width="100"
                align="center"
                prop="mobileno"
                label="手机号"
              >
              </el-table-column>
              <el-table-column align="center" prop="phone" label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleChange(scope.row.empid,scope.row.orgid,scope.row.empname)"
                    type="warning"
                    >变动</el-button
                  >
                  <el-button
                    size="mini"
                    type="warning"
                    @click="handleEdit(scope.row)"
                    plain
                    >修改</el-button
                  >
                  <el-button
                    size="mini"
                    @click="handleDele(scope.row.empid, scope.row.orgid)"
                    type="danger"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div  class="pagination">
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
  </div>
</template>
<script>
import Tree1 from "@/views/layout/components/Tree/register";
import Tree from "@/views/layout/components/Tree/index_yellow";
import Mynewsup from "@/views/main/self_service/My_news_up";
import { index, index1, index_dele,index_change } from "@/api/people";
import {dicttype_index} from '@/api/dicttype'
export default {
  components: {
    Tree,
    Tree1,
    Mynewsup,
  },
  data() {
    return {
      show:true,
      idd:'',
      dic_data3:'',
      empid:'',
      orgid:'',
      new_orgin:'',
      changeUser: "刘德华",
      is_change: true,
      centerDialogVisible: false,
      form: {
        region: "",
      },
      page:1,
      page_size: 2,
      total: 0,
      formInline: {
 
      },
      data_tree: [],
      tableData: [],
    };
  },
  created() {
     //职务类别
    dicttype_index({dicttypeid:'COF_DUTIES'}).then(res=>{
      this.dic_data3=res.data
    
    })
  },
  methods: {
    //新增人员
    add_people(){
      this.$router.push({ path: "/register" });
    },
    //复选框被选择
    choose(e){
      this.new_orgin=e
    },
    //确定变动
    change(){
      let data={dragNodeId:this.empid,dragNodeType:'OrgEmployee',dropNodeType:'OrgOrganization',dragParentNodeId:this.orgid,dragParentNodeType:'OrgOrganization',dropNodeId:this.new_orgin}
      index_change(data).then(res=>{
      
        if(res.result==1){
          this.$message.success("变动成功");
           this.centerDialogVisible = false;
        }else{
          this.$message.warning("变动失败");
        }
      })
    },
    //节点被点击
    node_click(e, str) {
      this.show=true
      if (str == "empid") {
        let data = { criteria: { _expr: [{ empid: e, _op: "=" }] }};
        index(data).then((res) => {
          this.tableData = res.data;
            this.total=res.page.count
        });
      } else {
        this.idd=e
       this.p_data(this.idd)
      }
    },
    //查询部门所有人员
    p_data(e){
       let data = { criteria: { _expr: [{ orgid: e, _op: "=" }] },page:{length:this.page_size,isCount:true,begin:this.page} };
        index(data).then((res) => {
          this.tableData = res.data;
          this.total=res.page.count
          
        });
    },
    //人员修改
    handleEdit(e) {
      this.is_change = false;
    },
    //人员变动
    handleChange(e,e1,e2) {
      this.changeUser=e2
      this.empid=e
      this.orgid=e1
      this.centerDialogVisible = true;
      
    },
    //人员删除
    handleDele(e, e1) {
      let data = {
        nodeId: e,
        parentId: e1,
        nodeType: "OrgEmployee",
        parentType: "OrgOrganization",
        isDeleteCascade: true,
      };
      index_dele(data).then((res) => {
        if (res.returnCode == 1) {
          this.$message.success("删除成功");
        } else {
          this.$message.warning("删除失败");
        }
   
      });
    },
    //点击上一页
    prev_click(e) {
 
      this.page=e
      if(this.show){
        
      this.p_data(this.idd)
      }else{
        this.onSubmit()
      }
      
    },
    //点击下一页
    next_click(e) {
  
      this.page=e
       if(this.show){
        
      this.p_data(this.idd)
      }else{
        this.onSubmit()
      }
    },
    //点击页数事件
    currentChange(e) {

       this.page=e
       if(this.show){
       
      this.p_data(this.idd)
      }else{
        this.onSubmit()
      }
    },
    //查询警员
    onSubmit() {
      this.show=false
      this.formInline._op="="
      let data = { criteria: { _expr: [ this.formInline] },page:{length:this.page_size,isCount:true,begin:this.page} };
        index(data).then((res) => {
          this.tableData = res.data;
          this.total=res.page.count
 
        });
    
    },
  },
};
</script>
<style  scoped>
.tree_wrap {
  margin-right: 20px;
}
.from_wrap {
  margin-left: 20px;
}
.dialog_wrap {
  padding: 10px 30px;
}
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