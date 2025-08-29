'use client';

import { Body } from '@components/Body';
import { Hero } from '@components/Hero/Hero';
import DetailCardHourlyInfo from '@components/DetailCardHourlyInfo';
import { DetailCardInfo } from '@components/DetailCardInfo';
import { DetailDailyInfo } from '@components/DetailDailyInfo';
import useWeatherContext from '@hooks/useWeatherContext';
import { formatDateTime } from '@lib/formatDateTime';

const IndexPage = () => {
  const { weatherState } = useWeatherContext();
  const weatherData = weatherState?.weatherData;
  const sunrise = weatherData
    ? formatDateTime('timeWithMinutes', weatherData.sunrise)
    : 'N/A';
  const sunset = weatherData
    ? formatDateTime('timeWithMinutes', weatherData.sunset)
    : 'N/A';

  return (
    <>
      <Body>
        <Hero />
        {weatherData ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div>
              <DetailCardHourlyInfo />
              <DetailDailyInfo />
            </div>
            <div className='align-top'>
              <DetailCardInfo
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
            </div>
          </div>
        ) : null}
      </Body>
    </>
  );
};

export default IndexPage;
