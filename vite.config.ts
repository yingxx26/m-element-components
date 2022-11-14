/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 10:19:32
 * @LastEditTime: 2022-11-03 17:56:39
 * @description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  server: {
    port:8080
  }
})
