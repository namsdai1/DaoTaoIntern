import React from 'react'
import { View, Text,Image ,Dimensions} from 'react-native'
import {DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'
const {width} = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOGIN_SCREEN, TICKET } from '../../router/navigationType'
import { image } from '../../Res'
export default function DrawerContent(props) {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                 <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                      <Image source={{uri:'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png'}} style={{width:width/3,height:width/3,borderRadius:width/6}}></Image>
                 </View>
                 <Text style={{fontSize:16,color:'#345173'}}>Vu Thanh Nam</Text>
                 <Text style={{fontSize:16,color:'#345173'}}>namvudeveloper@gmail.com</Text>
                 <View style={{flexDirection: 'row',marginTop:5, justifyContent: 'center'}}>
            <View
              style={{
                width: 25,
                height: 2,
                borderWidth: 2,
                borderColor: '#335271',
                margin:3
              }}></View>
            <View
              style={{
                width: 25,
                height: 2,
                borderWidth: 2,
                borderColor: '#ff9335',
                margin:3
              }}></View>
            <View
              style={{
                width: 25,
                height: 2,
                borderWidth: 2,
                borderColor: 'green',
                margin:3
              }}></View>
              </View>
            </View>
            <DrawerItem label="Thông tin ung dụng"
                labelStyle={{color:'#345173'}}
                icon={({color,size})=>(
                    <Image
                    source={image.info}
                    style={{width:size,height:size}}
                    />
                  )}                              
                onPress ={() =>{navigation.navigate(TICKET)}} 
            />
            <View
            style={{width:'100%',borderColor:'#d4d5da',borderWidth:0.5}}></View>
            <DrawerItem icon={({color,size})=>(
                <Icon
                name="exit-to-app"
                color={color}
                size={size}/>
               
            )}
            label="Sign Out"
            onPress={async()=>{await AsyncStorage.removeItem('token');
            navigation.navigate(LOGIN_SCREEN)}}>
              
            </DrawerItem>
            </DrawerContentScrollView>
            
        </View>
    )
}

