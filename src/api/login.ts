import type { ApiResponse } from 'apisauce';

import request from '@/utils/request';

/**
 * @description: 登录
 */
export function login(
  username: string,
  password: string,
  code: string,
  uuid: string,
): Promise<ApiResponse<Record<string, any>>> {
  return request.post(
    '/login',
    {
      username,
      password,
      code,
      uuid,
    },
    { headers: { isToken: false } },
  );
}

/**
 * @description: 注册
 */
export function register(data: Record<string, any>): Promise<ApiResponse<Record<string, any>>> {
  return request.post('/register', data, { headers: { isToken: false } });
}

/**
 * @description: 获取用户详细信息
 */
export function getInfo(): Promise<ApiResponse<Record<string, any>>> {
  return request.get('/getInfo');
}

/**
 * @description: 退出登录
 */
export function logout(): Promise<ApiResponse<Record<string, any>>> {
  return request.post('/logout');
}

/**
 * @description: 获取验证码
 */
export function getCodeImg(): Promise<ApiResponse<Record<string, any>>> {
  return request.get('/captchaImage', {}, { timeout: 20000, headers: { isToken: false } });
}
