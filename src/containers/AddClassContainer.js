
import { connect } from 'react-redux';
import AddSheduleCourse from '../components/Shedule/schedule_add_course/AddClass';
import { addClass, getBuildingRoom, getClassbyCourses } from '../redux/actions';
import React, { useEffect } from 'react';
const AddClassContainer = (props) => {
    useEffect(() => {
        if(props.dataAddClass==!null){
          ToastAndroid.show('Thành công',ToastAndroid.LONG);
        }
      }, [props.dataAddClass])
    return(<AddSheduleCourse {...props}/>);
}
const mapStateToProps = (state) => {  
       return {              
       dataAddClass:state.AddClassReducer.data,
       data:state.buildingroomReducer.data,
       errorAddClass:state.AddClassReducer.error
       // loading:state.loginReducers.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        getBuildingRoom:()=>{
            dispatch(getBuildingRoom())
        },
        addClass:(courseId,className,trainer,date,startedTime,endedTime,buildingId,roomId)=>{
            dispatch(addClass(courseId,className,trainer,date,startedTime,endedTime,buildingId,roomId))
        },
        getClassbyCourses: CourseID => {
            dispatch(getClassbyCourses(CourseID));
          },

}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddClassContainer);
