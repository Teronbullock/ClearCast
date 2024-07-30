"use client";

import Form from '@/components/Form/Form';
import Hero from '@/components/Hero/Hero';
import AppBody from '@/components/AppBody/AppBody';
import DetailCardHourlyInfo from '@/components/DetailCardHourlyInfo/DetailCardHourlyInfo';
import DetailCard from '@/components/DetailCard/DetailCard';
import DetailCardInfo from '@/components/DetailCardInfo/DetailCardInfo'; 
import UseWeatherContext from '@/contexts/hooks/UseWeatherContext';
import getDate from '@/lib/getDate';



export const Home = () => {
  const { weatherData } = UseWeatherContext();
  let sunrise;
  let sunset;

  if (weatherData) {
    sunrise = getDate('time', 'min', weatherData.sunrise);
    sunset = getDate('time', 'min', weatherData.sunset);
  }



  return (
    <>
      <AppBody>
        <h1>Hello World</h1>
        <Form />
        <Hero />
        { (weatherData !== false && weatherData !== null) ? (
          <>
          <DetailCard>
            <DetailCardHourlyInfo />
          </DetailCard>
          <DetailCard>
            <DetailCardInfo
              // title_1={'Sunrise'}
              title_2={'Sunset'}
              info_1={sunrise}
              info_2={sunset}
              data = {[
                {
                  title: 'Sunrise',
                  info: sunrise,
                },
                {
                  title: 'Sunset',
                  info: sunset,
                }
              ]}
            />
          </DetailCard>
          <DetailCard>
            <DetailCardInfo
              data = {[
                {
                  title: 'Humidity',
                  // info: weatherData.humidity,
                },
                {
                  title: 'Pressure',
                  // info: weatherData.pressure,
                }
              ]}
            />
          </DetailCard>
          <DetailCard>
            <DetailCardInfo
              data = {
                [
                  {
                    title: 'Wind',
                    // info: weatherData.wind,
                  },
                  {
                    title: 'Feels Like',
                    // info: weatherData.realFeel,
                  }
                ]
              }
            />
          </DetailCard>
          </>
            ) : null}
      </AppBody>
    </>
  ); 
};

export default Home;