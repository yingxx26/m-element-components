<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-07 09:47:37
 * @LastEditTime: 2022-11-07 15:37:43
 * @description: 
-->
<template>
    <div class="m-choose-city">
      <el-popover
        v-model:visible="visible"
        @show="showPopover"
        placement="bottom-start" :width="400" trigger="click"
      >
        <template #reference>
          <div class="reference">
            <div>{{result}}</div>
            <div>
              <el-icon-arrowup :class="{'rotate':visible}"></el-icon-arrowup>
            </div>
          </div>
        </template>
        <div class="container">
          <el-row>
            <el-col :span="8">
              <el-radio-group v-model="radioValue" @change="changeRadio" size="small">
                <el-radio-button label="按城市"></el-radio-button>
                <el-radio-button label="按省份"></el-radio-button>
              </el-radio-group>
            </el-col>
            <el-col :offset="1" :span="15">
              <el-select
                v-if="showSelect"
                @change="changeSelect"
                placeholder="请搜索城市"
                size="small"
                v-model="selectValue"
                clearable
                filterable
                @clear="clear"
                :filter-method="filterMethod"
              >
                <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <template v-if="radioValue === '按城市'">
            <div class="city">
              <!-- 字母区域 -->
              <div class="city-item"  v-for="(item,index) in Object.keys(cities)" @click="clickChat(item)" :key="index">
                {{item}}
              </div>
            </div>
            <el-scrollbar max-height="300px">
              <template v-for="(value,key) in cities" :key="key">
                <el-row :id="key">
                  <el-col :span="2">
                    <div>{{key}}:</div>
                  </el-col>
                  <el-col :span="22" class="city-name">
                    <div class="city-name-item" v-for="(el) in value" :key="el.id" @click="clickItem(el)">
                      {{el.name}}
                    </div>
                  </el-col>
                </el-row>
              </template>
            </el-scrollbar>
          </template>
          <template v-else>
            <div class="province">
              <!-- 字母区域 -->
              <div class="province-item"  v-for="(item,index) in Object.keys(provinces)" @click="clickChat(item)" :key="index">
                {{item}}
              </div>
            </div>
            <el-scrollbar max-height="300px">
              <template v-for="(item, index) in Object.values(provinces)" :key="index">
                <template v-for="(item1, index1) in item" :key="index1">
                  <el-row style="margin-bottom: 10px;" :id="item1.id">
                    <el-col :span="3">{{ item1.name }}:</el-col>
                    <el-col :span="21" class="province-name">
                      <div
                        class="province-name-item"
                        v-for="(item2, index2) in item1.data"
                        :key="index2"
                      >
                        <div @click="clickProvince(item2)">{{ item2 }}</div>
                      </div>
                    </el-col>
                  </el-row>
                </template>
              </template>
            </el-scrollbar>
          </template>
        </div>
      </el-popover>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref,watch } from 'vue'
import city from '../lib/cities'
import { City,Province } from './types'
import province from '../lib/province.json'

// 分发事件
let emits = defineEmits(['changeCity', "changeProvince"])

const showSelect = ref<boolean>(false)
const result = ref<string>('请选择')
const visible = ref<boolean>(false)
const radioValue = ref<string>('按城市')
const selectValue = ref<string>('')
// 所有的城市数据
let allCity = ref<City[]>([])
// 下拉框显示城市的数据
let options = ref<City[]>([])


const cities = ref(city.cities)
// 所有省份的数据
const provinces = ref(province)

const searchValue = ref<string>('')

watch(() => searchValue.value, (val) => { 
  filterMethod(val)
})

const clear = () => { 
  searchValue.value = ''
  let values = Object.values(cities.value).flat(2)
  options.value = values
}

const changeRadio = () => {
  showSelect.value = false
  //  flat() 将二维数组扁平化
  let values = Object.values(cities.value).flat(2)
  options.value = values
  showSelect.value = true
}

const showPopover = () => { 
  showSelect.value = false
  //  flat() 将二维数组扁平化
  let values = Object.values(cities.value).flat(2)
  options.value = values
  showSelect.value = true
}

// 自定义搜索过滤 
const filterMethod = (val: string) => { 
  searchValue.value = val 
  let values = Object.values(cities.value).flat(2)
  if (val === '') { 
     //  flat() 将二维数组扁平化
    options.value = values
  } else if(radioValue.value === '按城市') { 
    options.value = values.filter(item => { 
        return item.name.includes(val) || item.spell.includes(val)
      })
    } else { 
      options.value = values.filter(item => { 
        return item.name.includes(val)
      })
    }
}

const changeSelect = (val:number) => { 
  const city = allCity.value.find(item => item.id === val)!
  if (city) { 
    result.value = city.name
    if(radioValue.value === '按城市') { 
      emits('changeCity', city)
      visible.value = false
    } else { 
      emits('changeProvince', city.name)
      visible.value = false
    }
  }
  
}

// 点击每个城市
const clickItem = (item:City) => { 
  result.value = item.name
  visible.value = false
  emits('changeCity',item)
}

// 点击字母区域
const clickChat = (item: string) => { 
  const el = document.getElementById(item)
  if (el) { 
    el.scrollIntoView()
  }
}

const clickProvince = (item: string) => {
  // 给结果赋值
  result.value = item
  // 关闭弹出层
  visible.value = false
  emits('changeProvince', item)
}


onMounted(() => {
  //  flat() 将二维数组扁平化
  let values = Object.values(cities.value).flat(2)
  allCity.value = values
  options.value = values
  showSelect.value = true
})


</script>
<style lang="scss" scoped>
.m-choose-city{
  
  .reference{
    display: flex;
    align-items: center;
    width: fit-content;//内容有多宽，宽有多宽
    cursor: pointer;
    svg{
      width: 1em;
      height: 1em;
      transition: all 0.25s linear;
    }
    .rotate{
      transform: rotate(180deg);
    }
  }
  
  
  
}
.container{
    padding-bottom: 10px;
    .city,.province{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 10px;
      margin-bottom: 10px;
      .city-item,.province-item {
        padding: 3px 6px;
        margin-right: 8px;
        border: 1px solid #eee;
        margin-bottom: 8px;
        cursor: pointer;
      }
    }
    

    .city-name,.province-name{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 10px;
      .city-name-item {
        margin-right: 6px;
        margin-bottom: 6px;
        cursor: pointer;
        
      }
      .province-name-item {
        margin-right: 6px;
        margin-bottom: 6px;
        cursor: pointer;
      }
    }
  }
</style>