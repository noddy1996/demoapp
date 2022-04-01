import { StyleSheet, Text, View,Image,Pressable ,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { appColors, shadow } from '../../utils/appColors'
import {wp} from '../../utils/Responsive'
import { scale } from 'react-native-size-matters'
import { dummyImage } from '../../utils/MockData'
import Label from '../../components/Label'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import ReduxWrapper from '../../redux/ReduxWrapper'

 function HomeCard({
        item,
        $getProductDetail
    }) {
        const{name,avatar,price,category,id}=item
    const navigation=useNavigation()
const [isLoading, setIsLoading] = useState(false)
     const onItem=()=>{
         setIsLoading(true)
        $getProductDetail({id,callback})
        
    }
    const callback=(status)=>{
if(status){
    setIsLoading(false)
    navigation.navigate("Details")
}
    }
  
  return (
    <Pressable onPress={onItem} style={styles.container}>
     <Image source={{uri:avatar}} style={styles.image}/>
     <View style={styles.bottom}>
     <Label style={styles.label} text={name} />
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            
            <Label style={styles.price} text={`$${price}`} />
            <FontAwesome name='pencil' color={appColors.white} size={scale(18)}/>
        </View>
     </View>
     {isLoading&&<View style={{...StyleSheet.absoluteFillObject,justifyContent:"center",backgroundColor:'rgba(0,0,0,0.2)'}}>
        <ActivityIndicator color={appColors.white} size={"large"} /></View>}
    </Pressable>
  )
}
export default ReduxWrapper(HomeCard)
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