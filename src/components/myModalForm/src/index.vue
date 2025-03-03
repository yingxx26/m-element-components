<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-08 15:01:13
 * @LastEditTime: 2022-11-08 16:27:21
 * @description: 
-->
<template>
  <div :class="{'m-choose-icon-dialog-body-height': isScroll}">
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <m-myForm ref="form" :options="options" @on-success="onSuccess"  @on-change="onChange">

          <template #uploadArea>
            <slot name="uploadAreaModal"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTipModal"></slot>
          </template>

        </m-myForm>
      </template>
      <template #footer>
        <slot name="myfooter" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import {ref, watch, PropType} from 'vue';
import {FormInstance, FormOptions} from '../../form/src/type/types';

const props = defineProps({
  // 是否只在可视区域内滚动
  isScroll: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  onChange: {
    type: Function
  },
  beforeUpload: {
    type: Function
  },
  onPreview: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  beforeRemove: {
    type: Function
  },
  onSuccess: {
    type: Function
  },
  onExceed: {
    type: Function
  },
})

const emits = defineEmits(['update:visible'])

const form = ref<FormInstance | null>(null)

// 弹出框的显示与隐藏
const dialogVisible = ref<boolean>(props.visible)


watch(() => props.visible, value => {
  dialogVisible.value = value
})

watch(() => dialogVisible.value, value => {
  emits('update:visible', value)
})

let handleSuccess = (val: any) => {
  console.log('success')
  console.log(val)
}

</script>
<style lang="scss" scoped>

</style>
