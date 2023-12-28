// 外部链接
import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform } from 'react-native';

export function ExternalLink(
  props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string },
) {
  return (
    <Link
      hrefAttrs={{
        // 在web上，在新选项卡中启动链接。
        target: '_blank',
      }}
      {...props}
      href={props.href}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          // 防止在本机上链接到默认浏览器的默认行为。
          e.preventDefault();
          // 在应用内浏览器中打开链接。
          WebBrowser.openBrowserAsync(props.href);
        }
      }}
    />
  );
}
