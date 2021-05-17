import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const moodOptions = [
  { emoji: '😄', description: 'amazing' },
  { emoji: '😊', description: 'great' },
  { emoji: '🙂', description: 'alright' },
  { emoji: '🙁', description: 'sad' },
  { emoji: '😔', description: 'miserable' },
];

export const MoodPicker = () => {
  return (
    <View style={styles.emojiList}>
      {moodOptions.map(option => (
        <Text style={styles.emojiText}>{option.emoji}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  emojiText: {
    fontSize: 24,
  },
  emojiList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
