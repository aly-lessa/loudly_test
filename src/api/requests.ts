import axios from 'axios';

export const getSongsList = () =>
  axios
    .get('https://api-stg.jam-community.com/song/trending')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
