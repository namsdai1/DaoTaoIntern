import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  Platform,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import Headers from '../../Custom/Header/index';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import Sizes from '../../../styles/Sizes';
import {useNavigation} from '@react-navigation/native';
import {DRAWER_SCREEN} from '../../../router/navigationType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');


export default function UpdateCourse({updateCoursedata,getBuildingRoom,databuild,item,updateCourse,setModalVisible}) {
  //hook navigation
  const navigation = useNavigation();
  //du lieu cua tru so va phong
  const [databuilding,setDatabuilding]= useState([]);
  //giá trị truyền textiput
  const [name, setName] = useState(item.courseName);
  const [leturers, setLeturers] = useState(item.trainer);
  
  //datepicker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [datecheck, setDatecheck] = useState('');
  const [textdate, setTextdate] = useState(item.startedDate);
  const [textdate2, setTextdate2] = useState(item.endedDate);

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
  // các dòng bị lỗi { chưa nhập thông tin }
  const [errorLecturers, setErrorLecturers] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorRoom, setErrorRoom] = useState(false);
  const [errorCompany, setErrorCompany] = useState(false);
  const [errorName, setErrorName] = useState(false);
  
  //
  const result=databuild;
    useEffect(() => { 
       if(result!==null){
          setDatabuilding(result);
          if(company === null){
            setCompany(item.buildingName);
          }
          if(room===null){
            setRoom(item.roomName);
          }
        }
    }, [result])
    
  // Lưu trữ thông tin đã nhập trước của trụ sở
  useEffect(async () => {
      if (company !== null) {
        await AsyncStorage.setItem('company', company);
        const ind= databuilding.findIndex(x => x.buildingName ===company);
        setIdcompany(result[ind]._id);
        setDataRoom(result[ind].room);
        setRoom(null);
      } else {
        setDataRoom([]);
      }
    setRoom(null)
    //Mỗi lần thay đổi thông tin trụ sở thì phòng trả về ban đầu
  }, [company]);
  //moi lan room thay doi se cap nhat
  useEffect(() => {
    if(dataRoom!==[] && dataRoom!==undefined) {
      if(room!==null){
        const ind2= dataRoom.findIndex(x => x.roomName ===room);
        setIdroom(dataRoom[ind2]._id);  
      }
    }
  }, [room])
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
    var d1 = new Date(textdate);
    var d2 = new Date(textdate2);
    if (d1 > d2) {
      setErrorDate(true);
    } else {
      setErrorDate(false);
    }

    //neu khong co error thi se xu ly du lieu truyen vao 
    if(name!=='' && leturers!=='' && d1<=d2 && idcompany!==null && idroom !==null & company !==null & room !==null){
      let input ={courseId:item.course_id,courseName:name,trainer:leturers,startedDate:textdate,endedDate:textdate2,buildingId:idcompany,roomId:idroom}
      updateCourse(input)
    }
  };
  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }
  const dateConvertString=(date)=>{ 
    let temDate = new Date(date);
      let fdate =
        pad2(temDate.getDate()) +
        '-' +
        pad2(temDate.getMonth() ) +
        '-' +
        temDate.getFullYear();
        return fdate;
  }
  const convertdatestring = currentDate => {
    //khi chua co du lieu se mac dinh lay ngay thag hien tai
  
    
    //gan du lieu vao ngay bat dau 
    if (datecheck === 'btn1') {   
      setTextdate(currentDate);
    }
    //gan du lieu vao ngay ket thuc
    if (datecheck === 'btn2') {
      setTextdate2(currentDate);
    }
  };
  //chay lần đầu của ngày khi vừa vào màn hình
  useEffect(() => {
    convertdatestring(null);
  },[]);

  //khởi động timepicker
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    convertdatestring(currentDate);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  //gui yeu cau de lay du lieu tru so va phong tu du lieu
  
  return (
    <View style={styles.container}>
      <Headers
        title={'CẬP NHẬT KHÓA HỌC'}
        iconLeft={'chevron-back'}
        leftPress={() => {
          setModalVisible(false);
        }}
      />
      <View style={styles.box}>
        {/*ten khoa*/}
        <Text style={styles.texttitle}>Tên khóa</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setName(text)}
          placeholder={'nhập tên khóa học'}>{name}</TextInput>
        {/*De trống ô text Khoa hoc*/}
        <View>
          {errorName && (
            <Text style={styles.textErroRed}>Tên khóa học không thể trống</Text>
          )}
        </View>
        {/*ten Giao vien*/}
        <Text style={styles.texttitle}>Giảng viên</Text>
        <TextInput
          onChangeText={(text) => setLeturers(text)}
          style={styles.textinput}
          placeholder={'nhập tên giảng viên'}>{item.trainer}</TextInput>
        {/*De trống ô text Giao vien*/}
        <View>
          {errorLecturers && (
            <Text style={styles.textErroRed}>
              Tên giảng viên không thể trống
            </Text>
          )}
        </View>
        {/*Chon ngay*/}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.texttitle}>Từ ngày</Text>
            <TouchableOpacity
              style={styles.textinput2}
              onPress={() => {
                showDatepicker(), setDatecheck('btn1');
              }}>
              <View style={{flex: 6}}>
                <Text style={styles.textDate}>{dateConvertString(textdate)}</Text>
              </View>
              <FontAwesome5 size={20} name="caret-down" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.texttitle}>Đến ngày</Text>
            <TouchableOpacity
              style={styles.textinput2}
              onPress={() => {
                showDatepicker(), setDatecheck('btn2');
              }}>
              <View style={{flex: 6}}>
                <Text style={styles.textDate}>{dateConvertString(textdate2)}</Text>
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
              erro()
         
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
