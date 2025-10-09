import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CaptureStep } from './steps/CaptureStep';
import { useShareStore } from '@/store/share';
import { ReviewStep } from './steps/ReviewStep';
import { ConfirmStep } from './steps/ConfirmStep';

const Stack = createNativeStackNavigator();

const ShareScreen = () => {
  const { step } = useShareStore();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {step === 0 && (
        <Stack.Screen
          name="Capture"
          component={CaptureStep}
          options={{ animation: 'fade_from_bottom' }}
        />
      )}
      {step === 1 && <Stack.Screen name="Review" component={ReviewStep} />}
      {step === 2 && <Stack.Screen name="Confirm" component={ConfirmStep} />}
    </Stack.Navigator>
  );
};

export default ShareScreen;
