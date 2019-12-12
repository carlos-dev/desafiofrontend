import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground
} from 'react-native';

import Navbar from '../../components/navbar'
import img_principal_0 from '../../assets/img/Img_principal_0.png';
import img_principal_1 from '../../assets/img/Img_principal_1.png';

const Game = () => (
  <View>
    <Navbar />

    <View style={styles.mainContent}>
      <View style={styles.play}>
        <ImageBackground
          source={img_principal_0}
          style={styles.backgroundGame}
        >
          <Text style={styles.textBtn}>Jogar</Text>
        </ImageBackground>
      </View>
      
      <View style={styles.ranking}>
        <ImageBackground
          source={img_principal_1}
          style={styles.backgroundGame}
        >
          <Text style={styles.textBtn}>Ranking</Text>
        </ImageBackground>
      </View>

      <TouchableOpacity style={styles.btnBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContent: {
    display: 'flex',
  },

  play: {
    height: '40%'
  },
  
  ranking: {
    height: '60%'
  },

  backgroundGame: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  textBtn: {
    fontSize: 24,
    textTransform: 'uppercase',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  btnBack: {
    position: 'absolute',
    backgroundColor: '#44635a',
    height: 40,
    bottom: 0
  }
});

export default Game;
