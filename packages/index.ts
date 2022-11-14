/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 18:23:18
 * @LastEditTime: 2022-11-11 15:05:53
 * @description: 
 */
import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import form from './form'
import modalForm from './modalForm'
import table from './table'
import calendar from './calendar'
import './style/base.scss'
import './style/ui.scss'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils/index'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate,
  chooseCity,
  form,
  modalForm,
  table,
  calendar
]

export default {
  install(app: App) {
    for (let i in Icons) { 
      // 注册全局组件
      app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
    }
    components.map(item => { 
      app.use(item)
    })
  }
}