import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Screen from '../../components/Screen';
import colors from '../../assets/colors';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import AuthHeadText from '../../components/AppTexts/AuthHeadText';
import AuthSubtitleText from '../../components/AppTexts/AuthSubtitleText';
import AppFormField from '../../components/AppForm/AppFormField';
import AppForm from '../../components/AppForm/AppForm';
import ErrorMessage from '../../components/AppForm/ErrorMessage';
import SubmitButton from '../../components/AppForm/SubmitButton';
import ImageInput from '../../components/Image/ImageInput';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
export default function SignupScreen() {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageInput
          style={styles.profileImage}
          imageUri={imageUri}
          onChangeImage={(imageUri) => setImageUri(imageUri)}
        />
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <MaterialCommunityIcon name="upload" size={25} color="#fff" />
          </View>
        </View>
      </View>

      <View style={styles.welcomeText}>
        <AuthHeadText>Hello,</AuthHeadText>
        <AuthHeadText>Welcome</AuthHeadText>
      </View>
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
            <SubmitButton name="Sign up" />
          </View>
        </AppForm>
      </View>

      <View style={styles.textContainer}>
        <AuthSubtitleText>Already have account?</AuthSubtitleText>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }}
        >
          <Text style={styles.loginText}>Login</Text>
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
    // paddingTop:100,
  },
  imageContainer: {
    marginTop: 50,
    // paddingBottom:100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  welcomeText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 220,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#fff',
    // marginTop: 30,
  },
  outerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#26AB',
    marginTop: -50,
    marginLeft: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#26ABE2',
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
