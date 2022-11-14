/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 10:26:39
 * @LastEditTime: 2022-11-10 11:20:29
 * @description: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Container from '../components/container/src/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        name:'/',
        meta: {
          title:'首页'
        },
        component: ()=>import('../views/Home.vue')
      },
      {
        path: '/chooseIcon',
        name:'ChooseIcon',
        meta: {
          title:'选择图标'
        },
        component: ()=>import('../views/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea',
        name:'ChooseArea',
        meta: {
          title:'选择地址'
        },
        component: ()=>import('../views/chooseArea/index.vue')
      },
      {
        path: '/trend',
        name:'Trend',
        meta: {
          title:'趋势标记'
        },
        component: ()=>import('../views/trend/index.vue')
      },
      {
        path: '/notification',
        name:'Notification',
        meta: {
          title:'通知菜单'
        },
        component: ()=>import('../views/notification/index.vue')
      },
      {
        path: '/menu',
        name:'Menu',
        meta: {
          title:'导航栏'
        },
        component: ()=>import('../views/menu/index.vue')
      },
      {
        path: '/progress',
        name:'Progress',
        meta: {
          title:'导航栏'
        },
        component: ()=>import('../views/progress/index.vue')
      },
      {
        path: '/chooseTime',
        name:'ChooseTime',
        meta: {
          title:'时间选择'
        },
        component: ()=>import('../views/chooseTime/index.vue')
      },
      {
        path: '/chooseCity',
        name:'ChooseCity',
        meta: {
          title:'时间选择'
        },
        component: ()=>import('../views/chooseCity/index.vue')
      },
      {
        path: '/form',
        name:'Form',
        meta: {
          title:'表单'
        },
        component: ()=>import('../views/form/index.vue')
      },
      {
        path: '/modalForm',
        name:'ModalForm',
        meta: {
          title:'表单模型'
        },
        component: ()=>import('../views/modalForm/index.vue')
      },
      {
        path: '/table',
        name:'Table',
        meta: {
          title:'表格'
        },
        component: ()=>import('../views/table/index.vue')
      },
      {
        path: '/calendar',
        name:'Calendar',
        meta: {
          title:'表格'
        },
        component: ()=>import('../views/calendar/index.vue')
      }
    ]
  },
  
]
const router = createRouter({
  routes,
  history:createWebHashHistory()
})

export default router