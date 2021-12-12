import {
  UPDATE_COURSE,
  UPDATE_COURSE_ERROR,
  UPDATE_COURSE_SUCCESS,
} from '../../actions/CourseAction';

const initialStale = {
  loadding: false,
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const UpdateCourseReducer = (state = initialStale, action) => {
  switch (action.type) {
    case UPDATE_COURSE:
      return{
        loadding: true,
        data: null,
        error: null,
      }
    case UPDATE_COURSE_SUCCESS:
      return {
        loadding: false,
        data: action.response,
        error: null,
      };
    case UPDATE_COURSE_ERROR:
      return {
        loadding: false,
        data: null, //ko có dữ liệu
        error: action.error,
      };
    default:
      return state;
  }
};
export default UpdateCourseReducer;
