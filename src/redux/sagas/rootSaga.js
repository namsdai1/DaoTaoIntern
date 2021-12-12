import {watchLogin} from './loginSaga';
import {all} from 'redux-saga/effects';
import {watchCourse, addCourseSaga, deleteCourseSaga, updateCourseSaga} from './courseSaga';
import {watchBuilding_Room} from './buildingRoomSaga';
import {addClassSaga, deleteClassSaga, watchClassByCourse,updateClassSaga} from './classSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchCourse(),
    watchBuilding_Room(),
    watchClassByCourse(),
    addCourseSaga(),
    addClassSaga(),
    deleteClassSaga(),
    deleteCourseSaga(),
    updateCourseSaga(),
    updateClassSaga()
  ]);
}
