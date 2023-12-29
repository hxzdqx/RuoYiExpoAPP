import { Text, Card } from '@rneui/themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: params.title?.toString() }} />
      <Card>
        <Card.Title>{params.title}</Card.Title>
        <Card.Divider />
        <Text>{params.content}</Text>
      </Card>
    </View>
  );
}
