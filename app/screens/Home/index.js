import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import ReduxWrapper from '../../redux/ReduxWrapper';
import Container from '../../components/Container';
// import {  } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import HomeCard from './HomeCard';
import {scale} from 'react-native-size-matters';
import {shadow} from '../../utils/appColors';
import CustomHeader from '../../components/CustomHeader';
import CustomFab from '../../components/CustomFab';
import {useNavigation} from '@react-navigation/native';

function Home({toggleDarkMode$,$getProducts,products}) {
  const navigation = useNavigation();
  const [selectedCate, setSelectedCate] = useState("All")
useEffect(() => {
  $getProducts()
  console.log("inUse");
}, [])


  const _render = ({item}) => {
    
    return <HomeCard  item={item}/>;
  };
  const _header = () => {
    return (
      <ScrollView horizontal>
        <CustomButton
                outlined={selectedCate==="All"}
                label={"All"}
                onPress={()=>setSelectedCate("All")}
                style={{
                  paddingHorizontal: scale(10),
                  marginRight: scale(10),
                  height:scale(40),
                  ...shadow,
                }}
              />
        {products?.categories?.map((val, key) => {
          return (
            <View key={key}>
              <CustomButton
              onPress={()=>setSelectedCate(val.name)}

                outlined={selectedCate===val.name}
                label={val.name}
                style={{
                  paddingHorizontal: scale(10),
                  marginRight: scale(10),
                  height:scale(40),
                  ...shadow,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  };
  return (
    <Container>
      <CustomHeader title={'Upayments store'} />
      <FlatList
        ListHeaderComponent={_header}
        numColumns={2}
        data={products?.products||[]}
        renderItem={_render}
        keyExtractor={(item, index) => 'key' + index}
      />
      <CustomFab onPress={() => navigation.navigate('Create')} />
    </Container>
  );
}

export default ReduxWrapper(Home);
const styles = StyleSheet.create({});
