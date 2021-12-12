import React from 'react';
import {Alert,View, Text, Image,TouchableOpacity} from 'react-native';
import styles from './style';
import Icons from 'react-native-vector-icons/Fontisto';
import Sizes from '../../../styles/Sizes';
import { SCHEDULE_COURSE } from '../../../router/navigationType';
import { useNavigation } from '@react-navigation/native';
import { image } from '../../../Res';


export default function Card({item,deleteCourse,_setCurrentItem,setModalVisible}) {
  //giup dieu huong 
  const navigation = useNavigation();
  
  const convertdatetostring=(date)=>{
    function pad2(n) {
      return n < 10 ? n.replace('0', '') : n;
    }
    let template=new Date(date);
    const date2=pad2(template.getDate()+'/'+pad2(template.getMonth()+'/'+template.getFullYear()))
    return date2;
  }
 

  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate(SCHEDULE_COURSE,{course_id:item.course_id,courseName:item.courseName,startedDate:item.startedDate,endedDate:item.endedDate})}}>
      <View style={{flexDirection: 'row'}}>
      {/* Tieu đề khóa học */}
        <View style={{flex: 7}}>
          <Text
            numberOfLines={2}
            style={{fontSize: Sizes.s50, fontWeight: 'bold', color: '#345173'}}>
            {item.courseName}
          </Text>
        </View>
        <TouchableOpacity  style={{flex: 1, alignItems: 'flex-end'}} onPress={()=>{
          Alert.alert(
            item.courseName,
            item.courseName,
           [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            {
              text: "Delete",
              onPress: () => {deleteCourse(item.course_id),console.log("Delete Pressed")},       
            },
            { text: "Update", onPress: () => {_setCurrentItem(item),setModalVisible(true)} }
          ]
        )}}>
        <View>
          <Icons name={'more-v-a'} size={Sizes.s50} color={'#d4d5da'} />
        </View>
        </TouchableOpacity>
      </View>
      {/* Tên giảng viên */}
      <View style={styles.boxicon}>
        <Image
          source={image.person}
          style={styles.image}
        />
        <Text numberOfLines={1} style={styles.text}>Giảng viên: <Text style={{fontWeight:'bold',color:'#0a8dc3'}}>{item.trainer}</Text></Text>
      </View>
      {/* Ten cán bộ quản lý */}
      <View style={styles.boxicon}>
        <Image
          source={image.contact}
          style={styles.image}
        />
         <Text numberOfLines={1} style={styles.text}>Cán bộ quản lý: <Text style={{fontWeight:'bold',color:'#f0943f'}}>{item.created_by}</Text></Text>
      </View>
      {/* Thời gian thèo ngày*/}
      <View style={styles.boxicon}>
        <Image
          source={image.calender}
          style={styles.image}
        />
         <Text numberOfLines={1} style={styles.text}>Thời gian: <Text style={{fontWeight:'bold'}}>{convertdatetostring(item.startedDate)+'-'+convertdatetostring(item.endedDate)}</Text></Text>
      </View>
      
      {/*Tên tòa nhà*/}
      <View style={styles.boxicon}>
        <Image
          source={image.company}
          style={styles.image} 
        />
         <Text numberOfLines={1} style={styles.text}>Tòa nhà: <Text style={{fontWeight:'bold'}}>{item.buildingName}</Text></Text>
      </View>
      {/* Tên phòng học*/}
      <View style={styles.boxicon}>
        <Image source={image.room} style={styles.image} />
        <Text numberOfLines={1} style={styles.text}>Phòng: <Text style={{fontWeight:'bold'}}>{item.roomName}</Text></Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}
