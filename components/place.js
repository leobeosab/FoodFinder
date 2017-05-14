import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Place = ({ location }) => (
  <View>
    <Text> { location.name } </Text>
    <Text> { location.name } </Text>
  </View>
);

Place.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Place;
