import {StyleSheet,Dimensions} from 'react-native'
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:width/1.1,
        padding:Sizes.s20,
        marginTop:Sizes.s20,
        borderRadius:Sizes.s20,
        borderColor:'#d4d5da',
        borderWidth:1
    },
    image:{
        width:width/15,
        height:width/15
        
    },
    boxicon:{
        flex:1,
        margin:Sizes.s5,
        width:'100%',
        
        flexDirection:'row'
    },
    text:{
        fontSize:Sizes.s40,
        color:'#345173',
        paddingLeft:Sizes.s15,
        
    }
})
export default styles;