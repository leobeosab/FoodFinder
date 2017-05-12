import React, { Component } from 'react';
import { View, Text } from 'react-native';

class GeoGrabber extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialLocation: '',
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialLocation = JSON.stringify(position);
        this.setState({ initialLocation });
      },
      error => JSON.stringify(error),
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

export default GeoGrabber;
