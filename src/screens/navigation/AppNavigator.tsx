import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../../store/auth';
import SignInScreen from '../SignInScreen';
import { PortalHost } from '@rn-primitives/portal';

import { TabNavigator } from './TabNavigation';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { session } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: !session }}>
        {!session ? (
          <Stack.Screen name="Sign In" component={SignInScreen} />
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
      <PortalHost />
    </NavigationContainer>
  );
};

export default AppNavigator;
