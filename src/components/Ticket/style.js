import {Dimensions, StyleSheet} from 'react-native';
import Sizes from '../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:Sizes.s20
  },
  fontSize:{
    fontSize:Sizes.s40,
},
textInput:{
 
  height:Sizes.s100,
  borderRadius:Sizes.s30,
  borderWidth:Sizes.s2,
  borderColor:'#888888',
  padding:Sizes.s20
},
textArea:{
  width:'100%',
  height:Sizes.s200,
  borderRadius:Sizes.s30,
  borderWidth:Sizes.s2,
  borderColor:'#888888',
  padding:Sizes.s20,
  textAlignVertical: 'top',
},
textInput2:{
  width:'40%',
  height:Sizes.s100,
  borderRadius:Sizes.s30,
  borderWidth:Sizes.s2,
  borderColor:'#888888',
  padding:Sizes.s20
},
  textDate:{
    
    fontSize: Sizes.s40,
    textAlign:'center',
    textAlignVertical:'center'
  },
  icon:{
    flex:1
  },
  textinput2:{
    width:'100%',
    height:Sizes.s120,
    borderColor:'#888888',
    borderWidth:1,
    borderRadius:Sizes.s10,
    padding:Sizes.s20,
    fontSize: Sizes.s50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
  button: {
    borderRadius:Sizes.s10,
    marginBottom:10,
    width: '90%',
    height: Sizes.s100,
    backgroundColor: '#ff9335',
    alignItems: 'center',
    justifyContent: 'center',
  },
  erros: {
    fontSize: Sizes.s30,
    color: 'red',
    fontStyle: 'italic',
  },
  picker: {
    width: Sizes.s260,
    height: Sizes.s50,
  },
  textTitle: {
    fontSize: Sizes.s40,
    color: '#335271',
    marginBottom:Sizes.s5
    
  },
  boxcombobox: {
    width: '100%', 
    marginBottom:Sizes.s20
  },
});
export default styles;
