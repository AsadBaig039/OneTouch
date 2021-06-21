import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Screen from '../../components/Screen';
import colors from '../../assets/colors';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import AuthHeadText from '../../components/AppTexts/AuthHeadText';
import AuthSubtitleText from '../../components/AppTexts/AuthSubtitleText';
import AppFormField from '../../components/AppForm/AppFormField';
import AppForm from '../../components/AppForm/AppForm';
import ErrorMessage from '../../components/AppForm/ErrorMessage';
import SubmitButton from '../../components/AppForm/SubmitButton';
import {TouchableOpacity} from 'react-native';
import Logo from '../../assets/svgs/logo.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <Logo width={200} height={200} />
      <AuthHeadText>Sign In</AuthHeadText>
      <AuthSubtitleText>Enjoy Your Application</AuthSubtitleText>
      <View style={styles.inputContainer}>
        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          <View style={{alignSelf: 'center'}}>
            <AppFormField
              icon="email"
              placeholder="Email"
              style={styles.inputStyleSign}
              label="Email"
              name="email"
              selectionColor="#f4f4f2"
              underlineColor="#f4f4f2"
              textColor="#f4f4f2"
            />
          </View>
          <View style={{alignSelf: 'center'}}>
            <AppFormField
              icon="key-variant"
              placeholder="Password"
              style={styles.inputStyleSign}
              label="Password"
              name="password"
              selectionColor="#f4f4f2"
              underlineColor="#f4f4f2"
              textColor="#f4f4f2"
              textContentType="password"
              secureTextEntry={true}
            />
          </View>
          <View style={{alignSelf: 'center', marginVertical: 25}}>
            <SubmitButton name="Sign in" />
          </View>
        </AppForm>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('Forgot Password pressed');
        }}
      >
        <Text style={styles.loginText}>Forgot Password ?</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <AuthSubtitleText>New User?</AuthSubtitleText>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Register'}],
            });
          }}
        >
          <Text style={styles.loginText}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyleSign: {
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 25,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginText: {
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 10,
    color: '#26ABFF',
    textDecorationLine: 'underline',
  },
});
