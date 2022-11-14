/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 16:16:13
 * @LastEditTime: 2022-11-06 14:58:02
 * @description: 
 */
import menu from './src/index.vue'
import infiniteMenu from './src/menu'

import { App } from 'vue'

// 让这个组件可以通过use的形式使用
export default {
  install(app:App) { 
    app.component('m-menu',menu)
    app.component('m-infinite-menu',infiniteMenu)
  }
}
 