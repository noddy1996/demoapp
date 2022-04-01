import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { scale } from 'react-native-size-matters'
import { appColors } from '../utils/appColors'

export default function CustomFab({onPress}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <AntDesign  name={"pluscircleo"} size={scale(45)}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:scale(20),
        right:scale(20),
        backgroundColor:appColors.white,
        overflow:"hidden",
        borderRadius:scale(45/2+2)
    }
})