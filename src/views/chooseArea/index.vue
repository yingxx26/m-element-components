<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 14:36:25
 * @LastEditTime: 2022-11-01 18:28:26
 * @description: 
-->
<template>
  <div>
    <m-choose-area @change="handleChange"></m-choose-area>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// import mChooseArea from '../../components/chooseArea/src/index.vue'

interface Data { 
  name: string,
  code: string,
}

const handleChange = (data:Data) => { 
  console.log(data,'选中的值')
}

</script>
