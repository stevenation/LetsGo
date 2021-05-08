import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../components/screens/login';
// import SignUp from '../components/screens/signup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../utils';
import Login from '../components/screens/login';

const Stack = createStackNavigator();
export default function AuthStack() {
  const headerOptions = {
    title: '',
    headerBackTitle: '',
    headerTruncatedBackTitle: '',
    headerBackImage: () => (
      <AntDesign name={'left'} style={{color: 'white'}} size={30} />
    ),
    headerStyle: {backgroundColor: COLORS.blue},
  };
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}
