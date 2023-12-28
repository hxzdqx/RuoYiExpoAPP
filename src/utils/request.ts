import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { ApiConfig } from './api.types';
import { getToken } from './auth';

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
    // this.apisauce.addAsyncResponseTransform((response) => async () => {
    //   if (response.ok) {
    //     return response.data;
    //   }
    // });
  }

  getApisauce() {
    return this.apisauce;
  }
}

export default new Api().getApisauce();
