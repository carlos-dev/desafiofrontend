import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Navbar from '../../components/navbar';

import img_principal_0 from '../../assets/img/Img_principal_0.png';
import img_principal_1 from '../../assets/img/Img_principal_1.png';
import img_principal_2 from '../../assets/img/Img_principal_2.png';
import icone_bt_jogar from '../../assets/img/icone_bt_jogar.png';

// import { Container } from './styles';

const Main = ({navigation}) => (
  <View>
    <Navbar />

    <View>
      <View style={styles.section}>
        <ImageBackground
          source={img_principal_0}
          style={styles.backgroundSection}>
          <Text style={[styles.textMain, styles.blue]}>CORP</Text>
        </ImageBackground>
      </View>

      <View style={styles.section}>
        <ImageBackground
          source={img_principal_1}
          style={styles.backgroundSection}>
          <Text style={[styles.textMain, styles.green]}>DMD</Text>
        </ImageBackground>
      </View>

      <View style={styles.lastSection}>
        <ImageBackground
          source={img_principal_2}
          style={[styles.backgroundSection, styles.lastBackground]}>
          <Text style={[styles.textMain, styles.lastTextMain, styles.orange]}>
            hATTR
          </Text>
        </ImageBackground>
      </View>

      <TouchableHighlight
        style={styles.btnGame}
        onPress={() => navigation.navigate('Game')}>
        <View style={styles.viewBtnGame}>
          <Text style={styles.textBtn}>Game</Text>
          <Image source={icone_bt_jogar} style={styles.iconGame} />
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  /* navbar */

  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 13,
  },

  logo: {
    resizeMode: 'contain',
    width: 140,
  },

  options: {
    display: 'flex',
    flexDirection: 'row',
  },

  /* end navbar */

  /* main content */

  icon: {
    marginHorizontal: 10,
  },

  section: {
    height: '25%',
    marginBottom: 3,
  },

  lastSection: {
    height: '50%',
  },

  backgroundSection: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  lastBackground: {
    flex: 1,
    justifyContent: 'center',
  },

  textMain: {
    width: 140,
    textAlign: 'right',
    fontSize: 35,
    paddingRight: 30,
    backgroundColor: '#fff',
  },

  lastTextMain: {
    position: 'relative',
    top: -130,
  },

  blue: {
    color: '#1e314e',
  },

  green: {
    color: '#5d5a42',
  },

  orange: {
    color: '#923721',
  },

  /* end main content */

  /* button game */

  btnGame: {
    width: '100%',
    height: '15%',
    position: 'absolute',
    backgroundColor: '#1e314e',
    bottom: 90,
    borderTopLeftRadius: 60,
    borderLeftColor: '#fff',
    borderTopColor: '#fff',
    borderWidth: 2,
  },

  viewBtnGame: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textBtn: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 30,
    lineHeight: 90,
    paddingLeft: 30,
  },

  iconGame: {
    width: 235,
    position: 'absolute',
    resizeMode: 'contain',
    right: 0,
    bottom: -20,
  },

  /* end button game */
});

Main.navigationOptions = {
  titie: 'Main',
};

export default Main;
