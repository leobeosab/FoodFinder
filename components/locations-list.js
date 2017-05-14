/* eslint no-undef: "off" */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import APIController from './api-controller';
import Place from './place';

class LocationsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locations: [],
    };
  }

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        const data = await APIController.get_near_locations(position.coords.latitude, position.coords.longitude);
        this.setState({ locations: data.results });
      },
      error => this.setState({ initialLocation: error }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.locations.map(location => (
            <Place location={location} key={location.name} />
          ))
        }
      </ScrollView>
    );
  }
}

LocationsList.navigationOptions = {
  title: 'Food Finder',
};

export default LocationsList;
