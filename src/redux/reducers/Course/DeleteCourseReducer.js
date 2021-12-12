import {
  DELETE_COURSE,
  DELETE_COURSE_ERROR,
  DELETE_COURSE_SUCCESS,
} from '../../actions/CourseAction';

const initialStale = {
  loadding: false,
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const DeleteCourseReducer = (state = initialStale, action) => {
  switch (action.type) {
    case DELETE_COURSE:
      return {
        loadding: true,

        data: null,
        error: null,
      };
    case DELETE_COURSE_SUCCESS:
      return {
        loadding: false,
        data: action.response,
        error: null,
      };
    case DELETE_COURSE_ERROR:
      return {
        loadding: false,
        data: null, //ko có dữ liệu
        error: action.error,
      };
    default:
      return state;
  }
};
export default DeleteCourseReducer;
