<template>
  <div>
    <el-dialog title="修改信息" :visible.sync="dialogVisible" width="30%">
      <el-form
        size="mini"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          v-show="is_show == 'empname'"
          label-width="120px"
          label="真实姓名"
          prop="empname"
        >
          <el-input style="width: 300px" v-model="ruleForm.empname"></el-input>
        </el-form-item>

        <el-form-item
          v-show="is_show == 'cardno'"
          label-width="120px"
          label="证件号"
          prop="cardno"
        >
          <el-input style="width: 300px" v-model="ruleForm.cardno"></el-input>
        </el-form-item>
        <el-form-item
          v-show="is_show == 'empcode'"
          label-width="120px"
          label="警号/辅警号"
          prop="empcode"
        >
          <el-input style="width: 300px" v-model="ruleForm.empcode"></el-input>
        </el-form-item>
        <el-form-item
          v-show="is_show == 'mobileno'"
          label-width="120px"
          label="手机号"
          prop="mobileno"
        >
          <el-input style="width: 300px" v-model="ruleForm.mobileno"></el-input>
        </el-form-item>
        <el-form-item
          v-show="is_show == 'otel'"
          label-width="120px"
          label="警务通手机号"
          prop="otel"
        >
          <el-input style="width: 300px" v-model="ruleForm.otel"></el-input>
        </el-form-item>
        <el-form-item
          v-show="is_show == 'oemail'"
          label-width="120px"
          label="公安网邮箱"
          prop="oemail"
        >
          <el-input style="width: 300px" v-model="ruleForm.oemail"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="修改信息" :visible.sync="dialogVisible1" width="30%">
      <el-form
        size="mini"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          v-show="is_show1 == 'faxno'"
          prop="faxno"
          label="人员类型"
          :rules="[
            {
              required: true,
              message: '请选择人员类型',
              trigger: 'change',
            },
          ]"
        >
          <el-select v-model="ruleForm.faxno" placeholder="请选择人员类型">
            <el-option
              v-for="(item, index) in dic_data1"
              :key="index"
              :label="item.dictname"
              :value="item.dictid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          v-show="is_show1 == 'party'"
          prop="party"
          label="政治面貌"
          :rules="[
            {
              required: true,
              message: '请选择政治面貌',
              trigger: 'change',
            },
          ]"
        >
          <el-select v-model="ruleForm.party" placeholder="请选择政治面貌">
            <el-option
              v-for="(item, index) in dic_data2"
              :key="index"
              :label="item.dictname"
              :value="item.dictid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          v-show="is_show1 == 'cardtype'"
          prop="cardtype"
          :rules="[
            {
              required: true,
              message: '请选择证件类型',
              trigger: 'change',
            },
          ]"
          label="证件类型"
        >
          <el-select v-model="ruleForm.cardtype" placeholder="请选择证件类型">
            <el-option
              v-for="(item, index) in dic_data"
              :key="index"
              :label="item.dictname"
              :value="item.dictid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          v-show="is_show1 == 'cardtype'"
          label-width="120px"
          label="证件号"
          prop="cardno"
        >
          <el-input style="width: 300px" v-model="ruleForm.cardno"></el-input>
        </el-form-item>
        <el-form-item
          v-show="is_show1 == 'degree'"
          prop="degree"
          label="职务类别"
          :rules="[
            {
              required: true,
              message: '请选择职务类别',
              trigger: 'change',
            },
          ]"
        >
          <el-select v-model="ruleForm.degree" placeholder="请选择职务类别">
            <el-option
              v-for="(item, index) in dic_data3"
              :key="index"
              :label="item.dictname"
              :value="item.dictid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          v-show="is_show1 == 'workexp'"
          prop="workexp"
          label="部门类别"
          :rules="[
            {
              required: true,
              message: '请选择部门类别',
              trigger: 'change',
            },
          ]"
        >
          <el-select v-model="ruleForm.workexp" placeholder="请选择部门类别">
            <el-option
              v-for="(item, index) in dic_data4"
              :key="index"
              :label="item.dictname"
              :value="item.dictid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          v-show="is_show1 == 'orgid'"
          label="所属单位"
          prop="orgid"
          :rules="[
            {
              required: true,
              message: '请选择所属单位',
              trigger: 'change',
            },
          ]"
        >
          <el-input
            disabled
            v-model="ruleForm.orgid"
            placeholder="请选择所属单位"
          ></el-input>
        </el-form-item>
        <Tree
          v-show="is_show1 == 'orgid'"
          @ok="choose_ok"
          :isCheckbox="true"
          :data="data_tree"
        ></Tree>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ok1">确 定</el-button>
      </span>
    </el-dialog>
    <el-card class="box-card1">
      <div class="my_test">
        <div v-if="is_mytest">
          <img class="header_img" :src="img_src" alt="" srcset="" />
          <div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="success"
              :on-error="error"
              multiple
              list-type="picture"
              :show-file-list="false"
              :limit="1"
            >
              <el-button class="header_img1" size="small" type="primary"
                >点击上传</el-button
              >
            </el-upload>
          </div>

          <el-card class="box-card">
            <div class="card_wrap">
              <div class="list">
                {{ "真实姓名：" + ruleForm.empname }}
              </div>
              <div class="list">
                {{ "警号/辅警号：" + ruleForm.empcode }}
              </div>
              <div class="list">
                {{ "职务：" + ruleForm.degreename }}
              </div>
              <div class="list">
                {{ "所属单位：" + ruleForm.orgname }}
              </div>
            </div>
          </el-card>
        </div>
        <!-- <el-card class="box-card3">
          <div style="font-weight: bold">更改信息日志</div>

          <div v-for="o in 6" :key="o" class="text item">
            {{ "2021年12月21日修改了姓名 " }}
          </div>
        </el-card> -->
      </div>
      <div class="text item">
        <el-form
          size="mini"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label-width="120px" label="真实姓名" prop="empname">
            <el-input
              style="width: 300px"
              v-model="ruleForm.empname"
            ></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit('empname')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="证件类型" prop="cardtype">
            <el-input
              style="width: 300px"
              v-model="ruleForm.cardtype"
            ></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit1('cardtype')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="证件号" prop="cardno">
            <el-input style="width: 300px" v-model="ruleForm.cardno"></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit('cardno')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="警号/辅警号" prop="empcode">
            <el-input
              style="width: 300px"
              v-model="ruleForm.empcode"
            ></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit('empcode')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="手机号" prop="mobileno">
            <el-input
              style="width: 300px"
              v-model="ruleForm.mobileno"
            ></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit('mobileno')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="警务通手机号" prop="otel">
            <el-input style="width: 300px" v-model="ruleForm.otel"></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit('otel')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="公安网邮箱" prop="oemail">
            <el-input style="width: 300px" v-model="ruleForm.oemail"></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit('oemail')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="人员类别" prop="faxnoname">
            <el-input style="width: 300px" v-model="ruleForm.faxnoname"></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit1('faxno')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="政治面貌" prop="partyname">
            <el-input style="width: 300px" v-model="ruleForm.partyname"></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit1('party')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="职务类别" prop="degreename">
            <el-input style="width: 300px" v-model="ruleForm.degreename"></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit1('degree')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="部门类别" prop="workexpname">
            <el-input
              style="width: 300px"
              v-model="ruleForm.workexpname"
            ></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit1('workexp')"
              circle
            ></el-button>
          </el-form-item>
          <el-form-item label-width="120px" label="所属单位" prop="orgname">
            <el-input style="width: 300px" v-model="ruleForm.orgname"></el-input>
            <el-button
              style="margin-left: 20px"
              type="primary"
              icon="el-icon-edit"
              @click="edit1('orgid')"
              circle
            ></el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
