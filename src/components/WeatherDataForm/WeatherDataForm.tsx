'use client';

import { useWeatherDataForm } from '@hooks/useWeatherDataForm';

export const WeatherDataForm = () => {
  const {
    isPlaceholder,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    handleFromSubmit,
    inputValue,
  } = useWeatherDataForm();

  return (
    <form className='form w-full' onSubmit={handleFromSubmit}>
      <input
        id='form__input'
        className='form__input h-[40px] block text-center bg-[#FBFDFF00] text-xs rounded-[8px] border border-white placeholder:text-white sm:text-base w-full text-white focus:outline-2 focus:outline-offset-2 focus:border-red-600'
        type='text'
        name='searchinput'
        placeholder={
          isPlaceholder ? 'Zip (90210) or City, State (New York, NY)' : ' '
        }
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={inputValue}
      />
    </form>
  );
};
