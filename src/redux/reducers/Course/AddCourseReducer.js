import {ADD_COURSE, ADD_COURSE_ERROR, ADD_COURSE_SUCCESS} from '../../actions/CourseAction';

const initialStale = {
  loadding: false,
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
};
const AddCourseReducer = (state = initialStale, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        loadding: true,
        data: null,
        error: null,
      };
    case ADD_COURSE_SUCCESS:
      return {
        loadding: false,
        data: action.response,
        error: null,
      };
    case ADD_COURSE_ERROR:
      return {
        loadding: false,
        data: null, //ko có dữ liệu
        error: action.error,
      };
    default:
      return state;
  }
};
export default AddCourseReducer;
