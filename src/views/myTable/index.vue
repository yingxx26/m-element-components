<template>
  <div>
    <m-myTable :data="data" :options="options"></m-myTable>
  </div>
</template>

<script lang="ts" setup>
import {TableOptions} from "../../components/myTable/src/types";

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
    align: 'center'
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center'
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
</script>


<script lang="scss" scoped>

</script>
