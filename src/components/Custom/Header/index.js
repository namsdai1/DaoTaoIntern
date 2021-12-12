import React from 'react'
import { View, Text,Dimensions,TouchableOpacity, } from 'react-native'
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import Icons from 'react-native-vector-icons/Ionicons';
import Sizes from '../../../styles/Sizes';
const Headers=({title,iconRight,iconLeft,rightPress,leftPress,backgroundColor,color}) =>{
    return (
        <View style={[{borderBottomWidth:0.5,borderColor:'black',width:width,alignItems:'center',justifyContent:'center',backgroundColor:backgroundColor},]}>
            <View style={{flexDirection:'row', width:width/1.1,height:height/13,}}>
             <TouchableOpacity onPress={leftPress}>
             <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                <Icons color='#d4d5da' name={iconLeft} size={width/10}/>    
            </View>
            </TouchableOpacity>
            <View style={{flex:8,justifyContent:'center',alignItems:'center'}}>
                <Text style={[{fontSize:width/15,fontWeight:'bold',color:color?color:('#345173')}]} >{title}</Text>
            </View>
            <TouchableOpacity onPress={rightPress}>
            <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                <Icons  color='#d4d5da' name={iconRight} size={width/10}/>    
            </View>
            </TouchableOpacity>
        </View>
        </View>
    )
}
export default Headers;
