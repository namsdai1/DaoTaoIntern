import {StyleSheet,Dimensions} from 'react-native'
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
   container: {
    width: '100%', 
    marginBottom:Sizes.s20
   } ,
   fontSize:{
       fontSize:Sizes.s40,
   },
   fontErrors:{
       fontSize:Sizes.s30,
       backgroundColor:'red'
   },
   textInput:{
       width:'100%',
       height:Sizes.s100,
       borderRadius:Sizes.s30,
       borderWidth:Sizes.s2,
       borderColor:'#000000',
       padding:Sizes.s20
   },
   textTitle:{
    fontSize: Sizes.s40,
    color: '#335271',
    marginBottom:Sizes.s5
   }
})
export default styles;