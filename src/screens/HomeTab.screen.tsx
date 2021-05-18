import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { useAppContext } from '~src/App.provider';
import { MoodPicker } from '~src/components/MoodPicker';

const imageSrc = require('~src/assets/images/ying-yang.png');
const networkImageUrl =
  'https://images.unsplash.com/photo-1621193677201-096db5e45734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80';

export const HomeTab = () => {
  const { handleAddMood } = useAppContext();

  return (
    <ImageBackground style={styles.container} source={{ uri: networkImageUrl }}>
      <Image source={imageSrc} style={styles.image} />
      <MoodPicker onAddMood={handleAddMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
