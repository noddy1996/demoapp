import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import {shadow} from '../../utils/appColors';

const CreateProduct = () => {
  const [productName, setProductName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [img, setImg] = useState(null);
  const [selectedCat, setSelectedCat] = useState('');

  return (
    <Container containerStyle={styles.container}>
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
        text={`Selected Category :${selectedCat}`}
        style={styles.selectedCat}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((val, key) => {
          return (
            <View key={key}>
              <CustomButton
                outlined={false}
                label={'All'}
                style={{
                  paddingHorizontal: scale(10),
                  marginRight: scale(10),
                  ...shadow,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
      <CustomButton
        outlined={false}
        label={'Add Product'}
        style={{
          paddingHorizontal: scale(10),
          marginRight: scale(10),
          ...shadow,
        }}
      />
    </Container>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(30),
  },
  selectedCat: {
    marginTop: 20,
    marginLeft: 10,
  },
});
