import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {appColors, shadow} from '../../utils/appColors';
import {scale} from 'react-native-size-matters';
import ReduxWrapper from '../../redux/ReduxWrapper';
import Label from '../Label';

function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  InputStyle,
  IconRight,
  IconLeft,
  appState: {darkMode},
  label,
}) {
  const [focus, setFocus] = useState(false);

  return (
    <View>
      {<Label text={focus || value ? label : ''} style={styles.label} />}
      <View style={[styles.container, darkMode ? styles.dark : styles.light]}>
        {IconLeft && <IconLeft />}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          //   placeholderTextColor={
          //     darkMode ? styles.darkLabel.color : styles.lightLabel.color
          //   }
          style={[
            styles.input,
            InputStyle,
            darkMode ? styles.darkLabel : styles.lightLabel,
          ]}
        />
        {IconRight && <IconRight />}
      </View>
    </View>
  );
}
export default ReduxWrapper(CustomInput);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    margin: scale(5),
    height: scale(45),
    alignItems: 'center',
    backgroundColor: appColors.white,
    borderRadius: scale(10),
    ...shadow,
  },
  input: {
    flex: 1,
    fontSize: scale(14),
  },
  light: {
    backgroundColor: appColors.white,
  },
  dark: {
    backgroundColor: appColors.black,
  },

  lightLabel: {
    color: appColors.black,
  },
  darkLabel: {
    color: appColors.white,
  },
  label: {
    marginLeft: scale(10),
    marginBottom: scale(5),
    fontSize: scale(14),
    color: appColors.lightGrey,
    fontWeight: '600',
  },
});
