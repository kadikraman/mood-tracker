import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        <Text style={styles.emoji}>
          {mood.moodOption.emoji} {new Date(mood.timestamp).toString()}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  emoji: {
    textAlign: 'center',
  },
});
