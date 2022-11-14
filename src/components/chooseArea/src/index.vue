<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 16:16:22
 * @LastEditTime: 2022-11-01 18:14:11
 * @description: 
-->
<template>
  <div>
    <el-select v-model="province" clearable placeholder="请选择省">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select v-model="city" clearable  :disabled="!province" placeholder="请选择城市">
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select v-model="county" clearable :disabled="!province || !city" placeholder="请选择区/县">
      <el-option
        v-for="item in selectCounty"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import { watch, ref } from 'vue'
import allAreas from '../lib/pca-code.json'

console.log(allAreas, 'allAreas')

interface Data { 
  name: string | 0 | undefined,
  code: string,
}

interface AreaItem{ 
  name: string,
  code: string,
  children?:AreaItem[]
}

const emits = defineEmits(['change'])

const areas = ref(allAreas)

const province = ref<string>('')
const city = ref<string>('')
const county = ref<string>('')

const selectCity = ref<AreaItem[]>([])
const selectCounty = ref<AreaItem[]>([])


watch(() => province.value, (val) => { 
  if (val) { 
    let cities = areas.value.find(item => item.code === province.value)
    // !表示一定会有
    selectCity.value = cities?.children!
    city.value = ''
    county.value = ''
  }
})

watch(() => city.value, (val) => { 
  if (val) { 
    let cities = selectCity.value.find((item: AreaItem) => item.code === city.value)
    // !表示一定会有
    selectCounty.value = cities?.children!
    county.value = ''
  }
})

watch(() => county.value, (val) => { 
  if (val) { 
    let provinceData:Data = {
      code: province.value,
      name: (areas.value.find(item => item.code === province.value))?.name
    }
    
    let cityData:Data = {
      code: city.value,
      name: selectCity.value.length && (selectCity.value.find(item => item.code === city.value))?.name
    }
    let countyData:Data = {
      code: val,
      name: selectCounty.value.length && (selectCounty.value.find(item => item.code === county.value))?.name
    }
    emits('change', {province:provinceData,city:cityData,county:countyData})
  }
})


  
</script>

