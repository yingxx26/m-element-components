<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-10 11:07:59
 * @LastEditTime: 2022-11-10 16:56:26
 * @description: 
-->
<template>
  <div>
    <m-calendar :events="events" :eventContent="eventContent"  @date-click="dateClick" @event-click="eventClick"></m-calendar>
  </div>
</template>
<script lang="ts" setup>
import { EventClickArg, EventContentArg } from '@fullcalendar/core'
import { DateClickArg } from '@fullcalendar/interaction'
import { ref } from 'vue'
import { EventItem } from '../../components/calendar/src/types'


const events = ref<EventItem[]>(
  [
  {
      title: '购物',
      start: '2022-11-11 10:00:00',
      end: '2022-11-11 12:00:00',
      editable: true
    },
    {
      title: '学习',
      start: '2022-11-15 08:00:00',
      end: '2022-11-15 16:00:00'
    }
  ]
)

let eventContent = (arg: EventContentArg) => {
  let el = document.createElement('div')
  let timeTextArr = arg.timeText.split(' - ')
  console.log(timeTextArr,'timeTextArrtimeTextArr')
  let start = !!timeTextArr[0] ?  timeTextArr[0].replace('上午', '').replace('下午', '').replace('时', '') : ''
  let end = !!timeTextArr[1] ? timeTextArr[1].replace('上午', '').replace('下午', '').replace('时', '') : ''
  // 
  el.innerHTML = `
        
         <div>开始时间: ${start}</div>
         <div>结束时间: ${end}</div>
         <div>标题: ${arg.event._def.title}</div>
        `
  return {
    domNodes: [el]
  }
}

const dateClick = (info: DateClickArg) => { 
  let event = {
    start: `${info.dateStr} 12:00:00`,
    end: `${info.dateStr} 13:00:00`,
    title: '吃饭'
  }
  events.value.push(event)
  console.log(info,'info11')
}

const eventClick = (info:EventClickArg) => { 
  console.log(info,'info22')
}

</script>
