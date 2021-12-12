import axios from 'axios';
import { api1,api2 } from '../../../setting';
export async function postLogin(user, password) {
  return axios
    .post('http://118.69.123.51:5000/fis/api/login', {
      username: user,
      password: password,
    })
    .then((response) => {
      console.log('response catch => getLoginApi => '+response);
      return response.data;
    })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      //Đăng nhập sai
      //Thep api nó sẽ trả về status 401 nên bay về hàm này
      //những không có giá trị trả về
      //nên tạo dữ liệu erro vào hàm này
      return {
        resultCode: -1,
        message: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
      };
    });
}
