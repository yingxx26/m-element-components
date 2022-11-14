<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 11:35:24
 * @LastEditTime: 2022-11-06 15:45:26
 * @description: 
-->
<template>
    <div>
      <m-infinite-menu class="el-menu-vertical-demo" :collapse="collapse" :data="menuData" :default-active="$route.path" router></m-infinite-menu>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { menuData } from './data'

const props = defineProps<{
  collapse:boolean
}>()


</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>