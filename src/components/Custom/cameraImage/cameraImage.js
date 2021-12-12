import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './style';
import {PermissionsAndroid} from 'react-native';
import Sizes from '../../../styles/Sizes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function inputFile({data,item,setDataMaster}) {
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const index=data.Data.ticket_template.individual.findIndex(x => x.id===item.id);
      data.Data.ticket_template.individual[index].text=value
      let items= [];
      items.push(data);
  //    console.log(items[0].Data.ticket_template.individual[27].position)
      setDataMaster(items[0]);
  }, [value])
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openCamera = () => {
    const options = {
      path: 'images',
      mediaType: 'photo',
    };
    launchCamera(options, response => {
      requestCameraPermission();
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.errorCode) {
        console.log('errorCode: ', response.errorCode);
      } else {
  
        setImageFile(response.assets[0])
        setModalVisible(false);
        setValue(response.assets[0].fileName);
        
      }
    });
  };
  const openLibrary = () => {
    const options = {
      path: 'images',
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.errorCode) {
        console.log('User errorCode: ', response.errorCode);
      } else {
        // You can also display the image using data:
        const {uri} = response.assets[0];
        console.log(uri);
        setModalVisible(false);
        setValue(response.assets[0].fileName);
      }
    });
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.inputfile}>
          <View style={{flex: 7, alignItems: 'center', flexDirection: 'row'}}>
            {value ? (
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5 style={{flex:1}} name={'images'} size={Sizes.s40} color={'#335271'} />
                <View style={{flex:8}}><Text numberOfLines={1} >{value}</Text></View>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalItem}>
            <Text
              style={{fontSize: Sizes.s70, fontWeight: 'bold', color: '#335271'}}>
              Choose
            </Text>
            <TouchableOpacity
              style={styles.btnmodal}
              onPress={() => openCamera()}>
              <Text style={styles.textbtn}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnmodal}
              onPress={() => openLibrary()}>
              <Text style={styles.textbtn}>Open library</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.close}>
              <Text style={styles.textbtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
