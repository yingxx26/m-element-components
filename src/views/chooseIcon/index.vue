<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 14:36:25
 * @LastEditTime: 2022-11-01 18:28:30
 * @description: 
-->
<template>
  <div>
    <m-choose-icon :title="'选择图标'"  v-model:visible="visible"></m-choose-icon>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// import mChooseIcon from '../../components/chooseIcon/src/index.vue'

const visible = ref<boolean>(false)

</script>
