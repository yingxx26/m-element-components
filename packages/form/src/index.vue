<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-07 16:27:39
 * @LastEditTime: 2022-11-08 16:00:58
 * @description: 
-->
<template>
  <div>
    <el-form v-if="model" ref="form" v-bind="$attrs" :model="model" :rules="rules" :validate-on-rule-change="false">
      <template v-for="(item,index) in options" :key="index">
        <el-form-item v-if="!item.children || item?.children.length === 0" :label="item.label" :prop="item.prop">
          <component v-if="item.type !== 'upload' && item.type !== 'editor'" :placeholder="item.placeholder" v-bind="item.attrs" :is="`el-${item.type}`" v-model="model[item.prop!]"></component>
          <el-upload 
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"  
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
          :on-exceed="onExceed">
            <slot name="uploadArea"></slot>
            <slot name="uploadTip"></slot>
          </el-upload>
          <div v-if="item.type === 'editor'" id="editor">

          </div>
        </el-form-item>

        <el-form-item v-if="item.children && item?.children.length" :label="item.label" :prop="item.prop">
          <component :placeholder="item.placeholder" v-bind="item.attrs" :is="`el-${item.type}`" v-model="model[item.prop!]">
            <component v-for="(child,i) in item.children" :key="i" :is="`el-${child.type}`" :label="child.label" :value="child.value"></component>
          </component>
        </el-form-item>
      </template>
      <el-form-item>
        <slot name="action" :form="form" :model="model"></slot>
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref,PropType, onMounted,watch,nextTick } from 'vue'
import { FormOptions,FormInstance } from './type/types';
// 用于深拷贝
import cloneDeep from 'lodash/cloneDeep';
import E from "wangeditor"

const props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required:true
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function
  }
})

const emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'before-upload', 'before-remove', 'on-exceed'])


const model = ref<any>(null)
const rules = ref<any>(null)
const form = ref<FormInstance | null>(null)
const edit = ref()

// 监听父组件传递进来的options
watch(() => props.options, () => {
  initForm()
}, { deep: true })

// 初始化表单
const initForm = () => { 
  if (props.options && props.options.length) { 
    let m: any = {}
    let r: any = {}
    props.options.map((item:FormOptions) => { 
      m[item.prop!] = item.value
      r[item.prop!] = (item.rules as any)
      if (item.type === 'editor') { 
        nextTick(() => {
          if (document.getElementById('editor')) { 
            const editor = new E('#editor')
            editor.config.placeholder = item.placeholder!
            editor.create()
            // 初始化富文本内容
            editor.txt.html(item.value)
            editor.config.onchange = (newHtml:string) => {
              model.value[item.prop!] = newHtml
            }
            edit.value = editor
          }
        })
      }
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

// 重置表单
const resetFields = () => { 
  // 重置element-plus的表单
  form.value?.resetFields()
  // 重置富文本编辑器的内容
  // 获取到富文本的配置项
  if (props.options && props.options.length) { 
    let editorItem = props.options.find(item => item.type === 'editor')!
    edit.value.txt.html(editorItem.value)
  }
}

// 表单验证方法
const validate = () => { 
  return form.value!.validate
}

// 获取表单数据
const getFormData = () => {
  return model.value
}

// 分发方法
defineExpose({
  resetFields,
  validate,
  getFormData
})

// 上传组件的所有方法
const onPreview = (file: File) => {
  emits('on-preview', file)
}
const onRemove = (file: File, fileList: FileList) => {
  emits('on-remove', { file, fileList })
}
const onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传图片成功 给表单上传项赋值
  let uploadItem = props.options.find(item => item.type === 'upload')!
  model.value[uploadItem.prop!] = { response, file, fileList }
  emits('on-success', { response, file, fileList })
}
const onError = (err: any, file: File, fileList: FileList) => {
  emits('on-error', { err, file, fileList, })
}
const onProgress = (event: any, file: File, fileList: FileList) => {
  emits('on-progress', { event, file, fileList })
}
const onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList })
}
const beforeUpload = (file: File) => {
  emits('before-upload', file)
}
const beforeRemove = (file: File, fileList: FileList) => {
  emits('before-remove', { file, fileList })
}
const onExceed = (files: File, fileList: FileList) => {
  emits('on-exceed', { files, fileList })
}

onMounted(() => { 
  initForm()
})


</script>


<style lang="scss" scoped>

</style>