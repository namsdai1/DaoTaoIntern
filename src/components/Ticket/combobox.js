import React from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import styles from './style';
import Picker from '../Custom/Combobox/combobox'
export default function combobox(props) {
  return (
    <View style={styles.boxcombobox}>
      <View style={styles.boxtitle}>
      <Text style={styles.textTitle}>{props.textTitle}</Text>
      </View>
      <Picker {...props}/>
    </View>
  );
}
