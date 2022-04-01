import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors, shadow } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import Label from '../Label'

export default function CustomButton({label,style,onPress,labelStyle,outlined}) {
    return (
        <TouchableRipple rippleColor={appColors.white} onPress={onPress} rippleDuration={800} style={[outlined? styles.outline:styles.container,style]}> 
            <Label text={`${label}`.toUpperCase()} style={[outlined?styles.outlinedLabel: styles.label,labelStyle]}/>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(50),
        backgroundColor:appColors.black,
        borderRadius:scale(10),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10)
    },
    label:{
        fontSize:scale(16),
        fontWeight:"bold",
        color:appColors.white
    },
    outline:{
        height:scale(50),
        backgroundColor:appColors.white,
        borderRadius:scale(10),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10),
        borderWidth:scale(2),
        
        ...shadow
    },
    outlinedLabel:{
        fontSize:scale(16),
        fontWeight:"bold",
        color:appColors.black
    },
})
