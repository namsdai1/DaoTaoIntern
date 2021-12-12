import React from 'react';
import {View, Text, Image ,TouchableOpacity,Alert} from 'react-native';
import styles from './style';
import Icons from 'react-native-vector-icons/Fontisto';
import Sizes from '../../../styles/Sizes';
import { image } from '../../../Res';
import moment from 'moment';

export default function Card({item,deleteClass,setModalVisible,_setCurrentItem}) {
  //chuyen ngay gio sang dang string
  const convertDateToString=(date)=>{
    let template=new Date(date);
    var date2= moment(template).format("DD-MM-YYYY")
    return date2;
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      {/* Tieu đề khóa học */}
        <View style={{flex: 9}}>
          <Text
            numberOfLines={2}
            style={{fontSize: 24, fontWeight: 'bold', color: '#345173'}}>
            {item.className}
          </Text>
        </View>
        <TouchableOpacity  style={{flex: 1, alignItems: 'flex-end'}} onPress={()=>{Alert.alert(
      "Buoi hoc",
      item.className,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {deleteClass(item.classId),console.log("Delete Pressed")},       
        },
        { text: "Update", onPress: () => {_setCurrentItem(item),setModalVisible(true)} }
      ]
    );}}>
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
         <Text numberOfLines={1} style={styles.text}>Ngày: <Text style={{fontWeight:'bold'}}>{convertDateToString(item.date)}</Text></Text>
      </View>
      {/* Thời gian */}
      <View style={styles.boxicon}>
        <Image
          source={image.time}
          style={styles.image}
        />
         <Text numberOfLines={1} style={styles.text}>Thời gian: <Text style={{fontWeight:'bold'}}>{item.startedTime+"-"+item.endedTime}</Text></Text>
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
            {/* Tên phòng học*/}
            <View style={styles.boxicon}>
        <View style={{flex:2,flexDirection:'row'}}>
        <Image source={image.wifi} style={styles.image} />
        <Text numberOfLines={1} style={[styles.text,{fontWeight:'bold'}]}>{item.wifi}</Text>
        </View>
        <View style={{flex:1,alignItems:'flex-end'}}>
             <View style={styles.boxID}>
               <Text style={styles.textID}>{item.code}</Text>
             </View>
        </View>
      </View>

    </View>
  );
}
