import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

type DrawerProps = {
  title: string;
};

export const Drawer: React.FC<DrawerProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleOpen = React.useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(val => !val);
  }, []);

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={handleToggleOpen}
        style={styles.heading}
        activeOpacity={0.9}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{isOpen ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isOpen ? children : null}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontFamily: 'Kalam-Bold',
  },
  heading: {
    padding: 10,
    backgroundColor: '#454C73',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
