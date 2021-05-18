import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList } from '~src/types';
import { HistoryTab } from './HistoryTab.screen';
import { AnalyticsTab } from './AnalyticsTab.screen';
import { HomeTab } from './HomeTab.screen';
import { HomeIcon } from '~src/components/Home.icon';
import { ListIcon } from '~src/components/List.icon';
import { AnalyticsIcon } from '~src/components/Analytics.icon';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#1D84B5',
        tabBarInactiveTintColor: '#8E9AAF',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'HomeTab') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'HistoryTab') {
            return <ListIcon color={color} size={size} />;
          }

          if (route.name === 'AnalyticsTab') {
            return <AnalyticsIcon color={color} size={size} />;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name="HistoryTab"
        component={HistoryTab}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name="AnalyticsTab"
        component={AnalyticsTab}
        options={{ title: 'Analytics' }}
      />
    </BottomTabs.Navigator>
  );
};
