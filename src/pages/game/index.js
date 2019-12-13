import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Image,
} from 'react-native';

import Navbar from '../../components/navbar';
import arrow from '../../assets/img/arrow.png';
import btn_jogar from '../../assets/img/btn_jogar_gameOrRanking.png';
import btn_ranking from '../../assets/img/btn_ranking_gameOrRanking.png';

const Game = ({navigation}) => (
  <View>
    <Navbar />

    <View style={styles.mainContent}>
      <TouchableHighlight
        style={styles.btnPlay}
        onPress={() => navigation.navigate('Play')}>
        <View style={styles.viewPlay}>
          <ImageBackground source={btn_jogar} style={styles.backgroundGame}>
            <Text style={styles.textBackground}>Jogar</Text>
          </ImageBackground>
        </View>
      </TouchableHighlight>

      <View style={styles.ranking}>
        <ImageBackground source={btn_ranking} style={styles.backgroundGame}>
          <Text style={styles.textBackground}>Ranking</Text>
        </ImageBackground>
      </View>

      <TouchableHighlight
        style={styles.btnBack}
        onPress={() => navigation.navigate('Main')}>
        <View style={styles.flexBtn}>
          <Image source={arrow} style={styles.arrow} />
          <Text style={styles.textBtn}>Voltar</Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContent: {
    display: 'flex',
  },

  btnPlay: {
    height: '36%',
  },

  viewPlay: {
    height: '100%',
  },

  ranking: {
    height: '60%',
  },

  backgroundGame: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    resizeMode: 'contain',
  },

  textBackground: {
    fontSize: 24,
    textTransform: 'uppercase',
    backgroundColor: '#fff',
    color: '#1e314e',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  textRanking: {
    position: 'relative',
    bottom: 60,
  },

  btnBack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 55,
    backgroundColor: '#1e314e',
    borderTopLeftRadius: 70,
    height: 100,
    width: '100%',
  },

  flexBtn: {
    flexDirection: 'row',
  },

  textBtn: {
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 90,
    paddingLeft: 30,
    alignSelf: 'center',
  },

  arrow: {
    right: 80,
    width: 20,
    alignSelf: 'center',
    bottom: 0,
  },
});

Game.navigationOptions = {
  titie: 'Game',
};

export default Game;
