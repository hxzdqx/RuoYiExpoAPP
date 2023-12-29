import { Text } from '@rneui/themed';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Stack.Screen options={{ title: '编辑资料' }} />
      <Text>编辑资料</Text>
    </View>
  );
}
