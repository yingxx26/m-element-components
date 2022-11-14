<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-02 16:52:02
 * @LastEditTime: 2022-11-10 17:25:52
 * @description: 
-->
<template>
  <div class="list-tabs-item">
    <el-tabs>
      <el-tab-pane v-for="(item,index) in list" :key="index" :label="item.title" >
        <el-scrollbar max-height="400px">
          <div class="container" v-for="(item1,index1) in item.content" :key="index1">
            <div v-if="item1.avatar" class="avatar">
              <el-avatar  size="small" :src="item1.avatar" />
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>
                  {{item1.title}}
                </div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{item1.tag}}</el-tag>
              </div>
              <div v-if="item1.desc" class="time">{{item1.desc}}</div>
              <div v-if="item1.time" class="time">{{item1.time}}</div>
            </div>
          </div>
          <div class="actions">
            <div class="a-item" v-for="(el,i) in actions" :key="i" :class="{'border':i !== actions.length}">
              <div class="a-icon" v-if="el.icon">
                <component :is="`el-icon-${toLine(el.icon)}`"></component>
              </div>
              <div class="a-text" v-if="el.text">{{el.text}}</div>
            </div>
          </div>
        </el-scrollbar>
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref,PropType } from 'vue'
import { ListOptions, ActionOptions } from './types'
import { toLine } from '../../../utils/index'

const props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required:true
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default:()=>[]
  }
})

console.log(props.list)
console.log(props.actions)

</script>
<style lang="scss" scoped>
.list-tabs-item{
  .container{
    // width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    &:hover{
      background: #e6e6e6;
    }
    .avatar{
      flex: 1;
    }
    .content{
      flex: 3;
      div{
        line-height: 24px;
      }
      .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .time{
        font-size: 12px;
        color: #999;
      }
    }
  }
  .actions{
    height: 50px;
    display: flex;
    align-items: center;
    border-top: 1px solid #ddd;
    .a-item{
      height: 50px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .a-icon{
        padding-right: 4px;
        position: relative;
        top: 2px;
      }
    }
  }
  .border{
    border-right: 1px solid #ddd;
  }
}
</style>
