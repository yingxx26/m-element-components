<template>
    <div class='formOutBox hasBottomButtonBar'>
        <div class="tab_item_box  tab_item_box_scroll">
            <div class="container_box">
                <div class="common_tableList_box">
                    <div class="textarea_box">
                        <el-input type="textarea" v-model="reason" placeholder="请输入删除原因（100字以内）"
                                  maxlength="100"></el-input>
                    </div>
                </div>
            </div>
        </div>
        <div class="commonBottomBox clear" ref="commonBottomBox">
            <div class="commonBottomButtonBar fr">
                <el-row>
                    <div class="newUi">
                        <div class="newUiInnerBox ">
                            <div class="newUiButtonGroup" ref="newUiButtonGroupHide">
                                <el-button class="newUiButton grey" @click="cancle" :disabled="btnloading" :size="$GLOBAL_FUNC.sizeExpression('button')"><i
                                        class="iconfont icon_cancel"></i><font>取消</font>
                                </el-button>
                                <el-button type="primary" class="newUiButton" @click="delProcess" :size="$GLOBAL_FUNC.sizeExpression('button')"
                                           :disabled="btnloading"><i
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
    import {closeTab} from "../../utils/common"

    export default {
        name: "deleteInfo",
        data() {
            return {
                btnloading: false,
                multipleSelection: [], //存储表格被选项
                selectRow: "",
                isValidOptions: '',
                targetDefKey: '',
                reason: ""
            }
        },
        props: ['taskId', 'businessId', 'tabName', 'categoryCode','eventFlowUrlInfo'],
        methods: {
            //取消
            cancle() {
                this.$emit('closeEditBox') //关闭编辑框
            },
            delProcess() { //点击删除
                if (this.reason === '' || this.reason == undefined) {
                    this.$notify({
                        title: '提示',
                        message: '请输入删除原因！',
                        type: 'warning',
                        offset: this.GLOBAL.notifyOffset,
                        duration: this.GLOBAL.notifyDuration
                    });
                    return false;
                }
                this.$confirm('你将删除这个业务, 是否继续?', '提示', {  //删除提示
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    cancelButtonClass: 'btn-custom-cancel',
                    confirmButtonClass: 'btn-custom-confirm',
                    type: 'warning',
                    offset: this.GLOBAL.notifyOffset,
                    duration: this.GLOBAL.notifyDuration
                }).then(() => {
                    this.btnloading = true;
                    let functionReject = null;

                    if (this.eventFlowUrlInfo && this.eventFlowUrlInfo.delete) {
                        functionReject = AXIOS.post(this.eventFlowUrlInfo.delete, {
                            businessId: this.businessId,
                            categoryCode: this.categoryCode,
                            taskId: this.taskId,
                            reason: this.reason
                        })
                    } else {
                        functionReject =  PROCESS_API.delProcess({
                            businessId: this.businessId,
                            categoryCode: this.categoryCode,
                            taskId: this.taskId,
                            reason: this.reason
                        })
                    }
                    functionReject.then((res) => {
                        if (res.data.code == 0) {
                            this.btnloading = false;
                            this.$notify({
                                title: '成功',
                                message: '删除成功',
                                type: 'success',
                                offset: this.GLOBAL.notifyOffset,
                                duration: this.GLOBAL.notifyDuration
                            });
                            // 优先关闭父页面tab，其次关闭自己的tab(需要在iframe中)
                            closeTab(this.tabName,this);
                            this.$emit('closeEditBox') //关闭编辑框
                            // this.GLOBAL.closeCurrentTab(this.tabName);
                            // this.$store.dispatch('changeBusinessHandingFreshFlag', Math.random());
                        } else {
                            this.$notify({
                                title: '失败',
                                message: res.data.message,
                                type: 'error',
                                offset: this.GLOBAL.notifyOffset,
                                duration: this.GLOBAL.notifyDuration
                            });
                            this.$emit('closeEditBox') //关闭编辑框
                            // this.GLOBAL.closeCurrentTab(this.tabName);
                            // this.$store.dispatch('changeBusinessHandingFreshFlag', Math.random());
                        }
                    }).catch((e)=>{
                        this.btnloading = false;
                    })
                }).catch(() => {
                    this.btnloading = false;
                    this.$notify.info({
                        title: '提示',
                        message: '已取消删除',
                        offset: this.GLOBAL.notifyOffset,
                        duration: this.GLOBAL.notifyDuration
                    });
                });
            }
        }
    }
</script>