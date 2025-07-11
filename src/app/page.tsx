'use client';
import { WeatherContextProvider } from '@context/WeatherContext';
import { IndexContent } from '@/components/page-views/IndexContent';

const IndexPage = () => {
  return (
    <WeatherContextProvider>
      <IndexContent />
    </WeatherContextProvider>
  );
};

export default IndexPage;
