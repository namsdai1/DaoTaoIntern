import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './style';
export default function combobox({data, setDataMaster,item,dataMaster}) {
  const [data1, setData1] = useState([]);
  const [value, setValue] = useState();
  const [itemIndex, setItemIndex] = useState(0);
  useEffect(() => {
    const indexValue=data.data[itemIndex].text;
    const index=dataMaster.Data.ticket_template.individual.findIndex(x => x.id===item.id);
    dataMaster.Data.ticket_template.individual[index].value=value;
    dataMaster.Data.ticket_template.individual[index].text=indexValue;
    let items= [];
   items.push(dataMaster);
   setDataMaster(items[0]);
  }, [value]);
  
  return (
    <View style={styles.picker}>
      <Picker
        selectedValue={value}
        mode={'dialog'}
        onValueChange={(itemValue, itemIndex) => {
          setItemIndex(itemIndex);
          setValue(itemValue);   
        }}>
        {data.data.map(item => (
            <Picker.Item
            color="#335271"
            label={item.text}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
}
