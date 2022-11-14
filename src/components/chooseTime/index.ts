/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 16:16:13
 * @LastEditTime: 2022-11-06 16:55:02
 * @description: 
 */
import chooseTime from './src/index.vue'

import { App } from 'vue'

// 让这个组件可以通过use的形式使用
export default {
  install(app:App) { 
    app.component('m-choose-time',chooseTime)
  }
}
 