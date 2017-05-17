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
    borderRadius: 2.5,
    elevation: 2,
  },
  previewImage: {
    borderRadius: 75,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 3,
    borderColor: '#134074',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
  },
});

const Place = ({ location }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: location.photo }}
      style={styles.previewImage}
      resizeMode={'cover'}
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
