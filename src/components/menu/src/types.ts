/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-03 16:08:47
 * @LastEditTime: 2022-11-06 15:08:08
 * @description: 
 */
export interface MenuItem { 
  //图标
  icon?: string;
  // 处理后的图标
  i?: any;
  // 名字
  name: string;
  // 标识
  index: string;
  length?: number;
  // 导航的子菜单
  children:MenuItem
}