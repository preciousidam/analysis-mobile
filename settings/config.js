import Constants  from 'expo-constants';
const { manifest } = Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:5000`)
  : `napims-backend.herokuapp.com`;

export const apiConfig = {
    baseUrl: `https://napims-backend.herokuapp.com/api/`,
}