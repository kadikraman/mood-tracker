import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  ExampleModal: undefined;
};

export type BottomTabsParamList = {
  HomeTab: undefined;
  HistoryTab: undefined;
  AnalyticsTab: undefined;
};

export type MoodOption = {
  emoji: string;
  description: string;
};
