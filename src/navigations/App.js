import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import MyDrawer from './Drawer/Drawer';
import LoginScreen from '../containers/LoginContainer';
import AddCourse from '../containers/AddCourseContainer';
import {
  ADD_COURSE,
  ADD_SCHEDULE_COURSE,
  DRAWER_SCREEN,
  LOGIN_SCREEN,
  SCHEDULE_COURSE,
} from '../router/navigationType';
import ClassContainer from '../containers/ClassContainer';
import AddClassContainer from '../containers/AddClassContainer';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {
  getDeviceToken,
  handleNotification,
  requestUserPermission,
} from '../Config/PushNotification';
const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    requestUserPermission();
    getDeviceToken();
    handleNotification();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={LOGIN_SCREEN}>
        <Stack.Screen name={DRAWER_SCREEN} component={MyDrawer} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={ADD_COURSE} component={AddCourse} />
        <Stack.Screen name={SCHEDULE_COURSE} component={ClassContainer} />
        <Stack.Screen
          name={ADD_SCHEDULE_COURSE}
          component={AddClassContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
