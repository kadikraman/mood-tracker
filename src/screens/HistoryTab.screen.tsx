import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppContext } from '~src/App.provider';
import { MoodItemRow } from '~src/components/MoodItemRow';

export const HistoryTab = () => {
  const { moodList } = useAppContext();

  return (
    <View style={styles.container}>
      {moodList.map(mood => (
        <MoodItemRow item={mood} key={mood.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
