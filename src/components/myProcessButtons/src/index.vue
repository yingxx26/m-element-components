<template>
  <div class="jsmart-processButtonsBox" :name="name">
    <!--批列表-->
    <!--左下角弹出框-->
    <div id="batchBox" v-show="showBatchBox">
      <!--sumFunction-->
      <div class="table">
        <el-scrollbar style="height:100%;">
          <el-table
              ref="batchTable"
              :data="flowListData"
              tooltip-effect="dark"
              style="width: 100%"
              :show-header="false">
            <el-table-column
                type="selection"
                width="55"
                :selectable="checkBoxT">
            </el-table-column>
            <el-table-column
                label="日期">
              <template slot-scope="scope"><span class="text" @click="textClick(scope.row)">{{ scope.row.businessTitle }}--{{scope.row.businessId}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>
    </div>

    <slot name="pre-button"  :permission="permission"></slot>
    <!-- 按钮区域 -->
    <template v-if='!simple'>
      <!--返回列表按钮-->
      <!--<el-button :disabled="btnloading" :size="$GLOBAL_FUNC.sizeExpression('button')"><em class="jsmartFont el-icon&#45;&#45;left" v-html="'&#xe653;'"></em>返回列表</el-button>-->
      <!--暂存按钮-->
      <el-button :disabled="btnloading" class="jsmartBox" id="temSave" jsmartType="button" jsmartName="暂存" permission="1"
                 v-show="permission && permission.function && permission.function.temSave && permission.function.temSave.show"
                 size="small" icon="el-icon-save" @click="onDropdownCommand('save',false)">
        <em class="jsmartFont el-icon--left" v-html="'&#xe6b0;'"></em>{{(permission && permission.function && permission.function.temSave && permission.function.temSave.name)?permission.function.temSave.name:"暂存"}}
      </el-button>
      <!--保存按钮-->
      <el-button :disabled="btnloading" class="jsmartBox" id="save" jsmartType="button" jsmartName="保存" permission="1"
                 v-show="permission.function == undefined||permission.function.save == undefined||permission.function.save.show"
                 :size="'small'"  icon="el-icon-save" @click="onDropdownCommand('save')">
        <em class="jsmartFont el-icon--left" v-html="'&#xe6b0;'"></em>{{(permission.function == undefined||permission.function.save == undefined)?"保存":permission.function.save.name}}
      </el-button>
      <!--提交按钮-->
      <el-button :disabled="btnloading" class="jsmartBox" id="turn" jsmartType="button" jsmartName="转出" permission="1"
                 v-show="permission.function == undefined||permission.function.turn == undefined|| permission.function.turn.show"
                 size="small"   @click="onDropdownCommand('turn')"><em
          class="jsmartFont el-icon--left" v-html="'&#xe641;'"></em>{{(permission.function == undefined||permission.function.turn == undefined)?"转出":permission.function.turn.name}}
      </el-button>
      <!--保存并提交按钮-->
      <el-button :disabled="btnloading" class="jsmartBox" id="turnSave" jsmartType="button" jsmartName="保存并转出" permission="1"
                 v-show="permission.function == undefined||permission.function.turnSave == undefined|| permission.function.turnSave.show"
                 size="small"   type="primary" @click="onDropdownCommand('turnSave')">
        <em class="jsmartFont el-icon--left" v-html="'&#xe641;'"></em>{{(permission.function == undefined||permission.function.turnSave == undefined)?"保存并转出":permission.function.turnSave.name}}
      </el-button>
      <!--更多菜单-->
      <el-dropdown @command="onDropdownCommand" :disabled="btnloading" class="jsmartBox" id="ywlz" jsmartType="button" jsmartName="业务流转" permission="1"
                   v-show="permission.function == undefined||permission.function.ywlz == undefined|| permission.function.ywlz.show"
                   size="small" type="primary" style="margin-left: 10px;" >
        <el-button type="primary"   :disabled="btnloading" size="small">
          {{(permission.function == undefined||permission.function.ywlz == undefined)?"更多菜单":permission.function.ywlz.name}}<em class="jsmartFont el-icon--right" v-html="'&#xe668;'"></em>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="reject" name="reject" :disabled="btnloading" class="jsmartBox" id="reject" jsmartType="button" jsmartName="驳回" permission="1"
                            v-show="permission.function == undefined||permission.function.reject == undefined||permission.function.reject.show">
            {{(permission.function == undefined||permission.function.reject == undefined)?"驳回":permission.function.reject.name}}
          </el-dropdown-item>
          <el-dropdown-item command="rejectSave" name="rejectSave" :disabled="btnloading" class="jsmartBox" id="rejectSave" jsmartType="button" jsmartName="保存并驳回" permission="1"
                            v-show="permission.function == undefined||permission.function.rejectSave == undefined||permission.function.rejectSave.show">
            {{(permission.function == undefined||permission.function.rejectSave == undefined)?"保存并驳回":permission.function.rejectSave.name}}
          </el-dropdown-item>
          <el-dropdown-item command="end" name="end" :disabled="btnloading" class="jsmartBox" id="end" jsmartType="button" jsmartName="终止" permission="1"
                            v-show="permission.function == undefined||permission.function.end == undefined || permission.function.end.show">
            {{(permission.function == undefined||permission.function.end == undefined)?"终止":permission.function.end.name}}
          </el-dropdown-item>
          <el-dropdown-item command="del" name="del" :disabled="btnloading" class="jsmartBox" id="del" jsmartType="button" jsmartName="删除" permission="1"
                            v-show="permission.function == undefined||permission.function.del == undefined || permission.function.del.show">
            {{(permission.function == undefined||permission.function.del == undefined)?"删除":permission.function.del.name}}
          </el-dropdown-item>
          <el-dropdown-item command="monitor" name="monitor" class="jsmartBox" id="monitor" jsmartType="button" jsmartName="流程跟踪" permission="1"
                            v-show="permission.function == undefined||permission.function.monitor == undefined || permission.function.monitor.show">
            {{(permission.function == undefined||permission.function.monitor == undefined)?"流程跟踪":permission.function.monitor.name}}
          </el-dropdown-item>
          <el-dropdown-item command="dynamicTask" name="dynamicTask" class="jsmartBox" id="dynamicTask" jsmartType="button" jsmartName="动态任务" permission="1"
                            v-show="permission.function && permission.function.dynamicTask && permission.function.dynamicTask.show">
            {{(permission.function == undefined||permission.function.dynamicTask == undefined)?"动态任务":permission.function.dynamicTask.name}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>
    <!-- 简易模式按钮区域 -->
    <template v-else>
      <!--删除按钮-->
      <jsmart-button :title='(permission.function == undefined||permission.function.del == undefined)?"流程删除":permission.function.del.name' type="primary" :disabled="btnloading" class="jsmartBox" id="del" jsmartType="button" jsmartName="流程删除"  permission="1"
                     v-show="permission.function == undefined||permission.function.del == undefined || permission.function.del.show"
                     size="small" @click="onDropdownCommand('del')"></jsmart-button>
      <!--驳回按钮-->
      <jsmart-button :title='(permission.function == undefined||permission.function.reject == undefined)?"驳回":permission.function.reject.name'  :disabled="btnloading" class="jsmartBox" id="reject" jsmartType="plainMode" jsmartName="驳回" permission="1"
                     v-show="permission.function == undefined||permission.function.reject == undefined||permission.function.reject.show"
                     size="small" @click="onDropdownCommand('reject')"></jsmart-button>
      <!--终止-->
      <jsmart-button :title='(permission.function == undefined||permission.function.end == undefined)?"终止":permission.function.end.name' :disabled="btnloading" class="jsmartBox" id="monitor" jsmartType="button" jsmartName="终止" permission="1"
                     v-show="permission.function == undefined||permission.function.end == undefined || permission.function.end.show"
                     size="small" @click="onDropdownCommand('end')"></jsmart-button>
      <!--跟踪按钮-->
      <jsmart-button :title='(permission.function == undefined||permission.function.monitor == undefined)?"流程跟踪":permission.function.monitor.name' :disabled="btnloading" class="jsmartBox" id="monitor" jsmartType="button" jsmartName="流程跟踪" permission="1"
                     v-show="permission.function == undefined||permission.function.monitor == undefined || permission.function.monitor.show"
                     size="small" @click="onDropdownCommand('monitor')"></jsmart-button>
    </template>

    <!--TODO 按钮插槽-->
    <slot name="button"  :permission="permission"></slot>
    <slot name="dragControl"></slot>
    <!-- 编辑框（可拖动） -->
    <el-dialog v-el-drag-dialog :visible.sync="showDialog" class="commonDialogBox" v-if="showDialog"
               ref="commonDialogBox" :append-to-body="true" @close="closeEditBox"
               :close-on-click-modal="false" :taskId="taskId">
      <div slot="title" class="el-dialog__title">
        <i class="iconfont" :class="dialogIcon"></i><font>{{titleName}}</font>
      </div>
      <!--转出-->
      <turnInfo v-if="isTurn && !(permission.function && permission.function.dynamicTaskTurn && permission.function.dynamicTaskTurn.show)" :bpmsHisBusiness="bpmsHisBusiness" :turnInfo="turnInfo" ref="turnInfo"
                :categoryCode="categoryCode" :taskId="taskId" :procInstId="procInstId" :receiveType="receiveType" :businessId="businessId" :eventFlowUrlInfo="eventFlowUrlInfo"
                :procInstName="procInstName" :tabName="tabName" :defaultProps="defaultProps"
                :composeCode="composeCode"
                @closeEditBox="closeEditBox"></turnInfo>
      <composeTurn v-if="isComposeTurn"
                   :isCenter="true"
                   :isDialog="true"
                   :targetFlowElements="targetFlowElements"
                   :textInfo="textInfo"
                   @turnoutHandle="turnoutHandle"
                   @closeEditBox="closeEditBox"
      ></composeTurn>
      <!--驳回-->
      <rejectInfo v-if="isReject" :rejectTable="rejectTable" ref="rejectInfo" :taskId="taskId" :businessId="businessId"
                  :procInstName="procInstName" :categoryCode="categoryCode" :tabName="tabName"
                  :eventFlowUrlInfo.sync="this.eventFlowUrlInfo"  :auditIdeaData="auditIdeaData" :bpmsHisBusiness="bpmsHisBusiness" :permission="permission"
                  @closeEditBox="closeEditBox" :str="str"></rejectInfo>
      <!--删除-->
      <deleteInfo v-if="isDel" ref="deleteInfo" :taskId="this.taskId" :businessId="businessId"
                  :tabName="tabName" :procInstName="procInstName" :categoryCode="categoryCode"
                  :eventFlowUrlInfo.sync="this.eventFlowUrlInfo"
                  @closeEditBox="closeEditBox"></deleteInfo>
      <!--终止-->
      <endInfo v-if="isEnd" ref="endInfo" :taskId="taskId" :businessId="businessId"
               :eventFlowUrlInfo.sync="this.eventFlowUrlInfo"  :auditIdeaData="auditIdeaData" :bpmsHisBusiness="bpmsHisBusiness" :permission="permission"
               :tabName="tabName" :procInstName="procInstName" @closeEditBox="closeEditBox"></endInfo>
      <!--流程跟踪-->
      <!--<processTrack v-if="isProcessTrack" ref="processTrack" :taskId="taskId"-->
      <!--:businessId="businessId"-->
      <!--:procInstId="procInstId" :timestamp="timestamp"-->
      <!--:procInstName="procInstName" @closeEditBox="closeEditBox"></processTrack>-->
      <!--驳回信息-->
      <backInfo v-if="isBackInfo" ref="backInfo" :backInfoData="backInfoData" :tabName="tabName" :businessId="businessId"
                :eventFlowUrlInfo.sync="this.eventFlowUrlInfo"
                @closeEditBox="closeEditBox"></backInfo>
      <!--资格申请终止-->
      <!--<zgEndInfo v-if="isZgEnd" ref="endInfo" :taskId="taskId" :businessId="businessId" :show="show"-->
      <!--:timestamp="timestamp" :procInstName="procInstName" @closeEditBox="closeEditBox"-->
      <!--:hcjgData="hcjgData"></zgEndInfo>-->
      <!--动态任务-->
      <dynamicTask v-if="isDynamicTask" @closeEditBox="closeEditBox" :dynamicTaskUrl="eventFlowUrlInfo.dynamicTask" :businessId="businessId" :taskId="taskId"  :bpmsHisBusiness='bpmsHisBusiness' :dynamicTaskAcceptLabel="dynamicTaskAcceptLabel" :categoryCode="categoryCode" :auditIdeaData="auditIdeaData" :disableCheckIds="dynamicTaskDisableCheckIds" :single="dynamicTaskSingle"></dynamicTask>

      <dynamicTask v-if="isTurn && (permission.function && permission.function.dynamicTaskTurn && permission.function.dynamicTaskTurn.show)" :isTurn="true" @closeEditBox="closeEditBox" :dynamicTaskAcceptLabel="dynamicTaskAcceptLabel" :dynamicTaskUrl="eventFlowUrlInfo.dynamicTask" :dynamicTaskTurnUrl="eventFlowUrlInfo.dynamicTaskTurn" :tabName="tabName" :businessId="businessId" :taskId="taskId"  :bpmsHisBusiness='bpmsHisBusiness' :categoryCode="categoryCode" :auditIdeaData="auditIdeaData" :disableCheckIds="dynamicTaskDisableCheckIds" :single="dynamicTaskSingle"></dynamicTask>
    </el-dialog>
  </div>
</template>
<script >
import PROCESS_API from './api/processTemplate'
import {closeTab,addTab} from './utils/common'

export default {
  name: "jsmart-processButtons",

  props: {
    name: [String, Number],
    permission: {
      type: Object,
      default: function () {
        return {function: {}, page: {}};
      }
    }, //按钮权限
    printBtnList: {
      type: Array,
      default: function () {
        return [];
      }
    },//打印按钮列表
    taskId: {
      type: String,
      default: ''
    }, //环节id
    businessId: {
      type: String,
      default: ''
    }, //业务id
    procInstId: {
      type: String,
      default: ''
    }, //流程实例id
    procInstName: {
      type: String,
      default: ''
    },  //流程实例名称
    categoryCode: {
      type: String,
      default: ''
    },  //业务类别编码
    procDefId: {
      type: String,
      default: ''
    },  //流程定义ID
    areaCode:{
      type: String,
      default: null
    },//区域编码
    acceptCode: {
      type: String,
      default: ''
    },  //受理编码
    receiveType: {
      type: String,
      default: ''
    },
    composeCode: {
      type: String,
      default: ''
    }, //批业务编码
    businessData: {
      type: Object,
      default: function () {
        return {}
      }
    }, //业务数据
    receiveList: {
      type: Array,
      default: function () {
        return []
      }
    }, //收件资料列表
    auditIdeaData: {
      type: Object,
      default: function () {
        return {
          content: '',
          passFlag: 1,
          list: []
        }
      }
    }, //审批意见数据
    bpmsHisBusiness: {
      type: Object,
      default: function () {
        return {}
      }
    }, //业务信息
    difFlag: {
      type: Boolean,
      default: false
    },//疑难业务标识
    needEndArr: {
      type: Array,
      default: function () {
        return []
      }
    }, //终止删除等需要回调的业务
    beforeEndCheckArr: {
      type: Array,
      default: function () {
        return []
      }
    }, //终止删除前需要回调的业务
    formCode:{
      type:String,
      default:''
    }, //表单编码
    validateForm: {
      type: Function,
      default: function () {
        let defFunc = function () {
          return {valid: true}
        }
        return defFunc
      }
    },  //校验表单
    eventFlowUrl:{
      type:Object,
      default:function(){
        return {}
      }
    },
    receiveInfoDataList:{
      type:Array,
      default:function(){
        return []
      }
    }, //收件资料列表展示的内容
    simple:{
      type:Boolean,
      default:false
    }, //简易模式，只显示更多按钮
    loadFalg:{
      type:null,
      default:false
    },//加载标识
    dynamicTaskSingle:{
      type:null,
      default:false
    },//动态指令选择人员single模式
    dynamicTaskDisableCheckIds:{
      type:Array,
      default:function(){
        return [];
      }
    }, //动态指令禁用id
    functionCommand:{
      type:Boolean,
      default:false
    }, //是否为函数指令
    dynamicTaskAcceptLabel:{
      type:String,
      default:'协助办理人'
    }
  },
  data() {
    return {
      targetFlowElements: [],
      textInfo: "", // 提示信息
      isComposeTurn: false, // 是否选择批转出
      isDynamicTask:false,//显示动态任务
      str: "",//批业务提示
      processVariable: [], //流程变量
      processVariableMap: {}, //流程变量map
      btnloading: false, //按钮加载特效，防止重复点击
      showDialog: false, // 展示弹框
      isTurn: false,//转出确认框
      isReject: false,//驳回确认框
      isDel: false,//删除确认框
      isEnd: false,//终止确认框
      isZgEnd: false,//终止确认框(资格)
      isBackInfo: false,//驳回信息
      isProcessTrack: false, //流程跟踪框
      titleName: '',//弹框名称
      routeQuery: this.$route.query, //路由参数
      tabName: this.$route.query.tabName,//标签页名称
      dialogIcon: '',//弹框icon
      turnInfo: [], //转出时的环节数据
      showBatchBox: false,//展示批处理框
      flowListData: [],//批处理列表数据
      defaultProps: {
        label: "name",
        children: 'childList'
      },
      validRes: '', //校验结果
      eventFlowUrlInfo:{}
    }
  },
  components: {
    turnInfo:()=>import('./dialogUnit/turnInfo/turnInfo.vue'),
    composeTurn:()=>import('./dialogUnit/turnInfo/composeTurn.vue'),
    rejectInfo:()=>import('./dialogUnit/rejectInfo/rejectInfo.vue'),
    deleteInfo:()=>import('./dialogUnit/deleteInfo/deleteInfo.vue'),
    endInfo:()=>import('./dialogUnit/endInfo/endInfo.vue'),
    backInfo:()=>import('./dialogUnit/backInfo/backInfo.vue'),
    dynamicTask:()=>import('./dialogUnit/dynamicTask/dynamicTask.vue')
  },
  created(){
    this.eventFlowUrlInfo = {
      save:(this.eventFlowUrl && this.eventFlowUrl.save)?this.eventFlowUrl.save:(  '/processHandler/startProcessAndSaveBusiness'),
      saveTurn:'',
      turn:(this.eventFlowUrl && this.eventFlowUrl.turn)?this.eventFlowUrl.turn:(  '/forward/businessTurnOut'),
      reject:(this.eventFlowUrl && this.eventFlowUrl.reject)?this.eventFlowUrl.reject:( '/backward/backWardProcess'),
      end:(this.eventFlowUrl && this.eventFlowUrl.end)?this.eventFlowUrl.end:(  '/endtask/terminateProcessInstByTaskId'),
      delete:(this.eventFlowUrl && this.eventFlowUrl.delete)?this.eventFlowUrl.delete:(  '/deletetask/delteTaskByTaskId'),
      dynamicTask:(this.eventFlowUrl && this.eventFlowUrl.dynamicTask)?this.eventFlowUrl.dynamicTask:( '/dynamictask/startDynamicTask'),
      dynamicTaskTurn:(this.eventFlowUrl && this.eventFlowUrl.dynamicTaskTurn)?this.eventFlowUrl.dynamicTaskTurn:(  '/dynamictask/startDynamicTaskAndTurnOut')
    }
    console.log('eventFlowUrlInfo', this.eventFlowUrlInfo)
  },
  mounted() {
    this.init();
  },
  methods: {
    init(val) {
      // TODO 不知用途
      // let self = this;
      // if (val == undefined) {
      //     //关闭tab前提示
      //     if (this.formCode != "view") {
      //         this.$store.state.tabs.find(item => {
      //             let time = item.url.split("?")[0].split("/")
      //             if (time[time.length - 1] == self.$route.params.t) {
      //                 // 关闭页面提示
      //                 this.$confirm('是否关闭当前流程页面?', '提示', {
      //                     confirmButtonText: '确定',
      //                     cancelButtonText: '取消',
      //                     type: 'warning'
      //                 }).then(() => {
      //                     this.$GLOBAL.closeCurrentTab(this.tabName);
      //                 }).catch(() => {
      //                     this.$message({
      //                         type: 'info',
      //                         message: '已取消关闭'
      //                     });
      //                 });
      //                 self.$set(item, "needCheck", true)
      //             }
      //         })
      //     }
      // }
      if (this.composeCode == 'null' || !this.composeCode) {
        this.showBatchBox = false;
      } else {
        console.log(5555);
        //获取相同批的流程列表
        PROCESS_API.findByComposeCode({composeCode: this.composeCode}).then((res) => {
          this.flowListData = res.data.data;
          if (this.flowListData.length > 0) {
            this.showBatchBox = true;
          }
          this.$nextTick(() => {
            this.flowListData.map((item) => {
              if (item.businessId == this.businessId) {
                this.$refs.batchTable.toggleRowSelection(item, true);
              }
            })
          })
        })
      }
      // if (this.businessId != undefined && this.businessId != "") {
      //     this.$emit("findBusinessData", this.businessId)//业务办理中进入
      // }
      // if (val == undefined) {
      //     this.findBpmsHisBusiness();
      // } else {
      //     this.findBpmsHisBusiness(1);
      // }
    },
    // 点击动态任务
    dynamicTaskClick(){
      // 弹出动态任务框
      this.isDynamicTask = true;
      this.showDialog = true;
      this.$nextTick(()=>{
       // this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, 650, 500);
      })
    },
    //点击保存
    submitForm(val) {
      this.saveAll(val);
    },
    //点击流程列表
    textClick(row) {
      this.$confirm(`是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('update:businessTitle', row.businessTitle);
        this.$emit('update:categoryCode', row.categoryCode);
        this.$emit('update:businessId', row.businessId);
        this.$emit('update:procInstId', row.procInstId);
        this.$emit('update:taskId', row.taskId);
        this.$emit('update:procDefId', row.procDefId);
        this.$emit('update:procInstName', row.procInstName);
        this.$emit('update:formCode', row.formCode);
        if (this.businessId != undefined && this.businessId != "") {
          this.$nextTick(() => {
            this.init(1);
            this.$emit('refreshData');
          })
        }
        this.$refs.batchTable.clearSelection();
        this.$refs.batchTable.toggleRowSelection(row, true);
        this.multipleSelection = row;
      }).catch(() => {
        this.$notify({
          title: '提示',
          message: '已取消选择',
          type: 'info',
          duration: this.GLOBAL.notifyDuration,
          offset: this.GLOBAL.notifyOffset
        });
      });
    },
    // 保存全部
    saveAll(command) {
      debugger
      // 设置遮罩
      this.setBtnLoad(true);
      this.getProcessVariable()//计算流程变量
      let data = {};
      data.businessData = this.businessData;
      data.processVariable = this.processVariableMap;
      data.categoryCode = this.categoryCode;
      data.procDefId = this.procDefId;
      data.taskId = this.taskId;
      data.businessId = this.businessId;
      data.procInstId = this.procInstId;
      data.acceptCode = this.acceptCode;
      data.areaCode = this.areaCode;
      //收件资料选中保存
      if (this.permission.page == undefined||this.permission.page.receiveInfo == undefined|| this.permission.page.receiveInfo.show) {
        for (let i = 0; i < this.receiveList.length; i++) {
          this.$set(this.receiveList[i], 'businessId', this.businessId);
        }
        data.fileList = JSON.parse(JSON.stringify(this.receiveList));
        // 设置未保存时的文件id
        // if (!this.businessId){
        //     data.fileList.map((item)=>{
        //         item.files = [];
        //         // 普通模式收件资料文件上传列表
        //         item.fileBusinessDTOList && item.fileBusinessDTOList.map((sitem)=>{
        //             item.fileIds.push(sitem.id);
        //         })
        //         // 图文模式收件资料文件上传列表
        //         item.fileBusinessList && item.fileBusinessList.map((sitem)=>{
        //             item.fileIds.push(sitem.id);
        //         })
        //     })
        // }
      }
      //审核意见保存
      if (this.permission.page == undefined||this.permission.page.approvalComments == undefined|| this.permission.page.approvalComments.show) {
        let composeCode = this.composeCode === null ? "" : this.composeCode;
        if (this.auditIdeaData.opinionName == "" && (this.auditIdeaData.currentTaskName !== undefined)) {
          this.auditIdeaData.opinionName = this.bpmsHisBusiness.currentTaskName
        }
        if (this.auditIdeaData.taskInstId == "" || this.auditIdeaData.taskInstId == undefined) {
          this.auditIdeaData.taskInstId = this.taskId;
          this.auditIdeaData.businessId = this.businessId;
        }
        // data.isBatch = this.showBatchBox;
        data.composeCode = composeCode;
        data.bpmsRunOpinion = this.auditIdeaData;
      }
      AXIOS.post(this.eventFlowUrlInfo.save,{
        businessVo: data
      }).then((res) => {
        // PROCESS_API.saveAll({
        //     businessVo: data
        // }).then((res) => {
        // 如果为保存，则关闭遮罩
        if ("save" === command) {
          // 关闭遮罩
          this.setBtnLoad(true);
        }
        if (res.data.code == 0) {
          //首次保存启动流程
          if (res.data.data !== null) {
            this.$notify({
              title: "成功",
              message: "保存成功",
              type: "success",
              offset: this.GLOBAL.notifyOffset,
              duration: this.GLOBAL.notifyDuration
            });
            // let newQuery = JSON.parse(JSON.stringify(this.routeQuery));
            // newQuery.businessId = res.data.data.businessId ;//补齐补件赋值;
            // this.$router.push({
            //     path: this.$route.path,
            //     path: this.$route.path,
            //     query: newQuery
            // })
            this.$emit('update:businessId', res.data.data.businessId);
            this.$emit('update:procInstId', res.data.data.procInstId);
            this.$emit('update:taskId', res.data.data.taskId);
            this.$emit('update:procDefId', res.data.data.procDefId);
            this.$emit('update:acceptCode', res.data.data.acceptCode);
            this.$nextTick(() => {
              // 如果是保存命令
              // if ("save" === command) {
              this.findBpmsHisBusiness(1);
              // }
              if (res.data.data.parallelFlag == 1) {
                // this.GLOBAL.closeCurrentTab(this.tabName);
                closeTab(this.tabName,this)
              } else {
                this.$emit('update:businessId', res.data.data.businessId);
              }
            })
          }
          this.$nextTick(() => {
            // 查询收件资料数据, 查询审核意见数据
            this.findRAData()
            //保存并转出需调用转出函数
            if ('turnSave' === command) {
              this.handleCommand(command, this.receiveList, this.auditIdeaData);
            }
            // 保存并驳回需要调用驳回函数
            if ('rejectSave' == command){
              this.handleCommand(command, this.receiveList, this.auditIdeaData);
            }
          })
          //查询业务信息回显
          this.$emit("findBusinessData", res.data.data.businessId);
        } else {
          // 取消遮罩
          this.setBtnLoad(false);
          this.$notify({
            title: "失败",
            message: res.data.message,
            offset: this.GLOBAL.notifyOffset,
            duration: this.GLOBAL.notifyDuration
          });
        }
      }).catch(e => {
        // 取消遮罩
        this.setBtnLoad(false);
        console.error(e);
      })
    },
    // 查询收件资料数据, 查询审核意见数据
    findRAData() {
      if (this.permission.page == undefined || this.permission.page.receiveInfo == undefined || this.permission.page.receiveInfo.show) {
        // 查询收件资料数据
        this.$emit('findReceiveInfoData');
      }
      if (this.permission.page == undefined || this.permission.page.approvalComments == undefined || this.permission.page.approvalComments.show) {
        // 查询审核意见数据
        this.$emit('findApprovalCommentsData');
      }
    },
    //转出，先查询下一环节再转出
    checkNextProcess() {
      PROCESS_API.checkNextProcess({
        businessId:this.businessId,
        taskId: this.taskId,
        processVariable: this.processVariableMap,
        opionion: (this.permission.page && this.permission.page['approvalComments']) ? this.permission.page['approvalComments'].show : false
      }).then((res) => {
        if (res.data.code == 0) {
          res.data.data.targetFlowElements.map((item) => {
            for (var i = 0; i < res.data.data.bpmsActDefExts.length; i++) {
              if (res.data.data.bpmsActDefExts[i] && res.data.data.bpmsActDefExts[i].taskDefId == item.taskDefKey) {
                item.counterSignFlag = res.data.data.bpmsActDefExts[i].counterSignFlag;
                break;
              }
            }
          })
          // 判断校验是否存在转出提示语
          let confirmText = this.validRes.confirmText;
          let textInfo = confirmText ? confirmText : "确定转出, 是否继续？"
          // 弹出选择框函数
          let selectBox = () => {
            let showBox = () => {
              // 取消遮罩
              this.setBtnLoad(false);
              this.dialogWidth = 600;
              this.dialogHeight = 400;
              this.isTurn = true;
              this.titleName = "业务转出";
              this.dialogIcon = "icon_outputAll";
              this.showDialog = true;
              var brr = [];
              res.data.data.targetFlowElements.map((item) => {
                brr.push(item)
              })
              this.turnInfo = [...brr];
              this.$nextTick(() => {
                //this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, this.dialogWidth, this.dialogHeight);
              })
            }
            if (confirmText) {
              this.$confirm(confirmText, '提示', {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                cancelButtonClass: 'btn-custom-cancel',
                confirmButtonClass: 'btn-custom-confirm',
                duration: this.GLOBAL.notifyDuration,
                offset: this.GLOBAL.notifyOffset,
                type: "warning"
              }).then(() => {
                showBox()
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消转出',
                  duration: this.GLOBAL.notifyDuration,
                  offset: this.GLOBAL.notifyOffset
                });
                return false;
              })
            } else {
              showBox()
            }
          }
          //不是允许职员和必须指定职员
          if (res.data.data.targetFlowElements[0].flowElementName == '结束' || (res.data.data.bpmsActDefExts[0].allowassignFlag != '1' && res.data.data.bpmsActDefExts[0].mustassignFlag != '1')) {
            if (this.str !== "") {
              textInfo = this.str + ", 是否继续？";
            }
            if (res.data.data.targetFlowElements[0].flowElementName == '结束') {
              if (this.str !== "") {
                textInfo = this.str + "，流程即将转出至结束,是否继续？";
              } else {
                textInfo = confirmText ? confirmText : "流程即将转出至结束，是否继续？"
              }
            }
            // 获取系统参数(流程转出时只有一个环节不弹出选择框)
            PlatformService.findSysParamsByKey('WORKFLOW_TURNOUT_NOBOX_WITHONENEXTPROCESS').then((r)=>{
              //判断下一个环节只有一个 且 配置转出时只有一个环节不弹出选择框
              if (res.data.data.targetFlowElements.length == 1 && r.confValue && JSON.parse(r.confValue)) {
                // 调用转出接口
                if (this.composeCode == 'null' || !this.composeCode) {
                  //直接转出
                  this.$confirm(textInfo, '提示', {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    cancelButtonClass: 'btn-custom-cancel',
                    confirmButtonClass: 'btn-custom-confirm',
                    duration: this.GLOBAL.notifyDuration,
                    offset: this.GLOBAL.notifyOffset,
                    type: "warning"
                  }).then(() => {
                    this.turnoutHandle(res.data.data.targetFlowElements);
                  }).catch(() => {
                    // 取消遮罩
                    this.setBtnLoad(false);
                    this.$message({
                      type: 'info',
                      message: '已取消',
                      duration: this.GLOBAL.notifyDuration,
                      offset: this.GLOBAL.notifyOffset
                    });
                    return false;
                  })
                } else {
                  this.textInfo = textInfo ? textInfo.replace(", 是否继续？", "") : "";
                  this.targetFlowElements = res.data.data.targetFlowElements;
                  // isComposeTurn
                  this.dialogWidth = 500;
                  this.dialogHeight = 350;
                  this.isComposeTurn = true;
                  this.titleName = "转出方式";
                  this.dialogIcon = "icon_outputAll";
                  this.showDialog = true;
                  this.$nextTick(() => {
                    //
                    // this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, this.dialogWidth, this.dialogHeight);
                  })
                }
              } else {
                // 弹出选择框
                selectBox();
              }
            })
          } else {
            // 弹出选择框
            selectBox();
          }
        } else {
          this.$notify({
            title: "提示",
            message: res.data.message,
            type: 'info',
            offset: this.GLOBAL.notifyOffset,
            duration: this.GLOBAL.notifyDuration
          });
          // 取消遮罩
          this.setBtnLoad(false);
        }
      }).catch((e) => {
        // 取消遮罩
        this.setBtnLoad(false);
        console.error(e)
      })
    },
    // 转出回调
    turnoutHandle(elementList, val){
      let params = {
        procInstId: this.procInstId,
        elementList: elementList?elementList:[],
        taskId: this.taskId,
        businessId:this.businessId,
        receiveType: this.receiveType ? this.receiveType : ''
      }
      if (val !== null && val !== undefined) {
        params.delBatch = val == 1 ? "true" : "false";
      }
      // 设置转出遮罩
      const loadingTurn = this.$loading({
        lock: true,
        text: '正在转出...',
        spinner: 'el-icon-loading'
      });
      AXIOS.post( this.eventFlowUrlInfo.turn, params).then((res) => {
        // 取消遮罩
        this.setBtnLoad(false);
        loadingTurn.close();
        if (res.data.code == 0 && res.data.data == "SUCCESS") {
          this.$notify({
            title: '成功',
            message: '转出成功',
            type: 'success',
            duration: this.GLOBAL.notifyDuration,
            offset: this.GLOBAL.notifyOffset
          });
          this.closeEditBox();
          this.GLOBAL.closeCurrentTab(this.tabName);
          return false;
        } else {
          // 取消遮罩
          this.setBtnLoad(false);
          this.$notify({
            title: '提示',
            message: res.data.data,
            type: 'info',
            duration: this.GLOBAL.notifyDuration,
            offset: this.GLOBAL.notifyOffset
          });
          return false;
        }
        this.$notify({
          title: '失败',
          message: res.data.message,
          type: 'error',
          duration: this.GLOBAL.notifyDuration,
          offset: this.GLOBAL.notifyOffset
        });
        return false;
      }).catch(() => {
        // 取消遮罩
        this.setBtnLoad(false);
        loadingTurn.close();
      })
    },
    //更新权限与header
    async findBpmsHisBusiness() {
      this.$emit('findBpmsHisBusiness');
      // let _this = this;
      // await PROCESS_API.getBusinessHeaderAndPermision({
      //     businessId: this.businessId,
      //     procDefId: this.procDefId,
      //     categoryCode: this.categoryCode,
      //     taskId: this.taskId,
      //     formCode: this.formCode
      // }).then((res) => {
      //     if (res.data.code == 0) {
      //         _this.$emit('update:bpmsHisBusiness',res.data.data.header);
      //         let arr = _this.$store.state.tabs;
      //         for (let i = 0; i < arr.length; i++) {
      //             //设置tab标题
      //             if (val) {
      //                 if (arr[i].name == this.tabName) {
      //                     _this.$set(_this.$store.state.tabs[i], 'label', res.data.data.header.businessTitle);
      //                     _this.$set(_this.$store.state.tabs[i], 'name', res.data.data.header.businessTitle);
      //                 }
      //             }
      //         }
      //         if (!(res.data.data.permission === null)) {
      //             _this.$emit("update:permission", res.data.data.permission);
      //             _this.getProcessVariableElement();
      //             if (val === 1) {
      //                 this.setBtnLoad(false);
      //             }
      //         } else {
      //             _this.$emit("update:permission", {});
      //         }
      //     } else {
      //         // 取消遮罩
      //         _this.setBtnLoad(false);
      //         _this.$emit('update:bpmsHisBusiness',{});
      //     }
      // }).catch(function (e) {
      //     // 取消遮罩
      //     _this.setBtnLoad(false);
      // })
    },
    async handleCommand(command, receiveList, auditIdeaData, flags) {
      // if ("turnSave" === command || "turn" === command) {
      //     if ("turnSave" === command) {
      //         await this.findBpmsHisBusiness();//等待权限同步
      //     }
      // }
      if ((this.permission.page == undefined||this.permission.page.receiveInfo == undefined|| this.permission.page.receiveInfo.show) && (command === "turn" || command === "turnSave")) {
        // if (receiveList.length <= 0 && (this.permission.function == undefined||this.permission.function.runfileedit == undefined||this.permission.function.runfileedit.show)) {
        //     this.$notify({
        //         title: "提示",
        //         message: "请选择收件资料！",
        //         type: "warning",
        //         offset: this.GLOBAL.notifyOffset,
        //         duration: this.GLOBAL.notifyDuration
        //     });
        //     // 取消遮罩
        //     this.setBtnLoad(false);
        //     return false;
        // }
        if ((this.permission.function == undefined||this.permission.function.runfileedit == undefined||this.permission.function.runfileedit.show)) {
          // 1、必选校验 required
          let requiredBool = true;
          for(let i = 0;i<this.receiveInfoDataList.length;i++){
            let item = this.receiveInfoDataList[i];
            if (item.required){
              let bool = receiveList.some((sitem)=>{
                return sitem.id == item.id;
              })
              if (!bool){
                requiredBool = bool;
                this.$notify({
                  title: "提示",
                  message: item.fileName + "必须上传文件资料并保存！",
                  type: "warning",
                  offset: this.GLOBAL.notifyOffset,
                  duration: this.GLOBAL.notifyDuration
                });
                break;
              }
            }
          }
          if (!requiredBool){
            // 取消遮罩
            this.setBtnLoad(false);
            return false;
          }
          // 2、已选择收件资料需要判断必须上传资料和收件资料数量校验
          let uploadBool = true;
          for (let i = 0;i<receiveList.length;i++){
            let item = receiveList[i];
            if (!item.fileBusinessDTOList || item.fileBusinessDTOList.length==0){
              uploadBool = false;
              this.$notify({
                title: "提示",
                message: item.fileName + "必须上传文件资料！",
                type: "warning",
                offset: this.GLOBAL.notifyOffset,
                duration: this.GLOBAL.notifyDuration
              });
              break;
            }
            if (item.fileBusinessDTOList && item.fileNumLimit && item.fileNumLimit>0 && item.fileBusinessDTOList.length>item.fileNumLimit){
              uploadBool = false;
              this.$notify({
                title: "提示",
                message: item.fileName + "上传的文件资料已超过文件数量限制，限制数量为" + item.fileNumLimit +"！",
                type: "warning",
                offset: this.GLOBAL.notifyOffset,
                duration: this.GLOBAL.notifyDuration
              });
              break;
            }
          }
          if (!uploadBool){
            // 取消遮罩
            this.setBtnLoad(false);
            return false;
          }
        }
        for (let i = 0; i < receiveList.length; i++) {
          if (receiveList[i].originalNum == 0 && receiveList[i].copyNum == 0) {
            this.$notify({
              title: "提示",
              message: receiveList[i].fileName + "的复印件、原件数量都为0，请确认",
              type: "warning",
              offset: this.GLOBAL.notifyOffset,
              duration: this.GLOBAL.notifyDuration
            });
            // 取消遮罩
            this.setBtnLoad(false);
            return false;
          }
        }
      }
      //审核意见
      let flag = true;
      if ((this.permission.function == undefined||this.permission.function.opinionedit == undefined|| this.permission.function.opinionedit.show) && (command == "turn" || command == "turnSave")) {
        if (auditIdeaData.content == "" || auditIdeaData.content === null || auditIdeaData.content === undefined) {
          this.$notify({
            title: "提示",
            message: "请填写审批意见",
            type: "warning",
            offset: this.GLOBAL.notifyOffset,
            duration: this.GLOBAL.notifyDuration
          });
          // 取消遮罩
          this.setBtnLoad(false);
          return false;
        }
        if ((auditIdeaData.passFlag == "" || auditIdeaData.passFlag === null) &&
            (this.permission.function !== undefined && this.permission.function.shyjPassFlag !== undefined && this.permission.function.shyjPassFlag.show)) {
          this.$notify({
            title: "提示",
            message: "请选择是否通过",
            type: "warning",
            offset: this.GLOBAL.notifyOffset,
            duration: this.GLOBAL.notifyDuration
          });
          // 取消遮罩
          this.setBtnLoad(false);
          return false;
        }
        //查询转出时是否保存审核意见
        await PROCESS_API.findCurrentBpmsRunOpinion({
          taskId: this.taskId
        }).then((res) => {
          if (res.data.message === "成功" && res.data.data == "true") {
            flag = true;
          } else {
            this.$notify({
              title: "提示",
              message: "请保存审批意见",
              type: "warning",
              offset: this.GLOBAL.notifyOffset,
              duration: this.GLOBAL.notifyDuration
            });
            // 取消遮罩
            this.setBtnLoad(false);
            flag = false;
          }
        }).catch(res => {
          // 取消遮罩
          this.setBtnLoad(false);
          flag = false;
        })
      }
      // let self = this
      let business = this.businessId;
      if (business === '' || business === null || business === undefined) {
        this.showDialog = false;
        // 取消遮罩
        this.setBtnLoad(false);
        return false;
      }
      this.getProcessVariable();//获取流程变量值
      // if (!passFlag) { //二次校验未通过
      //     // 取消遮罩
      //     this.setBtnLoad(false);
      //     return false;
      // }
      //批业务提示
      this.str = "";
      await PROCESS_API.infoBatchRemind({
        taskId: this.taskId,
        businessId:this.businessId
      }).then((res) => {
        if (res.data.data !== null) {
          this.str = " 当前操作的业务是批业务，总计" + res.data.data + "笔";
        }
      })
      PROCESS_API.validHangup({
        businessId: business
      }).then((res) => {
        if (res.data.code == 0) {
          var taskId = this.taskId;
          this.showDialog = false;
          this.isDel = false;
          this.isTurn = false;
          this.isEnd = false;
          this.isReject = false;
          this.isProcessTrack = false;
          if (("turn" === command || "turnSave" === command) && flag) { //转出
            if (this.permission.function !== undefined && this.permission.function.withoutCheckNext !== undefined && this.permission.function.withoutCheckNext.show){
              if (this.permission.function && this.permission.function.dynamicTaskTurn && this.permission.function.dynamicTaskTurn.show) {
                // 取消遮罩
                this.setBtnLoad(false);
                this.dialogWidth = 600;
                this.dialogHeight = 400;
                this.isTurn = true;
                this.titleName = "业务转出";
                this.dialogIcon = "icon_outputAll";
                this.showDialog = true;
                this.$nextTick(() => {
                 // this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, this.dialogWidth, this.dialogHeight);
                })
              } else {
                // 直接转出
                this.turnoutHandle();
              }

            } else {
              this.checkNextProcess();
            }
          }
          if ("reject" === command || 'rejectSave' == command) { //驳回
            this.setBtnLoad(false);//取消遮罩
            this.dialogWidth = 560;
            this.dialogHeight = 300;
            this.isReject = true;
            this.titleName = "业务驳回";
            this.dialogIcon = "icon_reject";
            PROCESS_API.findDefByTaskId({
              taskId: taskId
            }).then((res) => {
              if (res.data.code == 0) {
                this.rejectTable = res.data.data;
                this.showDialog = true;
                this.$nextTick(() => {
                  //this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, this.dialogWidth, this.dialogHeight);
                })
              }
            })
          }
          if ("del" === command) { //删除
            this.setBtnLoad(false);//取消遮罩
            this.dialogWidth = 500;
            this.dialogHeight = 250;
            this.isDel = true;
            this.titleName = "业务删除";
            this.dialogIcon = "icon_del";
            this.showDialog = true;
            this.$nextTick(() => {
              //this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, this.dialogWidth, this.dialogHeight);
            })
          }
          if ("end" === command) { //终止
            let t = this.needEndArr.findIndex(item => item == this.categoryCode)
            if (t >= 0) {//几个需要终止存特殊信息的流程
              this.$confirm('是否继续终止此流程?', '提示', {  //删除提示
                confirmButtonText: '继续',
                cancelButtonText: '取消',
                cancelButtonClass: 'btn-custom-cancel',
                confirmButtonClass: 'btn-custom-confirm',
                type: 'warning',
                offset: this.GLOBAL.notifyOffset,
                duration: this.GLOBAL.notifyDuration
              }).then(() => {
                this.setBtnLoad(false);//取消遮罩
                this.dialogWidth = 750;
                this.dialogHeight = 500;
                this.isZgEnd = true;
                this.titleName = "业务终止";
                this.dialogIcon = "icon_end";
                this.showDialog = true;
                this.$nextTick(() => {
                  //this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, this.dialogWidth, this.dialogHeight);
                })
              }).catch((e) => {
                this.$notify({
                  title: "提示",
                  message: "已取消",
                  type: "info",
                  offset: this.GLOBAL.notifyOffset,
                  duration: this.GLOBAL.notifyDuration
                });
              });
            } else {
              this.setBtnLoad(false);//取消遮罩
              this.dialogWidth = 560;
              this.dialogHeight = 300;
              this.isEnd = true;
              this.titleName = "业务终止";
              this.dialogIcon = "icon_end";
              this.showDialog = true;
              this.$nextTick(() => {
               // this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, this.dialogWidth, this.dialogHeight);
              })
            }
          }
          if ("backInfo" === command) {
            this.setBtnLoad(false);//取消遮罩
            this.dialogWidth = 560;
            this.dialogHeight = 300;
            this.isBackInfo = true;
            this.titleName = "驳回信息";
            this.showDialog = true;
            PROCESS_API.getBackInfo({
              businessId: this.businessId
            }).then((res) => {
              this.backInfoData = res.data.data;
              this.$nextTick(() => {
                //this.$GLOBAL_FUNC.setDialogSize(this.$refs.commonDialogBox, this.dialogWidth, this.dialogHeight);
              })
            })
          }
        } else {
          this.setBtnLoad(false);//取消遮罩
          this.$notify({
            title: '提示',
            message: res.data.message,
            type: 'warning',
            duration: this.GLOBAL.notifyDuration,
            offset: this.GLOBAL.notifyOffset
          });
        }
        if ("monitor" === command) { //流程跟踪
          this.monitorCommand();
        }
      }).catch((e)=>{
        this.setBtnLoad(false);
      })
    },
    // 流程变量元素设置
    getProcessVariableElement() {
      for (var obj in this.permission.element) {
        if (this.permission.element[obj].processVariableFlag === true) {
          this.processVariable.push(obj);
        }
      }
    },
    // 计算流程变量
    getProcessVariable() {
      debugger
      if (this.processVariable.length > 0) {
        this.processVariable.forEach(item => {
          let elements = document.getElementsByName(item);
          let length = elements.length;
          if (length > 0) {
            if ('radio' == elements[0].getAttribute("type")) {
              elements.forEach(obj => {
                if (obj.checked === true) {
                  this.processVariableMap[item] = obj.value;
                }
              });
            } else if ('checkbox' == elements[0].getAttribute("type")) {
              let checboxArr = [];
              elements.forEach(obj => {
                if (obj.checked === true) {
                  checboxArr.push(obj.value);
                }
              });
              this.processVariableMap[item] = checboxArr.join(",");
            } else if (length == 1) {
              this.processVariableMap[item] = elements[0].value;
            }
          }
        });
      }
    },
    // 下拉菜单被点击
    async onDropdownCommand(command,valid=true) {
      debugger
      console.log("yxx")
      if (command == 'dynamicTask'){
        this.dynamicTaskClick();
        return;
      }
      // 判断是否为函数指令，不是指令函数防止重复点击
      if (this.btnloading && !this.functionCommand){
        return;
      }
      // 判断是否需要校验表单内容
      /*if (valid){
        // 校验表单内容(根据不同command实行不同的校验)
        let res = await this.validateForm(command);
        this.setBtnLoad(true);
        let validRes = {};
        // 校验结果存入变量中{valid:true,confirmText:'转出流程，是否继续?',type:'turn'}
        if (res == true || res == false){
          validRes = {
            valid: res
          }
          this.validRes = validRes;
        } else {
          this.validRes = res ? res : {valid: true};
        }
        // bool判断校验是否通过
        let bool = this.validRes.valid;
        // 校验不通过则方法中止
        if (!bool) {
          this.setBtnLoad(false);
          return;
        }
      }*/
      // 转出或者保存并转出的时候，可以自定义转出提示内容，返回结果直接返回即可
      if (command == 'save' || command == 'turnSave' || command == 'rejectSave') {
        this.setBtnLoad(true);
        this.saveAll(command)
      } else {
        this.setBtnLoad(true);
        this.handleCommand(command, this.receiveList, this.auditIdeaData);
      }
    },
    // 转出函数
    turn(){
      this.onDropdownCommand('turn')
    },
    checkBoxT() {
      return false;
    },
    // 控制按钮加载特效
    setBtnLoad(val) {
      // 按钮加载
      this.btnloading = val;
      // 整个页面加载
      this.$emit('update:loadFalg',val);
    },
    // 点击流程跟踪
    monitorCommand() {
      this.setBtnLoad(false);
      let key = new Date().getTime();
      let name = this.procInstName + "流程跟踪";
      let url = "/business/processTrack/" + key + "?taskId=" + this.taskId + "&businessId=" + this.businessId + "&procInstId=" + this.procInstId + "&procInstName=" + this.procInstName+'&tabName='+name;
      let item = {
        name: name,
        label: name,
        url: url,
        repeatable: 1
      };
      addTab(item,this,this.formCode);
    },
    //用于关闭编辑框
    closeEditBox() {
      this.showDialog = false;
      this.isTurn = false;
      this.isEnd = false;
      this.isComposeTurn = false;
      this.isZgEnd = false;
      this.isDel = false;
      this.isBackInfo = false;
      this.isReject = false;
      this.isProcessTrack = false;
      this.isDynamicTask = false;
    }
  }
}


</script>


<style lang="scss" scoped>
@import './jsmart-processButtons.scss';
</style>
