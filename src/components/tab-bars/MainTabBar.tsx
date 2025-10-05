import { PlatformPressable } from '@react-navigation/elements';
import React from 'react';
import { Text } from '../ui/text';
import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder } from '@react-navigation/native';

export const MainTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { buildHref } = useLinkBuilder();

  return (
    <View className="w-full flex flex-row justify-around pb-16 pt-8 bg-card border-t-2 border-t-border">
      {state.routes.map((route, index) => {
        if (index === undefined) {
          return null;
        }

        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className={`${isFocused ? 'bg-neutral-border' : 'bg-inherit'}`}
          >
            <Text
              className={`${isFocused ? 'text-brand-primary' : 'text-inherit'}`}
            >
              {route.name}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};
