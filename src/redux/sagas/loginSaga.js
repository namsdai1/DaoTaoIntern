
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import {postLogin} from '../api/login'
import { POST_SIGNIN, SIGNIN_ERROR, SIGNIN_SUCCESS } from "../actions/LoginAction";
export function* watchLogin(){
    yield takeEvery(POST_SIGNIN,signInFlow)
}
function* signInFlow(action){
    const {user,password} = action.data;//lay use,pass từ trong acction ra
    const response = yield postLogin(user,password);   
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:SIGNIN_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:SIGNIN_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:SIGNIN_ERROR,error:message})
         
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:SIGNIN_ERROR,error:message})
    }
}
