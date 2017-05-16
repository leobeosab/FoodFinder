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

  async componentWillMount() {
    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        const data = await APIController.get_near_locations(position.coords.latitude, position.coords.longitude);
        const formattedData = data.results.reduce((result, location) => {
          // format data
          const formatted = {};
          formatted.name = location.name;
          formatted.rating = location.rating;
          formatted.address = location.formatted_address;
          formatted.price = location.price_level;
          formatted.photo = APIController.build_photo_request(location.photos[0].photo_reference);
          // filter results
          result.push(formatted);
          return result;
        }, []);
        this.setState({ locations: formattedData });
      },
      error => this.setState({ initialLocation: [{ name: error }] }),
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
  headerStyle: {
    backgroundColor: '#134074',
  },
  headerTitleStyle: {
    color: '#EEF4ED',
    alignSelf: 'center',
  },
};

export default LocationsList;
