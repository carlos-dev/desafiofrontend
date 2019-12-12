import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Navbar from '../../components/navbar';


import img_principal_0 from '../../assets/img/Img_principal_0.png';
import img_principal_1 from '../../assets/img/Img_principal_1.png';
import img_principal_2 from '../../assets/img/Img_principal_2.png';

// import { Container } from './styles';

const Main = () => (
  <View>
    <Navbar />

    <View style={styles.mainContent}>
      <View style={styles.section}>
        <ImageBackground
          source={img_principal_0}
          style={styles.backgroundSection}>
          <Text style={styles.textMain}>Corg</Text>
        </ImageBackground>
      </View>

      <View style={styles.section}>
        <ImageBackground
          source={img_principal_1}
          style={styles.backgroundSection}>
          <Text style={styles.textMain}>Corg</Text>
        </ImageBackground>
      </View>

      <View style={styles.lastSection}>
        <ImageBackground
          source={img_principal_2}
          style={styles.lastBackground}
          imageStyle={{resizeMode: 'contain'}}>
          <Text style={styles.textMain}>hATTR</Text>
        </ImageBackground>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContent: {
    display: 'flex',
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
  },

  lastBackground: {
    flex: 2,
    justifyContent: 'center',
  },

  textMain: {
    textAlign: 'right',
    textTransform: 'uppercase',
    fontSize: 20,
  },
});

export default Main;
