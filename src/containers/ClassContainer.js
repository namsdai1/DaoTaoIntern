import {connect} from 'react-redux';
import Class from '../components/Shedule/schedule_course/HomeClass';
import {deleteClass, getClassbyCourses, getBuildingRoom,updateClass} from '../redux/actions';
import React,{useState, useEffect} from 'react';
import { ToastAndroid } from 'react-native';
const ClassContainer=(props)=>{
    
  return(<Class {...props}/>);
}
//Actions ?

const mapStateToProps = state => {
  return {
    // error:state.loginReducers.status,
    dataAddClass:state.AddClassReducer.data,
    data: state.GetClassReducer.data,
    error: state.GetClassReducer.error,
    dataDelete: state.DeleteClassReducer.data,
    dataBuildingRoom: state.buildingroomReducer.data,
    dataUpdate:state.UpdateClassReducer.data,
    loadding:state.GetClassReducer.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClassbyCourses: CourseID => {
      dispatch(getClassbyCourses(CourseID));
    },
    deleteClass: roomId => {
      dispatch(deleteClass(roomId));
    },
    getBuildingRoom: () => {
      dispatch(getBuildingRoom());
    },
    updateClass: (classId,className,trainer,date,startedTime,endedTime,buildingId,roomId) => {
      dispatch(updateClass(classId,className,trainer,date,startedTime,endedTime,buildingId,roomId));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassContainer);
