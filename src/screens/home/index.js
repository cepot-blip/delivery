import {
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../assets/constants/theme';
import search from '../../assets/icons/search.png';
import bell from '../../assets/icons/bell.png';
import message from '../../assets/icons/message.png';
import whislist from '../../assets/icons/whislist.png';
import more from '../../assets/icons/more.png';
import Carousel from '../../components/HomeBanner';
import {DummyBanner} from '../../dummyData/HomeBanner';

const SearchBar = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'white',
            width: 250,
            borderRadius: 15,
            paddingLeft: 40,
          }}>
          <TextInput placeholder="Ceker Mercon .." style={styles.input} />
          <Image
            source={search}
            style={{
              margin: 8,
              width: 20,
              height: 25,
              marginLeft: -25,
              marginTop: -36,
            }}
          />
        </View>
        <TouchableOpacity>
          <Image
            source={bell}
            style={{
              margin: 5,
              width: 19,
              height: 24,
              marginTop: 5,
              marginLeft: -15,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={message}
            style={{
              margin: 5,
              width: 22,
              height: 18,
              marginTop: 5,
              marginLeft: -15,
              backfaceVisibility: 'visible',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={whislist}
            style={{
              margin: 5,
              width: 26,
              height: 25,
              marginTop: 5,
              marginLeft: -17,
              backfaceVisibility: 'visible',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={more}
            style={{
              margin: 5,
              width: 26,
              height: 26,
              marginTop: 5,
              marginLeft: -27,
              backfaceVisibility: 'visible',
            }}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={{flex: 1}}>
        <Carousel data={DummyBanner} />
      </View> */}
    </React.Fragment>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    alignItems: 'center',
    marginTop: -3,
  },
  iconBell: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 40,
    borderRadius: 11,
    backgroundColor: 'white',
    marginRight: 95,
    marginTop: 5,
    marginLeft: 5,
  },
});
