import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Sizes from '../../../styles/Sizes';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default function Modalpicker({data,item,setDataMaster}) {
  const [value, setValue] = useState('');
  const [masterData, setMasterData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [seach, setSeach] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setMasterData(item);
    setFilterData(item);
  }, [item]);
  const _setItem = item => {
    setValue(item.id + '-' + item.book);
    
  };
  
  const seachFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.id ? item.id.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSeach(text);
    } else {
      setFilterData(masterData);
      setSeach(text);
      console.log(filterData + '22');
    }
  };
  return (
    <View style={styles.centeredView}>
      <TouchableOpacity
        style={[styles.modalView]}
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
          <Text style={{textAlign: 'left', fontSize: Sizes.s40, color: '#335271'}}>
            {value === '' ? '' : value}
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalItem}>
            <View style={styles.itemRow}>
              <FontAwesome5 name="search" size={Sizes.s40} />
              <TextInput
                style={styles.modaltextIp}
                placeholder="Tìm kiếm"
                value={seach}
                underlineColorAndroid="transparent"
                onChangeText={text => seachFilter(text)}
              />
            </View>
            <View style={{borderBottomWidth: Sizes.s2, borderColor: 'black'}} />
            <ScrollView>
              {!(Array.isArray(filterData) && filterData.length) ? (
                <View>
                  <Text>No found Object</Text>
                  <TouchableOpacity
                    style={styles.close}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.textclose}>Close</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                filterData.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      _setItem(item), setModalVisible(false);
                    }}>
                    <View style={{marginTop: Sizes.s30}}>
                      <Text style={styles.text}>
                        {item.id}-{item.book}
                      </Text>
                      <View
                        style={{
                          borderBottomWidth: Sizes.s2,
                          borderColor: 'black',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
