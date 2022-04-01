import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View,ActivityIndicator} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import ReduxWrapper from '../../redux/ReduxWrapper';
import { AlertHelper } from '../../utils/AlertHelper';
import {shadow} from '../../utils/appColors';

const CreateProduct = ({products,$createProduct,navigation}) => {
  const [productName, setProductName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [img, setImg] = useState(null);
  const [selectedCate, setSelectedCate] = useState("")
  const [cateId, setCateId] = useState()

  const onAdd =()=>{
    // $createProduct(12)
    $createProduct({name:productName,price,description,image:img,category:cateId,callback})
    // nst{name,price,category,description,image}=action.payload
  }
  const callback=(status)=>{
    if(status){
      AlertHelper.show("success","Success","Product Added")
      navigation.popToTop()
    }
  }
  return (
    <Container  containerStyle={styles.container}>
      <ScrollView >
      <CustomInput
        label={'Product Name'}
        placeholder={'Product Name'}
        onChangeText={(val) => setProductName(val)}
        value={productName || null}
      />
      <CustomInput
        label={'Price'}
        placeholder={'Price'}
        onChangeText={(val) => setPrice(val)}
        value={price || null}
      />
      <CustomInput
        label={'Desctiption'}
        placeholder={'Desctiption'}
        onChangeText={(val) => setDescription(val)}
        value={description || null}
      />
      <CustomInput
        label={'Image link'}
        placeholder={'Image link'}
        onChangeText={(val) => setImg(val)}
        value={img || null}
      />
      <Label
        text={`Selected Category :${selectedCate}`}
        style={styles.selectedCat}
      />
      <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
      {products?.categories?.map((val, key) => {
          return (
            <View key={key} style={{height:scale(60)}}>
              <CustomButton
              onPress={()=>{setSelectedCate(val?.name);setCateId(val?.id)}}

                outlined={cateId===val.id}
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
      </ScrollView>
      
      
      <CustomButton
        outlined={false}
        label={'Add Product'}
        onPress={onAdd}
        style={{
          paddingHorizontal: scale(10),
          marginRight: scale(10),
          ...shadow,
        }}
      />
      
    </Container>
  );
};

export default ReduxWrapper(CreateProduct);

const styles = StyleSheet.create({
  container: {
    marginTop: scale(30),
  },
  selectedCat: {
    marginTop: 20,
    marginLeft: 10,
  },
});
