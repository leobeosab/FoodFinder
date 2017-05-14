/*
 * Programmer: Ryan Wise
 * Date: May 9th, 2017
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import MainNavigation from './components/main-navigation';

export default class RestaurantFinder extends Component {
  render() {
    return (
      <MainNavigation />
    );
  }
}

AppRegistry.registerComponent('RestaurantFinder', () => RestaurantFinder);
