<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-02 16:52:02
 * @LastEditTime: 2022-11-06 16:05:50
 * @description: 
-->
<template>
  <div class="menu-box">
    <m-menu :data="menuData" name="a" index="b" icon="c" children="d"></m-menu>

    <m-infinite-menu :data="menuInfiniteData" default-active="1"  name="a" index="b" icon="c" children="d"></m-infinite-menu>
  </div>
</template>
<script lang="ts" setup>
import { menuData ,menuInfiniteData} from './data'


</script>
<style lang="scss" scoped>
  .menu-box{
    display: flex;
  }
</style>
