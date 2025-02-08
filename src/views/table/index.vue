<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-08 16:41:51
 * @LastEditTime: 2022-11-09 18:21:04
 * @description: 
-->
<template>
  <div>
    <m-table 
    :options="options" 
    :data="tableData" 
    elementLoadingText="加载中....."
    elementLoadingBackground="black"
    @confirm="confirm"
    :isEditRow="true"
    pagination
    :total="total"
    border
    :currentPage="current"
    :pageSize="pageSize"
    v-model:editRowIndex="editRowIndex"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    >
<!--  自定义列    -->
      <template #date="{scope}">
        <el-icon-timer></el-icon-timer>
        <span>{{scope.row.date}}</span>
      </template>
      <template #name="{scope}">
        <el-icon-timer></el-icon-timer>
        <span>{{scope.row.name}}</span>
      </template>
<!--   可编辑   -->
      <template #cellEdit="{scope}">
        <div style="display:flex;">
          <el-button size="small" type="primary" @click="confirm(scope)">确认</el-button>
          <el-button size="small" type="danger">取消</el-button>
        </div>
      </template>
<!--   操作列（最后一列）   -->
      <template #action="scope">
        <el-button size="small" type="primary" @click="edit(scope.scope)">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
      <template #editRow="scope">
        <el-button size="small" type="primary" @click="edit(scope.scope)">确认</el-button>
        <el-button size="small" type="danger">取消</el-button>
      </template>
    </m-table>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { options, data } from './data'

interface TableItem { 
  date: string,
  name: string,
  address: string
}

//const tableData = ref<TableItem[]>(data)
const tableData = ref<TableItem[]>([])
const editRowIndex = ref<string>('')

let current = ref<number>(1)
let pageSize = ref<number>(10)
let total = ref<number>(0)

const edit = (scope:any) => { 
  console.log(scope, '编辑')
  editRowIndex.value = 'edit'
}



  setTimeout(() => {
   tableData.value = data
 },1000)


const confirm = (scope:any) => { 
  console.log(scope,'确认')
}

let handleSizeChange = (val: number) => {
  pageSize.value = val
  // 调用获取数据接口
  // getData()
}
let handleCurrentChange = (val: number) => {
  current.value = val
  // 调用获取数据接口
  // getData()
}

</script>
<style lang="scss" scoped>
svg{
  width: 1em;
  height: 1em;
}
</style>
