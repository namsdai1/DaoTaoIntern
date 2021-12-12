import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import {getCourses,addCourses, DeleteCourses, UpdateCourses} from '../api/course'
import { ADD_COURSE, ADD_COURSE_ERROR, ADD_COURSE_SUCCESS, DELETE_COURSE, DELETE_COURSE_ERROR, DELETE_COURSE_SUCCESS, GET_COURSE, GET_COURSE_ERROR, GET_COURSE_SUCCESS, UPDATE_COURSE, UPDATE_COURSE_ERROR, UPDATE_COURSE_SUCCESS } from "../actions/CourseAction";
export function* watchCourse(){
    yield takeEvery(GET_COURSE,getCourse)
}
function* getCourse(action){
    const response = yield getCourses();
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:GET_COURSE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_COURSE_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_COURSE_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_COURSE_ERROR,error:message})
    }
}
export function* addCourseSaga(){
    yield takeEvery(ADD_COURSE,addCourse)
}
function* addCourse(action){
    const input = action.data;//lay du lieu nhap ti action;
    const response = yield addCourses(input);
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            console.log('success => addCouresSaga');
            yield put({type:ADD_COURSE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:ADD_COURSE_ERROR,error:response.message})
            console.log('error => addCouresSaga');
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:ADD_COURSE_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:ADD_COURSE_ERROR,error:message})
    }
}
export function* deleteCourseSaga(){
    yield takeEvery(DELETE_COURSE,deleteCourse)
}
function* deleteCourse(action){
    const {IdCourse} = action.data;//lay du lieu nhap ti action
    const response = yield DeleteCourses(IdCourse);
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:DELETE_COURSE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:DELETE_COURSE_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:DELETE_COURSE_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:DELETE_COURSE_ERROR,error:message})
    }
}

//Cap nhat khoa hoc
export function* updateCourseSaga(){
    yield takeEvery(UPDATE_COURSE,updateCourse)
}
function* updateCourse(action){
    const input = action.data;//lay du lieu nhap ti action
    const response = yield UpdateCourses(input);
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:UPDATE_COURSE_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:UPDATE_COURSE_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:UPDATE_COURSE_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:UPDATE_COURSE_ERROR,error:message})
    }
}
