import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CaptureStep } from './steps/CaptureStep';

const Stack = createNativeStackNavigator();

const ShareScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Capture"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Capture" component={CaptureStep} />
    </Stack.Navigator>
  );
};

export default ShareScreen;
