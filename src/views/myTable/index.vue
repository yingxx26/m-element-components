<template>
  <div>
    <m-myTable :data="tableData" :options="options" elementLoadingBackground="black">
      <template #name="{scope}">
        {{ scope.row.name }}
        <el-icon-edit></el-icon-edit>
      </template>
      <template #action="{scope}">
        <el-button type="primary" @click="edit(scope)">编辑</el-button>
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

let tableData = ref<TableData[]>([]);
setTimeout(() => {
      tableData.value = data;
    }, 1000
)
let data = [
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
let options: TableOptions[] = [
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
  console.log(scope)
}
</script>


<style lang="scss" scoped>
svg {
  width: 1em;
}
</style>