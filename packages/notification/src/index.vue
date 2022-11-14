<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-02 16:52:02
 * @LastEditTime: 2022-11-11 10:24:26
 * @description: 
-->
<template>
  <div>
    <el-popover popper-class="notification-popper-class"  placement="top" :width="300" trigger="click">
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge :value="value" :max="max" :is-dot="isDot">
          <!-- 动态组件 -->
          <component :is="`el-icon-${toLine(icon)}`"></component>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue'
import { toLine } from '../../utils/index'

const props = defineProps({
  // 图标
  icon: {
    type: String,
    default:'Sunset'
  },
  // 显示值
  value: {
    type: [String , Number],
    default:''
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default:false
  },
  // 最大值
  max: {
    type: Number,
    default:99
  },
})

</script>
<style lang="scss" scoped>

</style>
