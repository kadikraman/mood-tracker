import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodItemRow } from '~src/components/MoodItemRow';
import { MoodPicker } from '~src/components/MoodPicker';
import { MoodOptionWithTimestamp } from '~src/types';

export const HomeTab = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleAddMood = useCallback(newMood => {
    setMoodList(current => [
      ...current,
      { moodOption: newMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onAddMood={handleAddMood} />
      {moodList.map(mood => (
        <MoodItemRow item={mood} key={mood.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
