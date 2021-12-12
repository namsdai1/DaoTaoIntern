import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Course/Home/HomeCourse';
import { deleteCourse, getCourse, updateCourse ,getBuildingRoom} from '../redux/actions';

const CourseContainer=(props)=>{
    return (<Home {...props}/>)
} 
//Actions ?
const mapStateToProps = (state) => {
    return {
        loadding:state.GetCourseReducer.loadding,
        data:state.GetCourseReducer.data,              
        error:state.GetCourseReducer.error,
        delete:state.DeleteCourseReducer.data,
        databuild:state.buildingroomReducer.data,
        updateCoursedata:state.UpdateCourseReducer.data,
        deleteError:state.DeleteCourseReducer.error,
        databuildError:state.buildingroomReducer.error,
        updateCoursedataError:state.UpdateCourseReducer.error,
       // loading:state.loginReducers.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        getCourse:()=>{
            dispatch(getCourse())
        },
        deleteCourse:(courseID)=>{
            dispatch(deleteCourse(courseID))
        },
        updateCourse:(courseId,courseName,trainer,startedDate,endedDate,buildingId,roomId)=>{
            dispatch(updateCourse(courseId,courseName,trainer,startedDate,endedDate,buildingId,roomId))
        },
        getBuildingRoom:()=>{
            dispatch(getBuildingRoom())
        },
}
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);
