import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function NotFound() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-serif text-brand-primary">Not Found</Text>
    </View>
  );
}
