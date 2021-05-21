import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import { useAppContext } from '~src/App.provider';
import groupBy from 'lodash/groupBy';

export const AnalyticsTab = () => {
  const appContext = useAppContext();

  const data = Object.entries(
    groupBy(appContext.moodList, 'moodOption.emoji'),
  ).map(([key, value]) => ({
    x: key,
    y: value.length,
  }));

  return (
    <View style={styles.container}>
      <VictoryPie
        labelRadius={80}
        radius={150}
        innerRadius={50}
        colorScale={['#454C73', '#87677B', '#1D84B5', '#A0CFD3', '#D5EAEC']}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
});
