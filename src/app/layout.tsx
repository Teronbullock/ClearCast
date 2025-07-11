import type { Metadata } from 'next';
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
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
