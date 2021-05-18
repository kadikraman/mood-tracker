import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useAppContext } from '~src/App.provider';
import { MoodPicker } from '~src/components/MoodPicker';

const imageSrc = require('~src/assets/images/ying-yang.png');

export const HomeTab = () => {
  const { handleAddMood } = useAppContext();

  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.image} />
      <MoodPicker onAddMood={handleAddMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});
