/*
 * @Author: your name
 * @Date: 2021-12-14 13:59:34
 * @LastEditTime: 2022-01-20 15:57:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ant-design-vue-pro\src\utils\validator.js
 */
// 邮箱验证
export function validateEmail(rule, value, callbackFn) {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  if (value !== undefined && value !== '' && !reg.test(value)) {
    callbackFn('请输入正确的邮箱');
    return;
  }
  callbackFn();
}
export function validateClientId(rule, value, callbackFn) {
  const reg = /^[A-Za-z]+$/;
  if (!reg.test(value)) {
    callbackFn('只可输入英文字母');
    return;
  }
  callbackFn();
}
