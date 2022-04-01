import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Label from '../Label'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { scale } from 'react-native-size-matters'
export default function CustomHeader({title}) {
  return (
    <View style={styles.container}>
      <Label text={title} style={styles.title}/>
      <FontAwesome name='search' size={scale(20)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:scale(10)
    },
    title:{
        fontWeight:"bold",
        fontSize:scale(22)
    }
})