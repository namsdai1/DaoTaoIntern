import { ADD_CLASS_BY_COURSE_ERROR, ADD_CLASS_BY_COURSE_SUCCESS, GET_CLASS_BY_COURSE_ERROR, GET_CLASS_BY_COURSE_SUCCESS } from "../../actions/ClassAction";

const initialStale = {
  
  loadding:false,
data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const AddClassReducer = (state = initialStale, action) => {
  switch (action.type) {
    case ADD_CLASS_BY_COURSE_SUCCESS:
      return {
        loadding:false,
data: action.response,
        error: null,
      };
    case ADD_CLASS_BY_COURSE_ERROR:
      return {
        loadding:false,
data: null, //ko có dữ liệu
        error: action.error,
      };
    default:
      return state;
  }
};
export default AddClassReducer;
