<template>
  <div>
    <el-table :data="data" v-loading="isLoading" :element-loading-background="elementLoadingBackground">
      <template v-for="(item, index) in tableOptions" :key="index">

        <el-table-column
            :label="item.label"
            :prop="item.prop"
            :align="item.align"
            :width="item.width"
        >
          <template #default="scope">
            <!--输入框           -->
            <template v-if="(scope.$index + scope.column.id)===currentEdit">
              <div style="display: flex">
                <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                <div class="icons">
                  <el-icon-check></el-icon-check>
                  <el-icon-close></el-icon-close>
                </div>
              </div>

            </template>
            <!--原始           -->
            <template v-else>
              <!-- 插槽套插槽  外层自己，内层elementplus           -->
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>  <!-- 自定义列-->
              <span v-else> {{ scope.row[item.prop] }}</span>  <!--原始列-->
              <el-icon-edit class="edit" v-if="item.editable" @click="clickEdit(scope)"></el-icon-edit>
            </template>
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

import {computed, PropType, ref} from "vue";
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

let currentEdit = ref<string>('');

let clickEdit = (scope: any) => {
  console.log(scope)
  currentEdit.value = scope.$index + scope.column.id;
}
</script>


<style lang="scss" scoped>
.edit {
  width: 1em;
  position: relative;
  top: 2px;
  cursor: pointer;
}

.icons {
  display: flex;
  width: 4em;
}
</style>
