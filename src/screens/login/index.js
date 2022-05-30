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
import logoScoter from '../../assets/images/scoter1.png';
import Sosmed from '../../assets/icons/sosmed.png';

const {width: WIDTH} = Dimensions.get('window');

export default function Login({navigation}) {
  return (
    <ImageBackground source={bgImage} style={styles.bgContainer}>
      <View style={styles.logoContainer}>
        <Image source={logoScoter} style={styles.logo} />
      </View>

      <View style={styles.btn}>
        <TouchableNativeFeedback>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '600',
            }}>
            <Text style={{color: '#ffff'}}>LOGIN</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.btnRegister}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Register')}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '600',
              marginLeft: 20,
            }}>
            <Text style={{color: '#009c8f'}}>REGISTER</Text>
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
        <Text
          style={{
            color: 'black',
            marginTop: 15,
            marginLeft: 130,
          }}>
          Forgot Password ?
        </Text>
      </View>

      <View style={styles.btnLogin}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '600',
            }}>
            <Text style={{color: '#ffff'}}>LOGIN</Text>
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
    width: 350,
    height: 210,
    margin: 18,
    marginTop: -110,
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
    marginTop: 100,
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
    marginTop: 20,
  },
  btnLogin: {
    width: WIDTH - 150,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    color: 'black',
    marginHorizontal: 25,
    backgroundColor: '#009c8f',
    marginTop: 30,
  },
  btn: {
    width: WIDTH - 270,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    color: 'black',
    marginHorizontal: 25,
    backgroundColor: '#009c8f',
    marginTop: 50,
    marginLeft: -70,
  },
  btnRegister: {
    width: WIDTH - 270,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    marginHorizontal: 15,
    marginTop: -50,
    marginLeft: 145,
    borderWidth: 1,
    borderColor: '#009c8f',
  },
});
