import React from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import InputFile from '../Custom/InputFile/inputFile'
import styles from './style';
export default function inputFileTicker({textTitle,setFile}) {
  return (
    <View style={styles.boxcombobox}>
      <Text style={styles.textTitle}>{textTitle}</Text>
      <InputFile setFile={setFile}/>
    </View>
  );
}
