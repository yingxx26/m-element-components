<template>

    <div class="tab_item_box" style="overflow: auto;padding: 5px;">
      <el-scrollbar style="height:100%;">
          <table cellspacing="1" cellpadding="0" width="100%" border="0" class="common_jbxx_table backInfoTable">
            <tr>
              <td>驳回人：</td>
              <td>{{backInfoData.operateUser}}</td>
            </tr>
            <tr>
              <td>驳回时间：</td>
              <td>{{backInfoData.operateTime}}</td>
            </tr>
            <tr>
              <td>驳回原因：</td>
              <td>{{backInfoData.reason}}</td>
            </tr>
          </table>
      </el-scrollbar>
    </div>

</template>
<script>

  export default {
    name: "backInfo",
    data() {
      return {
      }
    },
    props: ['backInfoData'],
    methods: {
    },
    created() {
      console.log(this.backInfoData);
    }
  }
</script>

<style lang="less">
  .backInfoTable{
    table-layout: fixed;
    tr{
      td{
        word-wrap: break-word;
        &:first-child{
          border-right: 1px solid #EEEEEE;
          width: 100px;
          text-align: right;
          font-weight: bold;
        }
      }
    }
  }
</style>