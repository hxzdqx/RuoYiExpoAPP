import { ScrollViewStyleReset } from 'expo-router/html';

/**
 * 该文件仅用于web，用于在静态呈现期间为每个web页面配置根HTML。
 * 此函数的内容仅在Node.js环境中运行，并且不能访问DOM或浏览器api。
 */
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/*
          这个视口禁止缩放，这使得移动网站更像一个本地应用程序。
          然而，这确实降低了内置的可访问性。如果您想启用缩放，请使用以下命令:
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
         */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1.00001,viewport-fit=cover"
        />
        {/*
          禁用网页上的正文滚动。这使得ScrollView组件的工作方式更接近于它们在native上的工作方式。
          然而，对于移动网页来说，正文滚动通常是不错的选择。如果您想启用它，请删除这一行。
        */}
        <ScrollViewStyleReset />

        {/* 使用原始的CSS样式作为逃生舱口，以确保背景颜色在黑暗模式下不会闪烁。 */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* 添加任何额外的<head>元素，你想在web上全局可用… */}
      </head>
      <body>
        {children}
        {/* 添加任何额外的<body>元素，你想在web上全局可用… */}
      </body>
    </html>
  );
}

/**
 * 响应的背景
 */
const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
