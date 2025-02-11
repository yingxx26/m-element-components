<template>
  <div>
    <m-myTable :data="tableData" :options="options" elementLoadingBackground="black" @check="check"
               isEditRow :editRowIndex="editRowIndex"
    >

      <!--自定义插槽     -->
      <template #name="{scope}">
        <el-icon-timer></el-icon-timer>
        {{ scope.row.name }}
      </template>
      <!--操作列插槽     -->
      <template #action="{scope}">
        <el-button type="primary" @click="edit(scope)">编辑</el-button>
      </template>
      <!--单元格√X插槽     -->
      <template #editCell="{scope}">
        <el-button type="primary" size="small" @click="check(scope)">确认</el-button>
        <el-button type="danger" size="small">取消</el-button>
      </template>

      <!--行√X插槽     -->
      <template #editRow="{scope}">
        <el-button type="primary" size="small">确认</el-button>
        <el-button type="danger" size="small">取消</el-button>
      </template>
    </m-myTable>
  </div>
</template>

<script lang="ts" setup>
import {TableOptions} from "../../components/myTable/src/types";
import {ref} from "vue";

interface TableData {
  date: string,
  name: string,
  address: string
}

const editRowIndex = ref<string>('')
const tableData = ref<TableData[]>([]);
setTimeout(() => {
      tableData.value = data;
    }, 1000
)
const data = [
  {
    date: '2016-05-03',
    name: 'Tom1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom4',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
const options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    editable: true
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name'
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center'
  },
  {
    label: '操作',
    align: 'center',
    prop: '',
    action: true
  }
]

let edit = (scope: any) => {
  editRowIndex.value = 'edit';
}

let check = (scope: any) => {
  console.log("父组件 ", scope.row.name)
}
</script>


<style lang="scss" scoped>
svg {
  width: 1em;
}
</style>