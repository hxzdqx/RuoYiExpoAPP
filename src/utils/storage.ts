import AsyncStorage from '@react-native-async-storage/async-storage';

export enum constant {
  avatar = 'vuex_avatar',
  name = 'vuex_name',
  roles = 'vuex_roles',
  permissions = 'vuex_permissions',
}

/**
 * @description: 存储变量名
 */
export const storageKey = 'storage_data';

/**
 * @description: 存储节点变量名
 */
export const storageNodeKeys = [
  constant.avatar,
  constant.name,
  constant.roles,
  constant.permissions,
];

class Stotafe {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {}

  set(key: string, value: string): void {
    try {
      AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  }

  setObj(key: string, value: object): void {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  get(key: string): Promise<string | null> {
    try {
      return AsyncStorage.getItem(key);
    } catch (error) {
      console.error(error);
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(null);
    }
  }

  async getObj(key: string): Promise<object | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    } catch (error) {
      console.error(error);
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(null);
    }
  }

  remove(key: string): void {
    try {
      AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }

  clean(): void {
    try {
      AsyncStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }
}

export default Stotafe;
