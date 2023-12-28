import Stotafe from './storage';

const storage = new Stotafe();
const TokenKey = 'App-Token';
/**
 * @description: 获取token
 * @returns {string}
 */
export function getToken() {
  return storage.get(TokenKey);
}

/**
 * @description: 设置token
 * @param {string} token
 * @returns {void}
 */
export function setToken(token: string) {
  return storage.set(TokenKey, token);
}

/**
 * @description: 删除token
 * @returns {void}
 */
export function removeToken() {
  return storage.remove(TokenKey);
}
