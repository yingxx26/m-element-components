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
    <m-modal-form 
    v-model:visible="visible" 
    :options="options"
    title="编辑" 
    width="50%"
    :isScroll="true"
    :on-change="handleChange"
    :on-success="handleSuccess"
    >
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc;font-size: 12px;">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
      <template #footer="{form}">
        <el-button @click="cancel(form)">取消</el-button>
        <el-button type="primary" @click="confirm(form)">
          确认
        </el-button>
      </template>
    </m-modal-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FormInstance } from '../../components/form/src/type/types';
import { ElMessage } from 'element-plus'
import { options } from './data';

const visible = ref<boolean>(false)

const open = () => { 
  visible.value = true
}

const cancel = (from:any) => { 
  
}

const confirm = (from:any) => { 
  let validate = from.validate()
  validate((valid:boolean) => { 
    if (valid) {
      ElMessage.success('验证成功')
      console.log(from.getFormData(),'111')
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
