import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Navbar from '../../components/navbar';
import img_principal_0 from '../../assets/img/Img_principal_0.png';
import img_principal_1 from '../../assets/img/Img_principal_1.png';
import arrow from '../../assets/img/arrow.png';

const Game = () => (
  <View>
    <Navbar />

    <View style={styles.mainContent}>
      <View style={styles.play}>
        <ImageBackground source={img_principal_0} style={styles.backgroundGame}>
          <Text style={styles.textBackground}>Jogar</Text>
        </ImageBackground>
      </View>

      <View style={styles.ranking}>
        <ImageBackground source={img_principal_1} style={styles.backgroundGame}>
          <Text style={[styles.textBackground, styles.textRanking]}>
            Ranking
          </Text>
        </ImageBackground>
      </View>

      <TouchableOpacity style={styles.btnBack}>
        <Image source={arrow} style={styles.arrow} />
        <Text style={styles.textBtn}>Voltar</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContent: {
    display: 'flex',
  },

  play: {
    height: '40%',
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
  },
});

export default Game;
