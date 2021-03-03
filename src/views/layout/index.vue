<template>
  <div class="app-wrapper1">
    <div class="nav_wrap">
      <div style="display: flex; align-items: center; padding-left: 30px">
        <img src="@/assets/logo.png" alt="" srcset="" />
        <div class="nav_wrap_text">
          包头市公安局交通管理支队
        </div>
      </div>
      <div style="color:#fff;font-weight: bold;">
        登录人姓名：{{name}}
      </div>
      <div  style="color:#fff;font-weight: bold;">
        登录人所属单位：{{work}}
      </div>
      <div class="fun">
        <el-button @click="apply_zh" round type="primary">申请账号</el-button>
        <!-- <el-button @click="apply_zh" round type="primary">查询账号</el-button>    -->
        <el-button @click="apply_cz" round type="primary">重置密码</el-button>
        <el-button @click="apply_dl" round type="primary">注销登陆</el-button>
      </div>
    </div>
    <el-container class="app-wrapper">
      <side-bar
        v-show="common.showSidebar"
        :class="{
          'mobile-sidebar': true,
          'animated fadeInLeft faster': common.isMobile,
        }"
      ></side-bar>
      <div
        class="left-container"
        v-show="common.showSidebar"
        @click="handleShowSidebar"
      ></div>
      <el-container class="container">
        <el-header class="nav-container">
          <nav-bar></nav-bar>
          <tab-bar></tab-bar>
        </el-header>
        <el-main class="main-container1">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cachedViews">
              <router-view :key="key"></router-view>
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { SideBar, NavBar, TabBar } from "./components";
import { mapState } from "vuex";
import { login_out } from "@/api/login";
import { index1 } from "@/api/people";
export default {
  name: "Layout",
  components: {
    SideBar,
    NavBar,
    TabBar,
  },
  data() {
    return {
      name:'',
      work:'',
      isMobile: false,
    };
  },
  computed: {
    ...mapState(["common"]),
    key() {
      return this.$route.fullPath;
    },
    cachedViews() {
      return this.$store.state.route.cachedRoutes;
    },
  },
  created() {
    this.begin_data()
  },
  methods: {
     //初始化数据
    begin_data() {
      console.log(localStorage.getItem("empid").replace(/^\"|\"$/g, ""),'dddd')
      let data1 = {
        template: {
          empid:parseInt(localStorage.getItem("empid").replace(/^\"|\"$/g, "")),
        },
      };
      index1(data1).then((res) => {
        this.name = res.employee.empname;
        this.work=res.employee.orgname
 
      });
    },
    //点击申请账号
    apply_zh() {
      this.$router.push({ path: "/register" });
    },
    //点击登录
    apply_dl() {
      login_out().then((res) => {
  
        if (res.userObject==null||res.userObject) {
          this.$store.dispatch("logout");
          this.$router.push({ path: "/login" });
        }
      });
    },
    //点击重置密码
    apply_cz() {
      this.$router.push({ path: "/my_lastPass" });
    },
    handleShowSidebar() {
      this.$store.commit("set_show_sidebar", !this.common.showSidebar);
    },
  },
};
</script>

<style lang="scss" scoped>
.fun {
  padding-right: 10px;
}
.nav_wrap {
  border-bottom: 2px solid #f8f8f8;
  align-items: center;
  height: 10%;
  background: #222b45;
  display: flex;
  
  justify-content: space-between;
}
.nav_wrap_text {
  color: #ffffff;
  line-height: calc(100vh * 10%);
  font-size: 23px;
  font-weight: bold;
  padding-left: 20px;
}
.app-wrapper {
  height: 90%;
  width: 100%;
}
.app-wrapper1 {
  position: relative;
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.container {
  background: #ffffff;
  .nav-container {
    padding: 0;
    height: 85px !important;
  }
  .main-container1 {
    background: #f8f8f8;
    margin-top: 5px;
  }
}
@media screen and (max-width: 768px) {
  .mobile-sidebar {
    position: fixed;
    left: 0;
    z-index: 2003;
  }
  .left-container {
    position: fixed;
    right: 0;
    width: calc(100% - 200px);
    height: 100%;
    z-index: 2003;
    background: #fff;
    opacity: 0.5;
  }
}
</style>
