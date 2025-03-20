<template>
  <div class="jsmart-NavMenuBody-item" :class="nameClass" :name="comId">
    <div class="jsmart-NavMenuBody-item-in">
      <!--<div class="jsmart-NavMenuBody-item-in-top">-->
      <!--<jsmartSubTitleBar :title="title" v-if="hasSubtitle">-->
      <!--<slot name="title"></slot>-->
      <!--</jsmartSubTitleBar>-->
      <!--</div>-->
      <div class="jsmart-NavMenuBody-item-in-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script  >

import {ArrowLeft, Check, Edit, Right} from '@element-plus/icons-vue'
export default {
  name: "jsmartNavMenuBodyItem",
  props:{
    title:{
      type:String,
      default:""
    },
    comId:{
      type:String,
      default:""
    },
  },
  computed:{
    nameClass(){
      return this.$parent.nameClass
    },
    hasSubtitle(){
      return this.$parent.hasSubtitle
    }
  }
}

</script>


<style lang="scss" scoped>

</style>
