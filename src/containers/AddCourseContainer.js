
import { connect } from 'react-redux';
import AddCourse from '../components/Course/AddCourse/AddCourse';
import { addCourse, getBuildingRoom } from '../redux/actions';
import React,{useState, useEffect} from 'react';
import { ToastAndroid } from 'react-native';
const AddCourseContainer=(props)=>{
    
    return(<AddCourse {...props}/>);
}

const mapStateToProps = (state) => {   
       return {           
       dataAddCourse:state.AddCourseReducer.data,
       data:state.buildingroomReducer.data,
       errorAddCourse:state.AddCourseReducer.error,
       loadding:state.AddCourseReducer.loadding,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        getBuildingRoom:()=>{
            dispatch(getBuildingRoom())
        },
        addCourse:(input)=>{
            dispatch(addCourse(input))
        }

}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCourseContainer);
