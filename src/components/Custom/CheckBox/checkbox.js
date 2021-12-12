import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Sizes from '../../../styles/Sizes';
const CheckBoxCustom = ({item,data,setDataMaster}) => {
  const [data1, setData1] = useState(item);
  const [checkIcon, setCheckIcon] = useState(true);

  useEffect(() => {
    const index=data.Data.ticket_template.individual.findIndex(x => x.id===item.id);
      data.Data.ticket_template.individual[index].text=checkIcon
      let items= [];
      items.push(data);
  //    console.log(items[0].Data.ticket_template.individual[27].position)
      setDataMaster(items[0]);
  }, [checkIcon]);

  return (
    <View style={{borderBottomWidth:0.5,paddingVertical:Sizes.s10 ,borderColor: 'black'}}>
       <TouchableOpacity
       style={{flexDirection: 'row',alignItems: 'center'}}
        onPress={() => {
          setCheckIcon(!checkIcon);
        }}>
      <Text style={{ flex:7,fontSize: Sizes.s40,color: '#335271',}}>{item.nameText}</Text>
      <View style={{flex:1,alignItems:'flex-end'}}>
        <MaterialCommunityIcons
          name={checkIcon ? 'checkbox-blank-outline' : 'checkbox-marked-outline'}
          size={Sizes.s50}
          color="#ff9335"
        />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBoxCustom;
