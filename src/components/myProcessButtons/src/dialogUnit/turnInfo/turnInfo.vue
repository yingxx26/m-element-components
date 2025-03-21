<template>
    <div class="w100 h100">
        <div id="choiceLeft" class='formOutBox hasBottomButtonBar' style="display:inline;width: calc(100% - 200px);">
            <div class="tab_item_box  tab_item_box_scroll" >
                <div class="container_box">
                    <div class="common_tableList_box">
                        <el-table ref="turnFrom"
                                  :data="turnInfo"
                                  tooltip-effect="dark"
                                  style="width: 100%"
                                  @selection-change="handleSelectionChange" stripe border :size="GLOBAL.tableSize"
                                  class="singleTable">
                            <el-table-column type="selection" width="55" align="center"  :selectable="checkSelectable">
                            </el-table-column>
                            <el-table-column type="index" width="60" label="序号" align="center">
                            </el-table-column>
                            <el-table-column prop="flowElementName" label="环节名称" align="center">
                            </el-table-column>
                            <el-table-column prop="candidates" label="参与者" align="center">
                            </el-table-column>
                            <el-table-column prop="operation" label="操作" fixed="right" align="center" v-if="showOperation">
                                <template slot-scope="scope" v-if="scope.row.isShowUser == 1">
                                    <el-button @click="query(scope.row)" :size="GLOBAL.topButtonSize">
                                        <i class="iconfont">&#xe6e4;</i><font>选择</font></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div v-if="!(composeCode == 'null' || !composeCode)" style="width: 100%;height: 50px;">
                            <composeTurn :delBatch.sync="delBatch"></composeTurn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="commonBottomBox clear" ref="commonBottomBox">
                <div class="commonBottomButtonBar fr">
                    <el-row>
                        <el-button @click="cancle" :size="$GLOBAL_FUNC.sizeExpression('button')"><i
                                class="iconfont icon_cancel"></i><font>取消</font>
                        </el-button>
                        <el-button type="primary" @click="submitForm" :size="$GLOBAL_FUNC.sizeExpression('button')"
                        ><i class="iconfont icon_save"></i><font>确定</font>
                        </el-button>
                    </el-row>
                </div>
            </div>
        </div>
        <div id="choice" class="h100" style="position:absolute;width: 200px; display:none;right: 0px;">
            <div class="lc_tree h100">
                <div class="lc_tree_control_sh">
                    <div class="lc_tree_control_sh_item" @click="showCloseTree"><i class="iconfont"
                                                                                   v-if="treeSH==false">&#xe7cb;</i><i
                            class="iconfont" v-if="treeSH==true">&#xe77b;</i></div>
                    <div class="lc_tree_control_sh_item" @click="refreshTree"><i class="iconfont">&#xe61d;</i>
                    </div>
                </div>
                <div class="lc_tree_top_box">
                    <div class="lc_tree_control_box">
                        <div class="lc_tree_control_input">
                            <!-- 搜索过滤框 -->
                            <el-input placeholder="输入关键字进行过滤" @keyup.enter.native="filter" v-model="filterText"
                                      :size="GLOBAL.inputSize">
                            </el-input>
                        </div>
                    </div>
                </div>
                <div class="lc_tree_scroll_box" style="height: calc(100% - 120px);">
                    <el-scrollbar style="height:100%;">
                        <el-tree
                                :data="userData"
                                show-checkbox
                                @check-change="change"
                                :filter-node-method="filterNode"
                                node-key="key"
                                ref="tree"
                                default-expand-all
                                check-strictly
                                :props="defaultProps">
                            <div slot-scope="{ node, data }">
                                <span class="commonTreeNode"
                                      :class="[data.childList!='' ? 'customTreeNodeP' : 'customTreeNodeC']">
                                  <span>
                      <b v-if="data.icon=='/static/images/icon/foldericon.png'"></b>
                      <strong v-if="data.icon=='/static/images/icon/foldericon_disabled.png'"></strong>
                      <img :src="data.icon" width="16"
                           v-if="data.icon!='/static/images/icon/foldericon.png'&&data.icon!='/static/images/icon/foldericon_disabled.png'"/>
                      <font :title="node.label">{{ node.label }}</font>
                                  </span>
                                </span>
                            </div>
                        </el-tree>
                    </el-scrollbar>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PROCESS_API from '../../api/processTemplate.js'
    import {addIcon,treeFilterNode,closeTab} from 'jsmart-platform-portal/utils/common/common'
    // 导入
    import composeTurn from "./composeTurn"
    export default {
        name: "role",
        components: {
            composeTurn
        },
        data() {
            return {
                showDialog: false, // 展示弹框
                delBatch: 0,
                treeSH: true,//树的展开图标
                filterText: "",
                showTree: true, //控制展示树
                filterData: [], //过滤搜索时存储的数据
                i: 0,//用于树节点单选操作
                selectNode: '',//当前操作业务的taskDefKey
                multipleSelection: [], //存储表格被选项,
                userData: [], //显示用户树数据
                userDataCopy: [], //显示用户树数据
                isShow: false,
                counterSignFlag:'',//会签标识
                defaultProps: { //自定义树形结构显示的参数
                    children: 'childList',
                    label: 'name'
                },
                turnInfoParams: null,
                parallelFlag:false
            }
        },
        props: ['turnInfo', 'taskId', 'procInstName', 'procInstId', 'tabName','receiveType','businessId','eventFlowUrlInfo','composeCode'],
        created() {
            this.init()
        },
        computed:{
            showOperation(){
                let bool = true;
                if (this.turnInfo && this.turnInfo.length>0){
                    bool = this.turnInfo.some((item)=>{
                        return item.isShowUser == 1
                    })
                }
                return bool;
            }
        },
        methods: {
            init() {
                this.$nextTick(() => {
                    this.multipleSelection = [];
                    if (this.turnInfo.length == 1) {
                        for (var i = 0; i < this.turnInfo.length; i++) {
                            this.$refs.turnFrom.toggleRowSelection(this.turnInfo[i], true);//切换选项
                            this.multipleSelection = this.turnInfo;
                        }
                    } else {
                        for (var y = 0; y < this.turnInfo.length; y++) {
                            if (this.turnInfo[y].parallelFlag == 1) {
                                this.parallelFlag=true;
                                this.$refs.turnFrom.toggleRowSelection(this.turnInfo[y], true);//切换选项
                                this.multipleSelection.push(this.turnInfo[y])
                            }
                        }
                    }
                })
            },
            // 判断是否可选中
            checkSelectable(){
                // 并行时不许选中
                return !this.parallelFlag;
            },
            filterNode(value, data, node) { //输入框过滤
                return treeFilterNode(value, data, node)
            },
            shChildMenu: function () {
                this.isOpened = !this.isOpened
            },
            showCloseTree() {
                if (this.treeSH == false) {
                    this.showAllTree = true;
                    for (let i = 0; i < this.$refs.tree.store._getAllNodes().length; i++) {
                        this.$refs.tree.store._getAllNodes()[i].expanded = this.showAllTree;
                    }
                } else {
                    this.showAllTree = false;
                    for (let i = 0; i < this.$refs.tree.store._getAllNodes().length; i++) {
                        this.$refs.tree.store._getAllNodes()[i].expanded = this.showAllTree;
                    }
                }
                this.treeSH = !this.treeSH
            },
            refreshTree() {
                this.$refs.tree.remove(this.userData);
                this.userData = [];
                // this.userData = this.userDataCopy;
                this.userData = JSON.parse(JSON.stringify(this.userDataCopy))
                if (this.userData){
                    addIcon(this.userData); //给树节点添加icon
                }
            },
            //单选
            handleSelectionChange(row) {
                // 并行标识，并行时可多选，非并行为单选
                if (!this.parallelFlag){
                    this.multipleSelection = [];
                    // 如果为第一次选中
                    if (row.length == 1) {
                        if (this.selectNode == '') {
                            this.selectNode = row[0].taskDefKey;
                        }
                        if (row[0].taskDefKey != this.selectNode) {
                            this.userData = [];
                            this.userDataCopy = [];
                        } else {
                            this.userDataCopy = row[0].treeBeans;
                            this.setTreeKey(this.userDataCopy,true);
                            this.userData = JSON.parse(JSON.stringify(this.userDataCopy));
                        }
                        if (row[0].parallelFlag != undefined && row[0].parallelFlag == 1) {
                            this.multipleSelection = [];
                            this.$refs.turnFrom.clearSelection();
                            for (var i = 0; i < this.turnInfo.length; i++) {
                                if (this.turnInfo[i].parallelFlag != undefined && this.turnInfo[i].parallelFlag == 1) {
                                    this.$refs.turnFrom.toggleRowSelection(this.turnInfo[i], true);//切换选项
                                    this.multipleSelection.push(this.turnInfo[i])
                                }
                            }
                        } else {
                            if (row[0].parallelFlag == undefined || row[0].parallelFlag == '' || !row[0].parallelFlag) {
                                this.multipleSelection = [];
                                for (var y = 0; y < this.turnInfo.length; y++) {
                                    if (this.turnInfo[y].parallelFlag != undefined && this.turnInfo[y].parallelFlag == 1) {
                                        this.$refs.turnFrom.clearSelection();
                                    }
                                }
                                if (row != '') {
                                    this.multipleSelection.push(JSON.parse(JSON.stringify(row[0])))
                                    this.selectNode = row[0].taskDefKey;
                                    // this.userData = row[0].treeBeans;
                                    this.userDataCopy = row[0].treeBeans;
                                    this.setTreeKey(this.userDataCopy,true);
                                    this.userData = JSON.parse(JSON.stringify(this.userDataCopy))
                                    if (this.userData){
                                        addIcon(this.userData); //给树节点添加icon
                                    }
                                    if (row.length > 1) {
                                        this.$refs.turnFrom.clearSelection();
                                        this.$refs.turnFrom.toggleRowSelection(row, true);//切换选项
                                    } else {
                                        return false;
                                    }
                                } else {
                                    if (this.turnInfo.length == 1) {
                                        for (let i = 0; i < this.turnInfo.length; i++) {
                                            this.$refs.turnFrom.toggleRowSelection(this.turnInfo[i], true);//切换选项
                                        }
                                    } else {
                                        if (row.length > 1 && row.parallelFlag != undefined && row.parallelFlag == 1) {
                                            this.$refs.turnFrom.toggleRowSelection(row[0], true);//切换选项
                                        } else {
                                            this.userData = [];
                                            this.userDataCopy = [];
                                            this.selectNode = '';
                                            return false;
                                        }
                                    }
                                }
                            }
                        }
                    } else if (row[0] != undefined) {
                        // 多个值
                        this.changeRow(row);
                    }
                }
            },
            changeRow(row) {
                this.$refs.turnFrom.clearSelection();
                this.$refs.turnFrom.toggleRowSelection(row[1], true);
            },
            submitForm() { //点击确定
                if (this.multipleSelection.length == 0) {  //如果没有选择内容，则弹出提示
                    this.$notify({
                        title: '失败',
                        message: '您还没有选择业务转出环节！',
                        type: 'error',
                        offset: this.GLOBAL.notifyOffset,
                        duration: this.GLOBAL.notifyDuration
                    });
                    return false;
                }
                for (var h = 0; h < this.multipleSelection.length; h++) {
                    if (this.multipleSelection[h].mustassignFlag == 1) {
                        if (this.multipleSelection[h].participants === '' || this.multipleSelection[h].participants === null) {
                            this.$notify({
                                title: '提示',
                                message: '请选择指定人员',
                                type: 'warning',
                                offset: this.GLOBAL.notifyOffset,
                                duration: this.GLOBAL.notifyDuration
                            });
                            return false;
                        }
                    }
                }
                var data = JSON.parse(JSON.stringify(this.multipleSelection));
                let checkedData = this.$refs.tree.getCheckedKeys();
                let arr = [];
                checkedData.map((el)=>{
                    let id = el.split('-')[0];
                    let bool = arr.some((item)=>{
                        return item == id;
                    })
                    if (!bool){
                        arr.push(id)
                    }
                })
                data.map((item)=>{
                    item.candidateList = arr;
                })
                this.turnInfoParams = data


                // todo
                // 调用转出接口
                this.callTurnInterface()
            },
            //用于关闭编辑框
            closeEditBox() {
                this.showDialog = false;
            },
            // 调用转出接口
            callTurnInterface() {
                let params = {
                    procInstId: this.procInstId,
                    elementList: this.turnInfoParams,
                    taskId: this.taskId,
                    businessId:this.businessId,
                    receiveType:this.receiveType?this.receiveType:''
                };
                if (this.composeCode) {
                    params.delBatch = this.delBatch ? "true" : "false";
                }
                // 设置转出遮罩
                const loadingTurn = this.$loading({
                    lock: true,
                    text: '正在转出...',
                    spinner: 'el-icon-loading'
                });
                AXIOS.post(this.eventFlowUrlInfo.turn, params).then((res) => {
                    loadingTurn.close();
                    if (res.data.code == 0) {
                        this.$notify({
                            title: '成功',
                            message: '转出成功',
                            type: 'success',
                            duration: this.GLOBAL.notifyDuration,
                            offset: this.GLOBAL.notifyOffset
                        });
                        PlatformService.closeTab(this.tabName);
                        this.$emit('closeEditBox') //关闭编辑框
                        this.closeEditBox();
                    } else {
                        this.$notify({
                            title: '失败',
                            message: res.data.message,
                            type: 'error',
                            duration: this.GLOBAL.notifyDuration,
                            offset: this.GLOBAL.notifyOffset
                        });
                    }
                }).catch((e)=>{
                    loadingTurn.close();
                })
            },
            //关闭窗口重置表单
            closeDialog() {
                this.cancle(formName);
            },
            //显示人员选项
            query(row) {
                if (this.multipleSelection.length < 1 && (row.parallelFlag == undefined || row.parallelFlag == '')) {
                    this.$notify({
                        title: '提示',
                        message: '请先选择转出环节！',
                        type: 'warning',
                        offset: this.GLOBAL.notifyOffset,
                        duration: this.GLOBAL.notifyDuration
                    });
                    return false;
                }
                if (this.selectNode != '' && row.taskDefKey != this.selectNode && (row.parallelFlag == undefined || row.parallelFlag == '')) {
                    this.$notify({
                        title: '提示',
                        message: '请先选择相应转出环节！',
                        type: 'warning',
                        offset: this.GLOBAL.notifyOffset,
                        duration: this.GLOBAL.notifyDuration
                    });
                    return false;
                }
                this.selectNode = row.taskDefKey;
                this.userDataCopy = row.treeBeans;
                this.setTreeKey(this.userDataCopy,true);
                this.userData = JSON.parse(JSON.stringify(this.userDataCopy));
                if (this.userData){
                    addIcon(this.userData); //给树节点添加icon
                }
                // 保存当前行会签标识，用来判断树组件是否多选
                this.counterSignFlag=row.counterSignFlag;
                document.getElementById("choiceLeft").style.float = "left";
                document.getElementById("choice").style.display = "block";
                this.isShow = true;
            },
            setTreeKey(data){
                if (data && data.length>0){
                    data.map((item)=>{
                        item.key = item.id + '-' + item.parentId;
                        if (item.beanType=='52'){
                            item.disabled = true;
                        }
                        if (item.childList && item.childList.length>0){{
                            this.setTreeKey(item.childList,false);
                        }}
                    })
                }
            },
            //选择人员时
            change(data, checked) {
                // 会签标识，会签时不需单选
                if (!this.counterSignFlag){
                    if (data.beanType == '5') {
                        this.$refs.tree.setCheckedNodes([]);
                        return false;
                    }
                    this.i++;
                    if (this.i % 2 == 0) {
                        if (checked) {
                            this.$refs.tree.setCheckedNodes([data]);
                        }
                    }
                }
                if (checked) {
                    if (this.multipleSelection.length > 0) {
                        for (var z = 0; z < this.multipleSelection.length; z++) {
                            if (this.multipleSelection[z].taskDefKey == this.selectNode) {
                                this.$set(this.multipleSelection[z], "participants", data.id);
                            }
                        }
                    }
                } else {
                    if (this.multipleSelection.length > 0) {
                        for (var z = 0; z < this.multipleSelection.length; z++) {
                            if (this.multipleSelection[z].taskDefKey == this.selectNode) {
                                this.$set(this.multipleSelection[z], "participants", "");
                            }
                        }
                    }
                }
            },
            cancle() { //点击取消
                this.$emit('closeEditBox') //关闭编辑框
            }
        },
        watch: {
            turnInfo: {
                handler: function (newVal) {
                    if (newVal) {
                        this.$nextTick(() => {
                            this.init();
                            if (!this.isShow) {
                                document.getElementById("choice").style.display = "none";
                            }
                        })
                    }
                },
                deep: true
            },
            //过滤树
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        }
    }
</script>