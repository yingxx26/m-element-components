<template>
  <div class="jsmart-NavMenuBox " :class="[menuPosition=='right' ? 'fixedType' : '']" :style="{height: height}" :name="name" ref="jsmartNavMenuBox">
    <div class="jsmart-NavMenuBox-in" :style="{'flex-direction':menuPosition!='top'?'row':''}">
      <div class="jsmart-NavMenuTop" :class="{backgroundTop:selectedType=='background', isFlatMode: isFlatMode}"
           v-show="menuPosition=='top'">
        <div class="jsmart-NavMenuTop-left">
          <div class="jsmart-NavMenuTop-left-arrow" v-if="isShowArrow" @mousedown="turnLeft"><em
              class="jsmartFont">&#xe667;</em></div>
          <div class="jsmart-NavMenuTop-left-scroll" ref="topScroll" @mousewheel="mousewheelFun">
            <div class="jsmart-NavMenuTop-left-in">
              <div class="jsmart-NavMenuTop-item jsmartBox" :id="item.comId" :jsmartName="item.name"
                   jsmartType="jsmart-NavMenu-item" permission="1"
                   :class="{selected:selectedType == 'background' && curTab==item.comId,
                                 selectedBorder: selectedType == 'border' && curTab==item.comId}"
                   :style="{color:curTab==item.comId?titleColor:'',
                                          borderBottomColor:selectedType == 'border' && curTab==item.comId?titleColor:'',
                                          backgroundColor:selectedType == 'background' && curTab==item.comId?(titleColor!=''?titleColor+'0F':''):''
                                 }"
                   v-for="(item,index) in childList" :key="index" @click="changeTab(item.comId,index)">
                {{item.name}}
              </div>
            </div>
          </div>
          <div class="jsmart-NavMenuTop-left-arrow" v-if="isShowArrow" @mousedown="turnRight"><em
              class="jsmartFont">&#xe669;</em></div>
        </div>
        <div class="jsmart-NavMenuTop-right" v-if="driveType==0 || controlList.length>0"
             :style="{'width':controlWidth+'px'}">
          <slot name="control"></slot>
        </div>
      </div>
      <div class="jsmart-NavMenuLeft" v-if="menuPosition=='left'" :style="{width: navMenuWidth + 'px'}" :class="{closeState:!openLeftState}">
        <div class="jsmart-NavMenuLeft-item jsmartBox" :jsmartName="item.name" :id="item.comId"
             jsmartType="jsmart-NavMenu-item" permission="1"
             :class="{'selected':selectedType == 'background' && curTab==item.comId,
                                selectedBorder: selectedType == 'border' && curTab==item.comId,
                                closeContent:!openLeftState}"
             :style="{color:curTab==item.comId?titleColor:'',
                              backgroundColor:selectedType == 'background' && curTab==item.comId?(titleColor!=''?titleColor+'0F':''):'',
                              borderRight: selectedType == 'border' && curTab==item.comId? `2px solid ${titleColor}`:''
                     }"
             v-for="(item,index) in childList" :key="index" @click="changeTab(item.comId,index)">
          {{item.name}}
        </div>
        <!--左快捷开关-->
        <div style="position: absolute;right: 0;top:0;height: 100%;" v-if="openFast">
          <div class="sh_btn_left" @click="shLeftChildMenu" :class="{opened:openLeftState}">
            <div class="sh_btn_icon_left"><i class="iconfont"></i></div>
            <div class="sh_btn_bg_left"></div>
          </div>
        </div>
      </div>
      <div class="jsmart-NavMenuBody" ref="navMenuBody">
        <div class="jsmart-NavMenuBody-in" ref="navMenuBodyIn">
          <slot name="yxx"></slot>
          <!--<div class="jsmart-NavMenuBody-item" :class="nameClass" v-for="(item,index) in childList" :key="index" :name="item.comId">-->
          <!--<div class="jsmart-NavMenuBody-item-in">-->
          <!--<jsmartSubTitleBar :title="item.name" v-if="hasSubtitle"></jsmartSubTitleBar>-->
          <!--<slot :item="item" :index="index"></slot>-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </div>
      <div class="jsmart-NavMenuRight" v-if="menuPosition=='right'" :style="{width:  navMenuWidth + 'px',right:!openMaoState ? '-' + navMenuWidth + 'px' : ''}" :class="{closeState:!openLeftState,hiddenMao:!openMaoState}" >
        <div style='max-height: 208px;overflow-y: scroll;'>
          <div class="jsmart-NavMenuRight-item jsmartBox" :jsmartName="item.name" :id="item.comId"
               jsmartType="jsmart-NavMenu-item" permission="1"
               :class="{'selected':selectedType == 'background' && curTab==item.comId,
                                selectedBorder: selectedType == 'border' && curTab==item.comId,
                                closeContent:!openLeftState}"
               :style="{color:curTab==item.comId?titleColor:'',
                              backgroundColor:selectedType == 'background' && curTab==item.comId?(titleColor!=''?titleColor+'0F':''):'',
                              borderLeft: selectedType == 'border' && curTab==item.comId? `2px solid ${titleColor}`:'2px solid transparent'
                     }"
               v-for="(item,index) in childList" :key="index" @click="changeTab(item.comId,index)">
            {{item.name}}
          </div>
        </div>
        <!--右快捷开关-->
        <div style="position: absolute;left: 0;top:0;height: 100%;" v-if="openFast" >
          <div class="sh_btn_right" @click="shRighttChildMenu" :class="{opened:openRightState}">
            <div class="sh_btn_icon_right"><i class="iconfont"></i></div>
            <div class="sh_btn_bg_right"></div>
          </div>
        </div>
        <!-- 锚点模式的收起按钮 -->
        <div  class="toggle_button" @click="hiddenNav" style='background: #fff'>收起</div>
        <div  class="open_toggle" @click="hiddenNav">
          <i class="jsmartFont icon-outdent"></i>
        </div>
      </div>
    </div>
    <slot name="dragControl"></slot>
  </div>
