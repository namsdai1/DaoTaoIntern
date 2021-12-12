import React from 'react';
import { useState } from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import Camera from '../Custom/cameraImage/cameraImage'
import styles from './style';
export default function cameraimage(props) {
  return (
    <View style={styles.boxcombobox}>
      <Text style={styles.textTitle}>{props.textTitle}</Text>
      <Camera {...props}/>
    </View>
  );
}
