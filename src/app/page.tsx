'use client';

import { Body } from '@components/Body';
import { Hero } from '@components/Hero/Hero';
import DetailCardHourlyInfo from '@components/DetailCardHourlyInfo';
import { DetailCard } from '@components/DetailCard';
import DetailCardInfo from '@components/DetailCardInfo';
import useWeatherContext from '@hooks/useWeatherContext';
import { formatDateTime } from '@/lib/dateUtils';

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
          <>
            <DetailCardHourlyInfo />
            <DetailCard>
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
      </Body>
    </>
  );
};

export default IndexPage;
