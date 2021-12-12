
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { api1,api2, useData } from '../../../setting';
const bodyParameters = {
   key: "value"
};

export async function getCourses(){
   
    const response=axios.get(api1+'/api/edu/get_all_course', {
      headers: { 'Authorization': `Bearer ${useData.token}` },
      })
      .then((response) => {
        return response.data ;
      })
      .then(response=>{
        return response
      })
      .catch(function (error) {
        //nên tạo dữ liệu erro vào hàm này 
        console.log('error catch => postLoginApi => '+error);
        return {resultCode:-1,message:"Có lỗi xảy ra , không kết nối được tới máy chủ"}
        
      });
      return response    
}
export async function addCourses(input){
  const {courseName,trainer,startedDate,endedDate,buildingId,roomId}=input;
  const token=useData.token;
 const headers={ 'Authorization': `Bearer ${token}`,
 'Content-Type':'application/json; charset=utf-8',}

 const data ={
   courseName:courseName,
      trainer:trainer,
      startedDate:startedDate,
      endedDate:endedDate,
      buildingId:buildingId,
      roomId:roomId,
 };
 
 const response =await axios.post(api2+'/fis/api/edu/create_new_course', data, {
  headers: headers
})
.then((response) => {
  return response.data
})
.then((response) => {
  return response
})
.catch((error) => {
  return {resultCode:-1,message:"Có lỗi xảy ra , không kết nối được tới máy chủ"}
})
    return response  
 
}
export async function DeleteCourses(IdCourse){

   const token=useData.token;
  const response=await axios.get(`${api1}/api/edu/delete_course?courseId=${IdCourse}`, {
    headers: { 'Authorization': `Bearer ${token}` }
    ,
    })
    .then(response=>{
      
        return response.data;
    })
    .then((response) => {
      return response
    })
    .catch(function (error) {
      //nên tạo dữ liệu erro vào hàm này 
    
      return {resultCode:-1,message:"Có lỗi xảy ra , không kết nối được tới máy chủ"}
    });
   
    return response  
}
//UpdateCourses(courseId,courseName,trainer,startedDate,endedDate,buildingId,roomId)
export async function UpdateCourses(input){
  const {courseId,courseName,trainer,startedDate,endedDate,buildingId,roomId}=input;
  const token=useData.token
  const headers={ 'Authorization': `Bearer ${token}`,
  'Content-Type':'application/json; charset=utf-8',}
 
  const data ={
    courseId:courseId,
    courseName:courseName,
       trainer:trainer,
       startedDate:startedDate,
       endedDate:endedDate,
       buildingId:buildingId,
       roomId:roomId,
  };
  const response =await axios.post(api1+'/api/edu/edit_course', data, {
   headers: headers
 })
 .then((response) => {
   
   return response.data
 })
 .catch((error) => {
   return {resultCode:-1,message:"Có lỗi xảy ra , không kết nối được tới máy chủ"}
 })
     return response  
  
 }
 