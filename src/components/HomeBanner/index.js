import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window');

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  if (data && data) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            return (
              <Animated.View
                key={i}
                style={{
                  height: 10,
                  width: 10,
                  background: '#595959',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
};

export default Carousel;

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
