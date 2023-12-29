import { Text, ListItem } from '@rneui/themed';
import { Stack, useRouter } from 'expo-router';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // https://ionic.io/ionicons

import { globalStyles } from '@/styles/global';

export default function Page() {
  const router = useRouter();
  const list = [
    {
      icon: 'logo-github',
      title: '若依问题',
      childList: [
        {
          title: '若依开源吗？',
          content: '开源',
        },
        {
          title: '若依可以商用吗？',
          content: '可以',
        },
        {
          title: '若依官网地址多少？',
          content: 'http://ruoyi.vip',
        },
        {
          title: '若依文档地址多少？',
          content: 'http://doc.ruoyi.vip',
        },
      ],
    },
    {
      icon: 'help-circle-outline',
      title: '其他问题',
      childList: [
        {
          title: '如何退出登录？',
          content: '请点击[我的] - [应用设置] - [退出登录]即可退出登录',
        },
        {
          title: '如何修改用户头像？',
          content: '请点击[我的] - [选择头像] - [点击提交]即可更换用户头像',
        },
        {
          title: '如何修改登录密码？',
          content: '请点击[我的] - [应用设置] - [修改密码]即可修改登录密码',
        },
      ],
    },
  ];
  /**
   * @description: 点击事件
   */
  const handleTo = (data: Record<string, string>) => {
    console.log(data);
    router.push(`/common/textview?title=${data.title}&content=${data.content}`);
  };
  return (
    <View style={globalStyles.container}>
      <Stack.Screen options={{ title: '常见问题' }} />
      <View style={globalStyles.containerBox}>
        {list.map((item) => (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name={item.icon} size={20} />
              <Text> {item.title} </Text>
            </View>

            <View style={{ ...globalStyles.contentSection, marginVertical: 15 }}>
              {item.childList.map((child, index2) => (
                <ListItem topDivider={index2 !== 0} onPress={() => handleTo(child)}>
                  <ListItem.Content>
                    <ListItem.Title>{child.title}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </>
        ))}
      </View>
    </View>
  );
}
