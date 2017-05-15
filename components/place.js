import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const Place = ({ location }) => (
  <View>
    <Text> { location.name } </Text>
    <Text> { location.address } </Text>
    <Image
      source={{ uri: location.photo }}
      style={{ height: 50, width: 50 }}
    />
  </View>
);

Place.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Place;
