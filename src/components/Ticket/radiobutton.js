import React from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import Radio from '../Custom/RadioButton/radiobutton';
import styles from './style';
export default function RadioTicker({textTitle,datacar,setGender}) {
  return (
    <View style={styles.boxcombobox}>
      <Text style={styles.textTitle}>{textTitle}</Text>
      <Radio setGender={setGender}/>
    </View>
  );
}
