<template>
  <div>
    <el-form
      size="mini"
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item class="form-item" label="姓名:">
        <el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
      </el-form-item>

      <el-form-item label="职务">
    <el-select v-model="formInline.user" placeholder="请选择职务">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
      <el-form-item class="form-item" label="警号/辅警号:">
        <el-input
          v-model="formInline.alarm"
          placeholder="请填写警号/辅警号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="tree">
      <div>
        <Tree :data="data_tree"></Tree>
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
            <el-table-column align="center" prop="Company" label="所属单位">
            </el-table-column>
            <el-table-column align="center" prop="name" label="真实姓名">
            </el-table-column>
            <el-table-column align="center" prop="num" label="警号/辅警号">
            </el-table-column>
            <el-table-column align="center" prop="post" label="职务">
            </el-table-column>
            <el-table-column align="center" prop="email" label="电子邮箱">
            </el-table-column>
            <el-table-column align="center" prop="phone" label="手机号">
              <template slot-scope="scope">
                <el-tag>{{ scope.row.phone }}</el-tag>
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
export default {
  components: {
    Tree,
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
      data_tree: [
       
      ],
      tableData: [
       
      ],
    };
  },
  methods: {
    //点击上一页
    prev_click(e) {
      console.log(e);
    },
    //点击下一页
    next_click(e) {
      console.log(e);
    },
    //点击页数事件
    currentChange(e) {
      console.log(e);
    },
    //查询警员
    onSubmit() {
      console.log(this.formInline);
    },
  },
};
</script>
<style  scoped>
.box-card{
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