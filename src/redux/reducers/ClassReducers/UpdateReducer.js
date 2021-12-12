import {
  UPDATE_CLASS_BY_COURSE_ERROR,
  UPDATE_CLASS_BY_COURSE_SUCCESS,
} from '../../actions/ClassAction';

const initialStale = {
  loadding: false,
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const UpdateClassReducer = (state = initialStale, action) => {
  switch (action.type) {
    case UPDATE_CLASS_BY_COURSE_SUCCESS:
      return {
        loadding: false,
        data: action.response,
        error: null,
      };
    case UPDATE_CLASS_BY_COURSE_ERROR:
      return {
        loadding: false,
        data: null, //ko có dữ liệu
        error: action.error,
      };
    default:
      return state;
  }
};
export default UpdateClassReducer;
