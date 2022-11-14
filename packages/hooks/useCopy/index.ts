/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 15:53:33
 * @LastEditTime: 2022-11-01 16:12:36
 * @description: 
 */
/**
 * 点击复制
 */
import { ElMessage } from 'element-plus'
export const useCopy = (text:string) => { 
  let input = document.createElement('input')

  input.value = text

  document.body.appendChild(input)
  //选择输入框操作
  input.select()
  // 执行复制操作
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功！')
}