import React, { Component } from 'react';
import { View, Text } from 'react-native';

import APIController from './api-controller';

class GeoGrabber extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialLocation: '',
    };
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const data = await APIController.get_near_locations(position.coords.latitude, position.coords.longitude);
        this.setState({ initialLocation: JSON.stringify(data) });
      },
      error => this.setState({ initialLocation: error }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View>
        <Text> {this.state.initialLocation} </Text>
      </View>
    );
  }
}

GeoGrabber.navigationOptions = {
  title: 'Food Finder',
};

export default GeoGrabber;
