import request from '@/utils/request';

/**
 * @description: 用户密码重置
 */
export function updateUserPwd(oldPassword: string, newPassword: string) {
  return request.put('/system/user/profile/updatePwd', {
    oldPassword,
    newPassword,
  });
}

/**
 * @description: 查询用户个人信息
 */
export function getUserProfile() {
  return request.get('/system/user/profile');
}

/**
 * @description: 修改用户个人信息
 */
export function updateUserProfile(data: Record<string, any>) {
  return request.put('/system/user/profile', data);
}
