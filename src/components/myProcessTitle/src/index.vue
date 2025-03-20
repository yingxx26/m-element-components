<template>
  <div>
    <!-- 标   业务名称  受理编号  受理时间 当前环节   -->
    <div class="jsmartBusinessTitleSingle" style="display: flex;justify-content: space-around;align-items: center">
      <!--业务名称-->
      <div class="jsmartBusinessTitleSingleItem" style="display: flex;align-items: center">
        <el-icon :size="20" color="red">
          <Edit/>
        </el-icon>
        <div title="业务名称">"业务名称:" yxx申请公租房</div>

      </div>
      <!--受理编号-->
      <div class="jsmartBusinessTitleSingleItem" style="display: flex;align-items: center">
        <el-icon :size="20" color="red">
          <Check/>
        </el-icon>
        <div title="受理编号">"受理编号:" 123456</div>
      </div>

      <div class="jsmartBusinessTitleSingleItem" style="display: flex;align-items: center">
        <el-icon :size="20" color="red">
          <Right/>
        </el-icon>
        <div title="受理编号">"受理时间:" 2025-02-03</div>
      </div>

      <div class="jsmartBusinessTitleSingleItem" style="display: flex;align-items: center">
        <el-icon :size="20" color="red">
          <ArrowLeft/>
        </el-icon>
        <div title="受理编号">"当前环节:" 结束</div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>

import {ArrowLeft, Check, Edit, Right} from '@element-plus/icons-vue'

const props = defineProps({})

</script>


<style lang="scss" scoped>

</style>
