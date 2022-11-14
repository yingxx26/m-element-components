/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-02 17:33:44
 * @LastEditTime: 2022-11-03 14:51:44
 * @description: 
 */
// 列表的每一项
export interface ListItem { 
  // 头像
  avatar?: string;
  // 标题
  title?: string;
  // 描述
  desc?: string;
  //时间
  time?: string;
  // 标签内容
  tag?: string;
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
}

// 列表
export interface ListOptions { 
  title: string,
  content?:ListItem[]
}

// 操作选项
export interface ActionOptions { 
  icon?:string,
  text?:string
}