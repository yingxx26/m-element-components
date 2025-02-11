<template>
  <div>
    <el-table :data="cloneTableData" v-loading="isLoading" :element-loading-background="elementLoadingBackground"
              @row-click="rowClick"
    >
      <template v-for="(item, index) in tableOptions" :key="index">

        <el-table-column
            :label="item.label"
            :prop="item.prop"
            :align="item.align"
            :width="item.width"
        >
          <template #default="scope">
            <template v-if="scope.row.rowEdit">
              <el-input size="small" v-model="scope.row[item.prop]"></el-input>
            </template>
            <template v-else>
              <!--输入框   ,这里是table自己的插槽， click事件通信不是插槽(显示内容固定，只需要把数据传回父组件)     -->
              <template v-if="(scope.$index + scope.column.id)===currentEdit">
                <div @click.stop="clickEditCell" style="display: flex">
                  <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                  <slot v-if="$slots.editCell" name="editCell" :scope="scope"></slot><!--√X插槽-->
                  <div v-else class="icons"><!--√X原始 -->
                    <el-icon-check @click="check(scope)"></el-icon-check>
                    <el-icon-close @click="close(scope)"></el-icon-close>
                  </div>
                </div>
              </template>
              <!--非输入框（原始）           -->
              <template v-else>
                <!-- 插槽套插槽  外层自己，内层elementplus           -->
                <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>  <!-- 自定义列-->
                <span v-else> {{ scope.row[item.prop] }}</span>  <!--原始列-->
                <!--<el-icon-edit class="edit" v-if="item.editable" @click="clickEdit(scope)"></el-icon-edit>-->
                <component :is="`el-icon-${toLine(editIcon)}`" class="edit" v-if="item.editable"
                           @click.stop="clickEdit(scope)"></component>
              </template>
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
          <slot v-if="scope.row.rowEdit" name="editRow" :scope="scope"></slot> <!--行√X插槽 -->
          <slot v-else name="action" :scope="scope"></slot>  <!--行 自定义按钮 插槽 -->
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="pageSizes"

          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>

  </div>
</template>
<!--:small="small"
          :disabled="disabled"
          :background="background"-->
<script lang="ts" setup>

import {computed, onMounted, PropType, ref, watch} from "vue";
import {TableOptions} from "./types";
import {toLine} from "../../../utils";
import {cloneDeep} from "lodash";


const props = defineProps({
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
  },
  editIcon: {
    type: String,
    default: 'edit'
  },
  isEditRow: {
    type: Boolean,
    default: false
  },
  editRowIndex: {
    type: String,
    default: ''
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: [10, 20, 30, 40]
  },
  pageSize: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
  }
})

const tableOptions = computed(() => props.options?.filter(item => !item.action))
const actionOptions = computed(() => props.options.find(item => item.action))
const isLoading = computed(() => !props.data || !props.data.length)

const currentEdit = ref<string>('');

const cloneTableData = ref<any[]>([])
const cloneEditRowIndex = ref<string>('')

const emits = defineEmits(['check', 'close', 'update:editRowIndex'])

onMounted(() => {
  cloneNewTableData();
})

watch(() => props.data, val => {
  cloneNewTableData();
}, {deep: true})

watch(() => props.editRowIndex, val => {
  if (val) {
    cloneEditRowIndex.value = val;
  }
})

let cloneNewTableData = () => {
  cloneTableData.value = cloneDeep(props.data);
  cloneTableData.value.map(item => {
    item.rowEdit = false;
  })
}

let rowClick = (row: any, colum: any) => {
  if (colum.label === actionOptions.value!.label) {
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit;
      cloneTableData.value.map(item => {
        if (item !== row) {
          item.rowEdit = false;
        }
      })
      if (!row.rowEdit) {
        emits('update:editRowIndex', '');
      }
    }
    console.log(row)
  }

}

let clickEdit = (scope: any) => {
  console.log(scope)
  currentEdit.value = scope.$index + scope.column.id;
}

let check = (scope: any) => {
  currentEdit.value = '';
  emits('check', scope)
}

let close = (scope: any) => {
  currentEdit.value = '';
  emits('close', scope)
}

let clickEditCell = (scope: any) => {
  currentEdit.value = '';
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
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: right;
  margin-top: 16px;
}
</style>
