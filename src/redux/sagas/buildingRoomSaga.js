
import {call,takeEvery,put,takeLatest} from 'redux-saga/effects'
import { GET_BUILDING_ROOM, GET_BUILDING_ROOM_ERROR, GET_BUILDING_ROOM_SUCCESS } from '../actions/BuildingRoomAction';
import {getapiBuildingRoom} from '../api/building'
export function* watchBuilding_Room(){
    yield takeEvery(GET_BUILDING_ROOM,getBuildingRoom)
}
function* getBuildingRoom(action){
    const response = yield getapiBuildingRoom();
    try {
         // kiem tra xem co goi dc api ko 
    if(response !==undefined && response!==null){
        if(response.resultCode===1){
            //thanh cong sẽ put về
            yield put({type:GET_BUILDING_ROOM_SUCCESS,response})
        }else{
            //truong hợp này gọi tới sever bi sever báo lỗi về
            yield put({type:GET_BUILDING_ROOM_ERROR,error:response.message})
        }
     }else{
         //Đôi khi api lỗi , sever ko trả dữ liệu vè
         const message="Có lỗi xảy ra, không thể kết nối tới sever"
         yield put({type:GET_BUILDING_ROOM_ERROR,error:message})
     }
    } catch (error) {
        const message="Có lỗi xảy ra, không thể kết nối tới sever"
        yield put({type:GET_BUILDING_ROOM_ERROR,error:message})
    }
}
