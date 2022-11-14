<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-02 16:52:02
 * @LastEditTime: 2022-11-02 17:58:57
 * @description: 
-->
<template>
  <div>
    <m-notification :value="50">
      <template #default>
        <m-list :list="list" :actions="actions"></m-list>
      </template>
    </m-notification>
    <br>
    <br>
    <m-notification :value="50" :max="30"></m-notification>
    <br>
    <br>
    <m-notification :isDot="true"></m-notification>
    <br>
    <br>
    <m-notification icon="ChatRound" :value="50"></m-notification>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue'
import { list,actions } from './data'


</script>
<style lang="scss" scoped>

</style>
