import { useContext } from 'react';
import './Hero.scss';
import { WeatherContext } from "../../contexts/WeatherContext";
import getDate from '../../assets/js/getDate';
import getBackground from '../../assets/js/getBackground';



export default function Hero() {
  const { weatherData } = useContext(WeatherContext);
  const time = getDate('time', 'DMT');
  let heroStyles;

  if ( weatherData === null || weatherData === false ) {
    heroStyles = null;
  } else {
    let timeOfDay = {
      sunset: weatherData.sunset,
      sunrise: weatherData.sunrise,
    };

    let bg = getBackground(weatherData.weatherCondition, timeOfDay);
    heroStyles = {
      backgroundImage: `url(${bg.URL})`,
    };
  }



  return (
    <>
    { (weatherData === false || weatherData === null) ? (
      <div className="hero">
        <p className="hero-info-small">
          Loading Weather Data Please wait...
        </p>
      </div>
    ) : ( 
      <div className="hero" style={heroStyles}>
        <div className="hero-section">
          <p className="hero-info-standout hero-info-standout--top">
            {weatherData.location}
          </p>
          <p className="hero-info-small">
            { time }
          </p>
        </div>
        <div className="hero-section">  
          <p className="hero-info-standout">
            {weatherData.weatherTypeDes}
          </p>
          <p className="hero-current-temp">
            {weatherData.currentTemp}
          </p>
          <p className="hero-info-small">
            Hi {weatherData.highTemp} / Lo {weatherData.lowTemp}
          </p>
        </div>
      </div>
    )}
  </>
  );
};
