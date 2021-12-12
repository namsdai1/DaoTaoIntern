import { GET_CLASS_BY_COURSE,GET_CLASS_BY_COURSE_SUCCESS,GET_CLASS_BY_COURSE_ERROR, ADD_CLASS_BY_COURSE, ADD_CLASS_BY_COURSE_ERROR, ADD_CLASS_BY_COURSE_SUCCESS, DELETE_CLASS_BY_COURSE, DELETE_CLASS_BY_COURSE_SUCCESS, DELETE_CLASS_BY_COURSE_ERROR, UPDATE_CLASS_BY_COURSE, UPDATE_CLASS_BY_COURSE_SUCCESS, UPDATE_COURSE_ERROR, UPDATE_CLASS_BY_COURSE_ERROR } from "../actions/ClassAction";
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import {addClasses,UpdateClasses, DeleteClassbyCourses, getClassbyCourses} from '../api/class'

export function* watchClassByCourse(){
    yield takeEvery(GET_CLASS_BY_COURSE,getClass)
}
function* getClass(action){
    const {IdCourse}= action.data;
    const response = yield getClassbyCourses(IdCourse);
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:GET_CLASS_BY_COURSE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_CLASS_BY_COURSE_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_CLASS_BY_COURSE_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_CLASS_BY_COURSE_ERROR,error:message})
    }
}
//them lop hoc 
export function* addClassSaga(){
    yield takeEvery(ADD_CLASS_BY_COURSE,addClass)
}
function* addClass(action){
    const input = action.data;//lay du lieu nhap ti action
    const response = yield addClasses(input);
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:ADD_CLASS_BY_COURSE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:ADD_CLASS_BY_COURSE_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:ADD_CLASS_BY_COURSE_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:ADD_CLASS_BY_COURSE_ERROR,error:message})
    }
}

//xoa lop hoc 
export function* deleteClassSaga(){
    yield takeEvery(DELETE_CLASS_BY_COURSE,deleteClass)
}
function* deleteClass(action){
    const {roomId} = action.data;//lay du lieu nhap ti action
    const response = yield DeleteClassbyCourses(roomId);
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:DELETE_CLASS_BY_COURSE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:DELETE_CLASS_BY_COURSE_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:DELETE_CLASS_BY_COURSE_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:DELETE_CLASS_BY_COURSE_ERROR,error:message})
    }
}
export function* updateClassSaga(){
    yield takeEvery(UPDATE_CLASS_BY_COURSE,updateClass)
}
function* updateClass(action){
    const input = action.data;//lay du lieu nhap ti action
    const response = yield UpdateClasses(input);
    try {
        
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:UPDATE_CLASS_BY_COURSE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:UPDATE_CLASS_BY_COURSE_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:UPDATE_CLASS_BY_COURSE_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:UPDATE_CLASS_BY_COURSE_ERROR,error:message})
    }
}