import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Sizes from '../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  bg: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    opacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: width / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: Sizes.s100,
    width: '100%',
    borderRadius: Sizes.s20,
    backgroundColor: '#ff9335',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: height / 35,
  },
  texttitle: {
    color: '#335271',
    fontSize: Sizes.s50,
    fontWeight: 'bold',
  },
  texttitle2: {
    color: '#fea026',
    marginBottom: 10,
    fontSize: Sizes.s45,
    fontWeight: 'bold',
  },
  textIp: {
    fontSize: Sizes.s45,
    color: '#335271',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: Sizes.s120,
    backgroundColor: '#d1d1d1',
    marginBottom: Sizes.s20,
    borderRadius: Sizes.s20,
  },
  image: {
    width: width / 1.6,
    height: height / 5,
    marginTop: Sizes.s50,
  },
  textRemember: {
    marginLeft: 3,
    fontStyle: 'italic',
    color: '#ff9335',
  },
  boxRmb: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  boxIconEye: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  view1: {
    width: 20,
    height: 2,
    borderWidth: 2,

    margin: 5,
  },
  logo: {
    width: width / 2,
    height: height / 11,
  },
  viewLogo: {
    width: '100%',
    height: height / 7,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5,
  }
});
