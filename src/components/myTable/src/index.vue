<template>
  <div>
    <el-table :data="data" v-loading="isLoading" :element-loading-background="elementLoadingBackground">
      <template v-for="(item, index) in tableOptions" :key="index">

        <el-table-column
            v-if="!item.slot"
            :label="item.label"
            :prop="item.prop"
            :align="item.align"
            :width="item.width"
        ></el-table-column>
        <!--循环不显示， 给父组件 插槽      -->
        <el-table-column
            v-else
            :label="item.label"
            :prop="item.prop"
            :align="item.align"
            :width="item.width"
        >
          <template #default="scope">
            <!-- 插槽套插槽  外层自己，内层elementplus           -->
            <slot :name="item.slot" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>

      <!-- 操作列   ，最后一列  -->
      <el-table-column
          :label="actionOptions!.label"
          :align="actionOptions!.align"
          :width="actionOptions!.width"
      >
        <template #default="scope">
          <slot name="action" :scope="scope"></slot>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script lang="ts" setup>

import {computed, PropType} from "vue";
import {TableOptions} from "./types";

let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  elementLoadingText: {
    type: String
  },
  elementLoadingSpinner: {
    type: String
  },
  elementLoadingSvg: {
    type: String
  },
  elementLoadingBackground: {
    type: String
  }
})

let tableOptions = computed(() => props.options?.filter(item => !item.action))
let actionOptions = computed(() => props.options.find(item => item.action))
let isLoading = computed(() => !props.data || !props.data.length)
</script>


<script lang="scss" scoped>

</script>
