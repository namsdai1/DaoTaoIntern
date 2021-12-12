import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login/LoginComponent';
import {loginAction} from '../redux/actions';

const LoginContainer = props => {
  
  return <Login {...props} />;
};
const mapStateToProps = state => {
  return {
    error: state.loginReducers.error,
    data: state.loginReducers.data,
    loadding: state.loginReducers.loadding,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (user, password) => {
      dispatch(loginAction(user, password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
