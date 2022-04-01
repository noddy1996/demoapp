import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native'
import ReduxWrapper from '../../redux/ReduxWrapper';
import Container from '../../components/Container';
// import {  } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import HomeCard from './HomeCard';
import { scale } from 'react-native-size-matters';
import { shadow } from '../../utils/appColors';
import CustomHeader from '../../components/CustomHeader';
import CustomFab from '../../components/CustomFab';

function Home({toggleDarkMode$}) {
    
    
  const _render=()=>{
    return(
      <HomeCard/>
    )
  }
  const _header=()=>{
    return(
      <ScrollView horizontal>
            {[1,2,3,4,5,6,7,8].map((val,key)=>{
              return(
                <View key={key}>
                  <CustomButton outlined={true} label={"All"} style={{paddingHorizontal:scale(10),marginRight:scale(10),...shadow}}/>
                </View>
              )
            })}
      </ScrollView>

    )
  }
    return (
      <Container>
        <CustomHeader title={"Upayments store"}/>
          <FlatList
          ListHeaderComponent={_header}
          numColumns={2}
          data={[1,2,3,4,5,6,7,8]}
          renderItem={_render}
          keyExtractor={(item,index)=>"key"+index}
          />
          <CustomFab  onPress={()=>alert("xx")}/>
      </Container>
    )
}


export default ReduxWrapper(Home)
const styles = StyleSheet.create({
    
    
  });