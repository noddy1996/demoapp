import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import ReduxWrapper from '../../redux/ReduxWrapper';
import {appColors} from '../../utils/appColors';

function Container({
  children,
  isScrollable,
  appState: {darkMode},
  containerStyle,
}) {
  return (
    <SafeAreaView style={styles.container}>
      {isScrollable ? (
        <ScrollView>
          <View
            style={[
              styles.innerView,
              darkMode ? styles.dark : styles.light,
              {...containerStyle},
            ]}>
            {children}
          </View>
        </ScrollView>
      ) : (
        <View
          style={[
            styles.innerView,
            darkMode ? styles.dark : styles.light,
            {...containerStyle},
          ]}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  innerView: {
    flex: 1,
    paddingHorizontal: scale(10),
  },
  light: {
    backgroundColor: appColors.white,
  },
  dark: {
    backgroundColor: appColors.black,
  },
});
export default ReduxWrapper(Container);
