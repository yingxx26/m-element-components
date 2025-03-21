<template>
    <div class='formOutBox hasBottomButtonBar'>
        <div class="tab_item_box  tab_item_box_scroll">
            <div class="container_box">
                <div class="common_tableList_box">
                    <el-form :model="dynamicTaskForm" ref="dynamicTaskForm" label-width="100px" style="padding: 10px">
                        <el-form-item label="业务名称：" v-if="!isTurn">
                            <div>{{bpmsHisBusiness.businessTitle}}</div>
                        </el-form-item>
                        <el-form-item label="受理编号：" v-if="!isTurn">
                            <div>{{bpmsHisBusiness.acceptCode}}</div>
                        </el-form-item>
                        <el-form-item label="任务名称：" v-if="!isTurn" :rules="{required: true, message: '任务名称不能为空', trigger: 'blur'}" prop="dynamicTaskName">
                            <jsmart-input v-model="dynamicTaskForm.dynamicTaskName" clearable></jsmart-input>
                        </el-form-item>
                        <el-form-item :label="dynamicTaskAcceptLabel+'：'" prop="acceptUserIds">
                            <div style="width: 100%">
                                <!--<jsmart-input style="width: 100%" v-model="dynamicTaskForm.acceptUserNames" disabled></jsmart-input>-->
                                <!--<div>-->
                                    <el-tag
                                            style="margin-right: 5px"
                                            :key="tag"
                                            v-for="(tag,ind) in dynamicTaskForm.acceptUserNameList"
                                            closable
                                            :disable-transitions="false"
                                            @close="delUser(tag,ind)">
                                        {{tag}}
                                    </el-tag>
                                <!--</div>-->
                                <jsmart-button type="primary" @click="selectAcceptUser" :title="'选择'"></jsmart-button>
                            </div>
                        </el-form-item>
                        <div  style="font-weight: bold;margin: -10px 0 10px 100px">无需{{dynamicTaskAcceptLabel}}，可不选择</div>
                        <el-form-item label="审批意见：">
                            <el-input type="textarea" :rows="4"  maxlength="500"
                                      show-word-limit v-model="dynamicTaskForm.comments"></el-input>
                        </el-form-item>
                    </el-form>
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
                                <el-button type="primary" class="newUiButton" @click="save" :size="$GLOBAL_FUNC.sizeExpression('button')"
                                           :disabled="btnloading"><i
                                        class="iconfont icon_save"></i><font>保存</font>
                                </el-button>
                            </div>
                        </div>
                    </div>
                </el-row>
            </div>
        </div>

        <el-drawer
                title="选择接收人"
                :visible.sync="drawer"
                :append-to-body="true" size="60%"
                :before-close="handleClose">
            <jsmart-user-checkBox @save="userListCheckSave" @cancle='handleClose' :noPower="true" ref="userListCheckBox" :buttonLeft="true"  :disableCheckIds="disableCheckIds"  :single="single"></jsmart-user-checkBox>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        name: "dynamicTask",
        props:['businessId','taskId','bpmsHisBusiness','dynamicTaskUrl','dynamicTaskTurnUrl','auditIdeaData','isTurn','tabName','disableCheckIds','single','dynamicTaskAcceptLabel'],
        data(){
            return {
                dynamicTaskForm:{
                    dynamicTaskName:this.bpmsHisBusiness.currentTaskName,
                    // acceptUserNames:'',
                    acceptUserIds:[],
                    acceptUserNameList:[],
                    acceptUserNodes:[],
                    comments:this.auditIdeaData.id?this.auditIdeaData.content:''
                }, //动态任务表单数据
                drawer:false,
                btnloading:false
            }
        },
        methods:{
            // 保存
            save(){
                if (this.btnloading){
                    return;
                }
                this.$refs.dynamicTaskForm.validate((valid) => {
                    if (valid) {
                        let data = {
                            ...this.dynamicTaskForm,
                            businessId:this.businessId,
                            taskId:this.taskId
                        };
                        this.btnloading = true;
                        let url = this.isTurn ? this.dynamicTaskTurnUrl : this.dynamicTaskUrl;
                        // AXIOS.post(url,data).then((res)=>{
                        AXIOS.post(url,{
                            dynamicTaskVo: data
                        }).then((res)=>{
                            if (res.data.code==0){
                                this.$notify({
                                    title: '成功',
                                    message: this.isTurn?'转出成功':'发起成功！',
                                    type: 'success',
                                    offset: this.GLOBAL.notifyOffset,
                                    duration: this.GLOBAL.notifyDuration
                                });
                                this.cancle();
                                // 如果为转出，则关闭当前页
                                if (this.isTurn){
                                    this.GLOBAL.closeCurrentTab(this.tabName);
                                }
                            }
                            this.btnloading = false;
                        }).catch((e)=>{
                            this.btnloading = false;
                        })
                    } else {
                        this.btnloading = false;
                        return false;
                    }
                });
            },
            //取消
            cancle() {
                this.$emit('closeEditBox') //关闭编辑框
            },
            // 选择接收人
            selectAcceptUser(){
                // 弹出接收人选择框
                this.drawer = true;
            },
            handleClose(){
                this.drawer = false;
            },
            userListCheckSave(users,nodes){
                // this.dynamicTaskForm.acceptUserNames = '';
                this.dynamicTaskForm.acceptUserIds = [];
                this.dynamicTaskForm.acceptUserNameList = [];
                users && users.map((item)=>{
                    // this.dynamicTaskForm.acceptUserNames += item.name + ';'
                    this.dynamicTaskForm.acceptUserIds.push(item.id);
                    this.dynamicTaskForm.acceptUserNameList.push(item.name);
                })
                this.dynamicTaskForm.acceptUserNodes = nodes;
                this.$refs.userListCheckBox.cancleDisabled();
                this.handleClose();
            },
            delUser(tag,ind){
                this.dynamicTaskForm.acceptUserIds.splice(ind,1);
                this.dynamicTaskForm.acceptUserNameList.splice(ind,1);
                this.$refs.userListCheckBox.cancleNode( this.dynamicTaskForm.acceptUserNodes[ind]);
                this.dynamicTaskForm.acceptUserNodes.splice(ind,1);
            }
        }
    }
</script>

<style scoped lang="less">

</style>