import APIKey from './api-key';

const APIController = {
  get_near_locations: async (lat, lon) => (
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=2000&type=restaurant&type=restaurant&keyword=cruise&key=${APIKey}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(result => result.json()
    .then(json => json))),
};

export default APIController;
