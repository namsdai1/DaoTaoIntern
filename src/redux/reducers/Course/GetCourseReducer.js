import {GET_COURSE, GET_COURSE_ERROR, GET_COURSE_SUCCESS} from '../../actions/CourseAction';

const initialStale = {
  data: null, //ko có dữ liệu
  error: null, //khong lỗi
  loadding: false,
};
const GetCourseReducer = (state = initialStale, action) => {
  switch (action.type) {
    case GET_COURSE:
      return{
        loadding: true,
        data: null,
        error: null,
      }
    case GET_COURSE_SUCCESS:
      return {
        loadding: false,
        data: action.response,
        error: null,
      };
    case GET_COURSE_ERROR:
      return {
        loadding: false,
        data: null, //ko có dữ liệu
        error: action.error,
      };
    default:
      return state;
  }
};
export default GetCourseReducer;
