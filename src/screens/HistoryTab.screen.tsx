import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useAppContext } from '~src/App.provider';

export const HistoryTab = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <Text>History Tab</Text>
      <Text>{appContext.greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
