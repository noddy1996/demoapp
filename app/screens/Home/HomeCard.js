import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { appColors, shadow } from '../../utils/appColors'
import {wp} from '../../utils/Responsive'
import { scale } from 'react-native-size-matters'
import { dummyImage } from '../../utils/MockData'
import Label from '../../components/Label'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function HomeCard() {
  return (
    <View style={styles.container}>
     <Image source={{uri:dummyImage}} style={styles.image}/>
     <View style={styles.bottom}>
     <Label style={styles.label} text={"New"} />
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            
            <Label style={styles.price} text={"$37"} />
            <FontAwesome name='pencil' color={appColors.white} size={scale(18)}/>
        </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:appColors.white,
        width:wp(44.5),
        // height:wp(30),
        // alignItems:"center",
        // alignSelf:"center",
        marginHorizontal:scale(5),
        marginBottom:scale(10),
        borderRadius:scale(5),
        paddingTop:scale(5),
        ...shadow
    },
    image:{
        height:scale(150),
        width:scale(100),
        alignSelf:"center",
        marginBottom:scale(30)
    },
    bottom:{
        backgroundColor:appColors.black,
        borderRadius:scale(5),
        paddingHorizontal:scale(10),
        paddingVertical:scale(3)
    },
    label:{
        color:appColors.white,
        fontWeight:"bold",
        fontSize:scale(15)
    },
    price:{
        color:appColors.white,
        fontWeight:"bold",
        fontSize:scale(15),
        marginTop:scale(2)
    },
})