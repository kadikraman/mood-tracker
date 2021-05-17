import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList } from '~src/types';
import { HistoryTab } from './HistoryTab.screen';
import { AnalyticsTab } from './AnalyticsTab.screen';
import { HomeTab } from './HomeTab.screen';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="HomeTab" component={HomeTab} />
      <BottomTabs.Screen name="HistoryTab" component={HistoryTab} />
      <BottomTabs.Screen name="AnalyticsTab" component={AnalyticsTab} />
    </BottomTabs.Navigator>
  );
};
