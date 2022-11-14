<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 13:54:10
 * @LastEditTime: 2022-11-10 17:42:32
 * @description: 
-->
<template>
  <div class="constom-dialog">
    <el-button @click="handleClick">
      {{title}}
    </el-button>
    <div class="m-choose-icon-dialog-body-height">
      <el-dialog v-model="childVisible"  :title="title" width="800px">
        <div class="container">
          <div v-for="(item,index) in Object.keys(Icons)" :key="index" class="item-box" @click="clickItem(item)">
            <div>
              <!-- component动态组件 -->
              <component :is="`el-icon-${toLine(item)}`"></component>
            </div>
            <div>{{item}}</div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from '../../utils/index'
import { useCopy } from '../../hooks/useCopy'
const props = defineProps<{
  title: string,
  visible:boolean
}>()

const childVisible = ref < boolean > (props.visible)

const emits = defineEmits(['update:visible'])

const handleClick = () => { 
  emits('update:visible',!props.visible)
}

watch(() => props.visible, (val) => { 
  childVisible.value = val
})

watch(() => childVisible.value, (val) => { 
  emits('update:visible',val)
})

const clickItem = (item:string) => { 
  let text = `<el-icon-${toLine(item)} />`
  useCopy(text)
  childVisible.value = false
}

</script>
<style lang="scss" scoped>
  .constom-dialog{
    .container{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      height: 500px;
      .item-box{
        width: 20%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        margin-bottom: 20px;
        font-size: 1.4px;
        cursor: pointer;
        svg{
          width: 24px;
          height: 24px;
        }
      }
    }
  }
</style>
