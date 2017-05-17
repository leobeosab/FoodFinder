import APIKey from './api-key';

const APIController = {
  get_near_locations: async (lat, lon) => (
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${lat},${lon}&radius=500&type=restaurant&key=${APIKey}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(result => result.json()
    .then(json => json))),
  build_photo_request: photoReference =>
  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&photoreference=${photoReference}&key=${APIKey}`,
};

export default APIController;
