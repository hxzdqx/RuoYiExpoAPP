import { Text, Input, Button, CheckBox } from '@rneui/themed';
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { View } from 'react-native';

import { getUserProfile, updateUserProfile } from '@/api/system/user';
import { globalStyles } from '@/styles/global';

interface UserType {
  nickName: string;
  email: string;
  phonenumber: string;
  sex: '0' | '1';
  [key: string]: string;
}

export default function Page() {
  const [user, setUser] = useState<UserType>({
    nickName: '',
    email: '',
    phonenumber: '',
    sex: '0',
  });
  const sexs: { text: string; value: '0' | '1' }[] = [
    { text: '男', value: '0' },
    { text: '女', value: '1' },
  ];
  /**
   * @description: 获取用户信息
   */
  const getUser = async () => {
    const { data } = await getUserProfile();
    if (data.code === 200) {
      setUser(data.data);
    }
  };
  /**
   * @description: 修改用户信息
   */
  const handleSubmit = async () => {
    await updateUserProfile(user);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={globalStyles.container}>
      <Stack.Screen options={{ title: '编辑资料' }} />
      <Input
        value={user.nickName}
        onChangeText={(value) => setUser({ ...user, nickName: value })}
        label="用户昵称"
        placeholder="请输入昵称"
      />
      <Input
        value={user.phonenumber}
        label="手机号码"
        placeholder="请输入手机号码"
        onChangeText={(value) => setUser({ ...user, phonenumber: value })}
      />
      <Input
        value={user.email}
        label="邮箱 "
        placeholder="请输入邮箱"
        onChangeText={(value) => setUser({ ...user, email: value })}
      />
      <View style={{ flexDirection: 'row', ...globalStyles.containerBox }}>
        <Text>性别</Text>
        {sexs.map((item) => (
          <CheckBox
            checked={user.sex === item.value}
            title={item.text}
            onPress={() => setUser({ ...user, sex: item.value })}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        ))}
      </View>
      <View style={globalStyles.containerBox}>
        <Button title="提交" color="#007aff" onPress={handleSubmit} />
      </View>
    </View>
  );
}
