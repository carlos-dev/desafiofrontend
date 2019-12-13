import React from 'react';
import { createStackNavigator  } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../pages/login';
import Main from '../pages/main';
import Game from '../pages/game';
import Play from '../pages/play';
import Quiz from '../pages/quiz';

const Routes = createAppContainer(
  createStackNavigator({
    Login,
    Main,
    Game,
    Play,
    Quiz,
  }),
);

export default Routes;
