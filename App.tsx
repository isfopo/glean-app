import React, { useEffect } from 'react';
import { useAuthStore } from './src/store/auth';
import AppNavigator from './src/Navigation';
import SplashScreen from './src/screens/SplashScreen';
import './global.css';

const App = () => {
  const { isLoading, bootstrapAsync } = useAuthStore();

  useEffect(() => {
    bootstrapAsync();
  }, [bootstrapAsync]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <AppNavigator />;
};

export default App;
