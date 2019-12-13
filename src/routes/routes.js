import React, {Component} from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';

import Login from '../pages/login';
import Main from '../pages/main';
import Game from '../pages/game';
import Play from '../pages/play';

// const Navigator = createStackNavigator({
//   Login: {screen: Login},
//   Main: {screen: Main},
// });

export default class Routes extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'play'}}
        renderScene={(route, navigator) => {
          if (route.id === 'login') {
            return <Login navigator={this.props.navigator} />;
          }

          if (route.id === 'main') {
            return <Main />;
          }

          if (route.id === 'game') {
            return <Game />;
          }

          if (route.id === 'play') {
            return <Play />;
          }
        }}
      />
    );
  }
}
