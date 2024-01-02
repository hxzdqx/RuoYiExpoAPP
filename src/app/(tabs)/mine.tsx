import { Text, Image, ListItem } from '@rneui/themed';
import { Link, useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // https://ionic.io/ionicons

import { useUserStore } from '@/store/userStore';
import { globalStyles } from '@/styles/global';

function TopInfo() {
  const { name, avatar } = useUserStore((state) => {
    return {
      name: state.name,
      avatar: state.avatar,
    };
  });
  console.log(name, avatar);
  console.log('头像', avatar);
  return (
    <View style={styles.headerSection}>
      <View style={styles.flexBox}>
        <View style={styles.avatarBox}>
          {avatar ? (
            <Image source={avatar!} style={styles.avatar} />
          ) : (
            <Icon name="person-circle-outline" size={60} color="#fff" />
          )}
          {name ? (
            <Text style={globalStyles.textWhite}>用户名:{name}</Text>
          ) : (
            <Link href="/login" replace>
              <Text style={globalStyles.textWhite}>点击登录</Text>
            </Link>
          )}
        </View>
        <View style={styles.infoBox}>
          <Link href="/my/info">
            <View style={{ flexDirection: 'row' }}>
              <Text style={globalStyles.textWhite}>个人信息</Text>
              <Icon name="chevron-forward-outline" color="#fff" size={20} />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}

export default function Page() {
  const router = useRouter();
  // useEffect(() => {}, []);
  /**
   * @description: 跳转
   */

  const goTo = (path: string) => {
    router.push(path);
  };
  return (
    <View style={globalStyles.container}>
      {/* 顶部个人信息栏 */}
      <TopInfo />
      <View style={styles.contentSection}>
        <View style={styles.mineActions}>
          <View style={styles.actionItem}>
            <Icon name="person-add-outline" size={32} color="#e03997" />
            <Text style={styles.text}>交流群</Text>
          </View>
          <View style={styles.actionItem}>
            <Icon name="headset-outline" size={32} color="#0081ff" />
            <Text style={styles.text}>在线客服</Text>
          </View>
          <View style={styles.actionItem}>
            <Icon name="chatbubbles-outline" size={32} color="#9c26b0" />
            <Text style={styles.text}>反馈社区</Text>
          </View>
          <View style={styles.actionItem}>
            <Icon name="thumbs-up-outline" size={32} color="#39b54a" />
            <Text style={styles.text}>点赞我们</Text>
          </View>
        </View>
        <View style={styles.menuList}>
          <ListItem onPress={() => goTo('/my/edit')}>
            <Icon name="person-outline" size={20} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>编辑资料</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#c0c0c0" />
          </ListItem>
          <ListItem topDivider onPress={() => goTo('/my/help')}>
            <Icon name="help-circle-outline" size={20} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>常见问题</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#c0c0c0" />
          </ListItem>
          <ListItem topDivider onPress={() => goTo('/my/about')}>
            <Icon name="heart-outline" size={20} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>关于我们</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#c0c0c0" />
          </ListItem>
          <ListItem topDivider onPress={() => goTo('/my/setting')}>
            <Icon name="settings-outline" size={20} color="#007AFF" />
            <ListItem.Content>
              <ListItem.Title>应用设置</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#c0c0c0" />
          </ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    width: '100%',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 45,
    paddingLeft: 15,
    backgroundColor: '#3c96f3',
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarBox: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  infoBox: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  contentSection: {
    width: '100%',
    marginTop: -50,
  },
  mineActions: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    margin: 15,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  actionItem: {
    flex: 1,
    justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
  },
  text: {
    fontSize: 13,
    marginHorizontal: 8,
    marginVertical: 0,
  },
  menuList: {
    margin: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
