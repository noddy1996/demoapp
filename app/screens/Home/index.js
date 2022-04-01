import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native'
import ReduxWrapper from '../../redux/ReduxWrapper';
import Container from '../../components/Container';
// import {  } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

function Home({toggleDarkMode$}) {
    
    
    return (
      <Container>
        <CustomButton label={"All"}/>
          {/* <FlatList
          /> */}
      </Container>
    )
}


export default ReduxWrapper(Home)
const styles = StyleSheet.create({
    
    
  });