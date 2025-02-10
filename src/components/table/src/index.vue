<template>
  <div 
  v-loading="isLoading"
  :element-loading-text="elementLoadingText"
  :element-loading-spinner="elementLoadingSpinner"
  :element-loading-background="elementLoadingBackground"
  :element-loading-svg="elementLoadingSvg"
  :element-loading-svg-view-box="elementLoadingSvgViewBox"
  v-bind="$attrs"
  >
    <el-table :data="tableData"  @row-click="rowClick">
      <template v-for="(item, index) in tableOption" :key="index">
        <el-table-column 
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :align="item.align">
          <template #default="scope">
            <!--可编辑行-->
            <template v-if="scope.row.rowEdit">
              <el-input size="small" v-model="scope.row[item.prop]">啊啊a</el-input>
            </template>
            <!--可编辑行-->
            <template v-else>
              <!--编辑状态列表              -->
              <template v-if="(scope.$index + scope.column.id) === currentEdit">
                <div style="display: flex;align-items: center;">
                  <div>
                    <el-input size="small" v-model="scope.row[item.prop]">啊啊b</el-input>
                  </div>
                  <div @click.stop="cancelRow">
                    <!-- 插槽  （显示父组件的按钮）                 -->
                    <slot name="cellEdit" v-if="$slots.cellEdit" :scope="scope"></slot>
                    <!-- 非插槽  （显示子组件预设的按钮）                 -->
                    <div v-else class="action-icon">
                      <el-icon-check class="check" @click.stop="check(scope)">啊啊c</el-icon-check>
                      <el-icon-close class="close" @click.stop="close(scope)">啊啊d</el-icon-close>
                    </div>
                  </div>
                </div>
              </template>
              <!--非编辑状态列表              -->
              <template v-else >
                <!--自定义列表              -->
                <slot v-if="item.slot" :name="item.slot" :scope="scope">啊啊e</slot>
                <!--非自定义列表              -->
                <span v-else>啊啊f{{scope.row[item.prop]}}</span>
                <!--动态组件-->
                <component class="edit-box" :is="`el-icon-${toLine(editIcon)}`" @click.stop="edit(scope)"></component>
              </template>
            </template>
          </template>
        </el-table-column>
      </template>
      <!--操作项列表    （循环外）         -->
      <el-table-column 
        :label="actionOption.label"
        :width="actionOption.width"
        :align="actionOption.align">
        <template #default="scope">
          <slot v-if="scope.row.rowEdit" name="editRow" :scope="scope"></slot>
          <slot v-else name="action" :scope="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
<!--   分页 -->
    <div v-if="pagination" class="pagination" :style="{justifyContent}">
      <el-pagination
        v-model:currentPage="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { AnyKindOfDictionary } from 'lodash'
import { ref,PropType, computed,watch, onMounted } from 'vue'
import { TableOptions } from './types'
import { toLine } from '../../../utils/index'
import cloneDeep from 'lodash/cloneDeep'

const props = defineProps({
  // 表格配置选项
  options: {
    type: Array as PropType<TableOptions[]>,
    required:true
  },
  // 表格数据
  data: {
    type: Array,
    required:true
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 加载图标名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景颜色
  elementLoadingBackground: {
    type: String,
  },
  // 加载图标是svg
  elementLoadingSvg: {
    type: String
  },
  // 加载团是svg的配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 编辑显示的图标
  editIcon: {
    type: String,
    default: 'Edit'
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: ''
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false
  },
  // 显示分页的对齐方式
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center'
  },
  // 当前是第几页
  currentPage: {
    type: Number,
    default: 1
  },
  // 当前一页多少条数据
  pageSize: {
    type: Number,
    default: 10
  },
  // 显示分页数据多少条的选项
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40]
  },
  // 数据总条数
  total: {
    type: Number,
    default: 0
  }
})

let emits = defineEmits(['confirm', 'cancel','update:editRowIndex','size-change','current-change'])

// 拷贝一份表格的数据
const tableData = ref<any[]>(cloneDeep(props.data))

// 拷贝一份按钮的标识
let cloneEditRowIndex = ref<string>(props.editRowIndex)

// 当前被点击的单元格的标识
let currentEdit = ref<string>('')

// 过滤操作项之后的配置
const tableOption = computed(()=>props.options.filter(item=>!item.action))
// 操作项
const actionOption:any = computed(() => props.options.find(item => item.action))

// 表格分页的排列方式
let justifyContent = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  else if (props.paginationAlign === 'right') return 'flex-end'
  else return 'center'
})

// 是否在加载中
const isLoading = computed(()=>!props.data || !props.data.length)


const edit = (scope:any) => {
  currentEdit.value = scope.$index + scope.column.id
} 

const cancelRow = () => { 
  currentEdit.value = ''
}

// 点击行的事件
const rowClick = (row:any,column:any) => { 
  if (column.label === actionOption.value.label!) {
    console.log(123)
    if (props.isEditRow && props.editRowIndex === cloneEditRowIndex.value) { 
      row.rowEdit = !row.rowEdit

      tableData.value.map(item => { 
        if (item !== row) { 
          item.rowEdit = false
        }
      })

      if (!row.rowEdit) { 
        emits('update:editRowIndex','')
      }
    }
  }
}


// 点击确认
let check = (scope: any) => {
  emits('confirm', scope)
  // currentEdit.value = ''
}
// 点击取消
let close = (scope: any) => {
  emits('cancel', scope)
  // currentEdit.value = ''
}

// 分页的每一页数据变化
let handleSizeChange = (val: number) => {
  emits('size-change', val)
  // console.log(val)
}
// 分页页数改变
let handleCurrentChange = (val: number) => {
  emits('current-change', val)
  // console.log(val)
}


watch(() => props.data, val => { 
  tableData.value = cloneDeep(val)
  tableData.value.map(item => { 
    item.rowEdit = false
  })
}, { deep: true })

watch(() => props.editRowIndex, val => { 
  if (val) { 
    cloneEditRowIndex.value = cloneDeep(val)
  }
})

onMounted(() => { 
  tableData.value.map(item => { 
    item.rowEdit = false
  })
})

</script>
<style lang="scss" scoped>

.action-icon {
  display: flex;
  svg {
    width: 1em;
    height: 1em;
    margin-left: 8px;
    cursor: pointer;
  }
  .check {
    color: red;
  }
  .close {
    color: green;
    
  }
}
.edit-box{
  width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    left: 12px;
    cursor: pointer;
  svg{
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    left: 12px;
    cursor: pointer;
  }
} 
.pagination {
  margin-top: 16px;
  display: flex;
}
</style>
