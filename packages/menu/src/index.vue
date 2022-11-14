<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-02 16:52:02
 * @LastEditTime: 2022-11-11 10:23:57
 * @description: 
-->
<template>
  <div class="m-menu">
    <el-menu
    class="el-menu-vertical-demo"
      :default-active="defaultActive"
      :router="router"
      v-bind="$attrs"
    >
      <template v-for="(item,i) in data" :key="i">
        <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{item[name]}}</span>
        </el-menu-item>
        <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
          <template #title>
            <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
            <span>{{item[name]}}</span>
          </template>
          <el-menu-item v-for="(el,index) in item[children]" :key="index" :index="el.index">
            <component v-if="el[icon]" :is="`el-icon-${toLine(el[icon])}`"></component>
            <span>{{el[name]}}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref,PropType } from 'vue'
import { toLine } from '../../utils/index'
import { MenuItem } from './types'

const props = defineProps({
  // 导航菜单的数据
  data: {
    type: Array as PropType<any[]>,
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

})

</script>

<style lang='scss' scoped>
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
