import {StyleSheet,Dimensions} from 'react-native'
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:width/1.1,
        padding:Sizes.s30,
        marginTop:Sizes.s20,
        borderRadius:Sizes.s10,
        borderColor:'#d4d5da',
        borderWidth:1
    },
    image:{
        width:width/13,
        height:width/13
        
    },
    boxicon:{
        flex:1,
        margin:Sizes.s5,
        width:'100%',
        
        flexDirection:'row'
    },
    text:{
        fontSize:Sizes.s45,
        color:'#345173',
        paddingLeft:Sizes.s20,
    },
    boxID:{
        backgroundColor:'#e7ebee',
       width:Sizes.s200,
       height:Sizes.s90,
       borderRadius:Sizes.s50,
       justifyContent:'center',
       alignItems:'center'
    },
    textID:{
       color:'#d67e3e',
       fontSize:Sizes.s45,
       fontWeight:'bold'
    }
})
export default styles;