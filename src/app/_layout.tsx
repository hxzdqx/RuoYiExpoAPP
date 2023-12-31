// 布局路由
import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { DarkTheme, DefaultTheme } from '@react-navigation/native';
// =============== 字体 =================
import { createTheme, ThemeProvider } from '@rneui/themed';
import { useFonts } from 'expo-font';
// =================================================
import { SplashScreen, Stack, useFocusEffect, usePathname, useRouter } from 'expo-router';
import { useEffect } from 'react';
// import { useColorScheme } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import { useUserStore } from '@/store/userStore';
import { getToken } from '@/utils/auth';
export {
  // 捕获布局组件抛出的任何错误。
  ErrorBoundary,
} from 'expo-router';

/**
 * 不稳定的设置
 */
export const unstable_settings = {
  // 确保在' /modal '上重新加载时保留一个后退按钮。
  initialRouteName: '(tabs)',

  mine: {
    // 确保在' /mine '上重新加载时保留一个后退按钮。
    initialRouteName: 'info',
  },
};

// 防止启动画面自动隐藏之前的资产加载完成。
SplashScreen.preventAutoHideAsync();

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

/**
 * @description: 登录页
 */
const loginPage = '/login';

const whiteList = ['/login', '/register', '/common/webview'];

/**
 * @description: 检查地址白名单
 * @param url
 * @returns
 */
function checkWhite(url: string) {
  const path = url.split('?')[0];
  return whiteList.includes(path);
}

export default function RootLayout() {
  const storeInit = useUserStore((state) => state.init);
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo路由器使用错误边界来捕获导航树中的错误。
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  storeInit();

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const pathname = usePathname();
  const router = useRouter();
  useFocusEffect(() => {
    getToken().then((token) => {
      if (token) {
        if (pathname === loginPage) {
          router.replace('/');
        }
        return null;
      } else {
        if (checkWhite(pathname)) {
          return;
        }
        router.replace(loginPage);
      }
    });

    console.log('focus', pathname);
  });

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider theme={theme}>
        <Stack screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ title: '模拟页', headerTitleAlign: 'center', presentation: 'modal' }}
          />
          <Stack.Screen
            name="login"
            options={{
              title: '登录',
              presentation: 'fullScreenModal',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name="my/info" options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="common/textview" options={{ headerTitleAlign: 'center' }} />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
