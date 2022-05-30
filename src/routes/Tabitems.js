import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {
  home_gray,
  home_green,
  explore_gray,
  explore_green,
  basket_gray,
  basket_green,
  user_gray,
  user_green,
} from '../assets/constants/icons';

const Tabitems = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return (
        <Image
          source={isFocused ? home_green : home_gray}
          style={{width: 25, height: 25}}
        />
      );
    }

    if (label === 'Explore') {
      return (
        <Image
          source={isFocused ? explore_green : explore_gray}
          style={{width: 25, height: 25}}
        />
      );
    }

    if (label === 'Basket') {
      return (
        <Image
          source={isFocused ? basket_green : basket_gray}
          style={{width: 25, height: 25}}
        />
      );
    }

    if (label === 'User') {
      return (
        <Image
          source={isFocused ? user_green : user_gray}
          style={{width: 28, height: 28}}
        />
      );
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <View style={styles.wrapperIcon}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default Tabitems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapperIcon: {
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    alignItems: 'center',
  },
});
