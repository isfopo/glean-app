import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { useAuthStore } from './src/store/auth';
import AppNavigator from './src/Navigation';
import SplashScreen from './src/screens/SplashScreen';
import './global.css';
import { AtpSessionData, BskyAgent } from '@atproto/api';

const App = () => {
  const { isLoading, bootstrapAsync, session } = useAuthStore();

  useEffect(() => {
    bootstrapAsync();
  }, [bootstrapAsync]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <AppNavigator />;
};

export default App;
