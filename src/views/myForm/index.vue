<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-07 16:29:57
 * @LastEditTime: 2022-11-08 14:52:02
 * @description: 
-->
<template>
  <div>
    <m-myForm
        ref="form"
        :options="options" @on-success="handleSuccess"  @on-change="handleChange"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">上传</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc ;font-size:12px ">tip</div>
      </template>

      <template #action="scope">
        <el-button size="small" type="primary" @click="submitForm(scope)">确认</el-button>
        <el-button size="small" type="primary" @click="resetForm()">取消</el-button>
      </template>
    </m-myForm>

  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {FormInstance, FormOptions} from '../../components/form/src/type/types';
import {ElMessage, ElMessageBox} from 'element-plus';
import {options} from './data'

interface Scope {
  form: FormInstance,
  model: any
}

let submitForm = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model)
      ElMessage.success('表单提交成功')
    } else {
      ElMessage.error('表单填写有误,请检查')
    }
  })
}

const form = ref()

const resetForm = () => {
  //scope.form.resetFields()
  form.value.resetFields()
}


let handleRemove = (file: any, fileList: any) => {
  console.log('handleRemove')
  console.log(file, fileList)
}
let handlePreview = (file: any) => {
  console.log('handlePreview')
  console.log(file)
}
let beforeRemove = (val: any) => {
  console.log('beforeRemove')
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)
}
let handleExceed = (val: any) => {
  console.log('handleExceed', val)
  ElMessage.warning(
      `The limit is 3, you selected ${val.files.length
      } files this time, add up to ${val.files.length + val.fileList.length} totally`
  )
}
let handleSuccess = (val: any) => {
  console.log('success')
  console.log(val)
}
let handleChange = (val: any) => {
  console.log('change')
  console.log(val)
}
let handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload')
  console.log(val)
}

</script>
