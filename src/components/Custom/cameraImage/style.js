import {StyleSheet, Dimensions} from 'react-native';
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 1.1,
  },
  modalItem: {
    width: width / 1.1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: Sizes.s20,
  },
  close: {
    backgroundColor: '#ff9335',
    width: '30%',
    marginTop: Sizes.s20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Sizes.s10,

    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnmodal: {
    width: '100%',
    backgroundColor: '#ff9335',
    marginTop: Sizes.s20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textbtn: {
    fontSize: Sizes.s50,
    color: 'white',
  },
  modalContainer: {
    width: width,
    height: height,
    backgroundColor: '#00000066',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputfile: {
    width: width / 1.1,
    height: Sizes.s100,
    justifyContent: 'center',
    borderRadius: Sizes.s30,
    borderWidth: Sizes.s2,
    borderColor: '#888888',
    padding: Sizes.s20,
    flexDirection:'row'
  },
});
export default styles;
