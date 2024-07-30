"use client";


import getBackground from '@/lib/getBackground';
import UseWeatherContext from "@/contexts/hooks/UseWeatherContext";


export default function AppBody({ children }) {
  const { weatherData } = UseWeatherContext();

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
    <div className="app-body h-min-[100vh] p-4 bg-[#174b9f] text-white text-center" id="app-body" style={appBodyStyle}>
      <div className="app-body__section md:max-w-max-[70%] md:m-auto xl:w-1/2">
          {children}
      </div>
    </div>
  );
}
