<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-07 16:27:39
 * @LastEditTime: 2022-11-08 16:00:58
 * @description: 
-->
<template>
  <div>
    <el-form ref="form1" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
      <el-row>
        <template v-for="(item,index) in options" :key="index">
          <el-col :span="12">
            <el-form-item
                v-if="!item.children || !item.children!.length"
                :prop="item.prop" :label="item.label">
              <component
                  v-if="item.type!=='upload'&&item.type!=='editor'"
                  v-bind="item.attrs" :is="`el-${item.type}`"
                  v-model="model[item.prop!]"
              ></component>
              <el-upload
                  v-if="item.type=='upload'"
                  v-bind="item.uploadAttrs"
                  :on-success="onSuccess"
                  :on-change="onChange"
              >
                <slot name="uploadArea"></slot>
                <slot name="uploadTip"></slot>
              </el-upload>
              <div id='editor' v-if="item.type=='editor'"></div>
            </el-form-item>
            <el-form-item
                v-if="item.children && item.children!.length"
                :prop="item.prop" :label="item.label">
              <component v-bind="item.attrs" :is="`el-${item.type}`"
                         v-model="model[item.prop!]">
                <component v-for="(child,index) in item.children" :key="index"
                           :label="child.label" :value="child.value"
                           :is="`el-${child.type}`">
                </component>
              </component>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <el-form-item>
        <slot name="action" :form="form1" :model="model"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {ref, PropType, onMounted, watch, nextTick} from 'vue'
import {FormOptions, FormInstance} from './type/types';
// 用于深拷贝
import cloneDeep from 'lodash/cloneDeep';
import E from "wangeditor"

let emits = defineEmits([ 'on-change','on-success'])

const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})

const model = ref<any>({});
const rules = ref<any>({});
const form1 = ref<FormInstance | null>();
const edit = ref();

onMounted(() => {
  initForm();
})
watch(() => props.options, () => {
  initForm();
}, {deep: true})

let initForm = () => {
  let m: any = {}
  let r: any = {}
  props.options.map((item: FormOptions) => {
    m[item.prop!] = item.value
    r[item.prop!] = item.rules
    if (item.type === 'editor') {
      nextTick(() => {
        if (document.getElementById('editor')) {
          const editor = new E('#editor ');
          editor.config.placeholder = item.placeholder
          editor.create();
          editor.txt.html(item.value)
          editor.config.onchange = (newHtml: string) => {
            model.value[item.prop] = newHtml;
          }
          edit.value = editor
        }
      })
    }
  })
  model.value = cloneDeep(m);
  rules.value = cloneDeep(r);
}
let onSuccess = (response: any, file: File, fileList: FileList) => {
  let uploadItem = props.options.find(item => item.type = 'upload')
  model.value[uploadItem.prop] = {response, file, fileList}
  emits('on-success', response, file, fileList)
}
const onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList })
}
let resetFields = () => {
  form1.value.resetFields()
  let editorItem = props.options.find(item => item.type = 'editor')
  edit.value.txt.html(editorItem?.value)
}
let validate = () => {
  return form1.value!.validate
}
// 获取表单数据
const getFormData = () => {
  return model.value
}

defineExpose({
  resetFields,
  validate,
  getFormData
})

</script>


<style lang="scss" scoped>

</style>