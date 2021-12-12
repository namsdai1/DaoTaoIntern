import React, {useEffect} from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import Headers from '../Custom/Header';
import TextInput from '../Custom/TextInput/TextInput';
import Combobox from './combobox';
import Camera from './cameraImage';
import ModalPK from './modalpicker';
import RadioPicker from './radiobutton';
import CheckTicker from './checkboxtiker';
import TableTicker from './tableticker';
import InputFileTicker from './inputFileTicker';
import Sizes from '../../styles/Sizes';
import Datetimepicker from './datetimepicker';
import TextArea from './textArea';
import data from '../../../data.json';
import styles from './style';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import {LOGIN_SCREEN} from '../../router/navigationType';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export default function Ticket() {
  const [title, setTitle] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [dataAll, setDataAll] = useState([]);
  const [dataMaster, setDataMaster] = useState([]);
  const {navigation} = useNavigation();
  useEffect(() => {}, []);
  // useEffect(() => {
  //   PushNotification.createChannel({
  //     channelId:'test-channel',
  //     channelName:'Test Channel'
  //   })

  // }, []);
  useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"

    //    setLoading(false);

    //   messaging().onNotificationOpenedApp(remoteMessage=>{
    //     console.log('onNotificationOpenedApp: ' ,JSON.stringify(remoteMessage))
    //   });
    //   messaging()
    //     .getInitialNotification()
    //     .then(remoteMessage => {
    //       if (remoteMessage) {
    //         console.log(
    //           'Notification caused app to open from quit state:',
    //           JSON.stringify(remoteMessage),
    //         );
    //       }
    //     });
    //     //ukm de ti t hoi ong co j lam them k
  }, []);
  const handelNotification = (body, title, image) => {
    PushNotification.localNotification({
      message: body,
      title: title,
      bigPictureUrl: image,
      smallIcon: image,
    });
  };
  const onSubmit = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate(LOGIN_SCREEN);
  };
  const error = () => {
    if (title === '') {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  };
  useEffect(() => {
    setDataMaster(data);
  }, []);
  useEffect(() => {
    let item = [];
    const data1 = data.Data.ticket_template.individual;
    for (var i = 0; i < 33; i++) {
      if (
        (data1[i].type === 'time' && data1[i].additionalDisplayClass) ||
        (data1[i].type === 'date' && data1[i].additionalDisplayClass)
      ) {
        if (data1[i].display !== false) {
          item.push(data1[i]);
        }
      }
      if (
        data1[i].controlType === 'select' ||
        data1[i].controlType === 'checkbox' ||
        data1[i].controlType === 'combobox' ||
        data1[i].controlType === 'textarea' ||
        data1[i].controlType === 'text' ||
        data1[i].controlType === 'upload' ||
        (data1[i].controlType === 'number' && data1[i].additionalDisplayClass)
      ) {
        if (data1[i].display !== false) {
          item.push(data1[i]);
        }
      }
    }
    // setDataDate(item)
    setDataAll(item);
  }, []);

  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <Headers title="Ticket" backgroundColor={'#ff9335'} color={'white'} />

      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            fontSize: Sizes.s40,
            color: '#ff9335',
            fontWeight: 'bold',
          }}>
          {data.Data.processName}
        </Text>
        <Text style={{textAlign: 'center'}}>{data.Data.description}</Text>
        {dataMaster.length ? (
          <TextInput
            textTitle={'Tiêu đề yêu cầu'}
            placeholder={data.DefaultSubject}
            value={data.Data.processName}
            item={null}
            data={dataMaster.Data.ticket_template.individual}
            setDataMaster={setDataMaster}
            index={null}
          />
        ) : null}
        {dataAll.map((item, index) =>
          item.type === 'text' ? (
            <TextInput
              textTitle={item.nameText}
              placeholder={item.nameText}
              item={item}
              dataCurrent={dataMaster.Data.ticket_template.individual}
              data={dataMaster}
              setDataMaster={setDataMaster}
              index={index}
            />
          ) : item.type === 'number' ? (
            <TextInput
              dataCurrent={dataMaster.Data.ticket_template.individual}
              data={dataMaster}
              textTitle={item.nameText}
              placeholder={item.nameText}
              item={item}
              index={index}
              setDataMaster={setDataMaster}
            />
          ) : item.type === 'select' ? (
            <Combobox
              textTitle={item.nameText}
              value={item.text}
              setTitle={setTitle}
              data={item.conditions}
              item={item}
              dataMaster={dataMaster}
              setDataMaster={setDataMaster}
            />
          ) : item.type === 'date' ? (
            <Datetimepicker
              textTitle={item.nameText}
              placeholder={dataMaster.DefaultSubject}
              mode={item.type}
              data={item}
              dataMaster={dataMaster}
              setDataMaster={setDataMaster}
            />
          ) : item.type === 'time' ? (
            <Datetimepicker
              textTitle={item.nameText}
              placeholder={dataMaster.DefaultSubject}
              mode={item.type}
              data={item}
              dataMaster={dataMaster}
              setDataMaster={setDataMaster}
            />
          ) : item.type === 'upload' ? (
            <Camera
              textTitle={item.nameText}
              data={dataMaster}
              item={item}
              setDataMaster={setDataMaster}
            />
          ) : item.type === 'checkbox' ? (
            <CheckTicker
              data={dataMaster}
              item={item}
              setDataMaster={setDataMaster}
            />
          ) : item.type === 'textarea' ? (
            <TextArea
              data={dataMaster}
              item={item}
              setDataMaster={setDataMaster}
              textTitle={item.nameText}
            />
          ) : null,
        )}
        {data.Data.ticket_template.multitable.map((item, index) => (
          <TableTicker
            item={item}
            setDataMaster={setDataMaster}
            dataMaster={dataMaster}
          />
        ))}
        {/* 
      
    
        <TableTicker setNote={setNote} textTitle="Ghi chu" />
        <InputFileTicker textTitle="Chon file" setFile={setFile} /> */}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          onSubmit();
        }}
        style={styles.button}>
        <Text style={{fontSize: 20, color: 'white'}}>Send Request</Text>
      </TouchableOpacity>
    </View>
  );
}
