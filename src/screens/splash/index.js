import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';

export default function Splash({navigation}) {
  useEffect(() => {
    move();
  }, []);

  const move = () => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#00e007', alignItems: 'center'}}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 60,
            color: 'black',
            fontWeight: '700',
            fontFamily: 'fantasy',
          }}>
          F & D
        </Text>
        <Text style={{color: 'black', fontWeight: '400', paddingTop: 5}}>
          The King of Food & Delivery
        </Text>
      </View>

      <Text
        style={{
          color: 'black',
          position: 'absolute',
          bottom: 0,
          marginBottom: 70,
          fontWeight: '600',
        }}>
        V.0.1
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
