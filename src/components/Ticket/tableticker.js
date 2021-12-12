import React from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import Table from '../Custom/Table/table'
import styles from './style';
export default function TableTicker(props) {
  return (
    <View style={[styles.boxcombobox, {marginBottom:30}]}>
      <Table {...props}/>
    </View>
  );
}
