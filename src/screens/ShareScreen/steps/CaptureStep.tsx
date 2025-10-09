import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useShareStore } from '@/store/share';
import { useCaptureStore } from '@/store/capture';
import { View } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useEffect, useRef, useState } from 'react';
import { Vibration } from 'react-native';

export const CaptureStep = () => {
  const { nextStep } = useShareStore();
  const { setImage } = useCaptureStore();
  const devices = useCameraDevices();
  const device = devices.find(d => d.position === 'back');
  const cameraRef = useRef<any>(null);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      setHasPermission(cameraPermission === ('authorized' as any));
    };
    requestPermissions();
  }, []);

  const handleCapture = async () => {
    Vibration.vibrate(50); // Haptic feedback
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({
          flash: 'off',
        });
        setImage(photo.path);
        nextStep();
      } catch (error) {
        console.error('Failed to take photo:', error);
      }
    }
  };

  const handleCancel = () => {
    Vibration.vibrate(50); // Haptic feedback
    // TODO: Navigate back or cancel
  };

  if (!device || !hasPermission) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Loading camera...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Camera
        ref={cameraRef}
        device={device}
        isActive={true}
        style={{ flex: 1 }}
        photo={true}
      />
      {/* Centered frame overlay */}
      <View className="absolute inset-0 items-center justify-center">
        <View className="w-64 h-80 border-2 border-white rounded-lg opacity-70" />
      </View>
      {/* Buttons */}
      <View className="absolute bottom-10 left-0 right-0 flex-row justify-center space-x-8">
        <Button
          onPress={handleCancel}
          className="bg-red-500 w-16 h-16 rounded-full items-center justify-center"
        >
          <Text className="text-white text-xl">✕</Text>
        </Button>
        <Button
          onPress={handleCapture}
          className="bg-white w-20 h-20 rounded-full border-4 border-gray-300"
        />
        <View className="w-16" />
      </View>
    </View>
  );
};
