import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const AnalyticsTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Analytics Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Kalam',
  },
});
