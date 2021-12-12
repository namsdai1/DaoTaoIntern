import { GET_BUILDING_ROOM_ERROR, GET_BUILDING_ROOM_SUCCESS } from "../../actions/BuildingRoomAction";

const initialStale = {
    data: null, //ko có dữ liệu
    error: null, //khong lỗi
  };
const buildingroomReducer = (state=initialStale,action)=>{
    try {
        switch(action.type) {
            case GET_BUILDING_ROOM_SUCCESS:
                return {
                    data:action.response.data,
                    error: null,
            }
            case GET_BUILDING_ROOM_ERROR: 
                return {
                    data:null, //ko có dữ liệu
                    error:action.error,
                } 
            default:
                return state       
        }
    } catch (error) {
        
    }
}
export default buildingroomReducer;