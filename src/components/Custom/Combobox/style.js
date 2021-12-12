import {StyleSheet,Dimensions} from 'react-native'
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container:{
    flex:1,
    width:width/1.1,
        
    },
    picker:{
       width:width / 1.1,
       height:Sizes.s100,
       justifyContent: 'center',
       borderRadius:Sizes.s30,
       borderWidth:Sizes.s2,
       borderColor:'#888888',
       
    }
})
export default styles;