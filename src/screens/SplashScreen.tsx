import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
