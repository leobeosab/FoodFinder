/*
 * Programmer: Ryan Wise
 * Date: May 9th, 2017
 */

import React from 'react';
import { AppRegistry } from 'react-native';

import MainNavigation from './components/main-navigation';

const FoodFinder = () => (
  <MainNavigation />
);

AppRegistry.registerComponent('FoodFinder', () => FoodFinder);
