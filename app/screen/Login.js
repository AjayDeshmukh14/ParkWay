import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Loginform from './Loginform';

class Login extends Component {
  async componentDidMount() {
    alert('HI KSHITU PITU');
    try {
      //fetch('https://webhook.site/33214564-f9bc-4a3c-b479-ca8ecf6ea2b5', {
      fetch('some.link.here', {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <ImageBackground
        style={style.backgroundImage}
        source={require('../assets/parkwayRegistration.jpg')}>
        <Image
          style={style.backgroundImag}
          source={require('../assets/white.png')}
        />
        <View style={style.login}>
          <View style={style.logoContainer}>
            <Image style={style.logo} source={require('../assets/logo.png')} />
          </View>
          <View style={style.formContainer}>
            <Loginform />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  login: {
    alignSelf: 'stretch',
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 107,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.85,
  },

  backgroundImag: {
    position: 'absolute',
    top: 0,
    width: '90%',
    height: '60%',
    left: 20,
    bottom: 20,
    right: '20%',
    opacity: 0.99,
  },
});

export default Login;
