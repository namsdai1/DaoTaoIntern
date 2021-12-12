import React, { useEffect } from 'react';
import {useState} from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import Picker from '../Custom/Combobox/combobox';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function datetimepicker({
  textTitle,
  data,
  mode,
  dataMaster,
  setDataMaster
}) {
  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(data.text);
  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }
  const dateConvertString = date => {
    if (mode === 'date') {
      let temDate = new Date(date);
      let fdate =
        pad2(temDate.getDate()) +
        '/' +
        pad2(temDate.getMonth()) +
        '/' +
        temDate.getFullYear();
      setValue(fdate);
    }
    if (mode === 'time') {
      let temDate = new Date(date);
      const fdate = pad2(temDate.getHours()) + ':' + pad2(temDate.getMinutes());
      setValue(fdate);
    }
  };
  useEffect(() => {
    const index=dataMaster.Data.ticket_template.individual.findIndex(x => x.id===data.id);
    dataMaster.Data.ticket_template.individual[index].text=value
      let items= [];
      items.push(dataMaster);
  //    console.log(items[0].Data.ticket_template.individual[27].position)
      setDataMaster(items[0]);
  }, [value])
  const onChange = (event, selectedDate) => {
    console.log(mode);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
    dateConvertString(currentDate);
  };

  return (
    <View style={styles.boxcombobox}>
      <View style={styles.boxtitle}>
        <Text style={styles.textTitle}>{textTitle}</Text>
      </View>
      
        <TouchableOpacity
          style={[mode==='date'?styles.textInput:styles.textInput2]}
          onPress={() => {
            setShow(true);
          }}>
          <View style={{flex: 6}}>
            <Text style={styles.textDate}>{value===''?(data.conditions.format.text):(value)}</Text>
          </View>
          {/* <FontAwesome5Icon size={20} name="caret-down" style={styles.icon} /> */}
        </TouchableOpacity>
      
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
