<template>
  <div class='dialogBoxIn hasBottomButtonBar'>
    <div class="tab_item_box  tab_item_box_scroll dialogBoxBg">
      <div class="container_box h100">
        <el-container class="lc_box h100">
          <div class="lc_tree hasTopSearchBar h100">
            <div class="lc_tree_control_sh">
              <div class="lc_tree_control_sh_item" @click="showCloseTree">
                <i class="iconfont" v-if="treeSH==false">&#xe7cb;</i>
                <i class="iconfont" v-if="treeSH==true">&#xe77b;</i>
              </div>
              <div class="lc_tree_control_sh_item" @click="refreshTree"><i class="iconfont">&#xe61d;</i>
              </div>
            </div>
            <div class="lc_tree_top_box">
              <div class="lc_tree_control_box">
                <div class="lc_tree_control_input">
                  <el-form>
                    <!-- 搜索过滤框 -->
                    <el-input placeholder="输入关键字进行过滤" v-model="filterText" :size="GLOBAL.inputSize">
                    </el-input>
                  </el-form>
                </div>
              </div>
            </div>
            <!-- 树 -->
            <el-scrollbar style="height:100%;">
              <div class="dialogTree">
                <el-tree :data="dataTreeData" node-key="id"
                         :default-expanded-keys=expanded
                         :props="defaultProps" :highlight-current="true"
                         show-checkbox
                         @check-change="handleCheckChange"
                         :expand-on-click-node="false"
                         :filter-node-method="filterNode"
                         :default-checked-keys=checkedArr
                         :check-strictly="true"
                         ref="dataTree">
                  <div slot-scope="{ node, data }">
          <span class="commonTreeNode"
                :class="[data.childList!='' ? 'customTreeNodeP' : 'customTreeNodeC']">
          <span>
                      <b v-if="data.icon=='/static/images/icon/foldericon.png'"></b>
                      <strong v-if="data.icon=='/static/images/icon/foldericon_disabled.png'"></strong>
                      <img :src="data.icon" width="16"
                           v-if="data.icon!='/static/images/icon/foldericon.png'&&data.icon!='/static/images/icon/foldericon_disabled.png'"/>
                      <font>{{ node.label }}</font>
          </span>
          </span>
                  </div>
                </el-tree>
              </div>
            </el-scrollbar>
          </div>
        </el-container>
      </div>
    </div>

    <div class="commonBottomBox clear" ref="commonBottomBox">
      <div class="commonBottomButtonBar fr">
        <el-row>
          <el-button @click="cancle" size="small"><i class="iconfont icon_cancel"></i><font>取消</font>
          </el-button>
          <el-button type="primary" @click="submitForm" size="small"
          ><i class="iconfont icon_save"></i><font>确定</font>
          </el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import {addIcon, treeFilterNode} from "jsmart-platform-portal/utils/common/common"
  import PROCESS_API from '../../api/processTemplate.js'
  // import msgBus from '@workflow/views/processDefinition/bus/msgBus'

  export default {
    name: "addData",
    props: ['show', 'fileNames', 'fileTable'],
    data() {
      return {
        i: 0,
        treeSH: false,
        dataTreeData: [],//树的数据
        selectedNode: [],//被选中的节点
        form: {  //表单内容
          inout: '输入'
        },
        filterText: '',//过滤内容
        defaultProps: {
          label: "name",
          children: 'childList'
        },
        expanded: [], //默认展开节点
        checkedArr: []  //默认被选中节点
      }
    },
    mounted() {
      this.init();
      // msgBus.$on('initTree', (data) => {
      //   this.checkedArr = [];
      //   data.map((item) => {
      //     this.checkedArr.push(item.fileId);
      //   })
      // });
    },
    methods: {
      //初始化
      init() {
        PROCESS_API.getDataTree().then((res) => {
          this.dataTreeData = res.data.data;
          this.expanded.push(this.dataTreeData[0].id);
          this.setDisable(this.dataTreeData);
          addIcon(this.dataTreeData);
        })
      },
      //选择时调用
      handleCheckChange(data, checked) {
        this.i = 0
        this.$set(data, 'fileName', data.name);
        if (checked === true) {  //被选中时
          this.$set(this.fileTable, this.fileTable.length, data);
          this.$emit('setSelect',data);
        } else {//移除选中时
          this.fileTable.map((item) => {
            this.i = this.i + 1;
            if (data.name.indexOf(item.name) != -1) {
              this.fileTable.splice(this.i - 1, 1)
            }
          })
        }
      },

      //提交
      submitForm() {
        let data = [];
        this.$refs.dataTree.getCheckedNodes().map((item) => {
          data.push({
            fileName: item.name,
            fileId: item.id,
            originalNum: item.originalNum,
            copyNum: item.copyNum,
            shared: 0
          });
        })
        // msgBus.$emit('addDataData', data);
        this.$emit('setfileClose');
      },
      showCloseTree() {
        if (this.treeSH === false) {
          this.showAllTree = true;
          for (let i = 0; i < this.$refs.dataTree.store._getAllNodes().length; i++) {
            this.$refs.dataTree.store._getAllNodes()[i].expanded = this.showAllTree;
          }
        }
        else {
          this.showAllTree = false;
          for (let j = 0; j < this.$refs.dataTree.store._getAllNodes().length; j++) {
            this.$refs.dataTree.store._getAllNodes()[j].expanded = this.showAllTree;
          }
        }
        this.treeSH = !this.treeSH
      },
      refreshTree() {
        this.$refs.dataTree.remove(this.dataTree);
        this.init();
      },
      //取消
      cancle() {
        this.init();
        this.$emit('setfileClose');
      },
      //设置不可选节点
      setDisable(data) {
        data.map((item) => {
          if (item.beanType == 17) {
            item.disabled = true;
          }
          if (item.childList.length > 0) {
            this.setDisable(item.childList);
          }
          if (this.fileNames.indexOf(item.name) != -1) {
            item.disabled = true;
          }

        })
      },
      //输入框过滤
      filterNode(value, data, node) {
        return treeFilterNode(value, data, node)
      }
    },
    watch: {
      filterText(val) {
        this.$refs.dataTree.filter(val);
      }
    }
  }
</script>