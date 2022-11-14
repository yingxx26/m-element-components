<!--
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-06 16:14:25
 * @LastEditTime: 2022-11-06 16:50:37
 * @description: 
-->
<template>
  <div>
    <m-progress :percentage="50" isAnimate="true"></m-progress>
    <br>
    <br>
    <m-progress :percentage="100" status="success" isAnimate="true"></m-progress>
    <br>
    <br>
    <m-progress :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning" isAnimate="true"></m-progress>
    <br>
    <br>
    <m-progress type="circle" :percentage="50" status="success" isAnimate="true"></m-progress>
  </div>
</template>