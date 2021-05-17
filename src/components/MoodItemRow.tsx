import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import format from 'date-fns/format';
import { MoodOptionWithTimestamp } from '~src/types';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.moodOption.emoji}</Text>
        <Text style={styles.moodDescription}>
          {item.moodOption.description}
        </Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: '#87677B',
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: '#454C73',
    fontWeight: 'bold',
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
