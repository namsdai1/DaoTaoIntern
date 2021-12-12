
import {StyleSheet,Dimensions} from 'react-native'
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
      },
      header:{
        height:height/3.3,
        alignItems:'center',
        justifyContent:'center'
      }
})
export default styles;
