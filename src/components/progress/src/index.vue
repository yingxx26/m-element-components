<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-06 16:12:58
 * @LastEditTime: 2022-11-06 16:51:13
 * @description: 
-->
<template>
  <div>
    <!-- v-bind="$props": 可以将父组件的所有props下发给它的子组件,子组件需要在其props:{} 中定义要接受的props
    v-bind="$attrs": 将调用组件时的组件标签上绑定的非props的特性(class和style除外)向下传递 -->
    <el-progress :percentage="percent" v-bind="$attrs"/>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
  // 进度条进度
  percentage: {
    type: Number,
    required: true
  },
  // 是否有动画效果
  isAnimate: {
    type: Boolean,
    default: false
  },
  // 动画时长(毫秒)
  time: {
    type: Number,
    default: 3000
  },
})

const percent = ref(0)

onMounted(() => { 
  if (props.isAnimate) {
    // 规定时间内完成加载
    const t =Math.ceil(props.time / props.percentage)
    let timer = setInterval(() => {
      percent.value += 1
      if (percent.value >= props.percentage) {
        percent.value = props.percentage
        clearInterval(timer)
      }
    }, t)
  } else { 
    percent.value = props.percentage
  }
})
</script>

