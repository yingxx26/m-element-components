<template>
  <div>
    <el-table :data="data">
      <template v-for="(item, index) in tableOptions" :key="index">
        <el-table-column
            :label="item.label"
            :prop="item.prop"
            :align="item.align"
            :width="item.width"
        ></el-table-column>
      </template>


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
  }
})

let tableOptions = computed(() => props.options?.filter(item => !item.action))
let actionOptions = computed(() => props.options?.filter(item => item.action))

</script>


<script lang="scss" scoped>

</script>
