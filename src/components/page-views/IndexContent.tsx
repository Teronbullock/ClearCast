'use client';

import { Body } from '@components/Body';
import { Hero } from '@/components/Hero/Hero';
import DetailCardHourlyInfo from '@/components/DetailCardHourlyInfo';
import { DetailCard } from '@/components/DetailCard';
import DetailCardInfo from '@/components/DetailCardInfo';
import UseWeatherContext from '@context/hooks/UseWeatherContext';
import { getDate } from '@/lib/getDate';

export const IndexContent = () => {
  const { weatherData } = UseWeatherContext();
  const sunrise = weatherData ? getDate('min', weatherData.sunrise) : 'N/A';
  const sunset = weatherData ? getDate('min', weatherData.sunset) : 'N/A';

  return (
    <>
      <Body>
        <Hero />
        {weatherData ? (
          <>
            <DetailCard>
              <DetailCardHourlyInfo />
            </DetailCard>
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
