/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 10:50:53
 * @LastEditTime: 2022-11-01 13:46:56
 * @description: 
 */
export const toLine = (value:string) => { 
  return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
}