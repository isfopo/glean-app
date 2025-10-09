import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuthStore } from './store/auth';
import SignInScreen from './screens/SignInScreen';
import { PortalHost } from '@rn-primitives/portal';
import FindScreen from './screens/FindScreen';
import ShareScreen from './screens/ShareScreen';
import { Fontisto } from '@react-native-vector-icons/fontisto';

import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const iconMap: Record<string, string> = {
  Find: 'search',
  Share: 'share',
  Profile: 'person',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          // You can return any component that you like here!
          return <Fontisto name={iconMap[route.name]} style={{ color }} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        animation: 'shift',
      })}
    >
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Share" component={ShareScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

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
