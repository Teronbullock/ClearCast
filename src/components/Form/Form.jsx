import { useContext, useState } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import GetApi from '../../assets/js/getApi';
import './form.scss';

export default function Form() {
  const { setWeatherData } = useContext(WeatherContext);
  const [inputValue, setInputValue ] = useState('');
  const [isPlaceholder, setIsPlaceholder] = useState(true);


  function handleInputChange(e) {
    setInputValue(e.target.value);

    if (e.target.value.length === 0) {
      setIsPlaceholder(true);
    } else {
      setIsPlaceholder(false);
    }
  }

  function handleInputFocus() {
    setIsPlaceholder(false);
  }

  function handInputBlur() {
    if (inputValue.length === 0) {
      setIsPlaceholder(true);
    }
  }
  
  async function handleFromSubmit(e) {
    e.preventDefault();

    // check if input value is a zip code or city, state
    const zipCodeRegex = /^\d{5}$/;
    const city2DigitStateRegex = /^[A-Za-z\s]+,\s*[A-Za-z]{2}$/;
    const cityStateRegex = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

    let isZipCode = zipCodeRegex.test(inputValue);
    let isCity2DigitState = city2DigitStateRegex.test(inputValue);
    let isCityState = cityStateRegex.test(inputValue);
    let weatherDataRes;

    if (isZipCode) {
      weatherDataRes = await new GetApi('zip', inputValue).getData();
      setWeatherData(weatherDataRes);
    } else if ( isCity2DigitState || isCityState ) {
      weatherDataRes = await new GetApi('city', inputValue).getData();
      setWeatherData(weatherDataRes);
    } else {


    }


    // clear form input
    setInputValue('');
  }
  

  return (
    <div className="form-container">
      <form 
        className="form" 
        onSubmit={handleFromSubmit}
      >
        <input
          id="form__input"
          className="form__input"
          type="text"
          name="searchinput"
          placeholder={isPlaceholder ? "Zip Code or City, State" : " "}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handInputBlur}
          value={inputValue}
          
        />
      </form>
    </div>
    );
    
  };

