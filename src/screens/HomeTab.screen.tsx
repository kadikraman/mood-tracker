import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppContext } from '~src/App.provider';
import { MoodPicker } from '~src/components/MoodPicker';

export const HomeTab = () => {
  const { handleAddMood } = useAppContext();

  return (
    <View style={styles.container}>
      <MoodPicker onAddMood={handleAddMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
