/**
 * 这些类型表明您希望从API端点接收到的数据的形状，
 * 假设它是一个JSON对象。
 */
export interface EpisodeItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {
    link: string;
    type: string;
    length: number;
    duration: number;
    rating: { scheme: string; value: string };
  };
  categories: string[];
}

export interface ApiFeedResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: EpisodeItem[];
}

/**
 * 用于配置apisauce的选项。
 */
export interface ApiConfig {
  /**
   * api的URL。
   */
  url: string;

  /**
   * 请求超时前的毫秒。
   */
  timeout: number;
}
