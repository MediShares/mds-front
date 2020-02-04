import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: resolve => require(['@/components/home'], resolve),
      meta: {
        login: true
      },
    },
    // 项目列表
    {
      path: '/project',
      component: resolve => require(['@/components/project'], resolve),
      meta: {
        login: true
      },
    },
    // 创建项目入口
    {
      path: '/projectCreate',
      component: resolve => require(['@/components/project-create'], resolve),
      meta: {
        login: true
      },
    },
    // 创建项目步骤
    {
      path: '/projectStep',
      component: resolve => require(['@/components/project-step'], resolve),
      meta: {
        login: true
      },
    },
    // 发布项目
    {
      path: '/projectRelease',
      component: resolve => require(['@/components/project-release'], resolve),
      props: (route) => ({
        type: route.query.type
      }),
      meta: {
        login: true
      },
    },
    // 编辑项目
    {
      path: '/projectModify',
      component: resolve => require(['@/components/project-modify'], resolve),
      props: (route) => ({
        eosID: route.query.eosID
      }),
      meta: {
        login: true
      },
    },
    // 项目详情
    {
      path: '/projectDetail',
      component: resolve => require(['@/components/project-detail'], resolve),
      props: (route) => ({
        id: route.query.id
      }),
      meta: {
        login: true
      },
    },
    // 购买产品
    {
      path: '/projectPurchase',
      name: 'projectPurchase',
      component: resolve => require(['@/components/project-purchase'], resolve),
      props: (route) => ({
        id: route.query.id
      })
    },
    // 订单详情
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: resolve => require(['@/components/order-detail'], resolve),
      meta: {
        login: true
      },
    },
    // 我的项目
    {
      path: '/myProject',
      component: resolve => require(['@/components/my-project'], resolve),
    },
    // 我支持的项目
    {
      path: '/projectBacked',
      component: resolve => require(['@/components/project-backed'], resolve),
    },
    // 关于
    {
      path: '/about',
      component: resolve => require(['@/components/about'], resolve)
    },
    // 地址管理
    {
      path: '/address',
      component: resolve => require(['@/components/address'], resolve)
    },
    // 支持列表
    {
      path: '/supportList',
      name: 'supportList',
      component: resolve => require(['@/components/support-list'], resolve),
      meta: {
        login: true
      },
    },
    //404
    {
      path: '*',
      component: resolve => require(['@/components/404'], resolve)
    },
  ]
})