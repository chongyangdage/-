<template>
  <div>
    <div class="tree">
      <div>
        <Tree  @click_node="node_click" :data="data_tree"></Tree>
      </div>

      <div class="table">
        <el-card class="box-card">
          <div class="title_wrap">
            <div class="title">用户信息列表</div>
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
              prop="sortno"
              label="序号"
            >
              <template slot-scope="scope">
                <el-input
                  @input="input"
                  @blur="blur"
                  style="
                    margin: 0px;
                    padding: 0px;
                    text-align: center !important;
                  "
                  placeholder="请输入内容"
                  v-model="scope.row.sortno"
                  :disabled="isDisabled == scope.row.empname ? false : true"
                >
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="empname" label="真实姓名">
            </el-table-column>
            <el-table-column align="center" prop="name" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleSolt(scope.row.sortno, scope.row.empid,scope.row.empname)"
                  type="success"
                  >编辑排序</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination title_wrap">
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
            <div class="title1" style="margin-left: 20px">
              <el-button size="mini" @click="sort" type="primary" round>保存</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import Tree from "@/views/layout/components/Tree/index_yellow";
import { index, index1, index_dele,index_change } from "@/api/people";
import { sort_index } from "@/api/sort";
export default {
  components: {
    Tree,
  },
  data() {
    return {
      sory_name: "",
      isDisabled: -1,
      sort_num: "",
      page_size: 10,
      page:1,
      total: 0,
      formInline: {
        post: "",
        user: "",
        alarm: "",
      },
      data_tree: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
            },
            {
              id: 5,
              label: "三级 1-2",
            },
            {
              id: 6,
              label: "三级 1-3",
            },
            {
              id: 7,
              label: "三级 1-4",
            },
            {
              id: 8,
              label: "三级 1-5",
            },
            {
              id: 9,
              label: "三级 1-6",
            },
            {
              id: 16,
              label: "三级 1-3",
            },
            {
              id: 17,
              label: "三级 1-4",
            },
            {
              id: 18,
              label: "三级 1-5",
            },
            {
              id: 19,
              label: "三级 1-6",
            },
            {
              id: 26,
              label: "三级 1-3",
            },
            {
              id: 27,
              label: "三级 1-4",
            },
            {
              id: 28,
              label: "三级 1-5",
            },
            {
              id: 29,
              label: "三级 1-6",
            },
            {
              id: 688,
              label: "三级 1-3",
            },
            {
              id: 37,
              label: "三级 1-4",
            },
            {
              id: 38,
              label: "三级 1-5",
            },
            {
              id: 39,
              label: "三级 1-6",
            },
            {
              id: 46,
              label: "三级 1-3",
            },
            {
              id: 47,
              label: "三级 1-4",
            },
            {
              id: 48,
              label: "三级 1-5",
            },
            {
              id: 49,
              label: "三级 1-6",
            },
            {
              id: 56,
              label: "三级 1-3",
            },
            {
              id: 57,
              label: "三级 1-4",
            },
            {
              id: 58,
              label: "三级 1-5",
            },
            {
              id: 59,
              label: "三级 1-6",
            },
            {
              id: 677,
              label: "三级 1-3",
            },
            {
              id: 657,
              label: "三级 1-4",
            },
            {
              id: 68,
              label: "三级 1-5",
            },
            {
              id: 69,
              label: "三级 1-6",
            },
            {
              id: 7446,
              label: "三级 1-3",
            },
            {
              id: 77,
              label: "三级 1-4",
            },
            {
              id: 78,
              label: "三级 1-5",
            },
            {
              id: 98,
              label: "三级 1-6",
            },
            {
              id: 76,
              label: "三级 1-3",
            },
            {
              id: 87,
              label: "三级 1-4",
            },
            {
              id: 88,
              label: "三级 1-5",
            },
            {
              id: 89,
              label: "三级 1-6",
            },
          ],
        },
      ],
      sort_now: "",
      tableData: [
      ],
    };
  },
  methods: {
    //节点被点击
    node_click(e, str) {
      this.str=str
      this.e=e
      if (str == "empid") {
        
        let data = { criteria: { _expr: [{ empid: e, _op: "=" }] },page:{length:this.page_size,isCount:true,begin:this.page} };
        index(data).then((res) => {
          this.tableData = res.data;
          this.total=res.page.count
      
        });
      } else {
        this.idd=e
        this.p_data(this.idd)
      }
    },
    //查询单位人
    p_data(e){
      this.e1=e
       let data = { criteria: { _expr: [{ orgid: this.e1, _op: "=" }] },page:{length:this.page_size,isCount:true,begin:this.page} };
        index(data).then((res) => {
          this.tableData = res.data;
           this.total=res.page.count
       
        });
    },
    //输入框失去焦点触发
    blur() {
      let e = this.sort_now;
    
      this.tableData.forEach((item) => {
        if (e == item.Company && item.name != this.isDisabled) {
          item.Company = this.sort_num;
     
        }
      });
      this.isDisabled = -1;
    },
    //输入框文字改变触发
    input(e) {
      this.sort_now = e;
    },
    //点击排序
    handleSolt(id, name,e) {
      this.isDisabled = e;
      this.sort_num = id;
      this.sory_name = name;
    },
    //点击上一页
    prev_click(e) {

      this.page=e
      if (this.str == "empid") {
        
        let data = { criteria: { _expr: [{ empid: this.e, _op: "=" }] },page:{length:this.page_size,isCount:true,begin:this.page} };
        index(data).then((res) => {
          this.tableData = res.data;
          this.total=res.page.count
    
        });
      } else {
        
        this.p_data(this.idd)
      }
    },
    //点击下一页
    next_click(e) {

      this.page=e
      if (this.str == "empid") {
        
        let data = { criteria: { _expr: [{ empid: this.e, _op: "=" }] },page:{length:this.page_size,isCount:true,begin:this.page} };
        index(data).then((res) => {
          this.tableData = res.data;
          this.total=res.page.count
   
        });
      } else {
      
        this.p_data(this.idd)
      }
    },
    //点击页数事件
    currentChange(e) {

      this.page=e
      if (this.str == "empid") {
        
        let data = { criteria: { _expr: [{ empid: this.e, _op: "=" }] },page:{length:this.page_size,isCount:true,begin:this.page} };
        index(data).then((res) => {
          this.tableData = res.data;
          this.total=res.page.count
  
        });
      } else {
      
        this.p_data(this.idd)
      }
    },
    //查询警员
    onSubmit() {
     
    },
    //点击保存
    sort(){
      this.blur()
      let data={employee:{sortno:this.sort_now,empid:this.sory_name}}
      sort_index(data).then(res=>{

        if(res.returnCode==1){
          this.$message.success("排序成功");
        } else {
          this.$message.warning("排序失败");
        }
      })
      
    }
  },
};
</script>
<style  scoped>
.title_wrap {
  display: flex;
  justify-content: space-between;
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
.box-card {
  width: 600px;
}
.tree {
  height: 100%;
  display: flex;
}
.pagination {
  margin-top: 10px;
}
</style>