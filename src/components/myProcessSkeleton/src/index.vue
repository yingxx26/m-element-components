<template>
  <div class="jsmart-processSkeletonBox">
    <!-- 标   业务名称  受理编号  受理时间 当前环节   -->
    <!-- ab页 （登记信息，收件资料，审核）-->  <!--按钮 保存转出-->
    <div class="processSkeletonBox-show" >
      <m-myProcessTitle></m-myProcessTitle>
      <el-divider/>
      <div class="processSkeletonBox-NavMenu" >
        <m-myProcessNavMenu :childList="navMenuChlidList" :nameClass="'navMenu'">

          <template v-slot:yxx >
    <!--       slot又向上传-->
            <slot ></slot>

            <m-myNavMenuBodyItem :key="'receiveInfo'"
                                    name="receiveInfo"
            >
              <div  >收件body</div>
              <div  >收件body</div>
              <div  >收件body</div>
              <div  >收件body</div>
              <div  >收件body</div>
              <div  >收件body</div>
            </m-myNavMenuBodyItem>

            <m-myNavMenuBodyItem :key="'approvalComments'"
                                 name="approvalComments"
            >
              <div  >审批意见</div>
              <div  >审批意见</div>
              <div  >审批意见</div>
              <div  >审批意见</div>
              <div  >审批意见</div>
              <div  >审批意见</div>
            </m-myNavMenuBodyItem>

          </template>

        </m-myProcessNavMenu>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

import {ArrowLeft, Check, Edit, Right} from '@element-plus/icons-vue'
import {computed, onMounted, PropType, ref, watch} from "vue";

const navMenuChlidList = computed(() => {
  let arr = []
  // 判断导航条权限
  arr.push({
    name:  '申请信息',
    comId: 'sqInfo'
  })
  arr.push({
    name:  '家庭信息',
    comId: 'jtInfo'
  })
   arr.push({
     name:  '收件资料',
     comId: 'receiveInfo'
   })
  arr.push({
    name:  '审批意见',
    comId: 'approvalComments'
  })
  return arr;
});

</script>


<style lang="scss" scoped>
@import './jsmart-processSkeleton.scss';
</style>
