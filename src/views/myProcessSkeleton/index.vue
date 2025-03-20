<template>
  <div>
    <m-myProcessSkeleton
    >
      <template v-slot:default="slotProps">

          <m-myNavMenuBodyItem :key="'sqInfo'"
                                   name="sqInfo"
                                   >
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
              <div>  申请信息申请信息  </div>
          </m-myNavMenuBodyItem>

          <m-myNavMenuBodyItem :key="'jtInfo'"
                                  name="jtInfo"
          >
          <div>家庭信息  </div>
          <div>家庭信息  </div>
          <div>家庭信息  </div>
          <div>家庭信息  </div>
          <div>家庭信息  </div>
          <div>家庭信息  </div>
          <div>家庭信息  </div>
          <div>家庭信息  </div>
          <div>家庭信息  </div>
          </m-myNavMenuBodyItem>
      </template>

    </m-myProcessSkeleton>
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

</script>


<style lang="scss" scoped>
svg {
  width: 1em;
}
</style>