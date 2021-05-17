import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const HistoryTab = () => {
  return (
    <View style={styles.container}>
      <Text>History Tab</Text>
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
