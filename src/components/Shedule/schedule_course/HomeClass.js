import React, {useState, useEffect} from 'react';
import {View,Modal, Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import Headers from '../../../components/Custom/Header/index';
import Card from '../../Custom/CardShedule/CardClass';

import styles from './style';
import {ADD_COURSE, ADD_SCHEDULE_COURSE} from '../../../router/navigationType';
import {useNavigation, useRoute} from '@react-navigation/native';
import UpdateSheduleCourse from '../schedule_update_course/UpdateClass';
import Loading from '../../Custom/Loadding/Loading';

export default function schedule_course(props) {
  const navigations = useNavigation();
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const {course_id, courseName,startedDate,endedDate} = route.params;
  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  //lay du lieu hien tai
  const [currentItem, setCurrentItem] = useState();
  //bat/tat modal
  const [modalVisible, setModalVisible] = useState(false);
  const _setCurrentItem = item => {
    setCurrentItem(item);
  };
  const [dataDate, setDataDate] = useState([]);
  //chuyen date sang string theo dang (dd-MM-yyyy) 
  const dateconvertstring=(date)=>{
    function pad2(n) {
      return (n < 10 ? '0' : '') + n;
    }
    let temDate = new Date(date);
      let fdate =
        pad2(temDate.getDate()) +
        '-' +
        pad2(temDate.getMonth() + 1) +
        '-' +
        temDate.getFullYear();
        return fdate;
  }
  //lay thoi gian 
  useEffect(() => {
  Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
  }
  const date1 = new Date(startedDate);
  const date2 = new Date(endedDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  var item=[];
  for(var i=0; i<diffDays+1; i++) {
    let items={
      date:dateconvertstring(date1.addDays(i))
    };
    item.push(items);
  }
  setDataDate(item);
  },[]);
  useEffect(() => {
    if (props.data !== null) {
      setData(props.data.data);
    }
  }, [props.data]);
  useEffect(() => {
    if (course_id !== '') {
      setId(course_id);
      props.getClassbyCourses(course_id);
    }
  }, [course_id]); 
 
  useEffect(() => {
    if (props.dataUpdate !== null) {
      setModalVisible(false);
      props.getClassbyCourses(course_id);
    }
  }, [props.dataUpdate]),
  useEffect(() => {
    if(props.dataAddClass!==null){
      props.getClassbyCourses(course_id);
    }
  },[props.dataAddClass])
  //moi lan xoa se cap nhat lai data
  useEffect(() => {
    if (props.dataDelete !== null) {
      props.getClassbyCourses(course_id);
    }
  }, [props.dataDelete]);
  useEffect(() => {
    props.getBuildingRoom();
  }, []);
  //moi khi nhan du lieu se vao man hinh loading
  useEffect(() => {
    setLoading(props.loadding)
  }, [props.loadding])
  return (
    <SafeAreaView style={styles.container}>
      <Headers
        iconRight={'add'}
        iconLeft={'chevron-back'}
        leftPress={() => {
          setData, navigations.goBack();
        }}
        title={'QUẢN LÝ BUỔI HỌC'}
        rightPress={() => {
          navigations.navigate(ADD_SCHEDULE_COURSE, {course_id: course_id,dataDate:dataDate});
        }}
      />
      <View style={styles.boxtexttitle}>
        <Text style={styles.texttitle}>{courseName}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Card
            item={item}
            deleteClass={props.deleteClass}
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
        <UpdateSheduleCourse
          setModalVisible={setModalVisible}
          databuild={props.dataBuildingRoom}
          updateClass={props.updateClass}
          item={currentItem}
          dataDate={dataDate}
          dataUpdate={props.dataUpdate}
        />
      </Modal>
      {loading && (
        <Loading/>
      )}
    </SafeAreaView>
  );
}
