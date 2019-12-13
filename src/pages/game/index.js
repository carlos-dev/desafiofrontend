import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
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
            <Text style={styles.textBtn}>Jogar</Text>
          </ImageBackground>
        </View>
      </TouchableHighlight>

      <View style={styles.ranking}>
        <ImageBackground source={btn_ranking} style={styles.backgroundGame}>
          <Text style={styles.textBtn}>Ranking</Text>
        </ImageBackground>
      </View>

      <TouchableHighlight style={styles.btnBack}>
        <Image source={arrow} style={styles.arrow} />
        <Text style={styles.textBtn}>Voltar</Text>
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
    bottom: 120,
    backgroundColor: '#1e314e',
    borderTopLeftRadius: 70,
    height: 110,
    width: '100%',
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
    position: 'absolute',
    left: 35,
    width: 18,
    alignSelf: 'center',
    backgroundColor: '#44635a',
    height: 40,
    bottom: 0,
  },
});

Game.navigationOptions = {
  titie: 'Game',
};

export default Game;
