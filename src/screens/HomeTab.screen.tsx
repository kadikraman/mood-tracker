import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const HomeTab = () => {
  return (
    <View style={styles.container}>
      <Text>Home Tab</Text>
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
