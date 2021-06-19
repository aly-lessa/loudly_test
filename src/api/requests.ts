import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api-stg.jam-community.com/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});
export const getSongsList = () =>
  axios
    .get('song/trending')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

export const sendLikeSong = (id: string) =>
  axios
    .post('interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8', {
      id,
    })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
