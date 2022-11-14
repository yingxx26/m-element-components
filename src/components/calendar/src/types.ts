/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-10 15:01:44
 * @LastEditTime: 2022-11-10 15:04:08
 * @description: 
 */
export interface EventItem { 
  title: string,
  // 开始时间
  start: string,
  // 结束时间
  end: string,
  // 是否可拖动编辑
  editable?: boolean
}