
import {StyleSheet} from 'react-native'
import Sizes from '../../../styles/Sizes';
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modalView: {
        margin: Sizes.s40,
        backgroundColor: "white",
        borderRadius: Sizes.s30,
        padding: Sizes.s70,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: Sizes.s40,
        padding: Sizes.s20,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: Sizes.s30,
        textAlign: "center"
      }
})
export default styles;
