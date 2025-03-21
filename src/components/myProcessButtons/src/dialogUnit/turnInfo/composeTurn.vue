<template>
    <div class="composeTurnBox w100 h100" :style="{ justifyContent: isDialog ? 'center' : 'flex-start'}">
        <div class="contentBox">
            <div class="textInfo">{{textInfo}}</div>
            <div style="display: flex;">
                <span style="color: #262626;font-size: 14px;">批业务转出方式：</span>
                <jsmart-radio v-model="delBatchType"
                              :radioOptions.sync="delBatchOptions"
                              @change="handleChange"
                ></jsmart-radio>
            </div>
        </div>
        <div v-if="isDialog" class="w100 bottomBox">
            <div  style="width: 100%;height: 64px;padding: 0px 16px;display: flex;justify-content: flex-end;align-items: center">
                <jsmart-button title="取消" @click="cancle"></jsmart-button>
                <jsmart-button title="确定" type="primary" @click="submitForm"></jsmart-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "composeTurn",
        props: {
            delBatch: {
                type: Number,
                default: 0
            },
            isCenter: {
                type: Boolean,
                default: false
            },
            // 提示文本信息
            textInfo: {
                type: String,
                default: ""
            },
            // 是否弹框形式展示
            isDialog: {
                type: Boolean,
                default: false
            },
            targetFlowElements: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        data() {
            return {
                delBatchType: 0,
                delBatchOptions: [
                    {
                        label: "批业务转出",
                        value: 0
                    },
                    {
                        label: "当前业务转出",
                        value: 1
                    }
                ]
            }
        },
        methods: {
            // 选择住处类型
            handleChange(val) {
                this.$emit('update:delBatch', val);
            },
            // 点击确定
            submitForm() {
                this.$emit('turnoutHandle',this.targetFlowElements, this.delBatchType)
            },
            // 点击取消
            cancle() {
                this.$emit("closeEditBox")
            }
        }
    }
</script>

<style lang="less" scoped>
    .composeTurnBox {
        display: flex;
        align-items: center;
        flex-direction: column;
        .contentBox{
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .textInfo{
                color: #595959;
                font-size: 16px;
                margin-bottom: 16px;
            }
        }
        .bottomBox{
            flex: none;
            border-top: #ddd 1px solid;
        }
    }
</style>