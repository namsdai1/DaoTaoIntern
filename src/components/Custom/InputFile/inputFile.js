import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import FilePickerManager from 'react-native-file-picker';
import styles from './style';
import Sizes from '../../../styles/Sizes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function inputFile({setFile}) {
    const [value, setValue] = useState('');
  const openFile=()=>{
    FilePickerManager.showFilePicker(null, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled file picker');
        }
        else if (response.error) {
          console.log('FilePickerManager Error: ', response.error);
        }
        else {
        //  setFile(response)
        //  setValue(response.fileName)
        console.log(response);
        }
      });
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
            openFile()
        }}>
        <View style={styles.inputfile}>
          <View style={{flex: 7, alignItems: 'center', flexDirection: 'row'}}>
            {value? (
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5 name={'images'} size={Sizes.s40} color={'#335271'} />
                <Text> {value}</Text>
              </View>
            ) : (
              <Text>Select File</Text>
            )}
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FontAwesome5 name={'images'} size={Sizes.s40} />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FontAwesome5 name={'file-upload'} size={Sizes.s40} />
          </View>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}
