import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MoodOption } from '~src/types';

const moodOptions = [
  { emoji: '😄', description: 'amazing' },
  { emoji: '😊', description: 'great' },
  { emoji: '🙂', description: 'alright' },
  { emoji: '🙁', description: 'sad' },
  { emoji: '😔', description: 'miserable' },
];

export const MoodPicker = () => {
  const [selectedOption, setSelectedOption] = useState<MoodOption>();

  return (
    <View style={styles.emojiList}>
      {moodOptions.map(option => (
        <View>
          <TouchableOpacity
            onPress={() => setSelectedOption(option)}
            style={[
              styles.moodItem,
              option.emoji === selectedOption?.emoji
                ? styles.selected
                : undefined,
            ]}>
            <Text style={styles.emojiText}>{option.emoji}</Text>
          </TouchableOpacity>
          <Text style={styles.descriptionText}>
            {option.emoji === selectedOption?.emoji ? option.description : null}
          </Text>
        </View>
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
  moodItem: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    borderWidth: 2,
    backgroundColor: '#A0CFD3',
    borderColor: '#8D94BA',
    borderRadius: 100,
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});
