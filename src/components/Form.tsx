"use client";

import { useContext, useState } from 'react';
import { WeatherContext } from '@/contexts/WeatherContext';
import GetApi from '@/lib/getApi';


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

      try {
        weatherDataRes = await new GetApi('zip', inputValue).getData();
        setWeatherData(weatherDataRes);
        
      } catch (err) {
        console.log('There was an error obtaining your city', err);
        alert('There was an error obtaining your city, please try again');
      }
    } else if ( isCity2DigitState || isCityState ) {

      try {
        weatherDataRes = await new GetApi('city', inputValue).getData();
        setWeatherData(weatherDataRes);
      } catch (err) {
        console.log('There was an error obtaining your city: ', err.message);
        alert('There was an error obtaining your city, please try again');
      }

    } else {


    }


    // clear form input
    setInputValue('');
  }
  

  return (
    <div className="form-container mb-6">
      <form 
        className="form" 
        onSubmit={handleFromSubmit}
      >
        <input
          id="form__input"
          className="form__input block text-center bg-[#FBFDFF00] text-xs w-[85%] mx-auto p-2 rounded-[20px] border border-white placeholder:text-white sm:text-base"
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

