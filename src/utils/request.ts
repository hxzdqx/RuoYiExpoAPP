import { ApisauceInstance, create } from 'apisauce';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

import { ApiConfig } from './api.types';
import { getToken, removeToken } from './auth';
import errorCode from './errorCode';

import Storage from '@/utils/storage';

/**
 * @description: 配置apisauce实例。
 */
export const defaultApiConfig: ApiConfig = {
  url: process.env.EXPO_PUBLIC_BASE_URL!,
  timeout: 10000,
};

/**
 * 管理对API的所有请求。您可以使用这个类构建需要从后端API调用的各种请求。
 */
export class Api {
  apisauce: ApisauceInstance;
  config: ApiConfig;
  router = useRouter();
  storage = new Storage();

  /**
   * 设置API实例。保持轻量级!
   */
  constructor(config: ApiConfig = defaultApiConfig) {
    this.config = config;
    this.apisauce = create({
      baseURL: config.url,
      timeout: config.timeout,
      headers: {
        Accept: 'application/json',
      },
    });
    this.apisauce.addAsyncRequestTransform((request) => async () => {
      // 是否需要设置token
      const isToken = (request.headers || {}).isToken === false;
      request.headers = request.headers || {};
      const _token = await getToken();
      if (!isToken && _token) {
        request.headers.Authorization = `Bearer ${_token}`;
      }
    });
    this.apisauce.addAsyncResponseTransform((response) => async () => {
      if (response.ok) {
        const code: number = response.data.code || 200;
        const msg = errorCode[code.toString()] || response.data.msg || errorCode['default'];
        switch (code) {
          case 401:
            // token过期
            Alert.alert('提示', '登录状态已过期，请重新登录?', [
              {
                text: '确认',
                onPress: () => {
                  removeToken();
                  this.storage.clean();
                  this.router.replace('/login');
                },
                style: 'destructive',
              },
            ]);
            break;
          case 500:
            Alert.alert('提示', msg);
            break;
          case 200:
            break;
          default:
            Alert.alert('提示', msg);
            break;
        }
      }
    });
  }

  getApisauce() {
    return this.apisauce;
  }
}

export default new Api().getApisauce();
