<template>
  <div>
   
    <el-row class="navbar-container" type="flex" justify="space-between" align="middle">
     
      <div v-if="common.isMobile" class="sidebar-icon" @click="handleShowSidebar">
        <svg-icon iconName="sidebar"></svg-icon>
      </div>
      <el-col :sm="14" :xs="20">
        <el-breadcrumb separator="/">
          <template v-for="(item,index) in breadCrumbs">
            <el-breadcrumb-item v-if="!(isMobile&&(index!==breadCrumbs.length-1))" :key="index" :to="{path: item.to}" :class="index===breadCrumbs.length-1?'animated lightSpeedIn fast':''">{{item.text}}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </el-col>
     
    </el-row>
  </div>
</template>

<script>
import HeaderSearch from '../HeaderSearch'
import 'element-ui/lib/theme-chalk/display.css'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      images: {
        'avatar': require('../../../../assets/yiyongtubiao.jpg')
      },
      breadCrumbs: [
        {
          text: '首页',
          to: '/'
        }
      ],
      isEnter: false,
      isMobile: false,
    }
  },
  components: {
    HeaderSearch
  },
  watch: {
    '$route': function () {
      this.initBar()
    }
  },
  computed: {
    ...mapState(['common']),
    isEnterAvatar() {
      return this.isEnter ? 'animated tada' : ''
    }
  },
  methods: {
    handleCommand(command) {
      switch (command) {
      case 'logout':
        this.$store.dispatch('logout')
        this.$router.push('/login')
        break
      default:
        break
      }
    },
    initBar() {
      this.breadCrumbs = [
        {
          text: '首页',
          to: '/'
        }
      ]
      this.$route.matched.forEach(item => {
        if (item.meta.routeText && item.meta.routeText !== '首页') {
          let tempObj = {
            text: item.meta.routeText,
            to: item.path
          }
          this.breadCrumbs.push(tempObj)
        }
      })
    },
    handleLike(...data) {
    },
    handleShowSidebar() {
      
      this.$store.commit('set_show_sidebar', !this.common.showSidebar)
    }
  },
  created() {
    this.isMobile = this.$native().android || this.$native().iPhone
    this.initBar()
  }
}
</script>

<style lang="scss" scoped>

$navBarHeight: 50px;
@media screen and (max-width: 768px) {
  .navbar-container {
    padding: 0 10px;
    padding-left: 40px;
  }
}
@media screen and (min-width: 768px) {
  .navbar-container {
    padding: 0 20px;
  }
}
.navbar-container {
  height: $navBarHeight;
  position: relative;
  .sidebar-icon {
    position: absolute;
    z-index: 99;
    top: 300px;
    left: 5px;
    transform: translate(0, -50%);
  }
  .navbar-right-row {
    svg {
      margin-left: 12px;
    }
  }
  .el-breadcrumb {
    font-size: 15px;
  }
  .avatar-box {
    display: block;
    color: #606266;
    margin-left: 20px;
    cursor: pointer;
    img {
      height: 35px;
      width: 35px;
      border-radius: 5px;
    }
  }
  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
