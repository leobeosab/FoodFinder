import React from 'react';
import { StackNavigator } from 'react-navigation';

import GeoGrabber from './geo-grabber';

const MainNav = StackNavigator({
  Home: {
    screen: GeoGrabber,
  },
});

const MainNavigation = () => (
  <MainNav />
);

export default MainNavigation;
