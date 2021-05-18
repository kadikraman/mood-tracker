import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import format from 'date-fns/format';
import { MoodOptionWithTimestamp } from '~src/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppContext } from '~src/App.provider';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const { handleRemoveMood } = useAppContext();
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const onGestureEvent = React.useCallback(
    (event: PanGestureHandlerGestureEvent) => {
      const xVal = Math.floor(event.nativeEvent.translationX);

      offset.value = xVal;
    },
    [offset],
  );

  const onHandlerStateChange = React.useCallback(() => {
    offset.value = withTiming(0);
  }, [offset]);

  return (
    <PanGestureHandler
      minDeltaX={1}
      minDeltaY={100}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}>
      <Animated.View style={[styles.moodItem, animatedStyles]}>
        <View style={styles.iconAndDescription}>
          <Text style={styles.moodValue}>{item.moodOption.emoji}</Text>
          <Text style={styles.moodDescription}>
            {item.moodOption.description}
          </Text>
        </View>
        <Text style={styles.moodDate}>
          {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        </Text>
        <TouchableOpacity onPress={() => handleRemoveMood(item)}>
          <Text style={styles.deleteText}>delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
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
    fontFamily: 'Kalam-Regular',
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
    fontFamily: 'Kalam-Bold',
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    fontSize: 18,
    color: '#1D84B5',
    fontFamily: 'Kalam-Bold',
  },
});
