<template>
  <div>
    <m-myTable :data="tableData" :options="options" elementLoadingBackground="black" @check="check"
               isEditRow v-model:editRowIndex="editRowIndex"
               pagination :total="total" paginationAlign="left"
               @sizeChange="sizeChange"
               @currentChange="currentChange"
               :pageSize="pageSize"
               :currentPage="current"
               border
    >

      <!--自定义插槽     -->
      <template #name="{scope}">
        <el-icon-timer></el-icon-timer>
        {{ scope.row.name }}
      </template>
      <!--操作列插槽     -->
      <template #action="{scope}">
        <el-button type="primary" @click="edit(scope)">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
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
import {onMounted, ref} from "vue";
import axios from "axios";

interface TableData {
  date: string,
  name: string,
  address: string
}

const editRowIndex = ref<string>('')
const tableData = ref<TableData[]>([]);

const current = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(0);
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

/*const data = [
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
 setTimeout(() => {
      tableData.value = data;
    }, 1000
) */
onMounted(() => {
  getData();
})

let getData = () => {
  axios.post('/api/list', {
    current: current.value,
    pageSize: pageSize.value
  }).then((res: any) => {
    tableData.value = res.data.data.rows
    total.value = res.data.data.total
    console.log(res.data)
  })
}

let edit = (scope: any) => {
  editRowIndex.value = 'edit';
}

let check = (scope: any) => {
  console.log("父组件 ", scope.row.name)
}

let sizeChange = (val: number) => {
  pageSize.value = val;
  getData();
}

let currentChange = (val: number) => {
  current.value = val;
  getData();
}
</script>


<style lang="scss" scoped>
svg {
  width: 1em;
}
</style>