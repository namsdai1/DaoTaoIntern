import { combineReducers } from "redux";
import loginReducers from "./Login/loginReducers";
import GetCourseReducer from './Course/GetCourseReducer'
import AddCourseReducer from './Course/AddCourseReducer'
import DeleteCourseReducer from './Course/DeleteCourseReducer'
import UpdateCourseReducer from './Course/UpdateCourseReducer'
import buildingroomReducer from './BuildingRoom/BuldingRoomReducers'

import GetClassReducer from './ClassReducers/GetClassReducer'
import DeleteClassReducer from './ClassReducers/DeleteClassReducer'
import AddClassReducer from './ClassReducers/AddClassReducer'
import UpdateClassReducer from './ClassReducers/UpdateReducer'

const allReducers=combineReducers({
    loginReducers,
    GetCourseReducer,
    AddCourseReducer,
    UpdateCourseReducer,
    DeleteCourseReducer,
    buildingroomReducer,
    GetClassReducer,
    DeleteClassReducer,
    AddClassReducer,
    UpdateClassReducer,
});
export default allReducers;