const _import = require('./_import_' + process.env.NODE_ENV)

const routes = [
  {
    path: '/',
    redirect: 'My_app',
    name: 'Layout',
    meta: {
      requireAuth: true,
      routeText: '自助服务',
      routeIcon: 'el-icon-s-check',
      power: [1, 2, 3, 4, 5],
      keepAlive: false

    },
    component: _import('layout/index'),
    children: [{
      path: 'my_app',
      name: 'My_app',
      meta: {
        routeText: '我的应用',
        routeIcon: 'el-icon-menu',
        showSideBar: true,
        power: [1, 2, 3, 4, 5],
        keepAlive: false
      },
      component: _import('main/self_service/My_app')
    },

    {
      path: 'yellow_page',
      name: 'Yellow_page',
      meta: {
        power: [1, 2, 3, 4, 5],
        routeText: '企业黄页',
        routeIcon: 'el-icon-s-flag',
        showSideBar: true,
        keepAlive: false
      },
      component: _import('main/self_service/Yellow_page')
    },
    {
      path: 'my_news_up',
      name: 'My_news_up',
      meta: {
        power: [1, 2, 3, 4, 5],
        routeText: '我的信息维护',
        routeIcon: 'el-icon-s-comment',
        showSideBar: true,
        keepAlive: false
      },
      component: _import('main/self_service/My_news_up')
    },
    {
      path: 'my_lastPass',
      name: 'My_lastPass',
      meta: {
        power: [1, 2, 3, 4, 5],
        routeText: '我的密码管理',
        routeIcon: 'el-icon-unlock',
        showSideBar: true,
        keepAlive: false
      },
      component: _import('main/self_service/My_lastPass')
    }

    ]
  },
  {
    path: '/test_form',
    component: _import('layout/index'),
    meta: {
      routeText: '用户管理',
      routeIcon: 'el-icon-user-solid',
      requireAuth: true,
      keepAlive: false,
      power: [2, 3, 4],
    },
    children: [{
      path: 'census',
      name: 'census',
      meta: {
        power: [2],
        routeText: '用户统计',
        routeIcon: 'el-icon-s-data',
        showSideBar: true,
        keepAlive: false
      },
      component: _import('main/crm/census')
    },
    {
      path: 'exclusive_users',
      name: 'exclusive_users',
      meta: {
        routeText: '专有用户管理',
        routeIcon: 'el-icon-s-custom',
        showSideBar: true,
        keepAlive: false,
        power: [4],
      },
      children: [{
        path: 'administration',
        name: 'administration',
        meta: {
          power: [4],
          routeText: '专有用户管理',
          routeIcon: 'el-icon-s-custom',
          showSideBar: true,
          keepAlive: false
        },
        component: _import('main/crm/proper/administration')
      },
      {
        path: 'edit',
        name: 'edit',
        meta: {
          power: [4],
          routeText: '专有用户编辑',
          routeIcon: 'el-icon-s-order',
          showSideBar: true,
          keepAlive: false
        },
        component: _import('main/crm/proper/edit')
      },
      {
        path: 'examine',
        name: 'examine',
        meta: {
          power: [4],
          routeText: '专有用户审核',
          routeIcon: 'el-icon-files',
          showSideBar: true,
          keepAlive: false
        },
        component: _import('main/crm/proper/examine')
      }

      ],
      component: _import('main/crm/exclusive_users')
    },
    {
      path: 'historical_users',
      name: 'historical_users',
      meta: {
        power: [2],
        routeText: '历史用户管理',
        routeIcon: 'el-icon-user',
        showSideBar: true,
        keepAlive: false
      },
      component: _import('main/crm/historical_users')
    },
    {
      path: 'my_lastPass',
      name: 'My_lastPass',
      meta: {
        power: [2, 3],
        routeText: '单位用户管理',
        routeIcon: 'el-icon-s-custom',
        showSideBar: true,
        keepAlive: false
      },
      children: [{
        path: 'd_index',
        name: 'd_index',
        meta: {
          power: [2, 3],
          routeText: '单位用户管理',
          routeIcon: 'el-icon-s-custom',
          showSideBar: true,
          keepAlive: false
        },
        component: _import('main/crm/unit_user/index')
      },

      ],
      component: _import('main/crm/unit_user')
    },
    {
      path: 'user_ranking',
      name: 'user_ranking',
      meta: {
        power: [3],
        routeText: '用户排序',
        routeIcon: 'el-icon-s-operation',
        showSideBar: true,
        keepAlive: false
      },
      component: _import('main/crm/user_ranking')
    },

    ],

  },
  {
    path: '/Organization',
    component: _import('layout/index'),
    meta: {

      routeIcon: 'el-icon-s-custom',
      requireAuth: true,
      routeText: '组织机构管理',
      keepAlive: false,
      power: [2, 3, 4],
    },
    children: [
      {
        path: 'Information',
        name: 'Information',
        meta: {
          routeText: '机构信息维护',
          routeIcon: 'el-icon-location',
          showSideBar: true,
          keepAlive: true,
          power: [2, 3],
        },
        component: _import('main/organization/Information'),
      }
    ]
  },
  {
    path: '/use',
    component: _import('layout/index'),
    meta: {
      routeIcon: 'el-icon-s-custom',
      requireAuth: true,
      routeText: '授权管理',
      keepAlive: false,
      power: [2],
    },
    children: [{
      path: 'list',
      name: 'list',
      meta: {
        routeText: '目录授权',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [2],
      },
      component: _import('main/warrant/list'),
    },
    {
      path: 'application',
      name: 'application',
      meta: {
        routeText: '应用授权',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [2],
      },
      component: _import('main/warrant/application'),
    }
    ]
  },

  {
    path: '/use',
    component: _import('layout/index'),
    meta: {
      routeIcon: 'el-icon-s-custom',
      requireAuth: true,
      routeText: '应用管理',
      keepAlive: false,
      power: [2],
    },
    children: [{
      path: 'news',
      name: 'news',
      meta: {
        routeText: '信息维护',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [2],
      },
      component: _import('main/use/news'),
    },
    {
      path: 'census1',
      name: 'census1',
      meta: {
        routeText: '用户数统计',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [2],
      },
      component: _import('main/use/census1'),
    }
    ]
  },


  {
    path: '/system',
    component: _import('layout/index'),
    meta: {
      routeIcon: 'el-icon-s-custom',
      requireAuth: true,
      routeText: '系统管理',
      keepAlive: false,
      power: [2, 4],
    },
    children: [{
      path: 'dictionary',
      name: 'dictionary',
      meta: {
        routeText: '数据字典维护',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [2],
      },
      component: _import('main/system/dictionary'),
    },
    {
      path: 'system_administrators',
      name: 'administrators1',
      meta: {
        routeText: '系统管理员维护',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [4],
      },
      component: _import('main/system/system_administrators'),
    },
    {
      path: 'security_administrators',
      name: 'administrators2',
      meta: {
        routeText: '安全管理员维护',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [4],
      },
      component: _import('main/system/security_administrators'),
    }

    ]
  },
  //审计管理
  {
    path: '/audit',
    component: _import('layout/index'),
    meta: {
      routeIcon: 'el-icon-s-custom',
      requireAuth: true,
      routeText: '审计管理',
      keepAlive: false,
      power: [5],
    },
    children: [{
      path: 'journal',
      name: 'journal',
      meta: {
        routeText: '系统登陆日志审计',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [5],
      },
      component: _import('main/audit/journal'),
    },
    {
      path: 'userName1',
      name: 'userName1',
      meta: {
        routeText: '用户密码审计',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [5],
      },
      component: _import('main/audit/userName'),
    },
    {
      path: 'admin',
      name: 'admin',
      meta: {
        routeText: '管理员操作审计',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [5],
      },
      component: _import('main/audit/admin'),
    },
    {
      path: 'interface',
      name: 'interface',
      meta: {
        routeText: '接口调用日志审计',
        routeIcon: 'el-icon-location',
        showSideBar: true,
        keepAlive: true,
        power: [5],
      },
      component: _import('main/audit/interface'),
    },



    ]
  },
]

export default routes