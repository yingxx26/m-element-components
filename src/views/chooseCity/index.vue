<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-07 09:49:32
 * @LastEditTime: 2022-11-07 15:14:47
 * @description: 
-->
<template>
  <div>
    <m-choose-city @changeCity="changeCity" @changeProvince="changeProvince"></m-choose-city> 
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue'
interface City { 
  id: number,
  spell: string,
  name: string
}

const changeCity = (item:City) => { 
  console.log(item)
}

const changeProvince = (item:string) => {
  console.log(item)
}
</script>
