import { createContext, useState, useEffect } from "react";
import GetApi from '../assets/js/getApi';


async function getPosition() {
  if ("geolocation" in navigator) {
    try {
      const position = await new Promise( (res, rej) => {
        navigator.geolocation.getCurrentPosition( (pos) => {
          const geo = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          }

          res (geo);
        },(error) => {
          rej(error);
        });
      });

      return position;
    
    } catch (error) {

      if (error.code === error.PERMISSION_DENIED) {
        console.log("User denied the request for Geolocation.");

        return 'user denied';
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        console.error("Location information is unavailable.");
      } else if (error.code === error.TIMEOUT) {
        console.error("The request to get user location timed out.");
      } else if (error.code === error.UNKNOWN_ERROR) {
        console.error("An unknown error occurred.");
      }

      return false;
    }
  } else {
    console.error("Geolocation is not available in this browser.");
  }
}


async function getWeatherData() {
  try {
    const position = await getPosition();

    // check if position returns an object
    if (typeof position == 'string' && position === 'user denied') {
      return 'user denied';
    } else if (typeof position == 'object'  && position !== null) {
      return await new GetApi('geo', position).getData();
    } else if (typeof position == 'boolean') {
      return false;
    }
    
    // get the current weather data

  } catch (error) {
    console.error('There was an error in obtaining the users current position: ', error);
  }
}





export const WeatherContext = createContext({
  weatherData: null,
  setWeatherData: () => null,
}); 


export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);


  useEffect( ()=> {

    getWeatherData().then(data => {
      if (data === 'user denied') {
        setWeatherData(false);
      } else if (data !== false) {
        setWeatherData(data);
        // setWeatherData(false);
      }
    });

  }, []);

  const value = { 
    weatherData,
    setWeatherData,
  };


  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}