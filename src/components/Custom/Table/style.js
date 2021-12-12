import {Dimensions, StyleSheet} from 'react-native';
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    containertable:{
        width:width/1.1,
        justifyContent:'center',
        alignItems: 'center',
        padding: Sizes.s20,
        borderRadius:Sizes.s20,
        borderWidth:Sizes.s2,
        borderColor:'#888888'
    },
   
    button:{
       width:'50%',
       padding: Sizes.s20,
       backgroundColor:'#335271',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius:Sizes.s20,
       marginTop:Sizes.s20,  
    },
    text:{
        fontSize:Sizes.s40,
        color:'#335271',
        marginBottom:Sizes.s10
    },
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
        borderColor:'#888888',
        padding:Sizes.s20
    },
    textTitle:{
        fontSize: Sizes.s50,
        color:'#335271'
    }
 
});
export default styles;
