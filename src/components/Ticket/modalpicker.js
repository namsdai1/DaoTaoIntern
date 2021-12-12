import React from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import styles from './style';
import ModalPk from '../Custom/Modal/ModalPicker';
export default function ModalPK(props) {
  return (
    <View style={styles.boxcombobox}>
      <Text style={styles.textTitle}>{props.textTitle}</Text>
      <ModalPk {...props}/>
    </View>
  );
}
