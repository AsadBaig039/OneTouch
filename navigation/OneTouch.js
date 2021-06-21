/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppNavigator from './AppNavigator';

export default function OneTouch() {
  const [user, setUser] = useState('Asad');
  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <AppNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93C8E7',
    justifyContent: 'flex-end',
  },
});
