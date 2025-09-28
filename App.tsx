import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { useAuthStore } from './src/store/auth';
import AppNavigator from './src/Navigation';
import SplashScreen from './src/screens/SplashScreen';
import './global.css';

const App = () => {
  const { isLoading, bootstrapAsync, completeOAuth } = useAuthStore();

  useEffect(() => {
    bootstrapAsync();
  }, [bootstrapAsync]);

  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      const url = event.url;
      if (url.includes('oauth/callback')) {
        const code = url.split('code=')[1];
        if (code) {
          completeOAuth(code);
        }
      }
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);

    Linking.getInitialURL().then(url => {
      if (url && url.includes('oauth/callback')) {
        handleDeepLink({ url });
      }
    });

    return () => subscription.remove();
  }, [completeOAuth]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <AppNavigator />;
};

export default App;
