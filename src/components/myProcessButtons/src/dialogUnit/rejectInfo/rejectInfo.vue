<template>
    <div class='formOutBox hasBottomButtonBar'>
        <div class="tab_item_box  tab_item_box_scroll">
            <div class="container_box">
                <div class="common_tableList_box container_marginBottom">
                    <!-- 列表 -->
                    <el-table border ref="rejectTable" :data="rejectTable" tooltip-effect="dark" highlight-current-row
                              style="width: 100%" @select="handleSelectionChange" @select-all="selectAll" stripe
                              :size="GLOBAL.tableSize" class="singleTable">
                        <el-table-column type="selection" width="50" align="center">
                        </el-table-column>
                        <el-table-column type="index" width="60" label="序号" align="center">
                        </el-table-column>
                        <el-table-column prop="flowElementName" label="环节名称" align="center">
                        </el-table-column>
                    </el-table>
                </div>
                <div class="textarea_box">
                    <el-input type="textarea" v-model="reason" placeholder="请输入驳回原因（3500字以内）" maxlength="3500"
                              show-word-limit></el-input>
                </div>
            </div>
        </div>
        <div class="commonBottomBox clear" ref="commonBottomBox">
            <div class="commonBottomButtonBar fr">
                <el-row>
                    <div class="newUi">
                        <div class="newUiInnerBox ">
                            <div class="newUiButtonGroup" ref="newUiButtonGroupHide">
                                <el-button class="newUiButton grey" @click="cancle" :disabled="isReject"
                                           :size="$GLOBAL_FUNC.sizeExpression('button')"><i
                                        class="iconfont icon_cancel"></i><font>取消</font>
                                </el-button>
                                <el-button type="primary" class="newUiButton" @click="rejectbusiness" :disabled="isReject"
                                           :size="$GLOBAL_FUNC.sizeExpression('button')"><i
                                        class="iconfont icon_save"></i><font>保存</font>
                                </el-button>
                            </div>
                        </div>
                    </div>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
    import PROCESS_API from '../../api/processTemplate.js'
    import DATA_DICTIONART_API from "../../api/dataDictionary.api";
    import {closeTab} from "../../utils/common"

    export default {
        name: "childDictionary",
        data() {
            return {
                multipleSelection: [], //存储表格被选项
                selectRow: "",
                isValidOptions: '',
                targetDefKey: '',
                reason: "",
                isReject:false
            }
        },
        props: ['rejectTable', 'taskId', 'procInstName', 'tabName', 'str', 'eventFlowUrlInfo','businessId','permission','auditIdeaData','bpmsHisBusiness'],
        mounted() {
            // 代入审批意见(审批意见显示并且有编辑权限时)
            if ((this.permission.page == undefined || this.permission.page.approvalComments == undefined || this.permission.page.approvalComments.show) && (this.permission.page == undefined ||this.permission.function.opinionedit == undefined || this.permission.function.opinionedit.show)){
                // todo 驳回去掉代入审批意见
                // if (this.auditIdeaData.content){
                //     this.reason = this.auditIdeaData.content;
                // }
            }
            this.$nextTick(() => {
                if (this.rejectTable.length == 1) {
                    this.multipleSelection = this.rejectTable;
                    this.selectRow = this.rejectTable[0];
                    this.$refs.rejectTable.toggleRowSelection(this.rejectTable[0], true);//切换选项
                }
            })
        },
        methods: {
            //取消
            cancle() {
                this.$emit('closeEditBox') //关闭编辑框
            },
            rejectbusiness() {  //驳回
                if (this.isReject){
                    return ;
                }
                this.isReject = true;
                if (this.reason === '' || this.reason == undefined) {
                    this.$notify({
                        title: '提示',
                        message: '请输入驳回原因！',
                        type: 'warning',
                        offset: this.GLOBAL.notifyOffset,
                        duration: this.GLOBAL.notifyDuration
                    });
                    this.isReject = false;
                    return false;
                }
                if (this.multipleSelection.length == 0) {
                    this.$notify({
                        message: '请先选择要驳回的环节！',
                        type: 'warning',
                        duration: this.GLOBAL.notifyDuration,
                        offset: this.GLOBAL.notifyOffset
                    });
                    this.isReject = false;
                    return;
                }
                var targetDefKey = this.selectRow.taskDefKey;
                var eason = this.reason;
                if (this.str !== "") {
                    this.$confirm(this.str + "，是否继续驳回", '提示', {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: 'btn-custom-cancel',
                        confirmButtonClass: 'btn-custom-confirm',
                        duration: this.GLOBAL.notifyDuration,
                        offset: this.GLOBAL.notifyOffset,
                        type: "warning"
                    }).then(() => {
                        this.submit(targetDefKey, eason);
                    }).catch(() => {
                        this.$notify({
                            type: 'info',
                            title: "提示",
                            message: "已取消",
                            offset: this.GLOBAL.notifyOffset,
                            duration: this.GLOBAL.notifyDuration
                        });
                        this.isReject = false;
                        this.$emit('closeEditBox') //关闭编辑框
                    })
                } else {
                    this.submit(targetDefKey, eason);
                }

            },
            //驳回接口
            submit(targetDefKey, eason) {
                let functionReject = null;
                let auditIdeaData = this.auditIdeaData;
                if (!auditIdeaData.opinionName && (this.bpmsHisBusiness.currentTaskName !== undefined)) {
                    auditIdeaData.opinionName = this.bpmsHisBusiness.currentTaskName
                }
                if (auditIdeaData.taskInstId == "" || auditIdeaData.taskInstId == undefined) {
                    auditIdeaData.taskInstId = this.taskId;
                    auditIdeaData.businessId = this.businessId;
                }
                if (this.eventFlowUrlInfo && this.eventFlowUrlInfo.reject) {
                    functionReject = AXIOS.post(this.eventFlowUrlInfo.reject, {
                        targetDefKey: targetDefKey,
                        taskId: this.taskId,
                        // reason: eason,
                        businessId:this.businessId,
                        bpmsRunOpinion:{
                            ...auditIdeaData,
                            content:eason
                        }
                    })
                } else {
                    functionReject = PROCESS_API.backProcess({
                        targetDefKey: targetDefKey,
                        taskId: this.taskId,
                        // reason: eason,
                        businessId:this.businessId,
                        bpmsRunOpinion:{
                            ...auditIdeaData,
                            content:eason
                        }
                    })
                }
                functionReject.then((res) => {
                    if (res.data.message === "成功") {
                        this.$notify({
                            title: "成功",
                            message: "驳回成功",
                            type: "success",
                            offset: this.GLOBAL.notifyOffset,
                            duration: this.GLOBAL.notifyDuration
                        });
                        this.$emit('closeEditBox') //关闭编辑框
                        closeTab(this.tabName, this);
                        // this.GLOBAL.closeCurrentTab(this.tabName);
                        // this.$store.dispatch('changeBusinessHandingFreshFlag', Math.random());
                    } else {
                        this.$notify({
                            title: "提示",
                            message: res.data.message,
                            offset: this.GLOBAL.notifyOffset,
                            duration: this.GLOBAL.notifyDuration
                        });
                        this.$emit('closeEditBox') //关闭编辑框
                        // this.GLOBAL.closeCurrentTab(this.tabName);
                        // this.$store.dispatch('changeBusinessHandingFreshFlag', Math.random());
                    }
                    this.isReject = false;
                }).catch((e) => {
                    console.log(e);
                    this.isReject = false;
                })
            },
            selectAll(selection) { //选择列表
                return false;
            },
            handleSelectionChange(selection, row) { //选择列表
                this.multipleSelection = selection;
                this.selectRow = row;
                if (selection.length > 1) {
                    this.$refs.rejectTable.clearSelection();//清空选中
                    this.$refs.rejectTable.toggleRowSelection(row, true);//切换选项
                } else {
                    return false;
                }
            }
        },
        created() {
            DATA_DICTIONART_API.getDictData('base_type').then((res) => {
                this.isValidOptions = res
            });
        }
    }
</script>