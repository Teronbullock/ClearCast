"use client";

import GetApi from './getApi';

const getPosition = async () => {
  if (!('geolocation' in navigator)) {
    console.error('Geolocation is not available in this browser.');
    return false;
  }

  try {
    const position = await new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const geo = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          };

          res(geo);
        },
        error => {
          rej(error);
        }
      );
    });

    return position;
  } catch (error) {
    if (error.code === error.PERMISSION_DENIED) {
      console.log('User denied the request for Geolocation.');

      return 'user denied';
    } else if (error.code === error.POSITION_UNAVAILABLE) {
      console.error('Location information is unavailable.');
    } else if (error.code === error.TIMEOUT) {
      console.error('The request to get user location timed out.');
    } else if (error.code === error.UNKNOWN_ERROR) {
      console.error('An unknown error occurred.');
    }

    return false;
  }
};


export const getWeatherData = async () => {
  try {
    const position = await getPosition();
    console.log('position: ', position);
    // check if position returns an object
    if (typeof position == 'string' && position === 'user denied') {
      return 'user denied';
    } else if (typeof position == 'object' && position !== null) {
      return await new GetApi('geo', position).getData();
    } else if (typeof position == 'boolean') {
      return false;
    }

    // get the current weather data
  } catch (error) {
    console.error(
      'There was an error in obtaining the users current position: ',
      error
    );
  }
};
