'use client';

import Hero from '@/components/Hero/Hero';
import DetailCardHourlyInfo from '@/components/DetailCardHourlyInfo';
import DetailCard from '@/components/DetailCard';
import DetailCardInfo from '@/components/DetailCardInfo';
import UseWeatherContext from '@context/hooks/UseWeatherContext';
import getDate from '@/lib/getDate';

export const IndexPage = () => {
  const { weatherData } = UseWeatherContext();
  let sunrise;
  let sunset;

  if (weatherData) {
    sunrise = getDate('min', weatherData.sunrise);
    sunset = getDate('min', weatherData.sunset);
  }

  return (
    <>
      <Hero />
      {weatherData !== false && weatherData !== null ? (
        <>
          <DetailCard>
            <DetailCardHourlyInfo />
          </DetailCard>
          <DetailCard>
            <DetailCardInfo
              title_1={'Sunrise'}
              title_2={'Sunset'}
              info_1={sunrise}
              info_2={sunset}
              data={[
                {
                  title: 'Sunrise',
                  info: sunrise,
                },
                {
                  title: 'Sunset',
                  info: sunset,
                },
              ]}
            />
          </DetailCard>
          <DetailCard>
            <DetailCardInfo
              data={[
                {
                  title: 'Humidity',
                  info: weatherData.humidity,
                },
                {
                  title: 'Pressure',
                  info: weatherData.pressure,
                },
              ]}
            />
          </DetailCard>
          <DetailCard>
            <DetailCardInfo
              data={[
                {
                  title: 'Wind',
                  info: weatherData.wind,
                },
                {
                  title: 'Feels Like',
                  info: weatherData.realFeel,
                },
              ]}
            />
          </DetailCard>
        </>
      ) : null}
    </>
  );
};

export default IndexPage;
