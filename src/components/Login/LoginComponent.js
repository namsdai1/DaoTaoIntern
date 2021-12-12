import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  Image,
  ToastAndroid,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styte';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {loginAction} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import Sizes from '../../styles/Sizes';
import {DRAWER_SCREEN} from '../../router/navigationType';
import {useData} from '../../../setting';
import {image} from '../../Res';
import Loading from '../Custom/Loadding/Loading';
import PushNotification from 'react-native-push-notification';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default function Login(props) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [checkIcon, setCheckIcon] = useState(true);
  const [showPW, setShowPw] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const checkRememberIcon = checkIcon => {
    if (checkIcon == true) {
      setCheckIcon(false);
    } else {
      setCheckIcon(true);
    }
  };

  useEffect(async () => {
    if (props.data !== null) {
      await AsyncStorage.setItem('token', props.data.data.token);
      const tolen = props.data.data.token;
      useData['token'] = tolen;
      await AsyncStorage.setItem('icon', checkIcon + '');
      handelNotification(
        'Đăng nhập',
        'Bạn vừa đăng nhập vào App ,Token của bạn là :' + tolen,
      );
      navigation.navigate(DRAWER_SCREEN);
    }
  }, [props.data]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        ToastAndroid.show(
          'Kết nối không ổn định . Xin vui lòng kiểm tra lại đường truyền',
          ToastAndroid.LONG,
        );
      }, 10000);
    }
  }, [loading]);
  useEffect(() => {
    if (props.error !== null) {
      ToastAndroid.show(props.error, ToastAndroid.LONG);
    }
  }, [props.error]);
  const handelNotification = (title, message) => {
    PushNotification.localNotification({
      channelId: 'channel-id',
      title: 'aa',
      message: 'show',
      soundName: 'default',
    });
  };
  useEffect(async () => {
    const check = await AsyncStorage.getItem('icon');
    const tolen = await AsyncStorage.getItem('token');

    // if (check === 'false' && tolen !== null) {
    //   useData['token'] = tolen;
    //   handelNotification('Đăng nhập','Bạn đã đăng nhập vào App ,Token của bạn là :'+tolen);
    //   navigation.navigate(DRAWER_SCREEN);
    // }
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View>
        <View style={styles.box}>
          {/*logo*/}
          <View style={styles.viewLogo}>
            <Image
              resizeMode={'contain'}
              style={styles.logo}
              source={image.logo2}
            />
          </View>
          {/*Tên công ty*/}
          <Text style={styles.texttitle}>FIS INSIGHT PORTAL</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={[styles.view1, {borderColor: '#2196F3'}]}></View>
            <View style={[styles.view1, {borderColor: '#ff9335'}]}></View>
            <View style={[styles.view1, {borderColor: 'green'}]}></View>
          </View>
          {/*ten đăng nhập*/}
          <Text style={styles.texttitle2}>ĐĂNG NHẬP HỆ THỐNG</Text>
          {/* Nhap tên username va password*/}
          <View style={styles.textInput}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <FontAwesome5 name={'user-alt'} size={Sizes.s50} />
            </View>
            <View
              style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                style={styles.textIp}
                placeholder={'Username'}
                onChangeText={text => setUser(text)}></TextInput>
            </View>
            <View style={{flex: 1}}></View>
          </View>
          <View style={styles.textInput}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <FontAwesome5 name={'lock'} size={Sizes.s50} />
            </View>
            <View
              style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                style={styles.textIp}
                onChangeText={text => setPassword(text)}
                placeholder={'Password'}
                secureTextEntry={showPW}></TextInput>
            </View>
            <View style={styles.boxIconEye}>
              {/*show/hide password*/}
              <TouchableOpacity onPress={() => setShowPw(!showPW)}>
                <FontAwesome5
                  name={!showPW ? 'eye' : 'eye-slash'}
                  size={Sizes.s50}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/*ghi nhớ đăng nhập*/}
          <View style={{width: '100%'}}>
            <View style={styles.boxRmb}>
              <TouchableOpacity
                onPress={() => {
                  checkRememberIcon(checkIcon);
                }}>
                <FontAwesome5
                  name={checkIcon ? 'circle' : 'check-circle'}
                  size={Sizes.s50}
                  color="#ff9335"
                />
              </TouchableOpacity>
              <Text style={styles.textRemember}>Ghi nhớ đăng nhập</Text>
            </View>
          </View>
          {/*Nút dang nhap*/}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              {
                handelNotification('aa', 'aa');
                //  navigation.navigate(DRAWER_SCREEN);
                //   props.loginAction(
                //   user,
                //   password,
                // ),setLoading(props.loadding);
              }
            }}>
            <View>
              <Text style={styles.text}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>

          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={image.image}
          />
        </View>
      </View>
      {loading && <Loading />}
    </KeyboardAvoidingView>
  );
}
