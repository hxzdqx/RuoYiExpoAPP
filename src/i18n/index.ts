import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import en from './en';
import zh from './zh';

// 为您想要支持的不同语言设置键值对。t.
const translations = {
  zh,
  en,
};
const i18n = new I18n(translations);

// 在应用程序开始时设置一次区域设置。
i18n.locale = Localization.locale;

// 当一个值从一种语言中丢失时，它将返回到另一种语言，其中包含该键。
i18n.enableFallback = true;
// 要查看回退机制，取消下面一行的注释，强制应用程序使用日语。
// i18n.locale = 'ja';

export default i18n;
