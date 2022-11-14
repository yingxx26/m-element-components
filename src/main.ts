/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 10:19:32
 * @LastEditTime: 2022-11-11 15:15:27
 * @description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils/index'
// 引入本地组件库
import mUI from './components';
//  全局引入组件库
// import mUI from '../lib/m-element-components'
// import mUI from '../lib/index'
// import '../lib/style.css';
// 单独引入组件
// import chooseIcon  from '../lib/chooseIcon/index'
// import  '../lib/chooseIcon/style.css'


const app = createApp(App)

// 全局注册图标，牺牲一点性能

for (let i in Icons) { 
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
  // console.log(`el-icon-${toLine(i)}`)
}
app.use(router)
app.use(ElementPlus)
app.use(mUI)
// app.use(chooseIcon)


app.mount('#app')