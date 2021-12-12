import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../../containers/CourseContainer';
import DrawerContent from '../../components/DrawerContent/DrawerContent';
import {TICKET} from '../../router/navigationType';
import Ticket from '../../components/Ticket/Ticket';
const Drawer = createDrawerNavigator();
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

function MyDrawer() {
  const handelNotification = body => {
    PushNotification.localNotification({
      message: body,
    });
  };
  useEffect(() => {
    // PushNotification.localNotification({
    //   message: 'Text',
    // });
    //handelNotification('Notification');
  }, []);
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={TICKET}>
      <Drawer.Screen name="HomeScreen" component={Home} />
      <Drawer.Screen name={TICKET} component={Ticket} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
