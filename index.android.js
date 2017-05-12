/*
 * Programmer: Ryan Wise
 * Date: May 9th, 2017
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import GeoGrabber from './components/geo-grabber';

export default class RestaurantFinder extends Component {
  render() {
    return (
      <GeoGrabber />
    );
  }
}

AppRegistry.registerComponent('RestaurantFinder', () => RestaurantFinder);
