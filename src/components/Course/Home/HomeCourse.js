import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
  ToastAndroid,
} from 'react-native';
import Headers from '../../Custom/Header/index';
import Card from '../../Custom/CardCourse/CardCourse';

import styles from './styte';
import {ADD_COURSE} from '../../../router/navigationType';
import {useNavigation} from '@react-navigation/native';
import UpdateCourse from '../UpdateCourse/UpdateCourse';
import Loading from '../../Custom/Loadding/Loading';
import messaging from '@react-native-firebase/messaging';
export default function Home(props) {
  const navigations = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const result = props.data;
  const [currentItem, setCurrentItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const _setCurrentItem = item => {
    setCurrentItem(item);
  };
  const _setModal = check => {
    setModalVisible(check);
  };
  useEffect(() => {
    if (result !== null) {
      setData(result.data);
    }
  }, [result]);

  useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      //  navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        //    setLoading(false);
      });
  }, []);
  //khi delete no su tu dong cap nhat lai data
  useEffect(() => {
    if (props.delete !== null) {
      props.getCourse();
    }
  }, [props.delete]);
  //update thanh cong cap nhat lai data
  useEffect(() => {
    if (props.updateCoursedata !== null) {
      props.getCourse();
    }
  }, [props.updateCoursedata]);
  useEffect(() => {
    props.getCourse();
    props.getBuildingRoom();
    handelNotification();
  }, []);
  //sau 10s chua load xog se tự động gắn load la false de cho nguoi dung tuong tac

  useEffect(() => {
    setLoading(props.loadding);
  }, [props.loadding]);
  //cap nhat thang cong se ve man hinh chinh
  useEffect(() => {
    if (props.updateCoursedata !== null) {
      setModalVisible(false);
    }
  }, [props.updateCoursedata]);
  return (
    <SafeAreaView style={styles.container}>
      <Headers
        iconRight={'add'}
        leftPress={() => navigations.openDrawer()}
        iconLeft={'menu'}
        title={'Quản lý khóa học'}
        rightPress={() => navigations.navigate(ADD_COURSE)}
      />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Card
            updateCourse={props.updateCourse}
            deleteCourse={props.deleteCourse}
            navigations={navigations}
            item={item}
            _setCurrentItem={_setCurrentItem}
            setModalVisible={setModalVisible}
          />
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <UpdateCourse
          setModalVisible={setModalVisible}
          updateCourse={props.updateCourse}
          updateCoursedata={props.updateCoursedata}
          databuild={props.databuild}
          item={currentItem}
        />
      </Modal>
      {loading && <Loading />}
    </SafeAreaView>
  );
}
