import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import logo from '../../assets/img/Logo_telaInicial.png';
import arrow from '../../assets/img/arrow.png';

const Login = ({navigation}) => (
  <View style={styles.content}>
    <Image source={logo} style={styles.logo} />

    <TextInput
      placeholder="E-mail"
      style={styles.input}
      placeholderTextColor="#273e64"
    />

    <TextInput
      placeholder="CPF"
      style={styles.input}
      placeholderTextColor="#273e64"
    />

    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('Main')}>
      <Text style={styles.textBtn}>ENTRAR</Text>
      <Image source={arrow} style={styles.arrow} />
    </TouchableOpacity>
    <Text style={styles.textPassword}>Esqueceu a senha?</Text>
  </View>
);

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },

  logo: {
    width: '70%',
    resizeMode: 'contain',
  },

  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 5,
  },

  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 40,
    backgroundColor: '#f05f3c',
    width: '100%',
    marginTop: 3,
  },

  textBtn: {
    color: '#fff',
    paddingVertical: 12,
    fontWeight: 'bold',
  },

  arrow: {
    position: 'absolute',
    right: 10,
    resizeMode: 'contain',
    height: 14,
    transform: [{rotate: '180deg'}],
  },

  textPassword: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginTop: 5,
    textAlign: 'right',
    fontSize: 13,
  },
});

Login.navigationOptions = {
  titie: 'Login',
};

export default Login;
