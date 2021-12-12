import React from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import CheckBox from '../Custom/CheckBox/checkbox';

import styles from './style';
export default function CheckTicker(props) {
  
  return (
    <View style={styles.boxcombobox}>
      <CheckBox {...props} />
    </View>
  );
}
