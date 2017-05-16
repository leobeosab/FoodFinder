import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: width * 0.8,
    flexDirection: 'row',
    marginTop: 10,
    height: 100,
    backgroundColor: '#fff',
  },
  previewImage: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Place = ({ location }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: location.photo }}
      style={styles.previewImage}
      resizeMode={'contain'}
    />
    <View style={styles.textContainer}>
      <Text> { location.name } </Text>
      <Text> { location.address } </Text>
    </View>
  </View>
);

Place.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Place;
