<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-08 15:00:44
 * @LastEditTime: 2022-11-08 16:25:28
 * @description: 
-->
<template>
  <div>
    <el-button type="primary" @click="open">打开</el-button>
    <m-myModal-form
        title="弹窗"
        v-model="visible"
        :options="options"
        :on-success="handleSuccess"
        :on-change="handleChange"
        :isScroll="true"
    >
      <template #myfooter="scope">
        <el-button @click="cancel">取消</el-button>
        <el-button @click="confirm(scope)">确认</el-button>
      </template>
      <template #uploadAreaModal>
        <el-button size="small" type="primary">上传</el-button>
      </template>
      <template #uploadTipModal>
        <div style="color: #ccc ;font-size:12px ">tip</div>
      </template>

    </m-myModal-form>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {FormInstance} from '../../components/form/src/type/types';
import {ElMessage} from 'element-plus'
import {options} from './data';

interface Scope {
  form: FormInstance,
  model: any,
}

const visible = ref<boolean>(false)

const open = () => {
  visible.value = true
}

const cancel = (from: any) => {

}

const confirm = (scope: Scope) => {
  let from = scope.form;
  let validate = from.validate()
  let model = from.getFormData();
  console.log(scope)
  validate((valid: boolean) => {
    if (valid) {
      ElMessage.success('验证成功')
      //console.log(from.getFormData(), '111')
    } else {
      ElMessage.error('验证失败')
    }
  })
}

let handleSuccess = (val: any) => {
  console.log('success111111')
  console.log(val)
}
let handleChange = (val: any) => {
  console.log('change222222')
  console.log(val)
}

</script>
