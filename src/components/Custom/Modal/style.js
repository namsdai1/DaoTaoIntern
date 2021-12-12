import {Dimensions, StyleSheet} from 'react-native';
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textclose:{
    fontSize: Sizes.s35,
    color:'white'
  },
  close:{
    backgroundColor:'#ff9335',
    width: '100%',
    height:Sizes.s120,
    borderRadius: Sizes.s20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  scroll:{
    height:Sizes.s570,
  },
  text:{
    fontSize: Sizes.s40,
    color:'#335271',
  },
  modalItem: {
    width: width / 1.1,
    backgroundColor: 'white',
    padding: Sizes.s20,
    borderRadius:Sizes.s20
  },
  modaltextIp: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    width: width,
    height: height,
    backgroundColor: "#00000066",
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: Sizes.s100,
    width: '100%',
    alignItems: 'center',
    borderRadius: Sizes.s30,
    borderWidth: Sizes.s2,
    borderColor: '#888888',
    padding: Sizes.s20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#335271',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    backgroundColor: 'red',
  },
});
export default styles;
