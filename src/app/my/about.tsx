import { Text } from '@rneui/themed';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Stack.Screen options={{ title: '关于我们' }} />
      <Text>关于我们</Text>
    </View>
  );
}
