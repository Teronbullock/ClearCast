import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import { WeatherProvider } from './contexts/WeatherContext';

export default function App() {

  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}