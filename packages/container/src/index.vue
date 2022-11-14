<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 10:59:08
 * @LastEditTime: 2022-11-01 11:53:29
 * @description: 
-->
<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse" ></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import navHeader from './navHeader/index.vue'
import navSide from './navSide/index.vue'

const isCollapse = ref(false)

</script>
<style lang="scss" scoped>
.el-header{
  padding: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

</style>