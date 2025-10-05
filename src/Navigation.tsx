import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuthStore } from './store/auth';
import SignInScreen from './screens/SignInScreen';
import { PortalHost } from '@rn-primitives/portal';
import FindScreen from './screens/FindScreen';
import ShareScreen from './screens/ShareScreen';
import { MainTabBar } from './components/tab-bars/MainTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MainTabBar {...props} />}>
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Share" component={ShareScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { session } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!session ? (
          <Stack.Screen name="SignIn" component={SignInScreen} />
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
      <PortalHost />
    </NavigationContainer>
  );
};

export default AppNavigator;
