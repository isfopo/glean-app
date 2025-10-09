import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CaptureStep } from './steps/CaptureStep';
import { useShareStore } from '@/store/share';
import { useMemo } from 'react';
import { ReviewStep } from './steps/ReviewStep';
import { ConfirmStep } from './steps/ConfirmStep';

const Stack = createNativeStackNavigator();

const ShareScreen = () => {
  const { step } = useShareStore();

  const currentScreen = useMemo(() => {
    switch (step) {
      case 0:
        return (
          <Stack.Screen
            name="Capture"
            component={CaptureStep}
            options={{ animation: 'fade_from_bottom' }}
          />
        );
      case 1:
        return <Stack.Screen name="Review" component={ReviewStep} />;
      case 2:
        return <Stack.Screen name="Confirm" component={ConfirmStep} />;
      default:
        return <></>;
    }
  }, [step]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {currentScreen}
    </Stack.Navigator>
  );
};

export default ShareScreen;
