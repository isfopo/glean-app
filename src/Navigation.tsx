import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from './store/auth';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import { PortalHost } from '@rn-primitives/portal';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { session } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!session ? (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
      <PortalHost />
    </NavigationContainer>
  );
};

export default AppNavigator;
