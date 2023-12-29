import { ListItem } from '@rneui/themed';
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // https://ionic.io/ionicons

import { getUserProfile } from '@/api/system/user';
import { globalStyles } from '@/styles/global';

export default function Page() {
  const [user, setUser] = useState<Record<string, any>>({});
  const [roleGroup, setRoleGroup] = useState('');
  const [postGroup, setPostGroup] = useState('');
  const getUser = async () => {
    try {
      const { data } = (await getUserProfile()) as any;
      setUser(data.data);
      setRoleGroup(data.roleGroup);
      setPostGroup(data.postGroup);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={globalStyles.container}>
      <Stack.Screen options={{ title: '个人信息' }} />
      <View style={globalStyles.containerBox}>
        <View style={globalStyles.contentSection}>
          <ListItem>
            <Icon name="person-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>昵称</ListItem.Title>
              <ListItem.Subtitle>{user.nickName ?? ''}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem topDivider>
            <Icon name="call-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>手机号码</ListItem.Title>
              <ListItem.Subtitle>{user.phonenumber ?? ''}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem topDivider>
            <Icon name="mail-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>邮箱</ListItem.Title>
              <ListItem.Subtitle>{user.email ?? ''}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem topDivider>
            <Icon name="walk-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>岗位</ListItem.Title>
              <ListItem.Subtitle>{postGroup ?? ''}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem topDivider>
            <Icon name="person-add-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>角色</ListItem.Title>
              <ListItem.Subtitle>{roleGroup ?? ''}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem topDivider>
            <Icon name="calendar-outline" size={32} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>创建日期</ListItem.Title>
              <ListItem.Subtitle>{user.createTime ?? ''}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </View>
    </View>
  );
}
