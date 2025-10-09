import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useShareStore } from '@/store/share';
import { View } from 'react-native';

export const ReviewStep = () => {
  const { nextStep } = useShareStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-serif text-brand-primary">Review</Text>
      <Button onPress={nextStep}>
        <Text>Next</Text>
      </Button>
    </View>
  );
};
