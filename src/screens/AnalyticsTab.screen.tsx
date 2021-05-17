import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const AnalyticsTab = () => {
  return (
    <View style={styles.container}>
      <Text>Analytics Tab</Text>
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
