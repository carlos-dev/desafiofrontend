import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

import logo from '../../assets/img/Logo_telaInicial.png';
import buscar from '../../assets/img/buscar.png';
import config from '../../assets/img/config.png';

const Navbar = () => (
  <View style={styles.menu}>
    <View>
      <Image source={logo} style={styles.logo} />
    </View>

    <View style={styles.options}>
      <Image source={buscar} style={styles.icon} />
      <Image source={config} style={styles.icon} />
    </View>
  </View>
)

const styles = StyleSheet.create({
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

  icon: {
    marginHorizontal: 10,
  },
});
export default Navbar;