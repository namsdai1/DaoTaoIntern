import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { api1,api2, useData } from '../../../setting';
const bodyParameters = {
  key: 'value',
};
export async function getClassbyCourses(IdCourse) {

  const token=useData.token
 const response = await axios
    .get(
      `http://10.86.224.37:5001/api/edu/get_class_by_course?courseId=${IdCourse}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
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

export async function addClasses(input) {
  const {courseId,className,trainer,date,startedTime,endedTime,buildingId,roomId}=input
   const token=useData.token
   const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json; charset=utf-8',
  };

  const data = {
    courseId: courseId,
    className: className,
    trainer: trainer,
    date: date,
    startedTime: startedTime,
    endedTime: endedTime,
    buildingId: buildingId,
    roomId: roomId,
  };
  const response = await axios
    .post('http://10.86.224.37:5001/api/edu/create_new_class', data, {
      headers: headers,
    })
    .then(response => {

      return response.data;
    })
    .catch(error => {
      return {
        resultCode: -1,
        message: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
      };
    });
  return response;
}

//xóa lop hoc
export async function DeleteClassbyCourses(IdCourse) {
  const token=useData.token
 const response = await axios
    .get(`http://10.86.224.37:5001/api/edu/delete_class?classId=${IdCourse}`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
export async function UpdateClasses(input) {
  const {classId,className,trainer,date,startedTime,endedTime,buildingId,roomId}=input;
   const token=useData.token;
   const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json; charset=utf-8',
  };

  const data = {
    classId: classId,
    className: className,
    trainer: trainer,
    date: date,
    startedTime: startedTime,
    endedTime: endedTime,
    buildingId: buildingId,
    roomId: roomId,
  };
  const response = await axios
    .post('http://10.86.224.37:5001/api/edu/edit_class', data, {
      headers: headers,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return {
        resultCode: -1,
        message: 'Có lỗi xảy ra , không kết nối được tới máy chủ',
      };
    });
  return response;
}
