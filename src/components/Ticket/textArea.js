import React from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import styles from './style';

export default function TextArea({ textTitle, data,item,setDataMaster}) {
    const [backgroundChange, setBackgroundChange] = useState(false);
    const onFocus =() => {
        setBackgroundChange(true);
      };
    
    const onBlur=()=> {
        setBackgroundChange(false);
      };
      const textFilter = text => {
        const index=data.Data.ticket_template.individual.findIndex(x => x.id===item.id);
        data.Data.ticket_template.individual[index].text=text
        let items= [];
        items.push(data);
    //    console.log(items[0].Data.ticket_template.individual[27].position)
        setDataMaster(items[0]);
      };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{textTitle}</Text>
      
      <TextInput
        placeholder={item.nameText}
        onBlur={ () => onBlur() }
        multiline={true}
        numberOfLines={4}
        onFocus={ () => onFocus() }
        style={[styles.textArea, styles.fontSize,backgroundChange?{borderColor:'#ff9335'}:{borderColor:'#888888'}]}
         onChangeText={value => textFilter(value)}
        ></TextInput>
      
    </View>
  );
}
