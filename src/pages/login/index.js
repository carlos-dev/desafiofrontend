import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.content}>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
