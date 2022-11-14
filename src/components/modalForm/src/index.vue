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
        <m-form 
          ref="form"
          label-width="100px"
          :options="options"
          @on-change="onChange"
          @before-upload="beforeUpload"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @before-remove="beforeRemove"
          @on-success="onSuccess"
          @on-exceed="onExceed"
          >
          <template #uploadArea>
            <slot name="uploadArea" :form="form"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip" :form="form"></slot>
          </template>
        </m-form>
      </template>
      <template #footer>
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch,PropType} from 'vue';
import { FormInstance, FormOptions } from '../../form/src/type/types';

const props = defineProps({
  // 是否只在可视区域内滚动
  isScroll: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default:false
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

watch(() => props.visible, (val) => { 
  dialogVisible.value = val
})


watch(() => dialogVisible.value, (val) => { 
  emits('update:visible',val)
})

</script>
<style lang="scss" scoped>

</style>
