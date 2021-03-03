import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import localStore from 'storejs'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import sideBarRoutes from './sideBarRoutes'
const _import = require('./_import_' + process.env.NODE_ENV)
// 用户 ：1
// 系统管理员 ：2
// 单位部门管理员 ：3
// 应用管理员 ：4
// 安全管理员 ：5
Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
let routes = [{
  path: '/404',
  name: 'NotFound',
  component: _import('other/404'),
  meta:{
    keepAlive:true
  },
},
{
  path: '/register',
  name: 'register',
  component: _import('register/index1'),
  meta:{
    keepAlive:true
  },
},
{
  path: '/register2',
  name: 'register2',
  component: _import('register/index2'),
  meta:{
    keepAlive:true
  },
},
{
  path: '/register3',
  name: 'register3',
  component: _import('register/index3'),
  meta:{
    keepAlive:true
  },
},
{
  path: '/reset',
  name: 'reset',
  component: _import('reset/index1'),
  meta:{
    keepAlive:false
  },
},
{
  path: '/reset2',
  name: 'reset2',
  component: _import('reset/index2'),
  meta:{
    keepAlive:false
  },
},
{
  path: '/reset3',
  name: 'reset3',
  component: _import('reset/index3'),
  meta:{
    keepAlive:false
  },
},
{
  path: '/reset4',
  name: 'reset4',
  component: _import('reset/index4'),
  meta:{
    keepAlive:false
  },
},
{
  path: '/retrieve_num',
  name: 'retrieve_num',
  component: _import('register/retrieve_num'),
  meta:{
    keepAlive:true
  },
},
{
  path: '/register4',
  name: 'register4',
  component: _import('register/index4'),
  meta:{
    keepAlive:true
  },
},
{
  path: '/register5',
  name: 'register5',
  component: _import('register/index5'),
  meta:{
    keepAlive:true
  },
},
{
  path: '/login',
  name: 'Login',
  component: _import('login/index'),
  meta:{
    keepAlive:false
  },
},
{
  path: '*',
  redirect: '/404',
  meta:{
    keepAlive:false
  },
}
]
routes = routes.concat(sideBarRoutes)

const router = new Router({
  // mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

if (localStore.get('?token') && store) {
  store.commit('set_token', localStore.get('token'))
}

// 不添加到navBar的路由项
const excludeNames = ['Login', 'NotFound','register4','register3','register2','register1','register','register5']

// 路由拦截
router.beforeEach((to, from, next) => {

  nProgress.start()
  // 添加TabBar的项
  if (!excludeNames.includes(to.name)) {
    let tempObj = {
      name: to.name,
      text: to.meta.routeText
    }
    store.commit('add_route', tempObj)
    store.commit('add_cached', to)
  }
  // 如果是登录页面且已登录就直接去首页
  if (to.name === 'Login' && store.getters.token) {
    next({
      path: '/'
    })
    return
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.getters.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  nProgress.done()
})

export default router