<template>
  <el-aside class="aside-container">
    <div>
      <el-menu
        class="menu"
        ref="elMenu"
        :collapse="isCollapse"
        background-color="#FAFAFA"
        text-color="#000"
        active-text-color="#409EFF"
        unique-opened
        :default-active="$route.meta.routeText"
      >
        <div v-for="(route1, index) in sideBarRoutes" :key="index">
          <side-bar-item v-if="route1.meta.dis" :route="route1">
          </side-bar-item>
        </div>
      </el-menu>
    </div>
    <div class="closeIcon hidden-xs-only" @click="isCollapse = !isCollapse">
      <el-button
        type="text"
        :icon="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"
      ></el-button>
    </div>
  </el-aside>
</template>

<script>
import routes from "@/router/sideBarRoutes";
import { mapState } from "vuex";
import "element-ui/lib/theme-chalk/display.css";
import SideBarItem from "./SideBarItem";
import localStore from "storejs";
export default {
  name: "SideBar",
  data() {
    return {
      isCollapse: false,
      tabWidth: 200,
      intelval: null,
      sideBarRoutes: [],
      logo: require("../../../../assets/logo.png"),
    };
  },
  components: {
    SideBarItem,
  },
  computed: {
    ...mapState(["common"]),
  },
  methods: {
    initBar() {
      // this.$refs.elMenu.activeIndex = this.$route.meta.routeText
      routes.forEach((item, index) => {
        // 只显示要展示的子路由
        if (item.children) {
          routes[index].children = item.children.filter(
            (route) => route.meta.showSideBar
          );
        }
      });

      let power = localStore.get("power");
      //一级路由
      routes.forEach((item) => {
        item.meta.power.forEach((item1) => {
          power.forEach((item2) => {
            if (item1 == item2) {  
              item.meta.dis = true;
            }
          });
        });
        //2级路由
        if (item.children) {
          item.children.forEach((item3) => {
            item3.meta.power.forEach((item4) => {
              power.forEach((item5) => {
                if (item5 == item4) {
                  item3.meta.dis = true;
                }
              });
            });
            //3级路由
            if (item3.children) {
              item3.children.forEach((item6) => {
                item6.meta.power.forEach((item7) => {
                  power.forEach((item8) => {
                    if (item7 == item8) {
                      item6.meta.dis = true;
                    }
                  });
                });
              });
            }
          });
        }
      });

      this.sideBarRoutes = routes;

      console.log('ssssssssssssssss')
    },
    handleClick(item) {
      if (this.common.isMobile) {
        this.$store.commit("set_show_sidebar", false);
      }
      this.$router.push({ name: item.name });
    },
  },
  mounted() {
    // 如果是移动端，默认收起
    
    // this.isCollapse = this.$native().android || this.$native().iPhone
    this.initBar();
  },
};
</script>

<style scoped lang="scss">
$header-height: 60px;
$background-color: #fafafa;
$color: #fff;
.animated {
  font-size: 18px;
  font-weight: bold;
}
.aside-container {
  width: auto !important;
  box-shadow: 2px 0px 4px 0px #e5e5e5;
}
.close-tab {
  width: 64px !important;
}

aside {
  position: relative;
  overflow: hidden;
  height: 100%;
  background-color: $background-color;
  color: $color;

  .isClossTab {
    width: 200px;
    padding: 0 20px;
    height: $header-height;
    transition: width 0.7s;
    font-size: 14px;
    line-height: $header-height;
    font-weight: normal;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .logo {
      position: relative;
      top: 8px;
      margin-right: 10px;
    }
  }
  .closeIcon {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, 0);
    button {
      width: 160px;
      font-size: 25px;
      color: #c1cfd9;
    }
  }
  .menu {
    border-right: 0;
    height: 690px;
    overflow: auto;
    overflow-x: hidden;
  }
  .menu:not(.el-menu--collapse) {
    width: 200px;
  }
  .menu::-webkit-scrollbar {
    width: 6px;
    background-color: $background-color;
  }
  .menu::-webkit-scrollbar-thumb {
    background-color: #506e91;
  }
  .el-submenu__title i,
  .el-menu-item i {
    color: #c1cfd9;
  }
  .el-menu-item.is-active i {
    color: inherit !important;
  }
}
.el-submenu__title [class^="el-icon-"],
.el-menu-item [class^="el-icon-"] {
  width: auto !important;
  margin-right: 10px !important;
}
</style>