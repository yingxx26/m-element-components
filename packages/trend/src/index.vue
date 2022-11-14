<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-10 17:34:51
 * @LastEditTime: 2022-11-11 10:25:01
 * @description: 
-->
<template>
  <div class="trend">
    <div class="text" :style="{color:getTextColor}">
      <slot v-if="slots.default"></slot>
      <div v-else>{{text}}</div>
    </div>
    <div class="icon">
      <!-- 动态组件 -->
      <component v-if="type === 'up'" :is="`el-icon-${toLine(upIcon)}`" :style="{color: !reveseColor ? upIconColor : '#52c41a'}"></component>
      <component v-else :is="`el-icon-${toLine(downIcon)}`" :style="{color:!reveseColor ? downIconColor : '#f5222d'}"></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { toLine } from '../../utils/index'

const props = defineProps({
  // 标记当时趋势是上升up 还是下降down
  type: {
    type: String,
    default:'up'
  },
  // 文字
  text: {
    type: String,
    default:''
  },
  // 上升图标颜色
  upIconColor: {
    type: String,
    default:'#f5222d'
  },
  // 下降图标颜色
  downIconColor: {
    type: String,
    default:'#52c41a'
  },
  // 是否反转默认颜色
  reveseColor: {
    type: Boolean,
    default:false
  },
   // 上升文字颜色
  upTextColor: {
    type: String,
    default:'#000'
  },
   // 下降文字颜色
  downTextColor: {
    type: String,
    default:'#000'
  },
  // 自定义上升显示的图标
   upIcon: {
    type: String,
    default:'ArrowUp'
  },
  /// 自定义下降显示的图标
  downIcon: {
    type: String,
    default:'ArrowDown'
  },
  
})

// 获取插槽内容
const slots = useSlots()

const getTextColor = computed(() => { 
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})

</script>
<style lang="scss" scoped>
  .trend{
    display: flex;
    align-items: center;
    .text{
      font-size: 12px;
    }
    .icon{
      padding-left: 10px;
      svg{
        width: 0.8em;
        height: 0.8em;
      }
    }
  }
</style>
