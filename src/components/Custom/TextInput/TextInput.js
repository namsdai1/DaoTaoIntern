import React, { useEffect } from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

export default function TextIp({item, textTitle, data,placeholder,setDataMaster,dataCurrent}) {
    const [backgroundChange, setBackgroundChange] = useState(false);
    
    const textFilter = text => {
      const index=dataCurrent.findIndex(x => x.id===item.id && x.name===item.name);
      dataCurrent[index].text=text
      let items= [];
      items.push(data);
  //    console.log(items[0].Data.ticket_template.individual[27].position)
      setDataMaster(items[0]);
    };

    const onFocus =() => {
        setBackgroundChange(true);
      };
    
    const onBlur=()=> {
        setBackgroundChange(false);
      };
  return (
    <View style={styles.container}>

    <Text style={styles.textTitle}>{textTitle}</Text>
      <TextInput
        placeholder={placeholder}
        onBlur={ () => onBlur() }
        onFocus={ () => onFocus() }
        style={[styles.textInput, styles.fontSize,backgroundChange?{borderColor:'#ff9335'}:{borderColor:'#888888'}]}
        onChangeText={value => textFilter(value)}
        >{}</TextInput>
    </View>
  );
}
