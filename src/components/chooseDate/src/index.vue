<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-06 16:54:24
 * @LastEditTime: 2022-11-06 18:06:24
 * @description: 
-->
<template>
  <div class="select-date-box">
    <div>
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="startDisabledDate"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div class="end-box">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabledDate="endDisabledDate"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps({
  // 开始日期的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始日期'
  },
  // 结束日期的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  // 是否禁用选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: true
  }
})

let emits = defineEmits(['startChange', 'endChange'])

const startDate = ref<Date | null>(null)
const endDate = ref<Date | null>(null)
// 控制结束日期的禁用状态
let endDateDisabled = ref<boolean>(true)

// 禁用开始日期的函数
let startDisabledDate = (time: Date) => {
  if (props.disableToday) return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
}
// 禁用结束日期的函数
let endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
  }
}

// 监听开始的日期
watch(() => startDate.value, val => {
  if (!val) {
    endDateDisabled.value = true
    endDate.value = null
  } else {
    emits('startChange', val)
    endDateDisabled.value = false
  }
})
// 监听结束的日期
watch(() => endDate.value, val => {
  if (val) {
    emits('endChange', {
      startDate: startDate.value,
      endDate: val
    })
  }
})



</script>
<style lang="scss" scoped>
.select-date-box{
  display: flex;
  .end-box{
    margin-left: 20px;
  }
}
</style>