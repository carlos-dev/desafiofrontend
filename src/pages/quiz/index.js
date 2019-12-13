import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Navbar from '../../components/navbar';

export default class Quiz extends Component {
  state = {
    backgroundColor: '#fff',
  };

  changeColor() {
    this.setState({backgroundColor: '#c3f8d7'});
  }

  render() {
    return (
      <View style={styles.viewQuiz}>
        <Navbar />

        <View style={styles.header}>
          <View style={styles.line} />
          <Text style={styles.title}>Pergunta 01</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.ask}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad
        </Text>

        <View style={styles.options}>
          <TouchableHighlight
            style={styles.option}
            onPress={() => this.changeColor()}>
            <Text style={styles.textOption}>Lorem Ipsum</Text>
          </TouchableHighlight>

          <View style={styles.divider} />

          <TouchableHighlight
            style={[
              styles.option,
              {backgroundColor: this.state.backgroundColor},
            ]}>
            <Text style={styles.textOption}>Lorem Ipsum</Text>
          </TouchableHighlight>

          <View style={styles.divider} />

          <TouchableHighlight
            style={styles.option}
            onPress={() => this.changeColor()}>
            <Text style={styles.textOption}>Lorem Ipsum</Text>
          </TouchableHighlight>

          <View style={styles.divider} />

          <TouchableHighlight
            style={styles.option}
            onPress={() => this.changeColor()}>
            <Text style={styles.textOption}>Lorem Ipsum</Text>
          </TouchableHighlight>

          <View style={styles.divider} />

          <TouchableHighlight
            style={styles.option}
            onPress={() => this.changeColor()}>
            <Text style={styles.textOption}>Lorem Ipsum</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewQuiz: {
    backgroundColor: '#263e63',
    height: '100%',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  line: {
    width: 80,
    height: 1,
    backgroundColor: '#fff',
  },

  title: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 12,
    fontSize: 17,
  },

  ask: {
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 39,
    marginBottom: 35,
  },

  options: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textOption: {
    fontSize: 20,
    color: '#263e63',
    paddingVertical: 42,
  },

  option: {
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  divider: {
    width: '95%',
    height: 3,
    backgroundColor: '#ccc',
  },
});
