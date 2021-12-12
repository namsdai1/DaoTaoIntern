import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {api1, api2, useData} from '../../../setting';

const bodyParameters = {
  key: 'value',
};
export async function getapiBuildingRoom() {
  const response = await axios
    .get(api1 + '/api/edu/get_building', {
      headers: {
        Authorization: `Bearer ${useData.token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(function (error) {
      //nên tạo dữ liệu erro vào hàm này
      return {
        resultCode: -1,
        message: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
      };
    });
  return response;
}
