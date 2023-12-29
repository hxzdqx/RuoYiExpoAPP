import { Text } from '@rneui/themed';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Stack.Screen options={{ title: '头像' }} />
      <Text>头像</Text>
    </View>
  );
}
