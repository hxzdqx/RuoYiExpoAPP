import { ListItem, Button } from '@rneui/themed';
import { Stack, useRouter } from 'expo-router';
import { View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // https://ionic.io/ionicons

import { useUserStore } from '@/store/userStore';
import { globalStyles } from '@/styles/global';

export default function Page() {
  const LogOut = useUserStore((state) => state.LogOut);
  const router = useRouter();
  /**
   * @description: 退出登录
   */
  const handleLogout = () => {
    Alert.alert('提示', '确定退出登录吗？', [
      {
        text: '取消',
        style: 'cancel',
        onPress: () => {},
      },
      {
        text: '确定',
        style: 'destructive',
        onPress: async () => {
          await LogOut();
          router.replace('/login');
        },
      },
    ]);
  };
  /**
   * 提示
   */
  const handleShowToast = () => {
    Alert.alert('提示', '暂未开放');
  };
  return (
    <View style={globalStyles.container}>
      <Stack.Screen options={{ title: '应用设置' }} />
      <View style={globalStyles.containerBox}>
        <View style={globalStyles.contentSection}>
          <ListItem onPress={handleShowToast}>
            <Icon name="lock-closed-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>修改密码</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#c0c0c0" />
          </ListItem>
          <ListItem topDivider onPress={handleShowToast}>
            <Icon name="refresh-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>检查更新</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#c0c0c0" />
          </ListItem>
          <ListItem topDivider onPress={handleShowToast}>
            <Icon name="trash-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>清理缓存</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#c0c0c0" />
          </ListItem>
        </View>
        <View style={{ ...globalStyles.contentSection, marginTop: 20 }}>
          <Button onPress={handleLogout}>退出登录</Button>
        </View>
      </View>
    </View>
  );
}
