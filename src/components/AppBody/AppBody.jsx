import { useContext } from 'react';
import './AppBody.scss';
import getBackground from '../../assets/js/getBackground';
import { WeatherContext } from "../../contexts/WeatherContext";



export default function AppBody({ children }) {
  const { weatherData } = useContext(WeatherContext);


  let appBodyStyle;

  if (weatherData === null ||  weatherData === false) {
    appBodyStyle = null;

  } else {
    let timeOfDay = {
      sunset: weatherData.sunset,
      sunrise: weatherData.sunrise,
    };


    let bgColor = getBackground(weatherData.weatherCondition, timeOfDay);
    appBodyStyle = {
      backgroundColor: bgColor.color,
    };
  }


  return (
    <div className="app-body" id="app-body" style={appBodyStyle}>
      <div className="app-body__section">
          {children}
      </div>
    </div>
  );
}
