import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../pages/login';
import Main from '../pages/main';

const Routes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitle: null,
    },
  },
});

export default createAppContainer(Routes);
