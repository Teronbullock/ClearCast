import type { Metadata } from 'next';
import { WeatherContextProvider } from '@context/WeatherContext';
import AppBody from '@/components/Body';
import { Header } from '@/components/Header/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clear Cast',
  description: 'Clear Cast',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <WeatherContextProvider>
      <html lang='en'>
        <body>
          <Header />
          <AppBody>{children}</AppBody>
        </body>
      </html>
    </WeatherContextProvider>
  );
};

export default RootLayout;
