import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Headers from '../../Custom/Header/index';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import Sizes from '../../../styles/Sizes';

import {DRAWER_SCREEN} from '../../../router/navigationType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const datadate = [{date: '19-09-2020'}, {date: '19-09-2021'}];
export default function AddSheduleCourse(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const {course_id,dataDate}=route.params;
  //giá trị truyền
  
  //ten buoi hoc
  const [name, setName] = useState('');
  //ten giang vien
  const [leturers, setLeturers] = useState('');

  //datepicker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [datecheck, setDatecheck] = useState('');
  const [textdate, setTextdate] = useState('');
  const [textdate2, setTextdate2] = useState('');
  //du lieu phong va tru so
  const [databuilding, setDatabuilding] = useState([]);
  //dropitem Toa nha
  const [open, setOpen] = useState(false);
  // text của company
  const [company, setCompany] = useState(null);
  //id cua company
  const [idcompany, setIdcompany] = useState();
  //dropitem Phong
  const [open2, setOpen2] = useState(false);
  //text của Room
  const [room, setRoom] = useState(null);
  //du lieu phong hoc
  const [dataRoom, setDataRoom] = useState([]);
  //Id của phong học
  const [idroom, setIdroom] = useState();
  //dropitem ngày hoc
  const [open3, setOpen3] = useState(false);
  //text của Room
  const [datemode, setDatemode] = useState(null);
  //chuyen string thanh date
  const convertstringtodate = dated => {
    var parts = dated.split('-');
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    var mydate = new Date(parts[2], parts[1] - 1,parts[0] );    
    return new Date(mydate.toString().split('GMT')[0]+' UTC').toISOString();
  };

  // các dòng bị lỗi { chưa nhập thông tin }

  const [errorLecturers, setErrorLecturers] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorRoom, setErrorRoom] = useState(false);
  const [errorCompany, setErrorCompany] = useState(false);
  const [errorName, setErrorName] = useState(false);

  // Lưu trữ thông tin đã nhập trước của trụ sở
  useEffect(async () => {
    if (company !== null) {
      await AsyncStorage.setItem('company', company);
      const ind = databuilding.findIndex(x => x.buildingName === company);
      setIdcompany(result[ind]._id);
      setDataRoom(result[ind].room);
    } else {
      setDataRoom([]);
    }
    //Mỗi lần thay đổi thông tin trụ sở thì phòng trả về ban đầu
    setRoom(null);
  }, [company]);
  //moi lan room thay doi se cap nhat id
  useEffect(() => {
    if (room !== null) {
      const ind2 = dataRoom.findIndex(x => x.roomName === room);
      setIdroom(dataRoom[ind2]._id);
    }
  }, [room]);

  //gui yeu cau de lay du lieu tru so va phong tu du lieu
  useEffect(() => {
    props.getBuildingRoom();
  }, []);
  //nhan du lieu
  const result = props.data;
  useEffect(() => {
    if (result !== null) {
      setDatabuilding(result);
    }
  }, [result]);


  //Hàm xử lý erro
  const erro = () => {
    if (leturers === '') {
      setErrorLecturers(true);
    } else {
      setErrorLecturers(false);
    }

    if (name === '') {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
    if (room === null) {
      setErrorRoom(true);
    } else {
      setErrorRoom(false);
    }
    if (company === null) {
      setErrorCompany(true);
    } else {
      setErrorCompany(false);
    }
    if (
      leturers !== '' &&
      name !== '' &&
      (room !== null) & (company !== null)
    ) {

      let input={courseId:course_id,className:name,trainer:leturers,date:convertstringtodate(datemode),startedTime:textdate,endedTime:textdate2,buildingId:idcompany,roomId: idroom}
      props.addClass(input);
    }
  };

  //set text date vào 2 nút
  const convertHoursMinutes = currentDate => {
    //xử lý thêm số 0 vào đầu khi ngày chỉ có 1 chữ s61
    function pad2(n) {
      return (n < 10 ? '0' : '') + n;
    }
    let temDate;
    if (currentDate == null) {
      temDate = new Date();

      const fdate = pad2(temDate.getHours()) + ':' + pad2(temDate.getMinutes());
      setTextdate2(fdate);
      setTextdate(fdate);
    }
    if (datecheck === 'btn1') {
      temDate = new Date(currentDate);
      const fdate = pad2(temDate.getHours()) + ':' + pad2(temDate.getMinutes());

      setTextdate(fdate);
    }
    if (datecheck === 'btn2') {
      temDate = new Date(currentDate);
      const fdate = pad2(temDate.getHours()) + ':' + pad2(temDate.getMinutes());
      setTextdate2(fdate);
    }
  };
  //chay lần đầu của ngày khi vừa vào màn hình
  useEffect(() => {
    convertHoursMinutes(null);
  }, []);

  //khởi động timepicker
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  //sự kiện cho ngày
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    convertHoursMinutes(currentDate);
  };
  const showDatepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <Headers
        title={'TẠO MỚI BUỔI HỌC'}
        iconLeft={'chevron-back'}
        leftPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.box}>
        {/*ten khoa*/}
        <Text style={styles.texttitle}>Tên khóa</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setName(text)}
          placeholder={'nhập tên buổi học'}></TextInput>
        {/*De trống ô text Khoa hoc*/}
        <View>
          {errorName && (
            <Text style={styles.textErroRed}>Tên khóa học không thể trống</Text>
          )}
        </View>
        {/*ten Giao vien*/}
        <Text style={styles.texttitle}>Giảng viên</Text>
        <TextInput
          onChangeText={text => setLeturers(text)}
          style={styles.textinput}
          placeholder={'nhập tên giảng viên'}></TextInput>
        {/*De trống ô text Giao vien*/}
        <View>
          {errorLecturers && (
            <Text style={styles.textErroRed}>
              Tên giảng viên không thể trống
            </Text>
          )}
        </View>
        {/*Chon ngay cho buoi hoc*/}
        <Text style={styles.texttitle}>Chọn ngày</Text>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <DropDownPicker
              style={styles.textinput4}
              schema={{
                label: 'date',
                value: 'date',
              }}
              textStyle={{
                fontSize: 20,
              }}
              ArrowDownIconComponent={({style}) => (
                <FontAwesome5
                  name={'caret-down'}
                  size={Sizes.s40}
                  style={style}
                />
              )}
              labelStyle={{textAlign: 'center'}}
              zIndex={5000}
              open={open3}
              value={datemode === null ? dataDate[0].date : datemode}
              items={dataDate}
              setOpen={setOpen3}
              setValue={
                datemode === null ? setDatemode(dataDate[0].date) : setDatemode
              }
            />
          </View>
          <View style={{flex: 1, marginLeft: Sizes.s10}}></View>
        </View>
        {/*báo lỗi Chưa chọn trụ sở*/}
        <View>
          {errorCompany && (
            <Text style={styles.textErroRed}>Vui lòng trụ sở</Text>
          )}
        </View>
        {/*Chon gia bt va kt*/}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.texttitle}>Giờ bắt đầu</Text>
            <TouchableOpacity
              style={styles.textinput2}
              onPress={() => {
                showDatepicker(), setDatecheck('btn1');
              }}>
              <View style={{flex: 6}}>
                <Text style={styles.textdate}>{textdate}</Text>
              </View>
              <FontAwesome5
                size={Sizes.s40}
                name="caret-down"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, marginLeft: Sizes.s10}}>
            <Text style={styles.texttitle}>Giờ kết thúc</Text>
            <TouchableOpacity
              style={styles.textinput2}
              onPress={() => {
                showDatepicker(), setDatecheck('btn2');
              }}>
              <View style={{flex: 6}}>
                <Text style={styles.textdate}>{textdate2}</Text>
              </View>
              <FontAwesome5 size={20} name="caret-down" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {errorDate && (
            <Text style={styles.textErroRed}>
              Ngày bắt đầu không dược sau ngày kết thúc
            </Text>
          )}
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        {/*Chon Cong ty*/}
        <Text style={styles.texttitle}>Tòa nhà</Text>
        <DropDownPicker
          style={styles.textinput3}
          schema={{
            label: 'buildingName',
            value: 'buildingName',
          }}
          textStyle={{
            fontSize: 20,
          }}
          zIndex={3000}
          zIndexInverse={1000}
          open={open}
          value={company}
          items={databuilding}
          setOpen={setOpen}
          setValue={setCompany}
          stickyHeader={true}
          placeholder={'Chọn tòa nhà'}
          ArrowDownIconComponent={({style}) => (
            <FontAwesome5 name={'caret-down'} size={Sizes.s40} style={style} />
          )}
        />
        {/*báo lỗi Chưa chọn trụ sở*/}
        <View>
          {errorCompany && (
            <Text style={styles.textErroRed}>Vui lòng trụ sở</Text>
          )}
        </View>
        {/*Chon phong hoc*/}

        <Text style={styles.texttitle}>Phòng</Text>
        <DropDownPicker
          style={styles.textinput3}
          schema={{
            label: 'roomName',
            value: 'roomName',
          }}
          placeholder={'Chọn Phòng'}
          textStyle={{
            fontSize: 20,
          }}
          zIndex={1000}
          zIndexInverse={3000}
          ArrowDownIconComponent={({style}) => (
            <FontAwesome5 name={'caret-down'} size={Sizes.s40} style={style} />
          )}
          arrowStyle={{marginRight: 10}}
          open={open2}
          value={room}
          items={dataRoom}
          setOpen={setOpen2}
          setValue={setRoom}
        />
        {/*báo lỗi Chưa chọn phòng*/}
        <View>
          {errorRoom && (
            <Text style={styles.textErroRed}>Vui lòng chọn phòng</Text>
          )}
        </View>
        <View
          style={{width: '100%', alignItems: 'flex-end', marginTop: Sizes.s10}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              erro();
            }}>
            <FontAwesome5
              name={'save'}
              size={Sizes.s40}
              color={'white'}
              style={{marginRight: Sizes.h10}}
            />
            <View>
              <Text style={styles.text}>Luu</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