import { index1 } from "@/api/people";
import { dicttype_index } from "@/api/dicttype";
import { edit_my } from "@/api/edit_my";
import Tree from "@/views/layout/components/Tree/index_zc";
export default {
  components: {
    Tree,
  },
  name: "My_news_up",
  props: {
    is_mytest: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      id: "",
      dic_data: "",
      dic_data1: "",
      dic_data2: "",
      dic_data3: "",
      dic_data4: "",

      data_tree: [],
      is_show: false,
      is_show1: false,
      dialogVisible: false,
      dialogVisible1: false,
      img_src: require("@/assets/avatar.jpg"),
      my_test: {
        name: "张三丰",
        num: "025252",
        post: "科长",
        unit: "直属科室1",
      },
      ruleForm: {},
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  created() {
    this.begin_data();
    //证件类型
    dicttype_index({ dicttypeid: "COF_CARDTYPE" }).then((res) => {
      this.dic_data = res.data;
    });
    //人员类型
    dicttype_index({ dicttypeid: "COF_EMPCLASS" }).then((res) => {
      this.dic_data1 = res.data;
    });
    //政治面貌
    dicttype_index({ dicttypeid: "COF_PARTYVISAGE" }).then((res) => {
      this.dic_data2 = res.data;
    });
    //职务类别
    dicttype_index({ dicttypeid: "COF_DUTIES" }).then((res) => {
      this.dic_data3 = res.data;
    });
    //部门类别
    dicttype_index({ dicttypeid: "COF_ORGTYPE" }).then((res) => {
      this.dic_data4 = res.data;
    });
  },
  methods: {
    //复选框被选择触发
    choose_ok(id, value) {
      this.ruleForm.orgid = "" + id;
    },
    //取消修改
    cancel() {
      this.begin_data();
      this.dialogVisible = false;
    },
    //点击修改
    edit(e) {
      this.dialogVisible = true;
      this.is_show = e;
    },

    //点击修改
    edit1(e) {
      this.dialogVisible1 = true;
      this.is_show1 = e;
    },
    //初始化数据
    begin_data() {
      console.log(localStorage.getItem("empid").replace(/^\"|\"$/g, ""),'dddd')
      let data1 = {
        template: {
          empid:parseInt(localStorage.getItem("empid").replace(/^\"|\"$/g, "")),
        },
      };
      index1(data1).then((res) => {
        this.ruleForm = res.employee;
        this.ruleForm.cardtype = res.employee.cardtypeName;
        this.ruleForm.faxno = res.employee.faxnoname;
        this.ruleForm.party = res.employee.partyname;
        this.ruleForm.degree = res.employee.degreename;
        this.ruleForm.workexp = res.employee.workexpname;
        this.ruleForm.orgid = res.employee.orgid;
      });
    },
    //确定修改
    ok() {
      let org = { orgid: Number(this.ruleForm.orgid) };
      let data = { employee: this.ruleForm, org };

      edit_my(data).then((res) => {
        if (res.response) {
          this.$message.success("修改成功");
          this.begin_data();
        } else {
          this.$message.warning("修改失败");
        }
      });
      this.dialogVisible = false;
      this.begin_data();
    },
    //确定修改
    ok1() {
      let org = { orgid: Number(this.ruleForm.orgid) };
      let data = { employee: this.ruleForm, org };

      edit_my(data).then((res) => {
        if (res.response) {
          this.$message.success("修改成功");
        } else {
          this.$message.warning("修改失败");
        }
      });
      this.dialogVisible1 = false;
      this.begin_data();
    },
    //上传图片成功
    success(e, file) {
      this.img_src = file.url;
    },
    //上传头像失败
    error(err, file) {
      this.img_src = file.url;
    },
  },
};
</script>
<style scoped>
.text {
  color: red;
  font-size: 14px;
}

.item {
  padding: 10px 0;
}

.box-card {
  width: 480px;
}
.my_test {
  position: relative;
}
.list {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.header_img1 {
  opacity: 0;
  position: absolute;
  left: 110px;
  top: 40px;
  width: 75px;
  height: 75px;
  display: block;
  border-radius: 50%;
  border: 2px solid #947cec;
}
.header_img {
  position: absolute;
  right: 110px;
  z-index: 1000;
  top: 0px;
  width: 75px;
  box-shadow: 1px 1px 10px 1px #947cec; /*上边阴影 */
  height: 75px;
  display: block;
  border-radius: 50%;
  border: 2px solid #947cec;
}
.box-card {
  position: absolute;
  right: 0;
  margin-top: 20px;
  padding-top: 30px;

  width: 300px !important;
}
.box-card3 {
  position: absolute;
  right: 0;
  margin-top: 230px;
  max-height: 300px;
  overflow: scroll;
  width: 300px !important;
}
.box-card1 {
  padding-right: 100px;
  padding-left: 100px;
  width: 900px !important;
}
</style>