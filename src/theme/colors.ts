// TODO: 在自己的标记文件中编写颜色和调色板的文档，并从这里添加链接

const palette = {
  neutral100: '#FFFFFF',
  neutral200: '#F4F2F1',
  neutral300: '#D7CEC9',
  neutral400: '#B6ACA6',
  neutral500: '#978F8A',
  neutral600: '#564E4A',
  neutral700: '#3C3836',
  neutral800: '#191015',
  neutral900: '#000000',

  primary100: '#F4E0D9',
  primary200: '#E8C1B4',
  primary300: '#DDA28E',
  primary400: '#D28468',
  primary500: '#C76542',
  primary600: '#A54F31',

  secondary100: '#DCDDE9',
  secondary200: '#BCC0D6',
  secondary300: '#9196B9',
  secondary400: '#626894',
  secondary500: '#41476E',

  accent100: '#FFEED4',
  accent200: '#FFE1B2',
  accent300: '#FDD495',
  accent400: '#FBC878',
  accent500: '#FFBB50',

  angry100: '#F2D6CD',
  angry500: '#C03403',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',
};

export const colors = {
  /**
   * 该调色板可供使用，但更喜欢使用名称。
   * 这只包括罕见的，一次性的情况。尽量使用语义名称。
   */
  palette,
  /**
   * 使某物透明的帮手。
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * 许多组件中的默认文本颜色。
   */
  text: palette.neutral800,
  /**
   * 辅助文本信息。
   */
  textDim: palette.neutral600,
  /**
   * 屏幕背景的默认颜色。
   */
  background: palette.neutral200,
  /**
   * 默认的边框颜色。
   */
  border: palette.neutral400,
  /**
   * 主着色。
   */
  tint: palette.primary500,
  /**
   * 线条用的颜色
   */
  separator: palette.neutral300,
  /**
   * 错误信息
   */
  error: palette.angry500,
  /**
   * 错误的背景。
   */
  errorBackground: palette.angry100,
};
