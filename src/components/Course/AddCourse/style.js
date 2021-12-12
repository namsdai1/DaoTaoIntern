import {StyleSheet,Dimensions} from 'react-native';
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    width: width / 1.1,
    paddingTop:Sizes.s10,
  },
  texttitle: {
    fontSize: Sizes.s50,
    color: '#345173',
  
    fontWeight:'bold'
  },
  textinput:{
      width:'100%',
      height:Sizes.s120,
      borderColor:'#d4d5da',
      borderWidth:1,
      borderRadius:Sizes.s10,
      padding:Sizes.s20,
      fontSize: Sizes.s50,
      
  },
  textinput3:{
    width:'100%',
    height:Sizes.s120,
    borderColor:'#d4d5da',
    borderWidth:1,
    borderRadius:Sizes.s10,
    padding:Sizes.s20,
    fontSize: Sizes.s50,
    
},
  textinput2:{
    width:'100%',
    height:Sizes.s120,
    borderColor:'#d4d5da',
    borderWidth:1,
    borderRadius:Sizes.s10,
    padding:Sizes.s20,
    fontSize: Sizes.s50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},

  textDate:{
    
    fontSize: Sizes.s40,
    textAlign:'center',
    textAlignVertical:'center'
  },
  icon:{
    flex:1
  },
  button:{
    height:Sizes.s100,
    width:Sizes.s260,
    borderRadius:Sizes.s15,
    backgroundColor:'#ff9335',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
},
text:{
  color:'white',
  fontSize:height/35
},
textErroRed:{
  color:'red',
  fontStyle:"italic",
  fontSize:Sizes.s40,
}
});
export default styles;
