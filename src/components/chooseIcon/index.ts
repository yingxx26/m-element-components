/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 16:16:13
 * @LastEditTime: 2022-11-01 18:22:38
 * @description: 
 */
import chooseIcon from './src/index.vue'

import { App } from 'vue'

// 让这个组件可以通过use的形式使用
export default {
  install(app:App) { 
    app.component('m-choose-icon',chooseIcon)
  }
}
 