</template>
<script    >
//import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: "jsmartNavMenu",
  data: function () {
    return {
      curTab: "",//当前高亮标签
      offsetTopArr: [],//子模块高度数组
      isScroll: true,//是否允许滚动条滚动状态
      isClicked: false,//是否在点击滚动事件中状态
      step: null,//滚动中速度变量
      scrollTimer: {},
      isShowArrow: false,
      openLeftState:true,
      openRightState:true,
      openMaoState:true,//锚点状态
    }
  },
  props: {
    name: [String, Number],
    nameClass: {
      type: String,
      default: ""
    },
    height: {//导航高度
      type: String,
      default: "100%"
    },
    navMenuWidth: {//左/右侧 导航宽度
      type: String,
      default: "150"
    },
    hasSubtitle: {//是否开启标题栏
      type: Boolean,
      default: true
    },
    menuPosition: {//是否开启标题栏
      type: String,
      default: "top"
    },
    openFast: {
      type: Boolean,
      default: false
    },
    childList: {//导航子模块集合
      type: Array,
      default: function () {
        return [
          {
            childList: [],
            name: '子导航',
            comId: null,
            type: null,
            isSubmit: false,
            isShow: true,
            extendOptions: {col: 24}
          }
        ]
      }
    },
    controlWidth: {
      type: [String, Number],
      default: 300
    },
    controlList: {
      type: Array,
      default: function () {
        return [
          {}
        ]
      }
    },
    driveType: {
      type: Number,
      default: 1
    },
    titleColor: {
      type: String,
      default: ""
    },
    selectedType: {
      type: String,
      default: "background"
    }, //选中类型，默认为下划线，可以为background
    isFlatMode: {
      type: Boolean,
      default: true
    } // 是否扁平模式
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.curTab = this.childList && this.childList.length ? this.childList[0].comId : "";
        this.getOffsetHeight()
        this.$refs.navMenuBody.addEventListener("scroll", this.positionTab)
      })

    })
    document.body.addEventListener("mouseup", () => {
      clearInterval(this.scrollTimer)
      this.scrollTimer = {}
    })
    /*this.resizeObserver = new ResizeObserver(entries => {
      this.showArrow()
    });
    this.resizeObserver.observe(this.$refs.jsmartNavMenuBox);*/
  },
  methods: {
    shLeftChildMenu(){
      this.openLeftState=!this.openLeftState
    },
    shRighttChildMenu(){
      this.openRightState=!this.openRightState
    },
    //切换标签
    // changeTab(id, index) {
    //     if (!this.isClicked && this.offsetTopArr[index]) {
    //         this.isClicked = true
    //         this.isScroll = false
    //         this.curTab = id
    //         this.goPosition(index)
    //         this.$emit('changeTab', id, index);
    //     }
    // },
    //切换标签
    changeTab(comid,index){
      if(!this.isClicked && this.offsetTopArr[index]) {
        // 滚动
        if (document.getElementsByName(comid)[0]){
          let dom = document.getElementsByName(comid)[0];
          dom.scrollIntoView(true)
        } else {
          this.isClicked=true
          this.isScroll = false
          this.goPosition(index)
        }
        setTimeout(()=>{
          this.curTab = comid
        },0)
        // 事件
        this.$emit('changeTab',comid,index);
      }
    },
    //获取子模块高度
    getOffsetHeight() {
      this.offsetTopArr = []
      this.$refs.navMenuBody.querySelectorAll("." + this.nameClass).forEach((el) => {
        this.offsetTopArr.push({
          name: el.getAttribute("name"),
          offsetTop: el.offsetTop,
          offsetHeight: el.offsetHeight
        })
      })
    },
    //跳转位置
    goPosition(index) {
      // 跳转之前获取子模块高度
      this.getOffsetHeight()
      let sh = null;
      if (this.$refs.navMenuBody.scrollHeight - this.$refs.navMenuBody.offsetHeight <= this.offsetTopArr[index].offsetTop) {
        sh = this.$refs.navMenuBody.scrollHeight - this.$refs.navMenuBody.offsetHeight
      }
      else {
        sh = this.offsetTopArr[index].offsetTop
      }
      if (this.offsetTopArr[index].offsetTop >= this.$refs.navMenuBody.scrollTop) {
        this.step = parseInt((sh - this.$refs.navMenuBody.scrollTop) / 50)
        this.moveDown(this.$refs.navMenuBody.scrollTop, sh)
      }
      else {
        this.step = parseInt((this.$refs.navMenuBody.scrollTop - this.offsetTopArr[index].offsetTop) / 50)
        this.moveUp(this.$refs.navMenuBody.scrollTop, this.offsetTopArr[index].offsetTop)
      }
      if (this.step < 10) {
        this.step = 10
      }
    },
    //向下跳转
    moveDown(curScroll, totalScroll) {
      if (curScroll + this.step > totalScroll) {
        this.$refs.navMenuBody.scrollTop = totalScroll
        setTimeout(() => {
          this.isScroll = true
          this.isClicked = false
        }, 50)
      }
      else {
        this.$refs.navMenuBody.scrollTop = curScroll + this.step
        setTimeout(() => {
          this.moveDown(this.$refs.navMenuBody.scrollTop, totalScroll)
        })
      }
    },
    //向上跳转
    moveUp(curScroll, totalScroll) {
      if (curScroll - this.step < totalScroll) {
        this.$refs.navMenuBody.scrollTop = totalScroll
        setTimeout(() => {
          this.isScroll = true
          this.isClicked = false
        }, 50)
      }
      else {
        this.$refs.navMenuBody.scrollTop = curScroll - this.step
        setTimeout(() => {
          this.moveUp(this.$refs.navMenuBody.scrollTop, totalScroll)
        })
      }
    },
    //滚动时联动标签高亮
    positionTab(e) {
      console.log('positionTab')
      if (this.isScroll) {
        for (let i = 0; i < this.offsetTopArr.length; i++) {
          if (this.$refs.navMenuBody.scrollTop >= this.offsetTopArr[i].offsetTop) {
            this.curTab = this.offsetTopArr[i].name
          }
        }
      }
    },
    // 顶部标签交互
    turnLeft() {
      this.topMove('left')
    },
    turnRight() {
      this.topMove('right')
    },
    topMove(dir) {
      clearInterval(this.scrollTimer)
      this.scrollTimer = {}
      this.scrollTimer = setInterval(() => {
        if (dir == 'right') {
          this.$refs.topScroll.scrollLeft = this.$refs.topScroll.scrollLeft + 8
        }
        else if (dir == 'left') {
          this.$refs.topScroll.scrollLeft = this.$refs.topScroll.scrollLeft - 8
        }
      }, 10)
    },
    showArrow() {
      this.$nextTick(() => {
        if (this.$refs.topScroll) {
          if (this.$refs.topScroll.offsetWidth < this.$refs.topScroll.scrollWidth) {
            this.isShowArrow = true
          }
          else {
            this.isShowArrow = false
          }
        }
      })
    },
    mousewheelFun(e) {
      if (e.wheelDeltaY > 0) {
        this.$refs.topScroll.scrollLeft = this.$refs.topScroll.scrollLeft - 32

      }
      else {
        this.$refs.topScroll.scrollLeft = this.$refs.topScroll.scrollLeft + 32
      }
    },
    // 收起锚点事件
    hiddenNav(){
      this.openMaoState=!this.openMaoState
    }
  },
  computed: {
    com() {
      const {
        height,
        hasSubtitle,
        menuPosition,
        childList,
        controlList,
        controlWidth
      } = this
      return {
        height,
        hasSubtitle,
        menuPosition,
        childList,
        controlList,
        controlWidth
      }
    }
  },
  watch: {
    //监听组件设置重新获取高度
    com: {
      handler(n, o) {
        this.$nextTick(() => {
          this.getOffsetHeight()
          this.showArrow()
        })
      },
      // immediate: true,  //刷新加载 立马触发一次handler
      deep: true  // 可以深度检测到 person 对象的属性值的变化
    }
  }
}

</script>

<style lang="scss" scoped>
@import './jsmart-navMenu.scss';
</style>
