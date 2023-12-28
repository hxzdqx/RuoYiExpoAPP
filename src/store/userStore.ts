import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { login, logout, getInfo } from '@/api/login';
import type { UserInfo } from '@/api/login.type';
import { getToken, setToken, removeToken } from '@/utils/auth';
import Storage, { constant } from '@/utils/storage';
// import { devtools, persist } from 'zustand/middleware';

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL!;

const storage = new Storage();

interface UserState {
  token: string | null;
  name: string | null;
  avatar: string | null;
  roles: string[];
  permissions: string[];
  Login: (userInfo: UserInfo) => Promise<any>;
  GetInfo: () => Promise<any>;
  LogOut: () => Promise<any>;
  init: () => Promise<void>;
}

export const useUserStore = create(
  immer<UserState>((set) => ({
    token: null,
    name: null,
    avatar: null,
    roles: [],
    permissions: [],
    /**
     * @description:登录
     * @param userInfo {username: string, password: string, code: string, uuid: string}
     * @returns {Promise}
     */
    Login: async (userInfo: UserInfo) => {
      const { password, code, uuid } = userInfo;
      const username = userInfo.username.trim();
      try {
        const { data } = await login(username, password, code, uuid);
        setToken(data!.token);
        set((state) => {
          state.token = data!.token;
        });
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
      // setToken(res.token);
    },
    /**
     * @description: 获取用户信息
     */
    GetInfo: async () => {
      try {
        const { data } = await getInfo();
        const user = data!.user;
        const _avatar =
          user == null || user.avatar === '' || user.avatar == null
            ? require('@/assets/images/profile.jpg')
            : baseUrl + user.avatar;
        const _username =
          user == null || user.userName === '' || user.userName == null ? '' : user.userName;
        if (data!.roles && data!.roles.length > 0) {
          set((state) => {
            state.roles = data!.roles;
            state.permissions = data!.permissions;
          });
        } else {
          set((state) => {
            state.roles = ['ROLE_DEFAULT'];
          });
        }
        set((state) => {
          state.name = _username;
          state.avatar = _avatar;
        });

        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    /**
     * @description:退出登录
     */
    LogOut: async (): Promise<any> => {
      try {
        await logout();
        set((state) => {
          state.token = '';
          state.name = '';
          state.avatar = '';
          state.roles = [];
          state.permissions = [];
        });
        removeToken();
        storage.clean();
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    },
    init: async (): Promise<void> => {
      const token = await getToken();
      const name = await storage.get(constant.name);
      const avatar = await storage.get(constant.avatar);
      const roles = await storage.getObj(constant.roles);
      const permissions = await storage.getObj(constant.permissions);

      set((state) => {
        state.token = token;
        state.name = name;
        state.avatar = avatar;
        if (roles && roles.length > 0) {
          state.roles = roles;
          state.permissions = permissions;
        }
        // state.roles = roles;
        // state.permissions = permissions;
      });
    },
  })),
);
