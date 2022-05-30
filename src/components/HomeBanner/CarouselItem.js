import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {SIZES} from '../../assets/constants/theme';
import {DummyBanner} from '../../dummyData/HomeBanner';
import Carousel from './index';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({title, description, image}) => {
  return (
    <View style={styles.cardView}>
      {DummyBanner.map((value, index) => {
        return (
          <Carousel
            key={index}
            image={value.image}
            title={value.title}
            description={value.description}
          />
        );
      })}
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height - 3,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: SIZES.h2,
    shadowColor: '#000',
    shadowOffset: {height: 0.8, width: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'white',
    fontSize: SIZES.h2,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
