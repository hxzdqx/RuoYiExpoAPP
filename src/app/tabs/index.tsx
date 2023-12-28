import { Button, Text } from '@rneui/themed';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';
import { useUserStore, UserStore } from '@/store/userStore';

export default function Page() {
  const { name } = useUserStore() as UserStore;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>选项卡 一 {name}</Text>

      <Link href="/login" replace>
        跳转到登录
      </Link>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
