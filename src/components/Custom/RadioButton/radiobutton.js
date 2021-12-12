import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Radio = ({setGender}) => {
  const [checked, setChecked] = useState('');

  return (
    <View>
      <View style={{flexDirection:'row',alignItems: 'center'}}>
      <RadioButton
        value="male"
        status={ checked === 'male' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('male'),setGender(checked)}}
        color={'#ff9335'}
      />
      <Text>Nam</Text>
      </View>
      <View style={{flexDirection:'row',alignItems: 'center'}}>
      <RadioButton
        value="female"
        status={ checked === 'female' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('female'),setGender(checked)}}
        color={'#ff9335'}
      />
      <Text>Nữ</Text>
      </View>
    </View>
  );
};

export default Radio;