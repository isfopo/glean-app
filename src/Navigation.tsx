import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from './store/auth';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import { PortalHost } from '@rn-primitives/portal';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { userToken } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken == null ? (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
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
