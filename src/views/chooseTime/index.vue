<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-06 16:56:00
 * @LastEditTime: 2022-11-06 18:09:41
 * @description: 
-->
<template>
  <div>
    <m-choose-time :startOptions="startOptions" :endOptions="endOptions" @startTime="startTime" @endTime="endTime"></m-choose-time>
    <br>
    <br>
    <m-choose-date :disableToday="true" :startOptions="startOptions" :endOptions="endOptions" @startChange="dateStartChange" @endChange="dateEndChange"></m-choose-date>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'


interface DataInter { 
  startTime: string;
  endTime: string;
}

interface AttrsInter { 
  // 任意属性
  [propName:string]: any;
}

interface dateEndValue {
  startDate: Date,
  endDate: Date
}

const startOptions:AttrsInter = ref({
  size:'small'
})

const endOptions:AttrsInter = ref({
  size:'small'
})

const startTime = (data:string) => { 
  console.log('startTime:' + data)
}

const endTime = (data:DataInter) => { 
  console.log('endTime:' + data)
}

const dateStartChange = (val: Date) => {
  console.log(val)
}
const dateEndChange = (val: dateEndValue) => {
  console.log(val)
}
</script>
