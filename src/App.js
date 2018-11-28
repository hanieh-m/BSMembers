import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Main from './Main';
import Teams from './Teams';

export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}

const MainNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    Teams: { screen: Teams },
  },
  { headerMode: 'none' },
);
