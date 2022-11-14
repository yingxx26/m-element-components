<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-10 11:08:41
 * @LastEditTime: 2022-11-10 16:17:50
 * @description: 
-->
<template>
  <div id="calendar">
    
  </div>
</template>
<script lang="ts" setup>
// 在vite里面使用fullcalendar 需要引入一个包
import '@fullcalendar/core/vdom'
import { ref,onMounted, PropType, watch } from 'vue'
import { Calendar, EventClickArg } from '@fullcalendar/core'
import daygridPlugin from '@fullcalendar/daygrid'
import interactionPlugin , {DateClickArg} from '@fullcalendar/interaction'
import { EventItem } from './types'

const props = defineProps({
  // 日历显示的语言
  local: {
    type: String,
    default: 'zh-cn'
  },
  // 视图模式
  initialView: {
    type: String,
    default: 'dayGridMonth'
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        month: '月',
        week: '周',
        day: '日',
        prevYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月'
      }
    }
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: 'title',
        center: '',
        end: 'prev today next'
      }
    }
  },
  // 底部工具栏
  footerToolbar: {
    type: Object
  },
  // 日历事件
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => []
  },
  // 自定义渲染内容方法
  eventContent: {
    type: Function
  }
})

let emits = defineEmits(['date-click', 'event-click'])

// 日历对象
const calendar = ref<Calendar>()

// 生成日历的方法
const renderCalendar = () => { 
  let el = document.getElementById('calendar')
  if (el) { 
    console.log(el)
    calendar.value = new Calendar(el, {
      // 使用到的插件
      plugins: [daygridPlugin, interactionPlugin],
      // 视图模式
      initialView: props.initialView,
      // 语言
      locale: props.local,
      // 按钮文字
      buttonText: props.buttonText,
      // 头部工具栏
      headerToolbar: props.headerToolbar,
      // 底部工具栏
      footerToolbar: props.footerToolbar,
      // 事件源
      eventSources: [
        {
          // 生成事件
          events(e, callback) {
            if (props.events.length) callback(props.events)
            else callback([])
          }
        }
      ],
      // 点击日历的某一天
      dateClick(info:DateClickArg) { 
        emits('date-click',info)
      },
      eventClick(info:EventClickArg) { 
        emits('event-click',info)
      },
      // 自定义渲染内容
      eventContent: props.eventContent
    })
    calendar.value.render()
  }
}

watch(props.events, () => {
  renderCalendar()
}, {deep:true})

onMounted(() => {
  renderCalendar()
})
</script>
