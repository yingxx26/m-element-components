/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-06 14:51:50
 * @LastEditTime: 2022-11-11 15:50:56
 * @description: 
 */
import { defineComponent, PropType,useAttrs } from 'vue'
import { toLine } from '../../../utils'
import { MenuItem } from './types'
import './style/index.scss'
import * as Icons from "@element-plus/icons-vue"

export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<MenuItem[]>,
      required:true
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ''
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false
    },
    // 键名
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name'
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children'
    },
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    // 函数会返回一段jsx的代码
    const renderMenu = (data:any[]) => { 
      return data.map((item:any) => { 
        //每个菜单的图标
        item.i = (Icons as any)[item[props.icon!]]

        //创建插槽
        const slots = {
          title: () => { 
            return <>
              <item.i />
              <span>{item[props.name] }</span>
            </>
          }
        }

        if (item[props.children] && item[props.children].length) { 
          return (
            <el-sub-menu index={item[props.index]} v-slots={ slots }>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          )
        }
        return (
          <elMenuItem index={item[props.index]}>
              <item.i />
              <span>{item[props.name] }</span>
          </elMenuItem>
        )
      })
    }

    const attrs = useAttrs()
    return () => { 
      return (
        <elMenu default-active={props.defaultActive} router={props.router} {...attrs} class="m-menu el-menu-vertical-demo">
          {renderMenu(props.data)}
        </elMenu>
      )
    }
  },
})
