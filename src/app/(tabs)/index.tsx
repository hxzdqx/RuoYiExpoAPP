import { Image, Text } from '@rneui/themed';
import { Redirect } from 'expo-router';
// import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { useUserStore } from '@/store/userStore';

const logoPng = require('@/assets/logo.png');

export default function Page() {
  const { token } = useUserStore();

  if (!token) {
    return (
      <View>
        <Redirect href="/login" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoPng} />

      <View style={styles.textArea}>
        <Text style={styles.title}>Hello RuoYi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 100,
    left: 'auto',
    right: 'auto',
    marginBottom: 25,
  },
  textArea: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#8f8f94',
  },
});
