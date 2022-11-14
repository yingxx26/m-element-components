<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-06 16:54:24
 * @LastEditTime: 2022-11-06 17:30:10
 * @description: 
-->
<template>
  <div class="select-time-box">
    <!-- 通过startOptions和endOptions分别设置时间选择框 -->
    <div >
      <el-time-select
        v-model="startTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div class="end-box">
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref,watch } from 'vue'

let props = defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  // 开始时间的开始选择
  startTimeStart: {
    type: String,
    default: "08:00"
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: "00:30"
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: "24:00"
  },
  // 结束时间的开始选择
  endTimeStart: {
    type: String,
    default: "08:00"
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: "00:30"
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: "24:00"
  },
})

const startTime = ref<string>('')
const endTime = ref<string>('')
const endTimeDisabled = ref<boolean>(true)

const emits = defineEmits(['startTime','endTime'])

watch(() => startTime.value, (val:any) => { 
  if (val === '') {
    endTime.value = ''
    endTimeDisabled.value = true
  } else { 
    endTimeDisabled.value = false
    emits('startTime',val)
  }
})

watch(() => endTime.value, (val:any) => { 
  if (val !== '') {
    emits('endTime', {startTime:startTime.value,endTime:val})
  }
})


</script>
<style lang="scss" scoped>
.select-time-box{
  display: flex;
  .end-box{
    margin-left: 20px;
  }
}
</style>