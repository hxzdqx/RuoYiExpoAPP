import { Text, Image, ListItem } from '@rneui/themed';
import Constants from 'expo-constants';
import { Stack } from 'expo-router';
import { View } from 'react-native';

import { globalStyles } from '@/styles/global';

export default function Page() {
  const url = process.env.EXPO_PUBLIC_SITE_URL;
  const version = Constants.expoConfig?.version;
  return (
    <View style={globalStyles.container}>
      <Stack.Screen options={{ title: '关于我们' }} />
      <Text>关于我们</Text>
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 75, height: 75 }} source={require('@/assets/logo200.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>若依移动端</Text>
      </View>
      <View style={globalStyles.containerBox}>
        <View style={globalStyles.contentSection}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>版本信息</ListItem.Title>
              <ListItem.Subtitle>{version}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem topDivider>
            <ListItem.Content>
              <ListItem.Title>官方邮箱</ListItem.Title>
              <ListItem.Subtitle>ruoyi@xx.com</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem topDivider>
            <ListItem.Content>
              <ListItem.Title>服务热线</ListItem.Title>
              <ListItem.Subtitle>400-999-9999</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem topDivider>
            <ListItem.Content>
              <ListItem.Title>公司网站</ListItem.Title>
              <ListItem.Subtitle>{url}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </View>
    </View>
  );
}
