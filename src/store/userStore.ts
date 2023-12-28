import { create } from 'zustand';

import Storage, { constant } from '@/utils/storage';
import { getToken, setToken, removeToken } from '@/utils/auth';
import type { UserInfo } from '@/api/login.type';
import { login, logout, getInfo } from '@/api/login';
// import { devtools, persist } from 'zustand/middleware';

export interface UserStore {
  name: string | null;
  avatar: string | null;
  token: string | null;
  roles: string[] | null;
  permissions: string[] | null;
  SET_TOKEN: () => void;
  SET_NAME: () => void;
  SET_AVATAR: () => void;
  SET_ROLES: () => void;
  SET_PERMISSIONS: () => void;
  Login: (userInfo: UserInfo) => Promise<void>;
}

export const useUserStore = create(async (set) => {
  const storage = new Storage();
  return {
    token: await getToken(),
    name: await storage.get(constant.name),
    avatar: await storage.get(constant.avatar),
    roles: await storage.getObj(constant.roles),
    permissions: await storage.getObj(constant.permissions),
    SET_TOKEN: (token: string) => set({ token }),
    SET_NAME: (name: string) => set({ name }),
    SET_AVATAR: (avatar: string) => set({ avatar }),
    SET_ROLES: (roles: string[]) => set({ roles }),
    SET_PERMISSIONS: (permissions: string[]) => set({ permissions }),
    Login: async (userInfo: UserInfo) => {
      const { password, code, uuid } = userInfo;
      const username = userInfo.username.trim();
      const res = await login(username, password, code, uuid);
      console.log(res);
      // setToken(res.token);
    },
  };
});
