import React from 'react';
import { StackNavigator } from 'react-navigation';

import LocationList from './locations-list';

const MainNav = StackNavigator({
  Home: {
    screen: LocationList,
  },
});

const MainNavigation = () => (
  <MainNav />
);

export default MainNavigation;
