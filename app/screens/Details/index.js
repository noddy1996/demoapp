import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import {appColors} from '../../utils/appColors';
import {img} from '../../utils/MockData';
import {wp} from '../../utils/Responsive';

const DetailsScreen = () => {
  return (
    <Container containerStyle={styles.container}>
      <Image source={{uri: img}} style={styles.img} resizeMode="contain" />
      <View style={styles.details}>
        <View>
          <Label text={'Sofa New'} style={styles.label} />
        </View>
      </View>
    </Container>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  img: {
    height: wp(80),
    width: wp(100),
  },
  details: {
    flex: 1,
    backgroundColor: appColors.black,
  },
  label: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: appColors.white,
  },
});
