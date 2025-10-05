import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  const { signOut } = useAuthStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-serif text-brand-primary">
        Profile Screen
      </Text>

      <Button onPress={signOut} className="bg-primary">
        <Text className="text-primary-foreground">Sign Out</Text>
      </Button>
    </View>
  );
};

export default ProfileScreen;
