<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-02 09:57:32
 * @LastEditTime: 2022-11-02 16:43:33
 * @description: 
-->
<template>
  <div class="trend-box">
    <!-- 常规 -->
    <div>
      <m-trend text="营业额" type="up"></m-trend>
    </div>
    <div>
      <m-trend text="销售额" type="down"></m-trend>
    </div>

    <!-- 使用插槽判断 -->
    <!-- <m-trend>营业额</m-trend>
    <br>
    <m-trend text="销售额"></m-trend> -->

    <!-- 颜色反转 -->
    <!-- <div>
      <m-trend text="营业额" :reveseColor="true"></m-trend>
    </div>
    <div>
      <m-trend text="销售额" type="down" :reveseColor="true"></m-trend>
    </div> -->

    
    <!-- 自定义icon -->
    <div>
      <m-trend upIcon="CaretTop" type="up">营业额</m-trend>
    </div>
    <div>
      <m-trend downIcon="CaretBottom" type="down">销售额</m-trend>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
  .trend-box{
    display: flex;
    align-items: center;
    div{
      padding-right: 10px;
    }
  }
</style>
