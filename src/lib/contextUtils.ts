// "use client";

import GetApi from './getApi';

export const getPosition = async () => {
  if (!('geolocation' in navigator)) {
    const err = new Error('Geolocation is not available in this browser.');
    console.error(err);
    throw err;
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
    if ( error instanceof GeolocationPositionError) {
      let errorMessage = '';

      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'User denied the request for Geolocation.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Location information is unavailable.';
          break;
        case error.TIMEOUT:
          errorMessage = 'The request to get user location timed out.';
          break;
        default:
          errorMessage = 'An unknown error occurred.';
      }
      const err = new Error(errorMessage + ' - ' + error);
      console.error('Users Position Error: ', err);
      throw err;
    } else {
      console.error('Users Position Error: ', error);
      throw error;
    }
    
  }
};

/**
 * -- getWeatherData --
 * This function is used to get the weather data from the OpenWeatherMap API.
 * 
 * @returns 
 */
export const getWeatherData = async (position) => {
  try {
    // const position = await getPosition();
    // return the current weather data
    return await new GetApi('geo', position).getData();

  } catch (error) {
    const err = new Error('Get Weather Data Error: ' + error);
    console.error(err);
    throw err;
  }
};
