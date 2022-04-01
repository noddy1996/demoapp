import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import {appColors, shadow} from '../../utils/appColors';
import {img, starterIntro} from '../../utils/MockData';
import {wp} from '../../utils/Responsive';

const DetailsScreen = () => {
  return (
    <Container containerStyle={styles.container}>
      <Image source={{uri: img}} style={styles.img} resizeMode="contain" />
      <View style={[styles.details]}>
        <View style={styles.detailsContainer}>
          <Label text={'Sofa New'} style={styles.label} />
          <Label text={'$ 95'} style={styles.label} />
        </View>
        <Label text={starterIntro[0]} style={styles.desc} />
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
    padding: scale(15),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
    paddingTop: scale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  label: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: appColors.white,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    color: appColors.white,
    marginTop: scale(5),
  },
});
