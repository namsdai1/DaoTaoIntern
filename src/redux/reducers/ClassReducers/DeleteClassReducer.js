import {
  DELETE_CLASS_BY_COURSE_ERROR,
  DELETE_CLASS_BY_COURSE_SUCCESS,
} from '../../actions/ClassAction';

const initialStale = {
  loadding: false,
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const DeleteClassReducer = (state = initialStale, action) => {
  switch (action.type) {
    case DELETE_CLASS_BY_COURSE_SUCCESS:
      return {
        loadding: false,
        data: action.response,
        error: null,
      };
    case DELETE_CLASS_BY_COURSE_ERROR:
      return {
        loadding: false,
        data: null, //ko có dữ liệu
        error: action.error,
      };
    default:
      return state;
  }
};
export default DeleteClassReducer;
