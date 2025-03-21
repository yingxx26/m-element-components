let PROCESS_API = {
    findFiles:function(data){
        return AXIOS.post(  '/bpmsinstfile/findFiles', data);
    },
    findFileBySearchable:function(data){
        return AXIOS.post( '/file/findFileBySearchable', data);
    },
    findCatalogAndFiles:function(data){
        return AXIOS.post(  '/bpmsinstfile/findCatalogAndFiles', data);
    },
    deleteFile:function(data){
        return AXIOS.post( '/filebusiness/deleteFile', data); // 删除和之前不一致，需要整理
    },
    findByBusinessId: function (data) {
        return AXIOS.post( '/bpmsrunopinion/findByBusinessId', data);
    },
    //业务删除
    delProcess(data) {
        return AXIOS.post(   '/deletetask/delteTaskByTaskId', data)
    },
    //业务驳回
    backProcess(data) {
        return AXIOS.post( '/backward/backProcess', data)
    },
    //业务保存流程变量
    saveProcessVariable: function (data) {
        return AXIOS.post(  '/forward/saveProcessVariable', data)
    },
    fileDownload: function (data) {
        return AXIOS.postByQs(  '/file/fileDownload', data, {responseType: 'blob'})
    },
    //查询下一环,节
    checkNextProcess: function (data) {
        return AXIOS.post(  '/forward/checkNextProcess', data)
    },
    //业务转,出
    businessTurnOut: function (data) {
        return AXIOS.post( '/forward/businessTurnOut', data)
    },
    //业务删
    deletetask: function (data) {
        return AXIOS.post( '/deletetask/delteTaskByTaskId', data)
    },
    //业务终止
    endtask: function (data) {
        return AXIOS.post( '/endtask/terminateProcessInstByTaskId', data)
    },
    //查询可驳回环节
    findDefByTaskId: function (data) {
        return AXIOS.post( '/backward/findDefByTaskId', data)
    },
    //收件资料查,询
    bpmsinstfile: function (data) {
        return AXIOS.post( '/bpmsinstfile/findFileList', data)
    },
    //收件资料保,存
    saveAFile: function (data) {
        return AXIOS.post( '/bpmsinstfile/saveAFile', data)
    },
    //审批意见保,存
    saveBpmsrunopinion: function (data) {
        return AXIOS.post(  '/bpmsrunopinion/saveBpmsrunopinion', data)
    },
    //查询审批意见是否保,存
    findCurrentBpmsRunOpinion: function (data) {
        return AXIOS.post(  '/bpmsrunopinion/findCurrentBpmsRunOpinion', data)
    },
    //查询审批意见模,板
    getOpinionList: function (data) {
        return AXIOS.post( '/bpmsdefactopinion/getOpinionList', data)
    },
    //查询流程列,表
    findByComposeCode: function (data) {
        return AXIOS.post(  '/doingtask/doingTaskListQuery', data)
    },
    //校验流程是否挂,起
    validHangup: function (data) {
        return AXIOS.post(  '/hangup/validHangup', data)
    },
    //转出人员,树
    getTurnUser: function (data) {
        return AXIOS.post(  '/forward/getTurnUser', data)
    },
    downloadFile: function (data) {
        return AXIOS.postByQs( '/bpmsrunopinion/fileDownload', data, {responseType: 'blob'})
    },
    getBackInfo: function (data) { //获取驳回信息
        return AXIOS.post( '/backward/getBackInfo', data)
    },
    //获取单个资料的图,片
    findScanFileCatalog: function (data) {
        return AXIOS.post( '/scanfile/findScanImage', data)
    },
    //删除单个资料的图,片
    deleteScanFile: function (data) {
        return AXIOS.post(  '/scanfile/deleteScanFile', data)
    },
    //查看资料图,片
    getFileScanCatalogTree: function (data) {
        return AXIOS.post(  '/scanfile/getFileScanCatalogTree', data)
    },
    //通过图片ID获取图片，得,到的是流
    getImageStream: function (data) {
        return AXIOS.post( '/scanfilecatalog/getImageStream', data)
    },
    //获取资料,树
    getDataTree: function (data) {
        return AXIOS.post( '/processassemble/getDefFileTree', data)
    },
    //保存全,部
    saveAll: function (data) {
        return AXIOS.post( '/processHandler/startProcessAndSaveBusiness', data)
    },
    //批业务总数提,示
    infoBatchRemind: function (data) {
        return AXIOS.post(  '/bpmshisbatch/infoBatchRemind', data)
    },
    // 获取表单权限
    getBusinessHeaderAndPermision: function (data) {
        return AXIOS.post(  '/doingtask/getBusinessHeaderAndPermision', data)
    },
    // 根据formCode查询子系统
    getSubSystemByFormCode:function(data){
        return AXIOS.post( '/doingtask/getSubSystemByFormCode', data);
    }
}

export default PROCESS_API;