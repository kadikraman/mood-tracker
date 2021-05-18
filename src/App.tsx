import React from 'react';
import { Platform, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './screens/Root.navigator';
import { AppProvider } from './App.provider';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
