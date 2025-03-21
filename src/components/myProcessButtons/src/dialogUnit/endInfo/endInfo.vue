<template>
    <div class='formOutBox hasBottomButtonBar'>
        <div class="tab_item_box  tab_item_box_scroll">
            <div class="container_box">
                <div class="common_tableList_box">
                    <!--<div style="display:flex;line-height: 40px;padding-top: 10px" v-if="isNeed==1">-->
                        <!--<font style="width: 80px;text-align: right;padding-right: 10px">选择人员</font>-->
                        <!--<el-select style="width: calc(100% - 80px)" v-model="ry"-->
                                   <!--placeholder="请选择" clearable filterable>-->
                            <!--<el-option v-for="item in ryList"-->
                                       <!--:key="item.id"-->
                                       <!--:label="item.name"-->
                                       <!--:value="item.id">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</div>-->
                    <div class="textarea_box">
                        <el-input type="textarea" v-model="reason" placeholder="请输入终止原因（100字以内）"
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
                                <el-button type="primary" class="newUiButton" @click="endProcess" :size="$GLOBAL_FUNC.sizeExpression('button')"
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
        name: "childDictionary",
        data() {
            return {
                ryList:[],
                ry:"",
                btnloading: false,
                isNeed: 1,
                multipleSelection: [], //存储表格被选项
                selectRow: "",
                isValidOptions: '',
                targetDefKey: '',
                reason: ""
            }
        },
        props: ['taskId', 'businessId', 'tabName','eventFlowUrlInfo'],
        mounted() {
            // this.getRyList();
        },
        methods: {
            getRyList(){
                //接口  暂无
                // PROCESS_API.getTerminateTaskId({
                //     businessId: this.businessId,
                //     taskId: this.taskId
                // }).then((res) => {
                //     this.isNeed = res.data.data.isNeed;
                //     if (this.isNeed == 1) {
                //         this.ryList = res.data.data.userList;
                //     }
                // });
            },
            //取消
            cancle() {
                this.$emit('closeEditBox') //关闭编辑框
            },
            endProcess() { //点击删除
                if (this.reason === '' || this.reason == undefined) {
                    this.$notify({
                        title: '提示',
                        message: '请输入终止原因！',
                        type: 'warning',
                        offset: this.GLOBAL.notifyOffset,
                        duration: this.GLOBAL.notifyDuration
                    });
                    return false;
                }
                this.$confirm('你将终止这个业务, 是否继续?', '提示', {  //删除提示
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    offset: this.GLOBAL.notifyOffset,
                    duration: this.GLOBAL.notifyDuration
                }).then(() => {
                    this.btnloading = true;

                    let functionReject = null;

                    if (this.eventFlowUrlInfo && this.eventFlowUrlInfo.end) {
                        functionReject = AXIOS.post(this.eventFlowUrlInfo.end, {
                            businessId: this.businessId,
                            taskId: this.taskId,
                            userId: this.ry,//人员
                            reason: this.reason
                        })
                    } else {
                        functionReject =  PROCESS_API.endtask({
                            businessId: this.businessId,
                            taskId: this.taskId,
                            userId: this.ry,//人员
                            reason: this.reason
                        })
                    }
                    functionReject.then((res) => {
                        this.btnloading = false;
                        if (res.data.code == 0) {
                            this.$notify({
                                title: '成功',
                                message: '终止成功',
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
                    }).catch(e => {
                        this.btnloading = false;
                    })
                }).catch(() => {
                    this.btnloading = false;
                    this.$notify.info({
                        title: '提示',
                        message: '已取消',
                        offset: this.GLOBAL.notifyOffset,
                        duration: this.GLOBAL.notifyDuration
                    });
                });
            }
        }
    }
</script>