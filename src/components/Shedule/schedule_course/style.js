
import {StyleSheet,Dimensions} from 'react-native'
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    texttitle:{
        fontSize:Sizes.s50,
        fontWeight:'bold',
        color:'#0a8dc3',
       
    },
    boxtexttitle:{
        width:width/1.1,
    }
})
export default styles;
