import { POST_SIGNIN } from './LoginAction';
import {
  GET_CLASS_BY_COURSE,
  ADD_CLASS_BY_COURSE,
  DELETE_CLASS_BY_COURSE,
  UPDATE_CLASS_BY_COURSE,
} from './ClassAction';
import { ADD_COURSE, DELETE_COURSE, GET_COURSE, UPDATE_COURSE } from './CourseAction';
import { GET_BUILDING_ROOM } from './BuildingRoomAction';
export const loginAction = (user, password) => {
  return {
    type: POST_SIGNIN,
    data: {user, password},
  };
};
//////*****************COURSE*************************
export const getCourse = () => {
  return {
    type: GET_COURSE,
  };
};
//cap nhat khoa hoc
export const updateCourse = (input) => {
  return {
    type: UPDATE_COURSE,
    data:input,
  };
};
//tao khoa hoc
export const addCourse = (input) => {
  return {
    type: ADD_COURSE,
    data: input,
  };
};
//xoa hoa hoc theo type
export const deleteCourse = IdCourse => {
  return {
    type: DELETE_COURSE,
    data: {IdCourse},
  };
};

//**************PHONG VA TRU SO**************************
export const getBuildingRoom = () => {
  return {
    type: GET_BUILDING_ROOM,
  };
};
//**************CLASS BY COURSE*************************
//lay buoi hoc tu khoa hoc
export const getClassbyCourses = IdCourse => {
  return {
    type: GET_CLASS_BY_COURSE,
    data: {IdCourse},
  };
};

//them lop hoc tu khoa hoc
export const addClass = (input) => {
  return {
    type: ADD_CLASS_BY_COURSE,
    data:input,
  };
};
//xoa lop hoc
export const deleteClass = roomId => {
  return {
    type: DELETE_CLASS_BY_COURSE,
    data: {roomId},
  };
};
//cap nhat lop hoc
export const updateClass = (input) => {
    return {
      type: UPDATE_CLASS_BY_COURSE,
      data: input,
    };
  };