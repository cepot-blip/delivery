import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import bgImage from '../../assets/images/awan.png';
import logoScoter from '../../assets/images/scoterr2.png';
import Sosmed from '../../assets/icons/sosmed.png';

const {width: WIDTH} = Dimensions.get('window');

export default function Register({navigation}) {
  return (
    <ImageBackground source={bgImage} style={styles.bgContainer}>
      <View style={styles.logoContainer}>
        <Image source={logoScoter} style={styles.logo} />
      </View>

      <View style={styles.btn}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Login')}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '600',
              marginLeft: -20,
            }}>
            <Text style={{color: '#009c8f'}}>LOGIN</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.btnRegister}>
        <TouchableNativeFeedback>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '600',
            }}>
            <Text style={{color: '#ffff'}}>REGISTER</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View>
        <TextInput
          style={styles.inputEmail}
          placeholder={'Masukan Email'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid="transparent"
        />
      </View>

      <View>
        <TextInput
          style={styles.inputPassword}
          placeholder={'Masukan Password'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid="transparent"
        />
      </View>

      <View>
        <TextInput
          style={styles.inputRePassword}
          placeholder={'Ulangi Password'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.btnLogin}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Login')}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '600',
            }}>
            <Text style={{color: '#ffff'}}>REGISTER</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View>
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            fontWeight: '600',
          }}>
          OR
        </Text>
      </View>

      <Image
        source={Sosmed}
        style={{
          marginBottom: 0,
          marginTop: 30,
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  logo: {
    width: 240,
    height: 220,
    margin: 18,
    marginTop: -100,
  },
  inputEmail: {
    width: WIDTH - 150,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 35,
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    backgroundColor: 'lightblue',
    marginTop: 70,
  },
  inputPassword: {
    width: WIDTH - 150,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 35,
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    backgroundColor: 'lightblue',
    marginTop: 30,
  },
  inputRePassword: {
    width: WIDTH - 150,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 35,
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    backgroundColor: 'lightblue',
    marginTop: 30,
  },
  btnLogin: {
    width: WIDTH - 150,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    color: 'black',
    marginHorizontal: 25,
    backgroundColor: '#009c8f',
    marginTop: 50,
  },
  btn: {
    width: WIDTH - 250,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    marginHorizontal: 25,
    marginTop: 50,
    marginLeft: -70,
    borderWidth: 1,
    borderColor: '#009c8f',
  },
  btnRegister: {
    width: WIDTH - 270,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    marginHorizontal: 15,
    marginTop: -50,
    marginLeft: 145,
    backgroundColor: '#009c8f',
  },
});
