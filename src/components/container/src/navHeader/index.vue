<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 10:59:08
 * @LastEditTime: 2022-11-01 14:30:01
 * @description: 
-->
<template>
  <div>
    <el-icon-expand style="margin-left:10px;" v-if="collapse" @click="toggle"></el-icon-expand>
    <el-icon-fold style="margin-left:10px;" v-else @click="toggle"></el-icon-fold>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  collapse:boolean
}>()

const emits = defineEmits(['update:collapse'])
const toggle = () => { 
  emits('update:collapse',!props.collapse)
}


</script>
<style lang="scss" scoped>
  .el-header{
    height: 60px;
    
  }
</style>