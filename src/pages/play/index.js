import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

import Navbar from '../../components/navbar';

import roleta from '../../assets/img/roleta.png';
import indicador from '../../assets/img/indicador_0_roleta.png';
import bt_voltar from '../../assets/img/bt_voltar.png';

const Play = ({navigation}) => (
  <View style={styles.viewPlay}>
    <Navbar />

    <View style={styles.mainContent}>
      <View style={styles.header}>
        <View style={styles.line} />
        <Text style={styles.title}>Clique no centro para começar</Text>
        <View style={styles.line} />
      </View>

      <TouchableHighlight onPress={() => navigation.navigate('Quiz')}>
        <Image source={indicador} style={styles.indicador} />
      </TouchableHighlight>
      <Image source={roleta} style={styles.roleta} />

      <TouchableHighlight
        style={styles.btnVoltar}
        onPress={() => navigation.navigate('Game')}>
        <Image source={bt_voltar} style={styles.imgVoltar} />
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  viewPlay: {
    backgroundColor: '#263e63',
    height: '100%',
  },

  mainContent: {
    display: 'flex',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  line: {
    width: 30,
    height: 1,
    backgroundColor: '#fff',
  },

  title: {
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 12,
    fontSize: 17,
  },

  indicador: {
    position: 'relative',
    top: -19,
    alignSelf: 'center',
    width: '100%',
    resizeMode: 'contain',
  },

  roleta: {
    width: '80%',
    resizeMode: 'contain',
    zIndex: -2,
    alignSelf: 'center',
    position: 'absolute',
    top: 60,
  },

  btnVoltar: {
    marginLeft: 16,
    marginTop: -150,
  },

  imgVoltar: {
    width: 80,
    resizeMode: 'contain',
  },
});

Play.navigationOptions = {
  titie: 'Play',
};

export default Play;
