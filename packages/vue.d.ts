/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-11 11:03:55
 * @LastEditTime: 2022-11-11 11:47:10
 * @description: 
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}