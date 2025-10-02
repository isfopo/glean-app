import { Text, View } from 'react-native';
import { useAuthStore } from '../store/auth';
import { Button } from '../components/ui/button';

const HomeScreen = () => {
  const { signOut, session } = useAuthStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold text-blue-500">
        Signed in as {session?.accessJwt}
      </Text>
      <Button onPress={signOut}>
        <Text>Sign Out</Text>
      </Button>
    </View>
  );
};

export default HomeScreen;
