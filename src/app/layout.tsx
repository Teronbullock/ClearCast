import type { Metadata } from 'next';
import { Header } from '@components/Header/Header';
import { WeatherContextProvider } from '@context/WeatherContext';
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
    <html lang='en'>
      <body>
        <WeatherContextProvider>
          <Header />
          {children}
        </WeatherContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
