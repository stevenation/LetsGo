import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
// import HomeStack frrom './HomeStack';
import AuthStack from './AuthStack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import HomeScreen from '../components/screens/home';

export default function Routes() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, []);
  return (
    <NavigationContainer>
      {user ? <HomeScreen /> : <AuthStack />}
    </NavigationContainer>
  );
}
