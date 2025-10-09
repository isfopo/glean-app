import Fontisto from '@react-native-vector-icons/fontisto';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindScreen from '../FindScreen';
import ProfileScreen from '../ProfileScreen';
import ShareScreen from '../ShareScreen';

const Tab = createBottomTabNavigator();

const iconMap: Record<string, string> = {
  Find: 'search',
  Share: 'share',
  Profile: 'person',
};

export const TabNavigator = () => {
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
