import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // BASE COLOR
  primary: '#92dc7e',
  secondary: '#97a3a2',

  //  COLORS
  black: '#0a0905',
  white: '#fffff',

  lightGray: '#D8D8D8',
  lightGray1: '#CFCFCF',
  lightGray2: '#E1E1E1',
  lightGray3: '#EDEDED',
  transparent: 'transparent',
  darkGray: '#767676',
};

export const SIZES = {
  //  GLOBAL SIZES
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  //  FONT SIZES
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 18,
  body4: 14,
  body5: 12,

  //  APP DIMENSIONS
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 40,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-regular', fontSize: SIZES.body3, lineHeight: 20},
  body4: {fontFamily: 'Roboto-regular', fontSize: SIZES.body4, lineHeight: 20},
  body5: {fontFamily: 'Roboto-regular', fontSize: SIZES.body5, lineHeight: 20},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
