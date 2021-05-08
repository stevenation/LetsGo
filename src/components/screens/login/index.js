import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../utils';
import {AppleButton} from '@invertase/react-native-apple-authentication';
import {useContext} from 'react';
import {AuthContext} from '../../../navigation/AuthProvider';

export default function Login({navigation}) {
  const [number, setNumer] = useState();

  const {appleSignIn} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons name="git-network-sharp" size={100} color={COLORS.blue} />
      </View>
      <View>
        <Text>Phone Number</Text>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              placeholderTextColor={COLORS.lightgray}
              style={styles.input}
              placeholder={'+1 999 999 999'}
              onChangeText={text => setNumber(text)}
            />
          </View>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Continue</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('VerfiyPhone')}>
            <Ionicons name="arrow-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <AppleButton
          buttonStyle={AppleButton.Style.WHITE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={{
            width: 160,
            height: 45,
          }}
          onPress={() =>
            appleSignIn().then(() => console.log('Apple sign-in complete!'))
          }
        />
      </View>
      <View style={styles.bottomMainContainer}>
        <SafeAreaView style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.bottomText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomText}>Forgot Password?</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}
